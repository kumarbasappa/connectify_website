"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 4. Create 3D Geometric Core (Torus Knot Wireframe + Glowing Core)
    const group = new THREE.Group();
    scene.add(group);

    // Main TorusKnot geometry
    const geometry = new THREE.TorusKnotGeometry(4.5, 1.4, 128, 32);

    // Subtle Wireframe Material Tint - Lowered opacity so text remains 100% legible
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8f00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const knotMesh = new THREE.Mesh(geometry, wireframeMaterial);
    group.add(knotMesh);

    // Inner Core Sphere - Lowered opacity
    const innerGeo = new THREE.IcosahedronGeometry(2.8, 4);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x5228b9,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 5. Particle Constellation
    const particleCount = 600;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 7 + Math.random() * 10;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Soft Glowing Circular Particle Texture
    const createParticleTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 64;
      pCanvas.height = 64;
      const ctx = pCanvas.getContext("2d");
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        grad.addColorStop(0.4, "rgba(143, 0, 255, 0.6)");
        grad.addColorStop(1, "rgba(82, 40, 185, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.4,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.45,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Shift 3D group further to the right on desktop to clear text completely
    const updateGroupPosition = () => {
      if (window.innerWidth >= 1024) {
        group.position.x = 9.5;
      } else {
        group.position.x = 3.5;
      }
    };
    updateGroupPosition();

    // 6. Mouse Parallax Target Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0003;
      mouseY = (e.clientY - windowHalfY) * 0.0003;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. GSAP ScrollTrigger Animation
    const heroSection = container.closest("section");

    const ctx = gsap.context(() => {
      if (!heroSection) return;

      ScrollTrigger.create({
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: 4.0,
        onUpdate: (self) => {
          const progress = self.progress;

          group.rotation.x = progress * Math.PI * 0.45;
          group.rotation.y = progress * Math.PI * 0.65;
          group.rotation.z = progress * Math.PI * 0.15;

          const scale = 1 + progress * 0.25;
          group.scale.set(scale, scale, scale);

          camera.position.z = 18 - progress * 2.5;

          wireframeMaterial.opacity = 0.15 * (1 - progress * 0.7);
          innerMat.opacity = 0.22 * (1 - progress * 0.8);
          particleMaterial.opacity = 0.45 * (1 - progress * 0.5);
        },
      });
    }, heroSection || undefined);

    // 8. Render loop with slow ambient rotation
    let animationFrameId: number;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      knotMesh.rotation.x += 0.0002;
      knotMesh.rotation.y += 0.0003;
      innerMesh.rotation.x -= 0.0003;
      innerMesh.rotation.y -= 0.0002;
      particles.rotation.y += 0.00015;

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      group.rotation.y += targetX * 0.15;
      group.rotation.x += targetY * 0.15;

      renderer.render(scene, camera);
    };

    render();

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      updateGroupPosition();
    };

    window.addEventListener("resize", handleResize);

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      ctx.revert();

      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full lg:w-3/4 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-80" />
    </div>
  );
}

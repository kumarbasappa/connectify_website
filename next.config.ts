import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "192.168.1.15",
    "192.168.1.15:3000",
    "192.168.1.15:3001",
    "localhost:3000",
    "localhost:3001",
  ],
};

export default nextConfig;

import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutValue from "@/components/AboutValue";
import WhatWeBuild from "@/components/WhatWeBuild";
import TechnologyCloud from "@/components/TechnologyCloud";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyConnectify from "@/components/WhyConnectify";
import SelectedWork from "@/components/SelectedWork";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutValue />
      <WhatWeBuild />
      <TechnologyCloud />
      <ProcessTimeline />
      <WhyConnectify />
      <SelectedWork />
      <FinalCta />
    </>
  );
}
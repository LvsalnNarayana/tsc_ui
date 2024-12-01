/* eslint-disable max-lines */
import React from "react";

import { Stack } from "@mui/material";

import Eclipe1 from "../components/shared/Eclipe1";
import Eclipse2 from "../components/shared/Eclipse2";
import Eclipse3 from "../components/shared/Eclipse3";
import Eclipse4 from "../components/shared/Eclipse4";
import Eclipse5 from "../components/shared/Eclipse5";
import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeDriveSection from "../components/home/HomeDriveSection";
import HomeMarketSection from "../components/home/HomeMarketSection";
import HomeCultureSection from "../components/home/HomeCultureSection";
import HomeConnectSection from "../components/home/HomeConnectSection";
import HomeHowWeWorkSection from "../components/home/HomeHowWeWorkSection";
import HomeEvolutionSection from "../components/home/HomeEvolutionSection";
import HomeSmartSolutionSection from "../components/home/HomeSmartSolutionSection";
import HomeSocialStrategySection from "../components/home/HomeSocialStrategySection";
import HomeSustainabilitySection from "../components/home/HomeSustainabilitySection";
import HomeWorkflowProcessSection from "../components/home/HomeWorkflowProcessSection";
import HomeInnovativeServicesSection from "../components/home/HomeInnovativeServicesSection";

const Home = () => {
  return (
    <Stack width="100%" maxWidth="100vw" sx={{ position: "relative",overflow:"clip" }}>
      <Eclipe1
        style={{
          right: 0,
          top: "100vh",
          position: "absolute",
        }}
      />
      <Eclipse2
        style={{
          left: 0,
          top: "100vh",
          position: "absolute",
        }}
      />
      <Eclipse3
        style={{
          left: 0,
          top: "1400vh",
          position: "absolute",
        }}
      />
      <Eclipse4
        style={{
          right: 0,
          top: "1150vh",
          position: "absolute",
        }}
      />
      <Eclipse5
        style={{
          left: 0,
          top: "1650vh",
          position: "absolute",
        }}
      />
      <HomeHeroSection />
      <HomeHowWeWorkSection />
      <HomeSmartSolutionSection />
      <HomeMarketSection />
      <HomeInnovativeServicesSection />
      <HomeSocialStrategySection />
      <HomeDriveSection />
      <HomeWorkflowProcessSection />
      <HomeSustainabilitySection />
      <HomeCultureSection />
      <HomeEvolutionSection />
      <HomeConnectSection />
    </Stack>
  );
};

export default Home;

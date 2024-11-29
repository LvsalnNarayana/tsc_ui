/* eslint-disable max-lines */
import React from "react";

import { Stack } from "@mui/material";

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
import Eclipe1 from "../components/shared/Eclipe1";
import Eclipse2 from "../components/shared/Eclipse2";
import Eclipse3 from "../components/shared/Eclipse3";
import Eclipse4 from "../components/shared/Eclipse4";
import Eclipse5 from "../components/shared/Eclipse5";

const Home = () => {
  return (
    <>
      <Stack width="100%" maxWidth="100vw" sx={{ position: "relative" }}>
        <Eclipe1
          style={{
            position: "absolute",
            top: "100vh",
            right: 0,
          }}
        />
        <Eclipse2
          style={{
            position: "absolute",
            top: "100vh",
            left: 0,
          }}
        />
        <Eclipse3
          style={{
            position: "absolute",
            top: "1400vh",
            left: 0,
          }}
        />
        <Eclipse4
          style={{
            position: "absolute",
            top: "1150vh",
            right: 0,
          }}
        />
        <Eclipse5
          style={{
            position: "absolute",
            top: "1650vh",
            left: 0,
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
      {/* {mobileView && <Typography variant="h5">Home Mobile View</Typography>}
      {tabletView && <Typography variant="h5">Home Tablet View</Typography>}
      {laptopView && <Typography variant="h5">Home Laptop View</Typography>}
      {desktopView && (
        <Stack width="100%" sx={{ color: "#fff", backgroundColor: "#040B12" }}>
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
      )} */}
    </>
  );
};

export default Home;

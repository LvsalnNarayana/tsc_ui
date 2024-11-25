/* eslint-disable max-lines */
import React from "react";

import { Stack, Typography, useMediaQuery } from "@mui/material";

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
  const mobileView = useMediaQuery((mobileTheme) => {
    return mobileTheme.breakpoints.down("tablet");
  });
  const tabletView = useMediaQuery((tabletTheme) => {
    return tabletTheme.breakpoints.between("tablet", "laptop");
  });
  const laptopView = useMediaQuery((laptopTheme) => {
    return laptopTheme.breakpoints.between("laptop", "desktop");
  });
  const desktopView = useMediaQuery((desktopTheme) => {
    return desktopTheme.breakpoints.up("desktop");
  });

  return (
    <>
      {mobileView && <Typography variant="h5">Home Mobile View</Typography>}
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
      )}
    </>
  );
};

export default Home;

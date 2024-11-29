/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-lines */
import React from "react";

import { Stack, Typography, useMediaQuery } from "@mui/material";

import Eclipe1 from "../components/shared/Eclipe1";
import Eclipse2 from "../components/shared/Eclipse2";
import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutLiveSection from "../components/about/AboutLiveSection";
import HomeConnectSection from "../components/home/HomeConnectSection";
import AboutVisionSection from "../components/about/AboutVisionSection";
import AboutCultureSection from "../components/about/AboutCultureSection";
import AboutEvolutionSection from "../components/about/AboutEvolutionSection";

const AboutUs = () => {
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
      <Stack
        width="100%"
        maxWidth="100%"
        sx={{ color: "#fff", position: "relative", backgroundColor: "#040B12" }}
      >
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
        <AboutHeroSection />
        <AboutVisionSection />
        <AboutLiveSection />
        <AboutCultureSection />
        <AboutEvolutionSection />
        <HomeConnectSection />
      </Stack>
      {/* {mobileView && <Typography variant="h5">AboutUs Mobile View</Typography>}
      {tabletView && <Typography variant="h5">AboutUs Tablet View</Typography>}
      {laptopView && <Typography variant="h5">AboutUs Laptop View</Typography>}
      {desktopView && (
        <Stack width="100%" sx={{ color: "#fff", backgroundColor: "#040B12" }}>
          <AboutHeroSection />
          <AboutVisionSection />
          <AboutLiveSection />
          <AboutCultureSection />
          <AboutEvolutionSection />
          <HomeConnectSection />
        </Stack>
      )} */}
    </>
  );
};

export default AboutUs;

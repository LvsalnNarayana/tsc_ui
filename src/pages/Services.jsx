import React from "react";

import { Stack, Typography, useMediaQuery } from "@mui/material";

import Eclipse3 from "../components/shared/Eclipse3";
import Eclipse4 from "../components/shared/Eclipse4";
import HomeConnectSection from "../components/home/HomeConnectSection";
import ServiceHeroSection from "../components/services/ServiceHeroSection";
import ServicesListSection from "../components/services/ServicesListSection";
import ServicesEvolutionSection from "../components/services/ServicesEvolutionSection";

const Services = () => {
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
        sx={{ color: "#fff", position: "relative", backgroundColor: "#040B12" }}
      >
        <Eclipse3
          style={{
            left: 0,
            top: "130vh",
            position: "absolute",
          }}
        />
        <Eclipse4
          style={{
            right: 0,
            top: "130vh",
            position: "absolute",
          }}
        />
        <Eclipse3
          style={{
            left: 0,
            top: "230vh",
            position: "absolute",
          }}
        />
        <Eclipse4
          style={{
            right: 0,
            top: "230vh",
            position: "absolute",
          }}
        />
        <ServiceHeroSection />
        <ServicesListSection />
        <ServicesEvolutionSection />
        <HomeConnectSection />
      </Stack>
      {/* {mobileView && <Typography variant="h5">Services Mobile View</Typography>}
      {tabletView && <Typography variant="h5">Services Tablet View</Typography>}
      {laptopView && <Typography variant="h5">Services Laptop View</Typography>}
      {desktopView && (

      )} */}
    </>
  );
};

export default Services;

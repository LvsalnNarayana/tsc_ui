import React from "react";

import { Stack } from "@mui/material";

import HomeConnectSection from "../home/HomeConnectSection";
import AboutHeroPattern from "../SVGComponents/AboutHeroPattern";

const ContactHeroSection = () => {
  return (
    <Stack
      py={10}
      style={{
        display: "flex",
        minHeight: "100vh",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AboutHeroPattern
        style={{ top: 0, left: 0, zIndex: 0, position: "absolute" }}
      />
      <HomeConnectSection />
    </Stack>
  );
};

export default ContactHeroSection;

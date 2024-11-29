import React from "react";

import { Stack, Container } from "@mui/material";

import AboutCultureSVG from "../SVGComponents/AboutCultureSVG";

const AboutCultureSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        height="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ overflow: "hidden" }}
      >
        <AboutCultureSVG />
      </Stack>
    </Container>
  );
};

export default AboutCultureSection;

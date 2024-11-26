import React from "react";

import { Stack, Button, Typography } from "@mui/material";

import StrategySectionBackgroundSVG from "../SVGComponents/StrategySectionBackgroundSVG";

const HomeSocialStrategySection = () => {
  return (
    <Stack
      gap={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="500px"
      sx={{ position: "relative" }}
    >
      <StrategySectionBackgroundSVG
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "450px",
          position: "absolute",
        }}
      />
      <Typography
        variant="body1"
        fontSize={{
          laptop: 48,
          tablet: 24,
          mobile: 24,
          desktop: 56,
        }}
        fontWeight={700}
        textAlign="center"
        sx={{ zIndex: 2 }}
        width={{
          laptop: "80%",
          tablet: "80%",
          mobile: "80%",
          desktop: "80%",
        }}
        lineHeight={1.5}
      >
        Supercharge Your Social Strategy
        <br /> with TSC Social!
      </Typography>
      <Button
        sx={{
          py: 1,
          px: 5,
          fontSize: 18,
          color: "#000",
          borderRadius: "8px",
          background: "#41C4DA",
        }}
      >
        Get Started Today!
      </Button>
    </Stack>
  );
};

export default HomeSocialStrategySection;

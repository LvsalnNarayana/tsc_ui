import React from "react";

import { Stack, Typography } from "@mui/material";

import StrategySectionBackgroundSVG from "../SVGComponents/StrategySectionBackgroundSVG";

const ProductReinventSection = () => {
  return (
    <Stack
      gap={2}
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
        Reinvent Your Business
      </Typography>
      <Typography
        variant="body1"
        fontSize={{
          laptop: 18,
          tablet: 16,
          mobile: 16,
          desktop: 18,
        }}
        fontWeight={400}
        textAlign="center"
        sx={{ zIndex: 2 }}
        width={{
          laptop: "30%",
          tablet: "80%",
          mobile: "80%",
          desktop: "30%",
        }}
        lineHeight={1.5}
        color="#708090"
      >
        Adapt to changing needs and be the next and best version – a business
        that not only survives but thrives.
      </Typography>
    </Stack>
  );
};

export default ProductReinventSection;

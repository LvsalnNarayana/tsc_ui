import React from "react";
import Lottie from "lottie-react";

import { Stack, Button, Typography, useMediaQuery } from "@mui/material";

import reinventJson from "../../assets/Reinvent Your Business.json";

const ProductReinventSection = () => {
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
    <Stack
      gap={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="500px"
      sx={{ position: "relative" }}
    >
      {(desktopView || laptopView) && (
        // <Lottie
        //   animationData={reinventJson}
        //   style={{
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     position: "absolute",
        //   }}
        // />
        <img
          alt="bg"
          src="/reinvent_gif.gif"
          style={{
            left: 0,
            top: "50%",
            width: "100%",
            maxHeight: "100%",
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />
      )}
      {(mobileView || tabletView) && (
        <img
          alt="bg"
          src="/bg_w.gif"
          style={{
            left: 0,
            top: "50%",
            width: "100%",
            maxHeight: "100%",
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />
      )}
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

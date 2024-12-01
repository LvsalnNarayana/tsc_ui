/* eslint-disable max-lines */
import React from "react";

import { Stack, Container, Typography, useMediaQuery } from "@mui/material";

import HowWeWorkSVG from "../SVGComponents/HowWeWorkSVG";

const HomeHowWeWorkSection = () => {
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
    <Container maxWidth="desktop">
      <Stack
        py={{
          tablet: 6,
          mobile: 6,
          laptop: 15,
          desktop: 15,
        }}
        gap={10}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="fit-content"
        width="100%"
        maxWidth="100vw"
        sx={{ overflowX: "hidden" }}
      >
        <Typography
          fontSize={{
            laptop: 60,
            tablet: 32,
            mobile: 32,
            desktop: 60,
          }}
          lineHeight={1.2}
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="responsive-text"
        >
          We guide your journey in adapting to evolving
          <br /> business demands, creating tangible value for
          <br /> your organization and customers.
        </Typography>
        {(desktopView||laptopView) &&<HowWeWorkSVG />}
        {(mobileView||tabletView) &&<img alt="hww" src="/hww_mob.svg" />}
      </Stack>
    </Container>
  );
};

export default HomeHowWeWorkSection;

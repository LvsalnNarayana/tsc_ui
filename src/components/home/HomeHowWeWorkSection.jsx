/* eslint-disable max-lines */
import React from "react";

import { Stack, Typography } from "@mui/material";

import HowWeWorkSVG from "../SVGComponents/HowWeWorkSVG";

const HomeHowWeWorkSection = () => {
  return (
    <Stack
      minHeight="100vh"
      py={5}
      gap={10}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="fit-content"
    >
      {/* <Typography
        sx={{
          px: 6,
          py: 1.7,
          fontSize: 24,
          lineHeight: 1,
          color: "#fff",
          borderRadius: "99px",
          border: " 1px solid rgba(255, 255, 255, 0.10)",
          background:
            "conic-gradient(from 181deg at 50% 50%, rgba(0, 0, 0, 0.00) 172.66420125961304deg, rgba(73, 53, 130, 0.30) 281.25deg, rgba(71, 47, 140, 0.12) 360deg), rgba(255, 255, 255, 0.05)",
        }}
      >
        How we work
      </Typography> */}
      <Typography
        fontSize={60}
        textAlign="center"
        sx={{
          background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
          // eslint-disable-next-line perfectionist/sort-objects
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        We guide your journey in adapting to evolving
        <br /> business demands, creating tangible value for
        <br /> your organization and customers.
      </Typography>
      <HowWeWorkSVG />
    </Stack>
  );
};

export default HomeHowWeWorkSection;

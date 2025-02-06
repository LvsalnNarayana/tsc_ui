/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-lines */
import React from "react";

import { Stack, Typography } from "@mui/material";

import AboutHeroPattern from "../components/SVGComponents/AboutHeroPattern";

const TermsConditions = () => {
  return (
    <Stack
      width="100%"
      maxWidth="100%"
      sx={{
        color: "#fff",
        overflow: "clip",
        position: "relative",
        backgroundColor: "#040B12",
      }}
    >
      <Stack
        style={{
          display: "flex",
          height: "100vh",
          paddingTop: "87px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AboutHeroPattern style={{ top: 0, left: 0, position: "absolute" }} />
        <Typography
          variant="h1"
          align="center"
          fontSize={{
            tablet: 55,
            mobile: 55,
            laptop: 140,
            desktop: 140,
          }}
          fontWeight={500}
          sx={{
            zIndex: 2,
            color: "transparent",
            whiteSpace: "nowrap",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
            background:
              "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(4,11,18) 100%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
          }}
        >
          Terms & Conditions
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TermsConditions;

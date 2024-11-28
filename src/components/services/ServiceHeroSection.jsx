import React from "react";

import { Stack, Button, Typography } from "@mui/material";

import AboutHeroPattern from "../SVGComponents/AboutHeroPattern";

const ServiceHeroSection = () => {
  return (
    <Stack
      gap={4}
      style={{
        display: "flex",
        minHeight: "100vh",
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
          laptop: 88,
          tablet: 55,
          mobile: 55,
          desktop: 88,
        }}
        lineHeight={1.2}
        color="transparent"
        sx={{
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(4,11,18) 100%)",
          // eslint-disable-next-line perfectionist/sort-objects
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          textFillColor: "transparent",
          WebkitTextFillColor: "transparent",
        }}
      >
        Explore New Horizons
      </Typography>
      <Typography
        fontSize={{
          laptop: 32,
          tablet: 20,
          mobile: 20,
          desktop: 32,
        }}
        lineHeight={1.4}
        color="rgba(255, 255, 255, 0.30)"
        fontWeight={400}
        textAlign="center"
        className="responsive-text"
      >
        Unlock sustainable growth opportunities and empower your brand with
        <br />
        agility through our innovative services.
      </Typography>
      <Button
        sx={{
          px: 6,
          py: 1.7,
          fontSize: 18,
          lineHeight: 1,
          color: "#fff",
          borderRadius: "99px",
          boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
          background: "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
        }}
      >
        Let&apos;s Talk
      </Button>
    </Stack>
  );
};

export default ServiceHeroSection;

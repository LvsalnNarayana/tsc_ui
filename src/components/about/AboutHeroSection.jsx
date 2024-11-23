import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import AboutHeroPattern from "../SVGComponents/AboutHeroPattern";

const AboutHeroSection = () => {
  return (
    <>
      <Stack
        style={{
          display: "flex",
          minHeight: "100vh",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AboutHeroPattern style={{ top: 0, left: 0, position: "absolute" }} />
        <Typography
          variant="h1"
          align="center"
          sx={{
            zIndex: 2,
            background:
              "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(4,11,18) 100%)",
            // eslint-disable-next-line perfectionist/sort-objects
            fontSize: "9rem",
            lineHeight: "128px",
            fontWeight: "normal",
            color: "transparent",
            whiteSpace: "nowrap",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Dubai-Regular', Helvetica",
          }}
        >
          About Us
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-start">
        <Stack width="100%" justifyContent="center" alignItems="center">
          <Box
            component="img"
            src="/about_hero_image.png"
            width={450}
            height={450}
            sx={{ borderRadius: "20px" }}
          />
        </Stack>
        <Stack width="100%" direction="column" alignItems="flex-start" gap={2}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Box width={20} height={6} bgcolor="#41c4da" borderRadius="99px" />
            <Typography
              variant="subtitle1"
              fontSize={16}
              color="#fff"
              fontWeight={400}
              lineHeight={1.2}
            >
              About Us
            </Typography>
          </Box>

          <Typography
            variant="h3"
            fontSize={40}
            color="#fff"
            fontWeight={500}
            lineHeight={1.2}
          >
            People with purpose
            <br />
            and value
          </Typography>

          <Typography
            variant="body1"
            color="rgba(255, 255, 255, 0.70)"
            fontSize={16}
            fontWeight={400}
            lineHeight={1.5}
            sx={{
              width: 490,
            }}
          >
            At TSC we are a startup with a purpose to deliver transformative IT
            solutions. Our mission is to enable businesses through technology,
            quality and client centricity. As we start this journey we are
            committed to our clients and helping them achieve their goals. Our
            team consists of developers, engineers, designers, QA experts and
            seasoned executive leaders – all with 15+ years of experience. We
            have delivered impressive results and built long term relationships
            with global clients and we are growing stronger every day.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default AboutHeroSection;

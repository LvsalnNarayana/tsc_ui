import React from "react";

import { Stack, Container, Typography } from "@mui/material";

import AboutCultureSVG from "../SVGComponents/AboutCultureSVG";

const AboutCultureSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        height="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ overflow: "hidden", position: "relative" }}
      >
        <Stack
          width={340}
          minHeight={200}
          p={3}
          gap={2}
          sx={{
            top:0,
            overflow: "hidden",
            borderRadius: "26px",
            position: "absolute",
            border: "1px solid #45BDD6",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex", // Ensures content stretches to the container
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              top: 0,
              left: 0,
              zIndex: 0,
              opacity: 0.2,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
            width="100%"
            height="100%"
            src="/ethics.mp4"
          />

          {/* Content */}
          <Stack sx={{ zIndex: 2, position: "relative" }}>
            <Typography fontSize={28} fontWeight={500} lineHeight={1.4}>
              Ethically Strong
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={300}
              lineHeight={1.4}
              color="rgba(255, 255, 255, 0.7)"
            >
              With integrity, respect, and a sense of responsibility, we create
              an environment where everyone can grow.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={340}
          minHeight={200}
          p={3}
          gap={2}
          sx={{
            top:"30%",
            left:0,
            overflow: "hidden",
            borderRadius: "26px",
            position: "absolute",
            border: "1px solid #45BDD6",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex", // Ensures content stretches to the container
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: -7,
              left: 0,
              width: "120%",
              height: "120%",
              objectFit: "cover", // Ensures the video covers the entire container
              zIndex: 0,
              opacity: 0.2, // Ensures background text is visible
            }}
            src="/diversity.mp4"
          />

          {/* Content */}
          <Stack sx={{ zIndex: 2, position: "relative" }}>
            <Typography fontSize={28} fontWeight={500} lineHeight={1.4}>
              Diversity & Equality
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={300}
              lineHeight={1.4}
              color="rgba(255, 255, 255, 0.7)"
            >
              We welcome people from all walks of life and are committed to
              equal opportunities for all.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={340}
          minHeight={200}
          p={3}
          gap={2}
          sx={{
            top: "30%",
            right: 0,
            overflow: "hidden",
            borderRadius: "26px",
            position: "absolute",
            border: "1px solid #45BDD6",
            background: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              top: 0,
              left: 0,
              zIndex: 0,
              opacity: 0.2,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
            width="100%"
            height="100%"
            src="/worklife.mp4"
          />

          {/* Content */}
          <Stack sx={{ zIndex: 2, position: "relative" }}>
            <Typography fontSize={28} fontWeight={500} lineHeight={1.4}>
              Work & Life
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={300}
              lineHeight={1.4}
              color="rgba(255, 255, 255, 0.7)"
            >
              We support work-life balance through flexible hours, a supportive
              environment, and fun celebrations.
            </Typography>
          </Stack>
        </Stack>

        <AboutCultureSVG />
      </Stack>
    </Container>
  );
};

export default AboutCultureSection;

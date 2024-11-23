import React from "react";

import { Box, Stack, Button, Container, Typography } from "@mui/material";

import HeroBackground from "../Backgrounds/HeroBackground";

const HomeHeroSection = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ zIndex: 1, position: "relative" }}
    >
      <HeroBackground
        style={{
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <Container maxWidth="desktop">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            gap={0}
            width="60%"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography
              variant="body1"
              fontSize={120}
              sx={{
                color: "#fff",
                display: "inline-block",
              }}
              fontWeight={100}
            >
              Transform your
            </Typography>
            <Typography
              variant="body1"
              fontSize={120}
              sx={{
                color: "#fff",
                display: "inline-block",
              }}
              fontWeight="bold"
            >
              Business
            </Typography>
            <Typography
              variant="body1"
              fontSize={120}
              sx={{
                color: "#fff",
                display: "inline-block",
              }}
              fontWeight="normal"
            >
              With TSC
            </Typography>
            <Typography
              variant="body1"
              fontSize={20}
              sx={{
                mt: 3.5,
                lineHeight: 1.4,
                color: "#ffffff80",
                display: "inline-block",
              }}
              fontWeight="normal"
            >
              Empower, Innovate, and Accelerate with TSC—Pioneering Businesses{" "}
              <br /> in Ever-Evolving Technology Landscapes
            </Typography>
            <Stack
              mt={4}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={2}
            >
              <Button
                sx={{
                  px: 6,
                  py: 1.7,
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#fff",
                  borderRadius: "99px",
                  background: "rgba(255, 255, 255, 0.10)",
                }}
              >
                Our Services
              </Button>
              <Button
                sx={{
                  px: 6,
                  py: 1.7,
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#fff",
                  borderRadius: "99px",
                  boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
                  background:
                    "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
                }}
              >
                Get In Touch
              </Button>
            </Stack>
          </Stack>
          <Stack
            width="40%"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Box
              component="img"
              src="/hero_image.png"
              sx={{
                width: "90%",
                objectFit: "contain",
                height: "fit-content",
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomeHeroSection;

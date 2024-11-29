import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Stack, Button, Container, Typography } from "@mui/material";

import HeroBackground from "../Backgrounds/HeroBackground";

const HomeHeroSection = () => {
  const navigate = useNavigate();

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      maxWidth="100vw"
      sx={{
        zIndex: 1,
        position: "relative",
        paddingTop: {
          mobile: 15,
          tablet: 15,
          laptop: "87px",
          desktop: "87px",
        },
      }}
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
          direction={{
            laptop: "row",
            desktop: "row",
            tablet: "column",
            mobile: "column",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            gap={2}
            width={{
              laptop: "60%",
              mobile: "100%",
              tablet: "100%",
              desktop: "60%",
            }}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography
              variant="body1"
              fontSize={{
                mobile: 55,
                tablet: 55,
                laptop: 120,
                desktop: 120,
              }}
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
              fontSize={{
                mobile: 55,
                tablet: 55,
                laptop: 120,
                desktop: 120,
              }}
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
              fontSize={{
                mobile: 55,
                tablet: 55,
                laptop: 120,
                desktop: 120,
              }}
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
              className="lato responsive-text"
              fontWeight="normal"
            >
              Empower, Innovate, and Accelerate with TSC—Pioneering Businesses
              <br /> in Ever-Evolving Technology Landscapes
            </Typography>
            <Stack
              mt={4}
              direction="row"
              justifyContent={{
                mobile: "flex-start",
                tablet: "flex-start",
                laptop: "flex-start",
                desktop: "flex-start",
              }}
              width="100%"
              alignItems="center"
              gap={2}
            >
              <Button
                sx={{
                  py: 1.7,
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#fff",
                  borderRadius: "99px",
                  background: "rgba(255, 255, 255, 0.10)",
                  px: {
                    mobile: 3,
                    tablet: 3,
                    laptop: 6,
                    desktop: 6,
                  },
                }}
                onClick={() => {
                  navigate("/services");
                }}
              >
                Our Services
              </Button>
              <Button
                sx={{
                  gap: 1,
                  py: 1.7,
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#fff",
                  display: "flex",
                  borderRadius: "99px",
                  alignItems: "center",
                  boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
                  background:
                    "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
                  px: {
                    mobile: 3,
                    tablet: 3,
                    laptop: 6,
                    desktop: 6,
                  },
                }}
                onClick={() => {
                  const element = document.getElementById("connect");

                  if (element) {
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - 87;

                    window.scrollTo({
                      behavior: "smooth",
                      top: offsetPosition,
                    });
                  }
                }}
              >
                Get In Touch
                <img alt="arrow" src="/ArrowUpRight.svg" />
              </Button>
            </Stack>
          </Stack>
          <Stack
            width={{
              laptop: "50%",
              mobile: "100%",
              tablet: "100%",
              desktop: "50%",
            }}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
          >
            <Box
              component="img"
              src="/home_hero_animation.gif"
              sx={{
                width: "120%",
                maxWidth: "100%",
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

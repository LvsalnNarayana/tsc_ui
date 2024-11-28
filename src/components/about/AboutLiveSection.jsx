import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const AboutLiveSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack py={8} gap={10} alignItems="center">
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
        >
          We Live By
        </Typography>

        <Stack
          my={{
            laptop: 7,
            tablet: 2,
            mobile: 2,
            desktop: 7,
          }}
          gap={{
            laptop: 4,
            desktop: 4,
            tablet: 10,
            mobile: 10,
          }}
          width="100%"
          direction={{
            laptop: "row",
            desktop: "row",
            tablet: "column",
            mobile: "column",
          }}
          justifyContent="space-around"
          alignItems="center"
        >
          {[
            {
              id: 1,
              icon: "/hand_greeting.svg",
              title: "Honesty in all dealings",
              description: `We follow ethical business practices and prioritize trust and
                  integrity in every interaction we have. This leads to long-term
                  partnerships that grow.`,
            },
            {
              id: 2,
              icon: "/key.svg",
              title: "Innovation is key",
              description: `We believe innovation is the way to global transformation. We go
                  beyond providing solutions; we explore ideas, push limits, and
                  shape the future of our client's businesses.`,
            },
            {
              id: 3,
              icon: "/check.svg",
              title: "Values-Based Culture",
              description: `At TSC we have a culture where personal values align with our
                  company mission. This alignment creates a positive work
                  environment where everyone can bring their best.`,
            },
          ]?.map((livesItem) => {
            return (
              <Stack
                key={livesItem.id}
                px={5}
                py={8}
                gap={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: 364,
                  minHeight: 310,
                  height: "100%",
                  position: "relative",
                  borderRadius: "20px",
                  border: "1px solid #1E1E21",
                  "&:hover .hover-box": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  className="hover-box"
                  sx={{
                    right: 0,
                    zIndex: 1,
                    bottom: 0,
                    opacity: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "20px",
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 317 273"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_2049_6561)">
                      <path
                        d="M337 230C337 270.317 304.317 303 264 303C223.683 303 191 270.317 191 230C191 189.683 223.683 157 264 157C304.317 157 337 189.683 337 230Z"
                        fill="#41C4DA"
                        fillOpacity="0.6"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_2049_6561"
                        x="0.800003"
                        y="-33.2"
                        width="526.4"
                        height="526.4"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="95.1"
                          result="effect1_foregroundBlur_2049_6561"
                        />
                      </filter>
                    </defs>
                  </svg>
                </Box>

                <Stack width="100%" height="100%" sx={{ zIndex: 3 }}>
                  <Stack
                    width={100}
                    height={100}
                    bgcolor="#373E44"
                    borderRadius="100%"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      top: -50,
                      left: "50%",
                      position: "absolute",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <img
                      alt="key"
                      src={livesItem?.icon}
                      width={36}
                      height={36}
                    />
                  </Stack>
                  <Typography
                    variant="h6"
                    color="#fff"
                    textAlign="center"
                    fontSize={26}
                    lineHeight={1.4}
                    fontWeight={500}
                  >
                    {livesItem?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#929292"
                    textAlign="center"
                    fontSize={16}
                    lineHeight={1.4}
                    fontWeight={400}
                    className="lato"
                    letterSpacing={1}
                  >
                    {livesItem?.description}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutLiveSection;

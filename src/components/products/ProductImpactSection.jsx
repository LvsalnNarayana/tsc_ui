import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const ProductImpactSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        py={8}
        gap={{
          laptop: 7,
          desktop: 7,
          tablet: 10,
          mobile: 10,
        }}
        alignItems="center"
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
        >
          Drive Real Impact on Social Media
        </Typography>
        <Typography
          fontSize={{
            laptop: 18,
            tablet: 16,
            mobile: 16,
            desktop: 18,
          }}
          lineHeight={1.5}
          textAlign="center"
          color="#ffffff80"
          className="lato responsive-text"
        >
          From Engagement to ROI. Save time, get organized and manage your
          social media with our Social
          <br /> Media CRM. Measure and drive real business impact from your
          social campaigns in one place.
        </Typography>

        <Stack
          my={{
            laptop: 9,
            tablet: 2,
            mobile: 2,
            desktop: 9,
          }}
          gap={{
            laptop: 7,
            desktop: 7,
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
          justifyContent="center"
          alignItems="center"
        >
          {[
            {
              id: 1,
              icon: "/like.svg",
              title: "Manage Your Social Content",
              description: `Everything you need to manage your content and grow your brand across all major social media platforms.
`,
            },
            {
              id: 2,
              icon: "/hand_greeting.svg",
              title: "Collaborate with Your Team",
              description: `No more internal friction and multiple emails and messages to get approvals.`,
            },
            {
              id: 3,
              icon: "/check.svg",
              title: "Give Your Team Actionable Insights",
              description: `Measure the metrics that matter to your brand. Get the insights and data to write posts and start conversations that grow your business.`,
            },
          ]?.map((livesItem) => {
            return (
              <Stack
                key={livesItem.id}
                px={5}
                py={9}
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                  width: "100%",
                  minHeight: 315,
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
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                        fillOpacity="1"
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

                <Stack
                  gap={2}
                  alignItems="center"
                  width="100%"
                  height="100%"
                  sx={{ zIndex: 3 }}
                >
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
                    fontWeight={400}
                  >
                    {livesItem?.title}
                  </Typography>
                  <Typography
                    variant="body1"
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

export default ProductImpactSection;

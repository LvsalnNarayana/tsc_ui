import React from "react";

import { Box, Stack, Divider, Container, Typography } from "@mui/material";

const HomeCultureSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        py={5}
        gap={5}
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
            border: "1px solid rgba(255, 255, 255, 0.10)",
            background:
              "conic-gradient(from 181deg at 50% 50%, rgba(0, 0, 0, 0.00) 172.66420125961304deg, rgba(73, 53, 130, 0.30) 281.25deg, rgba(71, 47, 140, 0.12) 360deg), rgba(255, 255, 255, 0.05)",
          }}
        >
          Culture
        </Typography> */}
        <Typography
          fontSize={60}
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
          Cultivating a Collaborative
          <br /> Culture
        </Typography>
        <Typography
          textAlign="center"
          fontSize={18}
          lineHeight={1.5}
          color="rgba(255, 255, 255, 0.70)"
        >
          At TSC we create an environment where learning, growth, and innovation
          thrive for
          <br /> everyone, so we have a high-performing team that exceeds
          expectations.
        </Typography>
        <Stack display="grid" gridTemplateColumns="repeat(2, 1fr)">
          {[
            {
              number: "01",
              title: "Success",
              description:
                "Our clients' success is our success, we support them throughout their journey.",
            },
            {
              number: "02",
              title: "Partnership",
              description:
                "We have transparent relationships with our clients based on shared goals and mutual respect.",
            },
            {
              number: "03",
              title: "Innovation",
              description:
                "We leverage technology and the power of ideas to move forward.",
            },
            {
              number: "04",
              title: "Accessibility",
              description:
                "We make digital solutions available to every business, big or small.",
            },
          ].map(({ title, number, description }) => {
            return (
              <Stack
                key={number}
                px="40px"
                py="80px"
                width="100%"
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  "&:hover .blur-box": {
                    opacity: 1,
                    transform: "scale(1)",
                  },
                }}
              >
                {/* Blur box that appears on hover */}
                <Box
                  className="blur-box"
                  component="div"
                  sx={{
                    right: 0,
                    bottom: 0,
                    width: 230,
                    opacity: 0,
                    height: 230,
                    position: "absolute",
                    transform: "scale(0.8)",
                    filter: "blur(192.75px)",
                    background: "rgba(65, 196, 218, 0.70)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                />
                {/* Section Content */}
                <Stack
                  direction="row"
                  alignItems="flex-end"
                  width="100%"
                  gap={2}
                >
                  <Typography
                    fontSize={120}
                    lineHeight={1}
                    fontWeight={600}
                    color="#41C4DA"
                    sx={{ flexShrink: 0 }}
                    marginBottom={-2}
                  >
                    {number}
                  </Typography>
                  <Stack width="100%">
                    <Typography
                      className="lato"
                      fontSize={44}
                      color="#fff"
                      lineHeight={1.2}
                      fontWeight={500}
                    >
                      {title}
                    </Typography>
                    <Divider
                      flexItem
                      sx={{ borderWidth: 1, borderColor: "#262626" }}
                    />
                  </Stack>
                </Stack>
                <Typography fontSize={24} color="#B5B5B8" lineHeight={1.4}>
                  {description}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeCultureSection;

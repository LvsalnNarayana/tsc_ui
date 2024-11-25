import React from "react";

import { Stack, Container, Typography } from "@mui/material";

const AboutLiveSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack py={8} gap={10} alignItems="center">
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
          We Live By
        </Typography>

        <Stack
          my={7}
          width="100%"
          direction="row"
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
              icon: "/key.svg",
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
                }}
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
                  <img alt="key" src={livesItem?.icon} width={36} height={36} />
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
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutLiveSection;

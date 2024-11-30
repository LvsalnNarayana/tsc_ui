import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const AboutEvolutionSection = () => {
  return (
    <Container
      maxWidth="desktop"
      sx={{
        zIndex: 1,
        position: "relative",
        mt: {
          laptop: "-700px",
          tablet: "-300px",
          mobile: "-200px",
          dektop: "-1000px",
        },
      }}
    >
      <Stack
        pt={5}
        pb={10}
        gap={{
          laptop: 5,
          tablet: 5,
          mobile: 5,
          desktop: 5,
        }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="fit-content"
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
          Embrace Evolution
        </Typography>
        <Stack
          direction={{
            laptop: "row",
            desktop: "row",
            tablet: "column",
            mobile: "column",
          }}
          width="100%"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Stack
            width={{
              tablet: "100%",
              mobile: "100%",
              laptop: "fit-content",
              desktop: "fit-content",
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            gap={3}
            sx={{
              borderRadius: "10px",
              border: " 1px solid rgba(255, 255, 255, 0.25);",
            }}
          >
            <Box
              component="img"
              src="/home_lightbulb.svg"
              width={60}
              height={60}
            />
            <Typography fontSize={22} fontWeight={400} textAlign="center">
              Innovative Led Solutions
            </Typography>
          </Stack>
          <Stack
            width={{
              tablet: "100%",
              mobile: "100%",
              laptop: "fit-content",
              desktop: "fit-content",
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            gap={3}
            sx={{
              borderRadius: "10px",
              border: " 1px solid rgba(255, 255, 255, 0.25);",
            }}
          >
            <Box
              component="img"
              src="/home_web_development.svg"
              width={60}
              height={60}
            />
            <Typography fontSize={22} fontWeight={400} textAlign="center">
              Vast Technology Landscape
            </Typography>
          </Stack>
          <Stack
            width={{
              tablet: "100%",
              mobile: "100%",
              laptop: "fit-content",
              desktop: "fit-content",
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            gap={3}
            sx={{
              borderRadius: "10px",
              border: " 1px solid rgba(255, 255, 255, 0.25);",
            }}
          >
            <Box
              component="img"
              src="/home_team_meeting.svg"
              width={60}
              height={60}
            />
            <Typography fontSize={22} fontWeight={400} textAlign="center">
              Diverse Industry Experience
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutEvolutionSection;

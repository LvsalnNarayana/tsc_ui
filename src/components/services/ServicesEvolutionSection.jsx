import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const ServicesEvolutionSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        pt={5}
        pb={10}
        gap={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="fit-content"
      >
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
          Embrace Evolution
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Stack
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

export default ServicesEvolutionSection;

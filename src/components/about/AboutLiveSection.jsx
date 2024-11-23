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
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Stack
            px={5}
            py={10}
            gap={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 364,
              height: "100%",
              position: "relative",
              borderRadius: "20px",
              background: "#1E1E21",
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
              <img alt="key" src="/key.svg" width={36} height={36} />
            </Stack>
            <Typography
              variant="h6"
              color="#fff"
              textAlign="center"
              fontSize={26}
              lineHeight={1.4}
              fontWeight={500}
            >
              Innovation is key
            </Typography>
            <Typography
              variant="body2"
              color="#929292"
              textAlign="center"
              fontSize={18}
              lineHeight={1.4}
              fontWeight={300}
            >
              We believe innovation is the way to global transformation. We go
              beyond providing solutions; we explore ideas, push limits, and
              shape the future of our client&apos;s businesses.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutLiveSection;

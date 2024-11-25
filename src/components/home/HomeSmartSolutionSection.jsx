/* eslint-disable max-lines */
import React from "react";

import { Box, Stack, Button, Divider, Typography } from "@mui/material";

const HomeSmartSolutionSection = () => {
  return (
    <Stack
      py={10}
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      position="relative"
    >
      <Typography
        mb={4}
        fontSize={60}
        sx={{
          background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
          // eslint-disable-next-line perfectionist/sort-objects
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Smart Solution
      </Typography>
      <Typography
        mb={10}
        fontSize={18}
        width="60%"
        textAlign="center"
        lineHeight={1.5}
        className="lato"
        color="rgba(255, 255, 255, 0.80)"
        letterSpacing="1px"
      >
        Explore our comprehensive range of innovative services designed
        <br /> to elevate your business capabilities across various domains,
        <br />
        ensuring optimal efficiency and client satisfaction.
      </Typography>
      <Stack width="60%">
        <Stack
          gap={7}
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Stack justifyContent="center" alignItems="center">
            <Box
              component="img"
              src="/solutions_1.png"
              maxHeight="100%"
              sx={{ borderRadius: 2 }}
            />
          </Stack>
          <Stack
            justifyContent="flex-start"
            alignItems="center"
            height="100%"
            sx={{ zIndex: 2, position: "relative" }}
          >
            <Typography fontSize={60} fontWeight="bold" sx={{ mb: 1 }}>
              01
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                color: "red",
                borderWidth: 3,
                height: "150px",
                borderColor: "#41c4da",
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                color: "red",
                borderWidth: 3,
                height: "150px",
                borderColor: "#112334",
              }}
            />
            <Typography
              fontSize={60}
              fontWeight="bold"
              sx={{ mt: 1 }}
              color="#ffffff50"
            >
              02
            </Typography>
          </Stack>
          <Stack
            gap={3}
            justifyContent="center"
            alignItems="flex-start"
            flexGrow={1}
            height="100%"
          >
            <Typography fontSize={40} fontWeight="normal">
              Social Media CRM
            </Typography>
            <Typography
              fontSize={16}
              lineHeight={1.5}
              color="rgba(255, 255, 255, 0.80)"
              letterSpacing="1px"
              className="lato"
            >
              Engage and retain customers with our advanced social media CRM
              solutions. Harness the power of social platforms to build
              meaningful relationships and drive business growth.
            </Typography>
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
              Know More
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Box
        component="img"
        src="/hero_pattern.png"
        sx={{
          left: 0,
          bottom: 0,
          zIndex: 1,
          opacity: 0.4,
          width: "100%",
          height: "60vh",
          objectFit: "cover",
          position: "absolute",
          maskImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.4))",
        }}
      />
    </Stack>
  );
};

export default HomeSmartSolutionSection;

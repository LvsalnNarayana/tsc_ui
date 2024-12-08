import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const ProductPerformanceSection = () => {
  return (
    <Stack
      minHeight={{
        laptop: "100vh",
        desktop: "100vh",
        mobile: "fit-content",
        tablet: "fit-content",
      }}
      py={{
        laptop: 5,
        mobile: 7,
        tablet: 7,
        desktop: 5,
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Container maxWidth="desktop">
        <Stack
          sx={{
            mx: "auto",
            width: "70%",
            borderRadius: 5,
          }}
        >
          <Stack
            gap={4}
            p={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            flexShrink={0}
            height={{
              laptop: "60vh",
              desktop: "60vh",
              mobile: "fit-content",
              tablet: "fit-content",
            }}
            minHeight={{
              laptop: "500px",
              desktop: "500px",
              mobile: "fit-content",
              tablet: "fit-content",
            }}
            mx="auto"
            sx={{
              borderRadius: 5,
              backgroundColor: "#182029",
            }}
          >
            <Stack gap={1} alignItems="center" direction="row">
              <Box
                component="div"
                sx={{
                  width: 20,
                  height: 6,
                  borderRadius: 99,
                  background: "#45BDD6",
                }}
              />
              <Typography
                fontSize={{
                  mobile: 12,
                  tablet: 12,
                  laptop: 16,
                  desktop: 16,
                }}
                lineHeight={1.2}
                fontWeight={400}
                className="lato"
                color="#fff"
              >
                Transform Your Digital Presence
              </Typography>
              <Box
                component="div"
                sx={{
                  width: 20,
                  height: 6,
                  borderRadius: 99,
                  background: "#45BDD6",
                }}
              />
            </Stack>
            <Typography
              fontSize={{
                mobile: 32,
                tablet: 32,
                laptop: 64,
                desktop: 64,
              }}
              color="#fff"
              fontWeight={400}
              lineHeight={1}
              textAlign="center"
            >
              Stay ahead in performance’s
              <br /> new frontier.
            </Typography>
            <Typography
              fontFamily={16}
              color="#fff"
              fontWeight={400}
              lineHeight={1.4}
              textAlign="center"
              className="lato responsive-text"
            >
              Elevate your organization’s maturity with strategy, technology,
              and a culture of
              <br /> collaboration. Let’s build the path to excellence and
              sustainability for the long term.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductPerformanceSection;

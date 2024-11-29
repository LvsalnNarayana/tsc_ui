import React from "react";

import { Stack, Button, Container, Typography } from "@mui/material";

import HeroBackground from "../Backgrounds/HeroBackground";

const ProductsHeroSection = () => {
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
          direction="column"
          justifyContent={{
            mobile: "center",
            tablet: "center",
            laptop: "center",
            desktop: "center",
          }}
          width="100%"
          alignItems="center"
          gap={4}
        >
          <Button
            sx={{
              py: 1.7,
              fontSize: 18,
              lineHeight: 1,
              color: "#fff",
              borderRadius: "99px",
              background: "#121E24",
              px: {
                mobile: 3,
                tablet: 3,
                laptop: 6,
                desktop: 6,
              },
            }}
          >
            Grab the Opportunity
          </Button>
          <Typography
            variant="body1"
            fontSize={{
              mobile: 55,
              tablet: 55,
              laptop: 64,
              desktop: 64,
            }}
            sx={{
              color: "#fff",
              display: "inline-block",
            }}
            textAlign="center"
            fontWeight={400}
          >
            We’ll help you get the most out of
            <br /> technology,{" "}
            <span style={{ color: "#45BDD6" }}>act smart</span>, and grow fast.
          </Typography>
          <Button
            sx={{
              py: 1.7,
              fontSize: 18,
              lineHeight: 1,
              color: "#fff",
              borderRadius: "99px",
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
          >
            Lets talk
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductsHeroSection;

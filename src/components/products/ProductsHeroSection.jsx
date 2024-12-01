import React from "react";

import { Stack, Button, Container, Typography, useMediaQuery } from "@mui/material";

import HeroBackground from "../Backgrounds/HeroBackground";

const ProductsHeroSection = () => {
  const mobileView = useMediaQuery((mobileTheme) => {
    return mobileTheme.breakpoints.down("tablet");
  });
  const tabletView = useMediaQuery((tabletTheme) => {
    return tabletTheme.breakpoints.between("tablet", "laptop");
  });
  const laptopView = useMediaQuery((laptopTheme) => {
    return laptopTheme.breakpoints.between("laptop", "desktop");
  });
  const desktopView = useMediaQuery((desktopTheme) => {
    return desktopTheme.breakpoints.up("desktop");
  });
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight={{
        desktop:"100vh",
        laptop:"100vh",
        mobile:"500px",
        tablet:"500px"
      }}
      maxWidth="100vw"
      sx={{
        zIndex: 1,
        position: "relative",
        paddingTop: {
          mobile:  "87px",
          tablet:  "87px",
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
      <img
        alt="product-hero"
        src={(laptopView||desktopView)?"/product_hero.gif":"/product_hero_mob.gif"}
        style={{
          width: "100%",
          height: "100%",
          // objectFit: "cover",
          position: "absolute",
          zIndex: -1,
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
          {/* <Button
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
          </Button> */}
          <Typography
            variant="body1"
            fontSize={{
              mobile: 32,
              tablet: 32,
              laptop: 64,
              desktop: 64,
            }}
            sx={{
              color: "#fff",
              display: "inline-block",
            }}
            textAlign="center"
            fontWeight={400}
            className="responsive-text"
          >
            We’ll help you get the most out of
            <br /> technology,
            <span style={{ color: "#45BDD6" }}>act smart</span>, and grow fast.
          </Typography>
          <Button
            sx={{
              gap: 1,
              py: 1.7,
              fontSize: 18,
              lineHeight: 1,
              color: "#fff",
              display: "flex",
              borderRadius: "99px",
              alignItems: "center",
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
            onClick={() => {
              const element = document.getElementById("connect");

              if (element) {
                const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 87;

                window.scrollTo({
                  behavior: "smooth",
                  top: offsetPosition,
                });
              }
            }}
          >
            Lets talk
            <img alt="arrow" src="/ArrowUpRight.svg" />
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductsHeroSection;

import React from "react";

import { Stack, Container, Typography, useMediaQuery, Button } from "@mui/material";

import AboutCultureSVG from "../SVGComponents/AboutCultureSVG";

const AboutCultureSection = () => {
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
    <Container maxWidth="desktop">
      <Stack
        height="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ overflow: "hidden", position: "relative" }}
        gap={{
          laptop: 0,
          mobile: 5,
          tablet: 5,
          desktop: 0,
        }}
      >
        {(mobileView || tabletView) &&<>
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
            Our Culture
          </Typography>
  
          <Typography
            fontSize={{
              laptop: 18,
              tablet: 18,
              mobile: 18,
              desktop: 18,
            }}
            lineHeight={1.5}
            textAlign="center"
            color="rgba(255, 255, 255, 0.80)"
            className="lato"
          >
            At TSC we are a startup with a purpose to deliver transformative IT
            solutions. Our mission is to enable businesses through technology,
            quality and client centricity. As we start this journey we are
            committed to our clients and helping them achieve their goals. Our
            team consists of developers, engineers, designers, QA experts and
            seasoned executive leaders – all with 15+ years of experience. We have
            delivered impressive results and built long term relationships with
            global clients and we are growing stronger every day.
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
            Join Now
            <img alt="arrow" src="/ArrowUpRight.svg" />
          </Button>
        </>}
        <Stack
          width={{
            laptop: 340,
            desktop: 340,
            mobile: "100%",
            tablet: "100%",
          }}
          minHeight={200}
          p={3}
          gap={2}
          sx={{
            top: 0,
            display: "flex", // Ensures content stretches to the container
            overflow: "hidden",
            borderRadius: "26px",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #45BDD6",
            background: "rgba(0, 0, 0, 0.8)",
            position: {
              mobile: "relative",
              tablet: "relative",
              laptop: "absolute",
              desktop: "absolute",
            },
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              top: 0,
              left: 0,
              zIndex: 0,
              opacity: 0.2,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
            width="100%"
            height="100%"
            src="/ethics.mp4"
          />

          {/* Content */}
          <Stack sx={{ zIndex: 2, position: "relative" }}>
            <Typography fontSize={28} fontWeight={500} lineHeight={1.4}>
              Ethically Strong
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={300}
              lineHeight={1.4}
              color="rgba(255, 255, 255, 0.7)"
            >
              With integrity, respect, and a sense of responsibility, we create
              an environment where everyone can grow.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={{
            laptop: 340,
            desktop: 340,
            mobile: "100%",
            tablet: "100%",
          }}
          minHeight={200}
          p={3}
          gap={2}
          sx={{
            left: 0,
            top: "30%",
            display: "flex", // Ensures content stretches to the container
            overflow: "hidden",
            borderRadius: "26px",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #45BDD6",
            background: "rgba(0, 0, 0, 0.8)",
            position: {
              laptop: "absolute",
              mobile: "relative",
              tablet: "relative",
              desktop: "absolute",
            },
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              top: -7,
              left: 0,
              zIndex: 0,
              opacity: 0.2, // Ensures background text is visible
              width: "120%",
              height: "120%",
              objectFit: "cover", // Ensures the video covers the entire container
              position: "absolute",
            }}
            src="/diversity.mp4"
          />

          {/* Content */}
          <Stack sx={{ zIndex: 2, position: "relative" }}>
            <Typography fontSize={28} fontWeight={500} lineHeight={1.4}>
              Diversity & Equality
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={300}
              lineHeight={1.4}
              color="rgba(255, 255, 255, 0.7)"
            >
              We welcome people from all walks of life and are committed to
              equal opportunities for all.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={{
            laptop: 340,
            desktop: 340,
            mobile: "100%",
            tablet: "100%",
          }}
          minHeight={200}
          p={3}
          gap={2}
          sx={{
            right: 0,
            top: "30%",
            overflow: "hidden",
            borderRadius: "26px",
            border: "1px solid #45BDD6",
            background: "rgba(0, 0, 0, 0.8)",
            position: {
              laptop: "absolute",
              mobile: "relative",
              tablet: "relative",
              desktop: "absolute",
            },
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              top: 0,
              left: 0,
              zIndex: 0,
              opacity: 0.2,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
            width="100%"
            height="100%"
            src="/worklife.mp4"
          />

          {/* Content */}
          <Stack sx={{ zIndex: 2, position: "relative" }}>
            <Typography fontSize={28} fontWeight={500} lineHeight={1.4}>
              Work & Life
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={300}
              lineHeight={1.4}
              color="rgba(255, 255, 255, 0.7)"
            >
              We support work-life balance through flexible hours, a supportive
              environment, and fun celebrations.
            </Typography>
          </Stack>
        </Stack>

        {(desktopView || laptopView) && <AboutCultureSVG />}
      </Stack>
    </Container>
  );
};

export default AboutCultureSection;

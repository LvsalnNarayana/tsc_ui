/* eslint-disable operator-linebreak */
import React from "react";

import {
  Stack,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useLanguage } from "../../LanguageContext";
import HeroBackground from "../Backgrounds/HeroBackground";

const ProductsHeroSection = () => {
  const { language } = useLanguage();

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
        laptop: "100vh",
        mobile: "500px",
        tablet: "500px",
        desktop: "100vh",
      }}
      maxWidth="100vw"
      sx={{
        zIndex: 1,
        position: "relative",
        paddingTop: {
          mobile: "87px",
          tablet: "87px",
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
        src={
          laptopView || desktopView
            ? "/product_hero.gif"
            : "/product_hero_mob.gif"
        }
        style={{
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          // objectFit: "cover",
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
              direction: language === "ar" ? "rtl" : "ltr",
            }}
            textAlign="center"
            fontWeight={400}
            className="responsive-text"
          >
            {language === "en" && (
              <>
                We’ll help you get the most out of
                <br /> technology,
                <span style={{ color: "#45BDD6" }}>act smart</span>, and grow
                fast.
              </>
            )}
            {language === "ar" && (
              <>
                سنساعدك في استخدام التقنية بشكل أفضل، واتخاذ قرارات ذكية، والنمو
                بشكل سريع.
              </>
            )}
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
            {language === "en" && <>Lets talk</>}
            {language === "ar" && <> تواصل معنا</>}
            <img alt="arrow" src="/ArrowUpRight.svg" />
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductsHeroSection;

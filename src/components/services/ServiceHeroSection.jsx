/* eslint-disable operator-linebreak */
import React from "react";

import { Box, Stack, Button, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";
import AboutHeroPattern from "../SVGComponents/AboutHeroPattern";

const ServiceHeroSection = () => {
  const { language } = useLanguage();

  const text = {
    ar: {
      button: "تواصل معنا",
      title: "استكشف آفاقاً جديدة ",
      subtitle:
        "استفد من فرص النمو المستدام ومكِّن علامتك التجارية من خلال خدماتنا المبتكرة.",
    },
    en: {
      button: "Let's Talk",
      title: "Explore New Horizons",
      subtitle:
        "Unlock sustainable growth opportunities and empower your brand with agility through our innovative services.",
    },
  };

  const t = text[language];

  return (
    <Stack
      gap={4}
      style={{
        display: "flex",
        minHeight: "100vh",
        paddingTop: "87px",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AboutHeroPattern style={{ top: 0, left: 0, position: "absolute" }} />
      <Typography
        variant="h1"
        align="center"
        fontSize={{
          laptop: 88,
          tablet: 55,
          mobile: 55,
          desktop: 88,
        }}
        lineHeight={1.2}
        color="transparent"
        sx={{
          zIndex: 2,
          WebkitBackgroundClip: "text",
          textFillColor: "transparent",
          WebkitTextFillColor: "transparent",
          background:
            "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(4,11,18) 100%)",
          // eslint-disable-next-line perfectionist/sort-objects
          backgroundClip: "text",
        }}
      >
        {t.title}
      </Typography>
      <Typography
        width={{
          laptop: "60%",
          tablet: "90%",
          mobile: "90%",
          desktop: "60%",
        }}
        fontSize={{
          laptop: 32,
          tablet: 20,
          mobile: 20,
          desktop: 32,
        }}
        lineHeight={1.4}
        color="rgba(255, 255, 255, 0.30)"
        fontWeight={400}
        textAlign="center"
        className="responsive-text"
      >
        {t.subtitle}
      </Typography>
      <Button
        sx={{
          px: 2,
          py: 1.7,
          fontSize: 18,
          lineHeight: 1,
          color: "#fff",
          borderRadius: "99px",
          boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
          background: "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
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
        {t.button}
        <Box
          component="img"
          src="/ArrowUpRight.svg"
          sx={{
            ml: 1,
            width: 24,
            height: 24,
          }}
        />
      </Button>
    </Stack>
  );
};

export default ServiceHeroSection;

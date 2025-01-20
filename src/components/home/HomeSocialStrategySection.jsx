/* eslint-disable operator-linebreak */
import React from "react";
import Lottie from "lottie-react";

import { Stack, Button, Typography, useMediaQuery } from "@mui/material";

import { useLanguage } from "../../LanguageContext";
import reinventJson from "../../assets/Reinvent Your Business.json";

const HomeSocialStrategySection = () => {
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

  const { language } = useLanguage();

  return (
    <Stack
      gap={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="500px"
      sx={{ position: "relative" }}
    >
      {(desktopView || laptopView) && (
        // <Lottie
        //   animationData={reinventJson}
        //   style={{
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     position: "absolute",
        //   }}
        // />
        <img
          alt="bg"
          src="/reinvent_gif.gif"
          style={{
            left: 0,
            top: "50%",
            width: "100%",
            maxHeight: "100%",
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />
      )}
      {(mobileView || tabletView) && (
        <img
          alt="bg"
          src="/bg_w.gif"
          style={{
            left: 0,
            top: "50%",
            width: "100%",
            maxHeight: "100%",
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />
      )}
      <Typography
        variant="body1"
        fontSize={{
          laptop: 48,
          tablet: 24,
          mobile: 24,
          desktop: 56,
        }}
        fontWeight={700}
        textAlign="center"
        sx={{ zIndex: 2 }}
        width={{
          laptop: "80%",
          tablet: "80%",
          mobile: "80%",
          desktop: "80%",
        }}
        lineHeight={1.5}
      >
        {language === "en" && (
          <>
            Supercharge Your Social Strategy
            <br /> with TSC Social!
          </>
        )}
        {language === "ar" && <>عزز استراتيجيتك الاجتماعية مع TSC Social!</>}
      </Typography>
      <Button
        sx={{
          py: 1,
          px: 5,
          fontSize: 18,
          color: "#000",
          borderRadius: "8px",
          background: "#41C4DA",
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
        {language === "en" && "Get Started Today!"}
        {language === "ar" && "ابدأ اليوم!"}
      </Button>
    </Stack>
  );
};

export default HomeSocialStrategySection;

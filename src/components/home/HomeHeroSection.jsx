/* eslint-disable operator-linebreak */
/* eslint-disable complexity */
import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Stack, Button, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";
import HeroBackground from "../Backgrounds/HeroBackground";

const HomeHeroSection = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

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
          direction={{
            tablet: "column",
            mobile: "column",
            laptop: language === "ar" ? "row-reverse" : "row",
            desktop: language === "ar" ? "row-reverse" : "row",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            gap={2}
            width={{
              laptop: "60%",
              mobile: "100%",
              tablet: "100%",
              desktop: "60%",
            }}
            direction="column"
            justifyContent="flex-start"
            alignItems={language === "ar" ? "flex-end" : "flex-start"}
          >
            <Typography
              variant="body1"
              fontSize={{
                mobile: 55,
                tablet: 55,
                laptop: 120,
                desktop: 120,
              }}
              sx={{
                color: "#fff",
                display: "inline-block",
              }}
              fontWeight={100}
            >
              {language === "en" && "Transform your"}
              {language === "ar" && "حول أعمالك مع"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                mobile: 55,
                tablet: 55,
                laptop: 120,
                desktop: 120,
              }}
              sx={{
                color: "#fff",
                display: "inline-block",
              }}
              fontWeight="bold"
              textAlign={language === "ar" ? "right" : "left"}
            >
              {language === "en" && "Businesses"}
              {language === "ar" && "حلولنا التقنية"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={{
                mobile: 55,
                tablet: 55,
                laptop: 120,
                desktop: 120,
              }}
              sx={{
                color: "#fff",
                display: "inline-block",
              }}
              fontWeight="normal"
              textAlign={language === "ar" ? "right" : "left"}
            >
              {language === "en" && "with TSC"}
              {language === "ar" && "مع TSC"}
            </Typography>
            <Typography
              variant="body1"
              fontSize={20}
              sx={{
                mt: 3.5,
                lineHeight: 1.4,
                color: "#ffffff80",
                display: "inline-block",
              }}
              className="lato responsive-text"
              fontWeight="normal"
              textAlign={language === "ar" ? "right" : "left"}
            >
              {language === "en" && (
                <>
                  Empower, Innovate, and Accelerate with TSC—Pioneering
                  Businesses
                  <br /> in Ever-Evolving Technology Landscapes
                </>
              )}
              {language === "ar" && (
                <>
                  مكن وسائل التواصل الاجتماعي الخاصة بك مع TSC Social وقم بجدولة
                  <br />
                  ومراقبة وإعداد التقارير دون عناء لبناء علامة تجارية رائعة.
                </>
              )}
            </Typography>
            <Stack
              mt={4}
              direction="row"
              justifyContent={{
                mobile: "flex-start",
                tablet: "flex-start",
                laptop: language === "ar" ? "flex-end" : "flex-start",
                desktop: language === "ar" ? "flex-end" : "flex-start",
              }}
              width="100%"
              alignItems="center"
              gap={2}
            >
              <Button
                sx={{
                  py: 1.7,
                  fontSize: 18,
                  lineHeight: 1,
                  color: "#fff",
                  borderRadius: "99px",
                  background: "rgba(255, 255, 255, 0.10)",
                  px: {
                    mobile: 3,
                    tablet: 3,
                    laptop: 6,
                    desktop: 6,
                  },
                }}
                onClick={() => {
                  navigate("/services");
                }}
              >
                {language === "en" && "Our Services"}
                {language === "ar" && "خِدْمة"}
              </Button>
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
                {language === "en" && "Get In Touch"}
                {language === "ar" && "تواصل معنا"}
                <img alt="arrow" src="/ArrowUpRight.svg" />
              </Button>
            </Stack>
          </Stack>
          <Stack
            width={{
              laptop: "50%",
              mobile: "100%",
              tablet: "100%",
              desktop: "50%",
            }}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
          >
            <Box
              component="img"
              src="/home_hero_animation.gif"
              sx={{
                width: "120%",
                maxWidth: "100%",
                objectFit: "contain",
                height: "fit-content",
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomeHeroSection;

import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";
import AboutHeroPattern from "../SVGComponents/AboutHeroPattern";

const AboutHeroSection = () => {
  const { language } = useLanguage();

  const text = {
    ar: {
      title: "",
      subtitle: "أشخاص يتمتعون برؤية واضحة ويمتلكون قيمة حقيقية",
      description:
        " نحن في شركة تكامل السحابة نهدف إلى تقديم حلول متطورة في مجال تقنية المعلومات. مهمتنا هي دعم الشركات من خلال التقنية والتركيز على الجودة ورضا العميل. منذُ بداية رحلتنا، نحن ملتزمون بمساعدة عملائنا على تحقيق أهدافهم. فريقنا يتكون من مطورين ومهندسين ومصممين وخبراء في الجودة، بالإضافة إلى قادة ذوي خبرة تزيد عن 15 عاماً. لقد حققنا نتائج رائعة وأقمنا علاقات طويلة الأمد مع عملاء دوليين، ونحن نواصل النمو والتطور يومياً",
    },
    en: {
      title: "About Us",
      subtitle: "People with purpose\nand value",
      description: `At TSC we are a startup with a purpose to deliver transformative
      IT solutions. Our mission is to enable businesses through
      technology, quality and client centricity. As we start this
      journey we are committed to our clients and helping them achieve
      their goals. Our team consists of developers, engineers,
      designers, QA experts and seasoned executive leaders – all with
      15+ years of experience. We have delivered impressive results and
      built long term relationships with global clients and we are
      growing stronger every day.`,
    },
  };

  const t = text[language];

  return (
    <>
      <Stack
        style={{
          display: "flex",
          height: "100vh",
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
            tablet: 55,
            mobile: 55,
            laptop: 140,
            desktop: 140,
          }}
          fontWeight={500}
          sx={{
            zIndex: 2,
            color: "transparent",
            whiteSpace: "nowrap",
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
      </Stack>
      <Container maxWidth="desktop">
        <Stack
          direction={{
            laptop: "row",
            desktop: "row",
            tablet: "column-reverse",
            mobile: "column-reverse",
          }}
          gap={{
            tablet: 4,
            mobile: 4,
            laptop: 8,
            desktop: 8,
          }}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Stack width="100%" justifyContent="center" alignItems="center">
            <Box
              component="img"
              src="/about_hero_image.png"
              maxWidth="100%"
              sx={{ borderRadius: "20px" }}
            />
          </Stack>
          <Stack
            width="100%"
            direction="column"
            alignItems="flex-start"
            gap={2}
          >
            <Box
              width={{
                laptop: "80%",
                tablet: "100%",
                mobile: "100%",
                desktop: "80%",
              }}
              display="flex"
              justifyContent={language === "ar" ? "flex-end" : "flex-start"}
              alignItems="center"
              flexDirection={language === "ar" ? "row-reverse" : "row"}
              gap={1.5}
            >
              <Box
                width={20}
                height={6}
                bgcolor="#41c4da"
                borderRadius="99px"
              />
              <Typography
                variant="subtitle1"
                fontSize={16}
                color="#fff"
                fontWeight={400}
                lineHeight={1.2}
              >
                {t.title}
              </Typography>
            </Box>

            <Typography
              variant="h3"
              fontSize={{
                tablet: 32,
                mobile: 32,
                laptop: 40,
                desktop: 40,
              }}
              color="#fff"
              fontWeight={500}
              lineHeight={1.2}
              className="responsive-text"
              textAlign={
                language === "ar"
                  ? {
                      laptop: "right",
                      desktop: "right",
                      tablet: "center",
                      mobile: "center",
                    }
                  : "left"
              }
              sx={{
                width: {
                  laptop: "80%",
                  tablet: "100%",
                  mobile: "100%",
                  desktop: "80%",
                },
              }}
            >
              {t.subtitle}
            </Typography>

            <Typography
              variant="body1"
              color="rgba(255, 255, 255, 0.70)"
              fontSize={18}
              fontWeight={400}
              lineHeight={1.5}
              sx={{
                width: {
                  laptop: "80%",
                  tablet: "100%",
                  mobile: "100%",
                  desktop: "80%",
                },
              }}
              textAlign={
                language === "ar"
                  ? {
                      laptop: "right",
                      desktop: "right",
                      tablet: "center",
                      mobile: "center",
                    }
                  : "left"
              }
              className="lato"
              letterSpacing={1}
            >
              {t.description}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default AboutHeroSection;

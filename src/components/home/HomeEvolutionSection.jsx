/* eslint-disable operator-linebreak */
import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const HomeEvolutionSection = () => {
  const { language } = useLanguage();

  return (
    <Container maxWidth="desktop">
      <Stack
        pt={{
          laptop: 10,
          tablet: 10,
          mobile: 10,
          desktop: 10,
        }}
        pb={10}
        gap={{
          laptop: 10,
          tablet: 10,
          mobile: 10,
          desktop: 10,
        }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="fit-content"
      >
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
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            direction: language === "ar" ? "rtl" : "ltr",
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
          }}
        >
          {language === "en" && "Embrace Evolution"}
          {language === "ar" && "احتضان التطور"}
        </Typography>
        <Typography
          fontSize={{
            laptop: 16,
            tablet: 18,
            mobile: 18,
            desktop: 16,
          }}
          lineHeight={1.2}
          textAlign="center"
          sx={{
            direction: language === "ar" ? "rtl" : "ltr",
          }}
        >
          {language === "en" &&
            "Our innovative digital solutions that empower your business to thrive in the modern landscape"}
          {language === "ar" &&
            "حلولنا الرقمية المبتكرة التي تمكن أعمالك من الازدهار في المشهد الحديث"}
        </Typography>
        <Stack
          direction={{
            laptop: "row",
            desktop: "row",
            tablet: "column",
            mobile: "column",
          }}
          width="100%"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Stack
            width={{
              tablet: "100%",
              mobile: "100%",
              laptop: "100%",
              desktop: "100%",
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            gap={3}
            sx={{
              borderRadius: "10px",
              border: " 1px solid rgba(255, 255, 255, 0.25);",
            }}
          >
            <Box
              component="img"
              src="/home_lightbulb.svg"
              width={60}
              height={60}
            />
            <Typography fontSize={22} fontWeight={400} textAlign="center">
              {language === "en" && "Innovative Led Solutions"}
              {language === "ar" && "ابتكارات جديدة"}
            </Typography>
          </Stack>
          <Stack
            width={{
              tablet: "100%",
              mobile: "100%",
              laptop: "100%",
              desktop: "100%",
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            gap={3}
            sx={{
              borderRadius: "10px",
              border: " 1px solid rgba(255, 255, 255, 0.25);",
            }}
          >
            <Box
              component="img"
              src="/home_web_development.svg"
              width={60}
              height={60}
            />
            <Typography fontSize={22} fontWeight={400} textAlign="center">
              {language === "en" && "Vast Technology Landscape"}
              {language === "ar" && "مهارات تقنية عميقة"}
            </Typography>
          </Stack>
          <Stack
            width={{
              tablet: "100%",
              mobile: "100%",
              laptop: "100%",
              desktop: "100%",
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            gap={3}
            sx={{
              borderRadius: "10px",
              border: " 1px solid rgba(255, 255, 255, 0.25);",
            }}
          >
            <Box
              component="img"
              src="/home_team_meeting.svg"
              width={60}
              height={60}
            />
            <Typography fontSize={22} fontWeight={400} textAlign="center">
              {language === "en" && "Diverse Industry Experience"}
              {language === "ar" && "المعرفة في مجالات الصناعة"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeEvolutionSection;

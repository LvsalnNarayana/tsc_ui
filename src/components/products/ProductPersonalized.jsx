/* eslint-disable no-irregular-whitespace */
/* eslint-disable complexity */
/* eslint-disable operator-linebreak */
import React from "react";

import { Box, Stack, Button, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const ProductPersonalized = () => {
  const { language } = useLanguage();

  return (
    <>
      <Stack
        direction={{
          mobile: "column",
          tablet: "column",
          laptop: language === "ar" ? "row-reverse" : "row",
          desktop: language === "ar" ? "row-reverse" : "row",
        }}
        spacing={10}
        pl={{
          mobile: 2,
          tablet: 2,
          laptop: language === "ar" ? 0 : 10,
          desktop: language === "ar" ? 0 : 10,
        }}
        alignItems="center"
        py={{
          mobile: 5,
          tablet: 5,
          laptop: 10,
          desktop: 10,
        }}
      >
        <Stack direction="column" spacing={2} px={2}>
          <Typography
            fontSize={{
              laptop: 56,
              mobile: 32,
              tablet: 32,
              desktop: 56,
            }}
            lineHeight={1.5}
            color="#fff"
            fontWeight={700}
            textAlign={language === "ar" ? "right" : "left"}
          >
            {language === "en" &&
              "Choose Personalized CRM Software to Build Your Business"}
            {language === "ar" && "اختر نظام CRM المناسب لك لتطوير أعمالك."}
          </Typography>
          <Typography
            fontSize={24}
            lineHeight={1.5}
            color="#ffffff60"
            fontWeight={400}
            className="lato responsive-text"
            textAlign={language === "ar" ? "right" : "left"}
          >
            {language === "en" && (
              <>
                Build personalized CRM software solutions that fit your business
                processes and give you a single customer view to make the
                strategy.
              </>
            )}
            {language === "ar" && (
              <>
                قم بتصميم برنامج مخصص يتناسب مع عملياتك التجارية، ويتيح لك رؤية
                شاملة لعملائك لتحديد استراتيجياتك.
              </>
            )}
          </Typography>
          <Stack spacing={2}>
            <Stack
              direction={language === "ar" ? "row-reverse" : "row"}
              spacing={2}
              alignItems="center"
            >
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 24,
                  mobile: 16,
                  tablet: 16,
                  desktop: 24,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                {language === "en" && " Operational CRM"}
                {language === "ar" && " التشغيلية"}
              </Typography>
            </Stack>
            <Stack
              direction={language === "ar" ? "row-reverse" : "row"}
              spacing={2}
              alignItems="center"
            >
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 24,
                  mobile: 16,
                  tablet: 16,
                  desktop: 24,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                {language === "en" && " Analytical CRM"}
                {language === "ar" && "التحليلية"}
              </Typography>
            </Stack>
            <Stack
              direction={language === "ar" ? "row-reverse" : "row"}
              spacing={2}
              alignItems="center"
            >
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 24,
                  mobile: 16,
                  tablet: 16,
                  desktop: 24,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                {language === "en" && "E-Commerce CRM"}
                {language === "ar" && " التجارة الإلكترونية"}
              </Typography>
            </Stack>
            <Stack
              direction={language === "ar" ? "row-reverse" : "row"}
              spacing={2}
              alignItems="center"
            >
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 24,
                  mobile: 16,
                  tablet: 16,
                  desktop: 24,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                {language === "en" && "Small Business and Enterprise CRM"}
                {language === "ar" && "إدارة الشركات "}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          alignItems={language === "ar" ? "flex-start" : "flex-end"}
          justifyContent="center"
          width="100%"
          spacing={2}
        >
          <Box
            component="img"
            src="/mock.png"
            width={{
              laptop: "80%",
              mobile: "70%",
              tablet: "70%",
              desktop: "80%",
            }}
            sx={{
              transform: {
                mobile: "scaleX(1)",
                tablet: "scaleX(1)",
                laptop: language === "ar" ? "scaleX(-1)" : "scaleX(1)",
                desktop: language === "ar" ? "scaleX(-1)" : "scaleX(1)",
              },
            }}
          />
        </Stack>
      </Stack>
      <Button
        sx={{
          px: 2,
          gap: 1,
          mb: 10,
          py: 1.7,
          mx: "auto",
          fontSize: 18,
          lineHeight: 1,
          color: "#fff",
          display: "flex",
          width: "fit-content",
          borderRadius: "99px",
          alignItems: "center",
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
        {language === "en" && " Lets talk"}
        {language === "ar" && "تواصل معنا"}
        <img alt="arrow" src="/ArrowUpRight.svg" />
      </Button>
    </>
  );
};

export default ProductPersonalized;

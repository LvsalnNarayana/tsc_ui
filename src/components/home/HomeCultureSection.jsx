import React from "react";

import { Box, Stack, Divider, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const HomeCultureSection = () => {
  const { language } = useLanguage();

  return (
    <Container maxWidth="desktop">
      <Stack
        py={{
          tablet: 2,
          mobile: 2,
          laptop: 4,
          desktop: 4,
        }}
        gap={5}
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
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {language === "en" && <>Cultivating a Collaborative Culture</>}
          {language === "ar" && <>ترسيخ ثقافة تعاونية</>}
        </Typography>
        <Typography
          className="lato responsive-text"
          textAlign="center"
          fontSize={18}
          lineHeight={1.5}
          color="rgba(255, 255, 255, 0.70)"
        >
          {language === "en" && (
            <>
              At TSC we create an environment where learning, growth, and
              innovation thrive for
              <br /> everyone, so we have a high-performing team that exceeds
              expectations.
            </>
          )}
          {language === "ar" && (
            <>
              نحن في تكامل السحابة نخلق بيئة يزدهر فيها التعلم والنمو والابتكار
              <br />
              للجميع، لذلك لدينا فريق عمل عالي الأداء يفوق التوقعات.
            </>
          )}
        </Typography>
        <Stack
          display="grid"
          gridTemplateColumns={{
            laptop: "repeat(2, 1fr)",
            tablet: "repeat(1, 1fr)",
            mobile: "repeat(1, 1fr)",
            desktop: "repeat(2, 1fr)",
          }}
        >
          {[
            {
              numberArabic: "0٢",
              numberEnglish: "01",
              titleEnglish: "Success",
              titleArabic: "الشراكة:",
              descriptionArabic:
                "نحن نبني علاقات واضحة مع عملائنا على أساس الأهداف المشتركة والاحترام المتبادل.",
              descriptionEnglish:
                "Our clients' success is our success, we support them throughout their journey.",
            },
            {
              numberArabic: "0١",
              numberEnglish: "02",
              titleArabic: "النجاح:",
              titleEnglish: "Partnership",
              descriptionArabic:
                "نجاح عملائنا هو نجاحنا، ونحن ندعمهم طوال رحلتهم.",
              descriptionEnglish:
                "We have transparent relationships with our clients based on shared goals and mutual respect.",
            },
            {
              numberArabic: "0٤",
              numberEnglish: "03",
              titleEnglish: "Innovation",
              titleArabic: "سهولة الوصول: ",
              descriptionArabic:
                "نجعل الحلول الرقمية متاحة لكل شركة، كبيرة كانت أم صغيرة.",
              descriptionEnglish:
                "We leverage technology and the power of ideas to move forward.",
            },
            {
              numberArabic: "0٣",
              numberEnglish: "04",
              titleArabic: "الابتكار:",
              titleEnglish: "Accessibility",
              descriptionArabic: "نستفيد من التقنية وقوة الأفكار للمضي قدماً.",
              descriptionEnglish:
                "We make digital solutions available to every business, big or small.",
            },
          ].map(
            ({
              titleArabic,
              titleEnglish,
              numberArabic,
              numberEnglish,
              descriptionArabic,
              descriptionEnglish,
            }) => {
              return (
                <Stack
                  key={numberEnglish}
                  px="40px"
                  py="80px"
                  width="100%"
                  sx={{
                    overflow: "hidden",
                    position: "relative",
                    "&:hover .blur-box": {
                      opacity: 1,
                      transform: "scale(1)",
                    },
                  }}
                >
                  {/* Blur box that appears on hover */}
                  <Box
                    className="blur-box"
                    component="div"
                    sx={{
                      right: 0,
                      bottom: 0,
                      width: 230,
                      opacity: 0,
                      height: 230,
                      position: "absolute",
                      transform: "scale(0.8)",
                      filter: "blur(192.75px)",
                      background: "rgba(65, 196, 218, 0.70)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                  />
                  {/* Section Content */}
                  <Stack
                    direction={language === "ar" ? "row-reverse" : "row"}
                    alignItems="flex-end"
                    width="100%"
                    gap={2}
                  >
                    <Typography
                      fontSize={120}
                      lineHeight={1}
                      fontWeight={600}
                      color="#41C4DA"
                      sx={{ flexShrink: 0 }}
                      marginBottom={-2}
                    >
                      {language === "en" && <>{numberEnglish}</>}
                      {language === "ar" && <>{numberArabic}</>}
                    </Typography>
                    <Stack
                      width="100%"
                      alignItems={language === "ar" ? "flex-end" : "flex-start"}
                    >
                      <Typography
                        className="lato"
                        fontSize={44}
                        color="#fff"
                        lineHeight={1.2}
                        fontWeight={500}
                      >
                        {language === "en" && <>{titleEnglish}</>}
                        {language === "ar" && <>{titleArabic}</>}
                      </Typography>
                      <Divider
                        flexItem
                        sx={{ my: 2, borderWidth: 1, borderColor: "#262626" }}
                      />
                    </Stack>
                  </Stack>
                  <Typography
                    fontSize={24}
                    color="#B5B5B8"
                    lineHeight={1.4}
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {language === "en" && <>{descriptionEnglish}</>}
                    {language === "ar" && <>{descriptionArabic}</>}
                  </Typography>
                </Stack>
              );
            }
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeCultureSection;

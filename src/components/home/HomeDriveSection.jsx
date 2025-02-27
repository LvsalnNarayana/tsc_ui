/* eslint-disable operator-linebreak */
/* eslint-disable complexity */
import React from "react";

import {
  Box,
  Stack,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const HomeDriveSection = () => {
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
      py={{
        mobile: 5,
        tablet: 5,
        laptop: 10,
        desktop: 10,
      }}
    >
      <Container maxWidth="desktop">
        <Stack
          direction={{
            tablet: "column",
            mobile: "column",
            laptop: language === "ar" ? "row-reverse" : "row",
            desktop: language === "ar" ? "row-reverse" : "row",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            width="100%"
            gap={3}
            alignItems={language === "ar" ? "flex-end" : "flex-start"}
          >
            <Typography
              fontSize={{
                laptop: 48,
                tablet: 32,
                mobile: 32,
                desktop: 48,
              }}
              fontWeight={500}
              lineHeight={1.2}
              textAlign={{
                tablet: "center",
                mobile: "center",
                laptop: language === "ar" ? "right" : "left",
                desktop: language === "ar" ? "right" : "left",
              }}
            >
              {language === "en" && (
                <>
                  We Drive Your Business
                  <br /> Forward Strategically
                </>
              )}
              {language === "ar" && <>ندفع أعمالك بشكل استراتيجي</>}
            </Typography>
            <Typography
              fontSize={16}
              color="rgba(255, 255, 255, 0.70)"
              fontWeight={400}
              lineHeight={1.5}
              className="lato responsive-text"
              textAlign={{
                tablet: "center",
                mobile: "center",
                laptop: language === "ar" ? "right" : "left",
                desktop: language === "ar" ? "right" : "left",
              }}
            >
              {language === "en" && (
                <>
                  Our mission is to fuel the growth journey of our partners by
                  simplifying their
                  <br /> challenges and delivering solutions. When you work with
                  us, our process starts
                  <br /> with deep interaction, requirement analysis, and
                  strategy integration to achieve
                  <br /> your business goals. At TSC, businesses trust us to
                  deliver on our promises.
                </>
              )}
              {language === "ar" && (
                <>
                  تتمثل مهمتنا في تعزيز رحلة نمو شركائنا من خلال تبسيط التحديات
                  <br />
                  التي تواجههم وتقديم الحلول. عندما تعمل معنا، تبدأ عمليتنا
                  <br />
                  بالتفاعل العميق وتحليل المتطلبات وتكامل الاستراتيجيات لتحقيق
                  <br />
                  أهداف عملك. في TSC، تثق الشركات بنا للوفاء بوعودنا.
                </>
              )}
            </Typography>
            {(mobileView || tabletView) && (
              <Box
                component="img"
                src="/drive.png"
                height={570}
                width={447}
                maxWidth="100%"
                sx={{ mx: "auto", borderRadius: "20px" }}
              />
            )}
            <Typography
              fontSize={28}
              lineHeight={1.4}
              fontWeight={500}
              letterSpacing="-0.56px"
              textAlign={{
                tablet: "center",
                mobile: "center",
                laptop: language === "ar" ? "right" : "left",
                desktop: language === "ar" ? "right" : "left",
              }}
            >
              {language === "en" && "60% faster time to market"}
              {language === "ar" && "60% أسرع في وقت الوصول إلى السوق"}
            </Typography>
            <Typography
              fontSize={28}
              lineHeight={1.4}
              fontWeight={500}
              letterSpacing="-0.56px"
              textAlign={{
                tablet: "center",
                mobile: "center",
                laptop: language === "ar" ? "right" : "left",
                desktop: language === "ar" ? "right" : "left",
              }}
            >
              {language === "en" && "40% reduction in development costs"}
              {language === "ar" && "40% خفض تكاليف التطوير "}
            </Typography>
            <Button
              sx={{
                px: "16px",
                py: "10px",
                gap: "16px",
                display: "flex",
                color: " #45BDD6",
                width: "fit-content",
                alignItems: "center",
                borderRadius: "100px",
                justifyContent: "center",
                border: " 1px solid #45BDD6",
                backgroundColor: "transparent",
                flexDirection: language === "ar" ? "row-reverse" : "row",
                mx: {
                  laptop: 0,
                  desktop: 0,
                  tablet: "auto",
                  mobile: "auto",
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
              {language === "en" && "Let’s talk"}
              {language === "ar" && "دعنا نتحدث"}
              <Stack
                sx={{
                  py: "6px",
                  px: "14px",
                  borderRadius: "130px",
                  backgroundColor: "#1A1A1A",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: language === "ar" ? "rotate(-180deg)" : "",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.33301 12.0004C5.33301 11.4205 5.78968 10.9504 6.35301 10.9504H15.3806L12.446 8.20727C12.04 7.80533 12.0273 7.14064 12.4178 6.72263C12.8082 6.30462 13.4539 6.29158 13.86 6.69352L18.62 11.2435C18.82 11.4415 18.933 11.7148 18.933 12.0004C18.933 12.286 18.82 12.5593 18.62 12.7573L13.86 17.3073C13.4539 17.7092 12.8082 17.6962 12.4178 17.2782C12.0273 16.8601 12.04 16.1954 12.446 15.7935L15.3806 13.0504H6.35301C5.78968 13.0504 5.33301 12.5803 5.33301 12.0004Z"
                    fill="#45BDD6"
                  />
                </svg>
              </Stack>
            </Button>
          </Stack>
          {(desktopView || laptopView) && (
            <Stack width="100%" justifyContent="center" alignItems="center">
              <Box
                component="img"
                src="/drive.png"
                height={570}
                width={447}
                sx={{ borderRadius: "20px" }}
              />
            </Stack>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomeDriveSection;

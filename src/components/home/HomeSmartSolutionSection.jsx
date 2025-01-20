/* eslint-disable max-lines */
/* eslint-disable operator-linebreak */
import { useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

import {
  Box,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
} from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const HomeSmartSolutionSection = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const { language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = scrollPercentage?.on("change", (latest) => {
      // console.log("Scroll Percentage:", latest);

      if (latest > 50) {
        setCurrentSlide(2);
      } else {
        setCurrentSlide(1);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, [scrollPercentage]);

  return (
    <Container>
      <Stack
        ref={containerRef}
        position="relative"
        sx={{
          height: "300vh",
          overflowY: "clip",
          position: "relative",
        }}
      >
        {/* Sticky Content */}
        <Stack
          py={{
            tablet: 0,
            mobile: 0,
            laptop: 10,
            desktop: 10,
          }}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          minHeight="100vh"
          sx={{
            zIndex: 10,
            position: "sticky",
            top: {
              laptop: "0px",
              desktop: "0px",
              tablet: "20px",
              mobile: "20px",
            },
          }}
        >
          <Typography
            mb={2}
            fontSize={{
              laptop: 60,
              tablet: 32,
              mobile: 32,
              desktop: 60,
            }}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
              // eslint-disable-next-line perfectionist/sort-objects
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {language === "en" && "Smart Solution"}
            {language === "ar" && "الحلول الذكية"}
          </Typography>
          <Typography
            mb={6}
            fontSize={18}
            width={{
              laptop: "60%",
              desktop: "60%",
              tablet: "100%",
              mobile: "100%",
            }}
            textAlign={{
              tablet: "center",
              mobile: "center",
              laptop: "center",
              desktop: "center",
            }}
            lineHeight={1.5}
            className="lato responsive-text"
            color="rgba(255, 255, 255, 0.80)"
            letterSpacing="1px"
          >
            {language === "en" && (
              <>
                Explore our comprehensive range of innovative services designed
                <br /> to elevate your business capabilities across various
                domains,
                <br />
                ensuring optimal efficiency and client satisfaction.
              </>
            )}
            {language === "ar" && (
              <>
                اكتشف مجموعة واسعة من الخدمات المبتكرة التي تم تصميمها لتطوير
                <br />
                وتحسين قدرات عملك في مجالات متعددة، يضمن لك ذلك تحقيق أقصى كفاءة
                <br />
                ورضا العملاء.
              </>
            )}
          </Typography>

          <Stack
            sx={{
              zIndex: 10,
              minHeight: "420px",
            }}
            width={{
              laptop: "70%",
              tablet: "90%",
              mobile: "90%",
              desktop: "70%",
            }}
          >
            <Stack
              gap={{
                tablet: 3,
                mobile: 3,
                laptop: 10,
                desktop: 10,
              }}
              direction="row"
              justifyContent="flex-start"
              alignItems={{
                laptop: "flex-start",
                tablet: "flex-start",
                mobile: "flex-start",
                desktop: "flex-start",
              }}
            >
              <Stack
                width="40%"
                flexShrink={0}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={
                    currentSlide === 1
                      ? "/social_media_crm.png"
                      : "/custom_crm.png"
                  }
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    objectFit: "cover",
                    maxHeight: {
                      laptop: "60vh",
                      tablet: "300px",
                      mobile: "300px",
                      desktop: "60vh",
                    },
                  }}
                />
              </Stack>

              <Stack
                flexShrink={0}
                justifyContent="flex-start"
                alignItems="center"
                height="100%"
                sx={{ zIndex: 2, position: "relative" }}
              >
                <Typography
                  fontSize={{
                    laptop: 60,
                    tablet: 24,
                    mobile: 24,
                    desktop: 60,
                  }}
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                  color={currentSlide === 1 ? "#fff" : "#ffffff50"}
                >
                  01
                </Typography>

                <Divider
                  orientation="vertical"
                  sx={{
                    borderWidth: 3,
                    height: "120px",
                    borderColor: currentSlide === 1 ? "#41c4da" : "#112334",
                  }}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    borderWidth: 3,
                    height: "120px",
                    borderColor: currentSlide === 2 ? "#41c4da" : "#112334",
                  }}
                />
                <Typography
                  fontSize={{
                    laptop: 60,
                    tablet: 24,
                    mobile: 24,
                    desktop: 60,
                  }}
                  fontWeight="bold"
                  sx={{ mt: 1 }}
                  color={currentSlide === 2 ? "#fff" : "#ffffff50"}
                >
                  02
                </Typography>
              </Stack>

              <Stack
                width="50%"
                flexShrink={0}
                gap={3}
                justifyContent={{
                  laptop: "flex-start",
                  tablet: "flex-start",
                  mobile: "flex-start",
                  desktop: "flex-start",
                }}
                alignItems="flex-start"
                flexGrow={1}
                height="100%"
              >
                <Typography
                  fontSize={{
                    laptop: 40,
                    tablet: 24,
                    mobile: 24,
                    desktop: 40,
                  }}
                  fontWeight="normal"
                >
                  {currentSlide === 1 && "Social Media CRM"}
                  {currentSlide === 2 && "Custom CRM Development"}
                </Typography>
                <Typography
                  className="lato"
                  fontSize={{
                    laptop: 18,
                    tablet: 14,
                    mobile: 14,
                    desktop: 18,
                  }}
                  lineHeight={1.5}
                  color="rgba(255, 255, 255, 0.80)"
                  letterSpacing="1px"
                >
                  {currentSlide === 1 &&
                    "Engage and retain customers with our advanced Social Media CRM solutions. Harness the power of social platforms to build meaningful relationships and drive business growth."}
                  {currentSlide === 2 && (
                    <>
                      Does your business require precise CRM for unique
                      workflows? We offer custom and latest CRM solutions,
                      intuitive, feature-rich, and powered with advanced
                      analytics. Simplify your processes, get insights, and
                      build better relationships.
                      <br />
                      <b>When you work with us:</b>
                    </>
                  )}
                </Typography>
                {currentSlide === 2 && (
                  <ul
                    style={{
                      lineHeight: 1.5,
                      paddingLeft: "20px",
                      letterSpacing: "1px",
                      color: "rgba(255, 255, 255, 0.80)",
                    }}
                    className="lato"
                  >
                    <li>Get custom CRM Apps and cloud-based SaaS.</li>
                    <li>
                      Personalized Workflow Automation to improve customer
                      experience.
                    </li>
                    <li>
                      Build and deploy custom CRM modules as per your needs.
                    </li>
                  </ul>
                )}
                <Button
                  sx={{
                    py: 1.7,
                    lineHeight: 1,
                    color: "#fff",
                    borderRadius: "99px",
                    background: "rgba(255, 255, 255, 0.30)",
                    px: {
                      laptop: 6,
                      tablet: 4,
                      mobile: 4,
                      desktop: 6,
                    },
                    fontSize: {
                      laptop: 18,
                      tablet: 14,
                      mobile: 14,
                      desktop: 18,
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
                  Know More
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Box
            component="img"
            src="/hero_pattern.png"
            sx={{
              left: 0,
              bottom: 0,
              zIndex: 1,
              opacity: 1,
              width: "100%",
              height: "60vh",
              maxHeight: "400px",
              objectFit: "cover",
              position: "absolute",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.3))",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.3))",
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeSmartSolutionSection;

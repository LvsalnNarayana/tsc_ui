/* eslint-disable max-lines */
import React from "react";
import Lottie from "lottie-react";

import { Box, Stack, Container, Typography } from "@mui/material";

import phoneJson from "../../assets/phone-02.json";
import cloudJson from "../../assets/cloud-01.json";
import { useLanguage } from "../../LanguageContext";
import laptopJson from "../../assets/laptop-02.json";
import cartJson from "../../assets/shopping-cart-01.json";

const HomeInnovativeServicesSection = () => {
  const { language } = useLanguage();

  return (
    <Stack sx={{ backgroundColor: "#06101A" }}>
      <Container maxWidth="desktop">
        <Stack
          py={{
            mobile: 4,
            tablet: 4,
            laptop: 10,
            desktop: 10,
          }}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          height="fit-content"
        >
          <Typography
            mb={4}
            fontSize={{
              laptop: 60,
              mobile: 40,
              tablet: 40,
              desktop: 60,
            }}
            textAlign={{
              mobile: "center",
              tablet: "center",
              laptop: language === "ar" ? "right" : "left",
              desktop: language === "ar" ? "right" : "left",
            }}
            width="100%"
            sx={{
              background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
              // eslint-disable-next-line perfectionist/sort-objects
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {language === "en" && "Innovative Services"}
            {language === "ar" && "الخدمات المبتكرة"}
          </Typography>
          <Typography
            mb={3}
            fontSize={18}
            width={{
              mobile: "100%",
              tablet: "100%",
              laptop: language === "ar" ? "100%" : "60%",
              desktop: language === "ar" ? "100%" : "60%",
            }}
            textAlign={{
              mobile: "center",
              tablet: "center",
              laptop: language === "ar" ? "right" : "left",
              desktop: language === "ar" ? "right" : "left",
            }}
            lineHeight={1.5}
            className="lato responsive-text"
            color="rgba(255, 255, 255, 0.80)"
            letterSpacing="1px"
          >
            {language === "en" && (
              <>
                Our range of innovative services is designed to deliver maximum
                value in technology,
                <br /> user experience, and client satisfaction. We ensure our
                clients get maximum ROl on their
                <br /> innovation investments and scale exponentially.
              </>
            )}
            {language === "ar" && (
              <>
                صُمِّمَت مجموعة خدماتنا المبتكرة لتقديم أقصى قيمة في مجال
                <br />
                التقنية وتجربة المستخدم ورضا العملاء. نحن نضمن لعملائنا الحصول
                <br />
                على أقصى عائد استثمار على استثماراتهم في الابتكار وتوسيع نطاقها
                بشكل كبير.
              </>
            )}
          </Typography>
          {[
            {
              id: 1,
              icon: phoneJson,
              titleArabic: "الخدمات المبتكرة",
              titleEnglish: "Mobile App Development",
              descriptionEnglish:
                "Grab attention with robust user-friendly mobile app solutions \n built with the latest technologies.",
              descriptionArabic:
                "اجذب الانتباه مع حلول تطبيقات الجوال الفعالة التي  \n  تتميز بسهولة الاستخدام والمصممة بأحدث التقنيات.",
            },
            {
              id: 2,
              icon: laptopJson,
              titleArabic: "تطوير الويب",
              titleEnglish: "Web Development",
              descriptionEnglish:
                "Boost your online presence with our premium services. We build \n fast, intuitive websites, and online solutions for any complexity.",
              descriptionArabic:
                "عزز وجودك على الإنترنت من خلال خدماتنا المتميزة. نحن ننشئ مواقع إلكترونية  \n سريعة وسهلة الاستخدام بالإضافة إلى حلول إلكترونية لجميع التحديات.",
            },
            {
              id: 3,
              icon: cartJson,
              titleArabic: "الاستشارات السحابية",
              titleEnglish: "E-commerce Services",
              descriptionArabic:
                "استفد أكثر من عملك مع متجر إلكتروني غني بالميزات. استمتع بحلول مخصصة ومتوافقة مع  \n الأجهزة المحمولة مما يعزز تجربة التسوق لديك ويحقق نتائج متميزة.",
              descriptionEnglish:
                "Maximize your business potential with a feature-rich eStore. Our customized, mobilefriendly solutions enhance the shopping experience and drive results.",
            },
            {
              id: 4,
              icon: cloudJson,
              titleEnglish: "Cloud Consulting",
              titleArabic: "الاستشارات السحابية",
              descriptionArabic:
                "حوّل أعمالك باستخدام حلول السحابة المخصصة. استغل معرفتنا في مجال  \n البنية التحتية السحابية، والبرمجيات، والتخزين، وخدمات الأمان.",
              descriptionEnglish:
                "Transform your business with industry-specific cloud solutions.\n Leverage our cloud infrastructure, software, storage, and\n security services expertise.",
            },
          ]?.map((service) => {
            return (
              <Stack
                my={4}
                key={service?.id}
                width="100%"
                gap={2}
                height={{
                  laptop: "fit-content",
                  mobile: "fit-content",
                  tablet: "fit-content",
                  desktop: "fit-content",
                }}
                minHeight={{
                  laptop: 246,
                  desktop: 246,
                  mobile: "fit-content",
                  tablet: "fit-content",
                }}
                py={{
                  mobile: 4,
                  tablet: 4,
                  laptop: 1,
                  desktop: 1,
                }}
                direction={language === "ar" ? "row-reverse" : "row"}
                justifyContent="center"
                alignItems="center"
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  borderRadius: "20px",
                  border: "2px solid rgba(255, 255, 255, 0.10)",
                  "&:hover .hover-element": {
                    // Target the child element with the class "hover-element"
                    opacity: 1,
                  },
                  "&:hover .right-arrow-animation": {
                    // Target the child element with the class "hover-element"
                    transform: "translateX(20px)",
                  },
                }}
              >
                <Stack
                  width={{
                    laptop: "60%",
                    mobile: "70%",
                    tablet: "70%",
                    desktop: "60%",
                  }}
                  pl={{
                    laptop: 0,
                    mobile: 3,
                    tablet: 3,
                    desktop: 0,
                  }}
                  gap={2}
                  sx={{
                    zIndex: 3,
                    position: "relative",
                  }}
                >
                  <Stack
                    gap={{
                      laptop: 4,
                      mobile: 2,
                      tablet: 2,
                      desktop: 4,
                    }}
                    direction={language === "ar" ? "row-reverse" : "row"}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography
                      fontSize={{
                        laptop: 51,
                        mobile: 18,
                        tablet: 18,
                        desktop: 51,
                      }}
                      letterSpacing={{
                        mobile: "0px",
                        tablet: "0px",
                        laptop: "-1.53px",
                        desktop: "-1.53px",
                      }}
                      lineHeight="120%"
                    >
                      {language === "en" && <>{service?.titleEnglish}</>}
                      {language === "ar" && <>{service?.titleArabic}</>}
                    </Typography>
                    <Stack
                      sx={{
                        transform:
                          language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <Box
                        className="right-arrow-animation"
                        component="img"
                        src="/blue_right_arrow.png"
                        width={{
                          laptop: 60,
                          mobile: 20,
                          tablet: 20,
                          desktop: 60,
                        }}
                        height={{
                          laptop: 60,
                          mobile: 20,
                          tablet: 20,
                          desktop: 60,
                        }}
                        sx={{
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                    </Stack>
                  </Stack>
                  <Typography
                    fontSize={{
                      laptop: 18,
                      mobile: 14,
                      tablet: 14,
                      desktop: 18,
                    }}
                    textAlign={language === "ar" ? "right" : "left"}
                    lineHeight={{
                      laptop: 2,
                      desktop: 2,
                      mobile: 1.5,
                      tablet: 1.5,
                    }}
                    className="lato responsive-text"
                    fontWeight={400}
                    dangerouslySetInnerHTML={{
                      __html:
                        language === "ar"
                          ? service?.descriptionArabic.replace(/\n/gu, "<br />")
                          : service?.descriptionEnglish.replace(
                              /\n/gu,
                              "<br />"
                            ),
                    }}
                  />
                </Stack>
                {/* <Box component="img" src={service?.icon} width={90} /> */}
                <Lottie
                  style={{ flexShrink: 0 }}
                  width={90}
                  animationData={service?.icon}
                />
                <Box
                  className="hover-element"
                  sx={{
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    opacity: 0,
                    position: "absolute",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <svg
                    width="480"
                    height="246"
                    viewBox="0 0 480 246"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1" filter="url(#filter0_f_2093_10)">
                      <ellipse
                        cx="-53"
                        cy="257.5"
                        rx="185"
                        ry="137.5"
                        fill="#41C4DA"
                        fillOpacity="0.4"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_2093_10"
                        x="-586"
                        y="-228"
                        width="1066"
                        height="971"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="174"
                          result="effect1_foregroundBlur_2093_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomeInnovativeServicesSection;

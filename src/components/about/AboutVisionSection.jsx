import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const AboutVisionSection = () => {
  const { language } = useLanguage();

  return (
    <Container maxWidth="desktop" sx={{ minHeight: "100vh" }}>
      <Stack
        py={{
          tablet: 8,
          mobile: 8,
          laptop: 10,
          desktop: 10,
        }}
        gap={{
          laptop: 10,
          tablet: 15,
          mobile: 15,
          desktop: 10,
        }}
        sx={{
          heigh: "100vh",
        }}
        alignItems="center"
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
          {language === "en" && "Our Vision"}
          {language === "ar" && "Our Vision"}
        </Typography>
        <Stack
          p={9}
          gap={3}
          width="100%"
          sx={{
            borderRadius: "30px",
            border: " 1px solid #3F3F45",
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(30.700000762939453px)",
          }}
        >
          <Box
            component="div"
            width={100}
            height={100}
            p={3}
            borderRadius="100%"
            bgcolor="#45BDD6"
            sx={{
              top: "-50px",
              right: "50px",
              position: "absolute",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 61 51"
              fill="none"
            >
              <g clipPath="url(#clip0_411_2627)">
                <path
                  d="M28.2112 30.0371V43.6471C28.2112 45.5373 27.5439 47.1441 26.2091 48.4673C24.8744 49.7905 23.2537 50.4521 21.3469 50.4521H7.61824C5.71148 50.4521 4.09073 49.7905 2.756 48.4673C1.42127 47.1441 0.753906 45.5373 0.753906 43.6471V18.6955C0.753906 16.2381 1.23655 13.893 2.20185 11.6601C3.16715 9.42721 4.47208 7.49558 6.11666 5.86522C7.76124 4.23486 9.70971 2.94121 11.9621 1.98425C14.2144 1.0273 16.58 0.548828 19.0588 0.548828H21.3469C21.9666 0.548828 22.5029 0.773298 22.9557 1.22224C23.4086 1.67118 23.635 2.20282 23.635 2.81716V7.35381C23.635 7.96815 23.4086 8.49979 22.9557 8.94873C22.5029 9.39767 21.9666 9.62214 21.3469 9.62214H19.0588C16.5323 9.62214 14.3753 10.5082 12.5877 12.2803C10.8001 14.0525 9.90635 16.1908 9.90635 18.6955V19.8296C9.90635 20.7748 10.24 21.5781 10.9074 22.2397C11.5748 22.9013 12.3851 23.2321 13.3385 23.2321H21.3469C23.2537 23.2321 24.8744 23.8937 26.2091 25.2169C27.5439 26.5401 28.2112 28.1468 28.2112 30.0371ZM60.2448 30.0371V43.6471C60.2448 45.5373 59.5774 47.1441 58.2427 48.4673C56.9079 49.7905 55.2872 50.4521 53.3804 50.4521H39.6518C37.745 50.4521 36.1243 49.7905 34.7895 48.4673C33.4548 47.1441 32.7874 45.5373 32.7874 43.6471V18.6955C32.7874 16.2381 33.2701 13.893 34.2354 11.6601C35.2007 9.42721 36.5056 7.49558 38.1502 5.86522C39.7948 4.23486 41.7432 2.94121 43.9956 1.98425C46.248 1.0273 48.6135 0.548828 51.0923 0.548828H53.3804C54.0001 0.548828 54.5364 0.773298 54.9893 1.22224C55.4421 1.67118 55.6685 2.20282 55.6685 2.81716V7.35381C55.6685 7.96815 55.4421 8.49979 54.9893 8.94873C54.5364 9.39767 54.0001 9.62214 53.3804 9.62214H51.0923C48.5659 9.62214 46.4088 10.5082 44.6213 12.2803C42.8337 14.0525 41.9399 16.1908 41.9399 18.6955V19.8296C41.9399 20.7748 42.2736 21.5781 42.9409 22.2397C43.6083 22.9013 44.4187 23.2321 45.372 23.2321H53.3804C55.2872 23.2321 56.9079 23.8937 58.2427 25.2169C59.5774 26.5401 60.2448 28.1468 60.2448 30.0371Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_411_2627">
                  <rect
                    width="59.5"
                    height="49.9032"
                    fill="white"
                    transform="translate(0.75 0.548828)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Typography
            color="#fff"
            fontSize={{
              laptop: 48,
              tablet: 24,
              mobile: 24,
              desktop: 48,
            }}
            fontWeight={400}
            lineHeight={1.2}
            textAlign={{
              tablet: "center",
              mobile: "center",
              laptop: language === "ar" ? "right" : "left",
              desktop: language === "ar" ? "right" : "left",
            }}
            className="responsive-text"
          >
            {language === "en" && (
              <>
                “We are more than a team; we are a community of people who
                believe in the power of technology. our promise to our clients
                is unbreakable as we work to build the future they want.”
              </>
            )}
            {language === "ar" && (
              <>
                “نحن لسنا مجرد فريق، بل نحن مجتمع نابض من الأفراد الذين يحملون
                إيمانًا راسخًا بقوة التقنية. إن التزامنا تجاه عملائنا هو عهد لا
                يمكن التنازل عنه، ونسعى جاهدين لتحقيق رؤية المستقبل التي يطمحون
                إليه&quot;
              </>
            )}
          </Typography>
          <Typography
            width="90%"
            color="rgba(255, 255, 255, 0.70)"
            fontSize={{
              laptop: 40,
              tablet: 24,
              mobile: 24,
              desktop: 40,
            }}
            fontWeight={400}
            lineHeight={1.2}
            textAlign="right"
          >
            {language === "en" && <>-TSC Founder</>}
            {language === "ar" && <>-مؤسسيين تكامل السحابة</>}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutVisionSection;

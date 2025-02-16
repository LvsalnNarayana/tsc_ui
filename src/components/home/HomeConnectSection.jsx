/* eslint-disable complexity */
/* eslint-disable max-lines */
import React from "react";

import {
  Box,
  Stack,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const HomeConnectSection = () => {
  const { language } = useLanguage();
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

  return (
    <Container
      sx={{
        zIndex: 2,
        px: {
          mobile: 4,
          tablet: 4,
          laptop: 30,
          desktop: 30,
        },
      }}
      id="connect"
    >
      <Stack
        p={{
          laptop: 8,
          mobile: 5,
          tablet: 5,
          desktop: 8,
        }}
        gap={3}
        mb={8}
        mx="auto"
        sx={{
          borderRadius: "35px",
          background: "#081420",
          border: "3px solid #0F263D",
        }}
      >
        <Typography
          fontSize={{
            laptop: 56,
            mobile: 24,
            tablet: 24,
            desktop: 56,
          }}
          lineHeight={1}
          fontWeight={700}
          textAlign="center"
          className="responsive-text"
        >
          {language === "en" && <>Let&apos;s Begin the Dialogue</>}
          {language === "ar" && <>فلنبدأ الحوار</>}
        </Typography>
        <Typography
          fontSize={{
            laptop: 20,
            mobile: 16,
            tablet: 16,
            desktop: 20,
          }}
          lineHeight={1.5}
          fontWeight={400}
          textAlign="center"
          color="rgba(255, 255, 255, 0.80"
        >
          {language === "en" && (
            <>
              We’ve helped many businesses transform. Let’s create a success
              story for your business.
            </>
          )}
          {language === "ar" && (
            <>
              لقد ساعدنا العديد من الشركات على التحول. لنقم بإنشاء قصة نجاح
              لعملك.
            </>
          )}
        </Typography>
        <Stack
          mt={{
            laptop: 7,
            mobile: 2,
            tablet: 2,
            desktop: 7,
          }}
          gap={10}
          direction={{
            mobile: "column",
            tablet: "column",
            laptop: language === "en" ? "row" : "row-reverse",
            desktop: language === "en" ? "row" : "row-reverse",
          }}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Stack
            width="100%"
            gap={4}
            alignItems={language === "ar" ? "flex-end" : "flex-start"}
          >
            <Stack
              alignItems={language === "ar" ? "flex-end" : "flex-start"}
              gap={{
                laptop: 1,
                mobile: 2,
                tablet: 2,
                desktop: 1,
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={{
                  laptop: 40,
                  mobile: 20,
                  tablet: 20,
                  desktop: 40,
                }}
                lineHeight={1.2}
              >
                {language === "en" && "Connect With Us"}
                {language === "ar" && "تواصل معنا"}
              </Typography>
              <Typography
                fontSize={{
                  laptop: 20,
                  mobile: 16,
                  tablet: 16,
                  desktop: 20,
                }}
                lineHeight={1.5}
                fontWeight={400}
              >
                {language === "en" && (
                  <>
                    Tell us about your requirements. We’ll get back to you soon.
                  </>
                )}
                {language === "ar" && (
                  <>أخبرنا عن متطلباتك. سوف نعود اليكم قريبا.</>
                )}
              </Typography>
            </Stack>
            <TextField
              width="100%"
              placeholder={language === "ar" ? "*اسم" : "Name*"}
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              width="100%"
              placeholder={
                language === "ar"
                  ? "اسم الشركة (اختياري)"
                  : "Company Name (Optional)"
              }
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              width="100%"
              placeholder={
                language === "ar" ? "رقم التليفون*" : "Phone Number*"
              }
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              width="100%"
              placeholder={
                language === "ar"
                  ? "عنوان البريد الإلكتروني*"
                  : "Email Address*"
              }
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              multiline
              rows={4}
              placeholder={
                language === "ar"
                  ? "قم بوصف متطلباتك*"
                  : "Describe your requirements*"
              }
              sx={{
                width: "100%",
                borderRadius: "12px",
                "& .MuiOutlinedInput-multiline": {
                  padding: 0,
                },
                "& textarea": {
                  color: "#fff",
                  padding: "0px",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.30)",
                  "&:hover": {
                    borderColor: "rgba(65, 196, 218, 0.50)",
                  },
                  "&.Mui-focused": {
                    borderColor: "rgba(65, 196, 218, 1)",
                  },
                },
              }}
            />

            <Stack
              direction={language === "ar" ? "row-reverse" : "row"}
              alignItems="center"
              gap={2}
            >
              <Box component="img" src="/link.svg" />
              <Stack
                justifyContent={language === "ar" ? "flex-end" : "flex-start"}
              >
                <Typography
                  fontSize={16}
                  lineHeight={1.2}
                  fontWeight={400}
                  textAlign={language === "ar" ? "right" : "left"}
                >
                  {language === "ar" ? "إرفاق الملف" : "Attach File"}
                </Typography>
                <Typography
                  fontSize={14}
                  lineHeight={1.2}
                  fontWeight={400}
                  color="rgba(255, 255, 255, 0.80)"
                  textAlign={language === "ar" ? "right" : "left"}
                >
                  {language === "en" && (
                    <>
                      (You may upload only doc, docx & pdf file. Max file size:
                      25MB)
                    </>
                  )}
                  {language === "ar" && (
                    <>
                      (يمكنك تحميل ملفات doc وdocx وpdf فقط. الحد الأقصى لحجم
                      الملف: 25 ميجابايت)
                    </>
                  )}
                </Typography>
              </Stack>
            </Stack>
            <Button
              width="100%"
              sx={{
                py: 1,
                fontSize: 24,
                color: "#000",
                fontWeight: 700,
                minWidth: "100%",
                borderRadius: "12px",
                background: " #41C4DA",
              }}
            >
              {language === "en" && "Submit"}
              {language === "ar" && "يُقدِّم"}
            </Button>
          </Stack>
          <Divider
            orientation={
              laptopView || desktopView
                ? "vertical"
                : tabletView || mobileView
                  ? "horizontal"
                  : "vertical"
            }
            flexItem
            sx={{
              borderTop: "0px",
              borderWidth: "2px",
              position: "relative",
              borderColor: "rgba(255, 255, 255, 0.50)",
              width: {
                laptop: "0px",
                desktop: "0px",
                mobile: "100%",
                tablet: "100%",
              },
            }}
          >
            <Box
              sx={{
                zIndex: 2,
                width: 30,
                height: 30,
                top: "50%",
                left: "50%",
                display: "flex",
                borderRadius: "100%",
                alignItems: "center",
                position: "absolute",
                justifyContent: "center",
                color: "rgba(255, 255, 255, 0.90)",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(50, 50, 50)",
                border: "2px solid rgba(255, 255, 255, 0.50)",
              }}
            >
              <Typography fontSize={12}>OR</Typography>
            </Box>
          </Divider>
          <Stack
            width="100%"
            gap={4}
            alignItems={language === "ar" ? "flex-end" : "flex-start"}
          >
            <Stack
              alignItems={language === "ar" ? "flex-end" : "flex-start"}
              gap={{
                laptop: 1,
                mobile: 2,
                tablet: 2,
                desktop: 1,
              }}
            >
              <Typography
                fontSize={{
                  laptop: 40,
                  mobile: 20,
                  tablet: 20,
                  desktop: 40,
                }}
                fontWeight={700}
                lineHeight={1.5}
              >
                {language === "en" && "Quick Connect"}
                {language === "ar" && "اتصال سريع"}
              </Typography>
              <Typography
                fontSize={{
                  laptop: 20,
                  mobile: 16,
                  tablet: 16,
                  desktop: 20,
                }}
                fontWeight={400}
                lineHeight={1.5}
                color="rgba(255, 255, 255, 0.80)"
              >
                {language === "en" && (
                  <>
                    We are just a tap away! Reach out to us for more information
                  </>
                )}
                {language === "ar" && (
                  <>نحن على بعد نقرة واحدة فقط! تواصل معنا لمزيد من المعلومات</>
                )}
              </Typography>
            </Stack>
            <a
              href="mailto:info@tsc.com.sa"
              style={{
                width: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Stack
                width="100%"
                gap={2}
                px={4}
                direction={language === "ar" ? "row-reverse" : "row"}
                alignItems="center"
                sx={{
                  minHeight: "100px",
                  borderRadius: "12px",
                  border: "1.6px solid rgba(65, 196, 218, 0.30)",
                }}
              >
                <Box component="img" src="/email.svg" width={40} />
                <Stack gap={1}>
                  <Typography
                    fontSize={18}
                    fontWeight={500}
                    lineHeight={1}
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {language === "en" && "Email"}
                    {language === "ar" && "بريد إلكتروني"}
                  </Typography>
                  <Typography
                    fontSize={18}
                    fontWeight={300}
                    lineHeight={1.5}
                    color="#ffffff80"
                  >
                    {language === "en" && "info@tsc.com.sa"}
                    {language === "ar" && "info@tsc.com.sa"}
                  </Typography>
                </Stack>
              </Stack>
            </a>
            <a
              href="tel:+966571100020"
              style={{
                width: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Stack
                width="100%"
                gap={2}
                px={4}
                direction={language === "ar" ? "row-reverse" : "row"}
                alignItems="center"
                sx={{
                  minHeight: "100px",
                  borderRadius: "12px",
                  border: "1.6px solid rgba(65, 196, 218, 0.30)",
                }}
              >
                <Box component="img" src="/phone.svg" width={40} />
                <Stack gap={1}>
                  <Typography
                    fontSize={18}
                    fontWeight={500}
                    lineHeight={1}
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {language === "en" && "Call"}
                    {language === "ar" && "يتصل"}
                  </Typography>
                  <Typography
                    fontSize={18}
                    fontWeight={300}
                    lineHeight={1.5}
                    color="#ffffff80"
                  >
                    +966571100020
                  </Typography>
                </Stack>
              </Stack>
            </a>
            <a
              href="https://teams.microsoft.com/l/team/19%3AIbW8P1haAq7fyc1Znmj1AJDnqIduBjmjVkAe1Uf16Ts1%40thread.tacv2/conversations?groupId=5b896b84-756b-435a-8848-84b47520c4f6&tenantId=66f8f7fc-3bc1-476c-993a-b0b3e1185e5c"
              style={{
                width: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Stack
                width="100%"
                gap={2}
                px={4}
                direction={language === "ar" ? "row-reverse" : "row"}
                alignItems="center"
                sx={{
                  minHeight: "100px",
                  borderRadius: "12px",
                  border: "1.6px solid rgba(65, 196, 218, 0.30)",
                }}
              >
                <Box component="img" src="/teams.svg" width={40} />
                <Stack gap={1}>
                  <Typography
                    fontSize={18}
                    fontWeight={500}
                    lineHeight={1}
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {language === "en" && "Teams"}
                    {language === "ar" && "فريق"}
                  </Typography>
                  <Typography
                    fontSize={18}
                    fontWeight={300}
                    lineHeight={1.5}
                    color="#ffffff80"
                  >
                    Teams.tsc
                  </Typography>
                </Stack>
              </Stack>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeConnectSection;

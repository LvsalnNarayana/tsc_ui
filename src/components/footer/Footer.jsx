import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Stack, Button, Divider, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const Footer = () => {
  const { pathname } = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();

  return (
    <Container maxWidth="desktop">
      <Stack
        direction={{
          laptop: "row",
          desktop: "row",
          mobile: "column",
          tablet: "column",
        }}
        justifyContent="space-between"
        alignItems="flex-end"
        gap={{
          laptop: 0,
          mobile: 5,
          tablet: 5,
          desktop: 0,
        }}
      >
        <Stack
          width={{
            tablet: "100%",
            mobile: "100%",
            laptop: "300px",
            desktop: "300px",
          }}
          gap={2}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <img src="/logo.svg" alt="logo" width={50} />
            <Stack>
              <Typography
                variant="body1"
                fontSize={15}
                fontWeight={500}
                color="#708090"
              >
                TEKAMIL ALSAHABA
              </Typography>
              <Typography
                variant="body1"
                fontSize={11}
                fontWeight={500}
                color="#708090"
              >
                Transforming Visions into Reality
              </Typography>
            </Stack>
          </Stack>
          <Typography color="#fff" fontSize={16} lineHeight={1.5}>
            {language === "en" && (
              <>
                St. Omar Ibn Alkhattab 34261,
                <br />
                Dammam, Saudi Arabia
              </>
            )}
            {language === "ar" && (
              <>
                ش عمر بن الخطاب 34261,
                <br />
                الدمام، المملكة العربية السعودية
              </>
            )}
          </Typography>
        </Stack>
        <Stack
          width={{
            tablet: "100%",
            mobile: "100%",
            laptop: "300px",
            desktop: "300px",
          }}
          gap={3}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <img src="/email_footer.svg" alt="logo" width={30} />
            <Typography
              variant="body1"
              fontSize={16}
              fontWeight={400}
              color="#fff"
            >
              Moath@tsc.com.sa
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <img src="/phone_footer.svg" alt="logo" width={30} />
            <Typography
              variant="body1"
              fontSize={16}
              fontWeight={400}
              color="#fff"
            >
              +966570111471
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={4}>
            <img src="/facebook_footer.svg" alt="logo" width={30} />
            <img src="/instagram_footer.svg" alt="logo" width={30} />
            <img src="/linkedin_footer.svg" alt="logo" width={30} />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" gap={2} my={2}>
        <Typography
          fontSize={12}
          sx={{
            "&:hover": {
              cursor: "pointer",
              textDecoration: "underline",
            },
          }}
          onClick={() => {
            return navigate("/terms-conditions");
          }}
        >
          Terms & Conditions
        </Typography>
        <Typography
          onClick={() => {
            return navigate("/privacy-policy");
          }}
          fontSize={12}
          sx={{
            "&:hover": {
              cursor: "pointer",
              textDecoration: "underline",
            },
          }}
        >
          Privacy Policy
        </Typography>
      </Stack>
      {/* <Button onClick={toggleLanguage}>
        {language === "ar" ? "English" : "arabic"}
      </Button> */}
      <Divider flexItem sx={{ my: 5, borderColor: "#ffffff40" }} />
      <Stack
        direction={{
          laptop: "row",
          desktop: "row",
          mobile: "column",
          tablet: "column",
        }}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        pb={8}
        px={2}
        gap={{
          laptop: 0,
          mobile: 5,
          tablet: 5,
          desktop: 0,
        }}
      >
        <Stack direction="row" alignItems="center" gap={4}>
          {["/about-us", "/services", "/products"]?.includes(pathname) && (
            <Typography
              onClick={() => {
                return navigate("/");
              }}
              color="#fff"
              fontSize={16}
              lineHeight={1.5}
            >
              Home
            </Typography>
          )}
          {["/", "/services", "/products"]?.includes(pathname) && (
            <Typography
              onClick={() => {
                return navigate("/about-us");
              }}
              color="#fff"
              fontSize={16}
              lineHeight={1.5}
            >
              About Us
            </Typography>
          )}
          {["/about-us", "/", "/products"]?.includes(pathname) && (
            <Typography
              onClick={() => {
                return navigate("/services");
              }}
              color="#fff"
              fontSize={16}
              lineHeight={1.5}
            >
              Services
            </Typography>
          )}
          {["/about-us", "/services", "/"]?.includes(pathname) && (
            <Typography
              onClick={() => {
                return navigate("/products");
              }}
              color="#fff"
              fontSize={16}
              lineHeight={1.5}
            >
              Products
            </Typography>
          )}
        </Stack>
        <Typography color="#fff" fontSize={16} lineHeight={1.5}>
          © 2023 shantogfx - All Right Reserved
        </Typography>
      </Stack>
    </Container>
  );
};

export default Footer;

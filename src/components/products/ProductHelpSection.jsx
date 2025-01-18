import React from "react";

import { Stack, Button, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const ProductHelpSection = () => {
  const { language } = useLanguage();

  return (
    <Stack
      py={20}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="fit-content"
      gap={4}
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundImage: "url(/hexagon_background.gif)",
        "&::before": {
          top: 0,
          left: 0,
          zIndex: 0,
          content: "''",
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "#00000080",
        },
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        fontSize={{
          laptop: 40,
          mobile: 24,
          tablet: 24,
          desktop: 40,
        }}
        width={{
          mobile: "90%",
          tablet: "90%",
          laptop: "100%",
          desktop: "100%",
        }}
        className="responsive-text"
        sx={{ zIndex: 2 }}
      >
        {language === "en" && " We Can Help You Reinvent Your Business!"}
        {language === "ar" && (
          <>
            نحن هنا لنكون عوناً لك في تجديد رؤيتك <br />
            وزيادة إبداعك في عالم الأعمال!
          </>
        )}
      </Typography>
      <Button
        sx={{
          gap: 1,
          py: 1.7,
          zIndex: 2,
          fontSize: 18,
          lineHeight: 1,
          color: "#fff",
          display: "flex",
          borderRadius: "99px",
          alignItems: "center",
          boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
          background: "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
          px: {
            mobile: 3,
            tablet: 3,
            laptop: 6,
            desktop: 6,
          },
        }}
      >
        Lets talk
        <img alt="arrow" src="/ArrowUpRight.svg" />
      </Button>
    </Stack>
  );
};

export default ProductHelpSection;

import React from "react";

import { Stack, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const HomeMarketSection = () => {
  const { language } = useLanguage();

  return (
    <Stack
      py={20}
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="fit-content"
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
        {language === "en" && (
          <>
            Win the market where competitors are
            <br /> Getting stronger, smarter and faster.
          </>
        )}
        {language === "ar" && <>عزز استراتيجيتك الاجتماعية مع TSC Social!</>}
      </Typography>
    </Stack>
  );
};

export default HomeMarketSection;

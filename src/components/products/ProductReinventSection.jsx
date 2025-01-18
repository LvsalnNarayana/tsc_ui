/* eslint-disable operator-linebreak */
import React from "react";

import { Stack, Typography, useMediaQuery } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const ProductReinventSection = () => {
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
    <Stack
      gap={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="500px"
      sx={{ position: "relative" }}
    >
      {(desktopView || laptopView) && (
        <img
          alt="bg"
          src="/reinvent_gif.gif"
          style={{
            left: 0,
            top: "50%",
            width: "100%",
            maxHeight: "100%",
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />
      )}
      {(mobileView || tabletView) && (
        <img
          alt="bg"
          src="/bg_w.gif"
          style={{
            left: 0,
            top: "50%",
            width: "100%",
            maxHeight: "100%",
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />
      )}
      <Typography
        variant="body1"
        fontSize={{
          laptop: 48,
          tablet: 24,
          mobile: 24,
          desktop: 56,
        }}
        fontWeight={700}
        textAlign="center"
        sx={{ zIndex: 2 }}
        width={{
          laptop: "80%",
          tablet: "80%",
          mobile: "80%",
          desktop: "80%",
        }}
        lineHeight={1.5}
      >
        {language === "en" && "Reinvent Your Business"}
        {language === "ar" && "ابتكر أعمالك من جديد. "}
      </Typography>
      <Typography
        variant="body1"
        fontSize={{
          laptop: 18,
          tablet: 16,
          mobile: 16,
          desktop: 18,
        }}
        fontWeight={400}
        textAlign="center"
        sx={{ zIndex: 2 }}
        width={{
          laptop: "30%",
          tablet: "80%",
          mobile: "80%",
          desktop: "30%",
        }}
        lineHeight={1.5}
        color="#708090"
      >
        {language === "en" &&
          "Adapt to changing needs and be the next and best version – a business that not only survives but thrives."}
        {language === "ar" &&
          "تكيّف مع المتطلبات المتغيرة وكن النسخة التالية والأفضل - شركة لا تقتصر فقط على البقاء، بل تسعى نحو الازدهار."}
      </Typography>
    </Stack>
  );
};

export default ProductReinventSection;

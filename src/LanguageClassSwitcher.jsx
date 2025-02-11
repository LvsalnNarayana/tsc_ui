import React from "react";

import { Stack, createTheme, ThemeProvider } from "@mui/material";

import generateThemeOptions from "./Theme/theme";

import { useLanguage } from "./LanguageContext";

const LanguageClassSwitcher = ({ children }) => {
  const { language } = useLanguage();
  const theme = createTheme(
    generateThemeOptions(
      {
        mode: "light",
      },
      language
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <Stack className={language === "ar" ? "arabic_font" : ""}>
        {children}
      </Stack>
    </ThemeProvider>
  );
};

export default LanguageClassSwitcher;

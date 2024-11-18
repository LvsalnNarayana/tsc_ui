import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import { createTheme } from "@mui/material";

import generateThemeOptions from "./Theme/theme";

import "./index.css";
import App from "./App";

const theme = createTheme(
  generateThemeOptions({
    mode: "light",
  })
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

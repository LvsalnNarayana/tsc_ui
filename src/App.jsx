import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Stack, CssBaseline } from "@mui/material";

import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import { LanguageProvider } from "./LanguageContext";
import LanguageClassSwitcher from "./LanguageClassSwitcher";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LanguageProvider>
      <Suspense>
        <LanguageClassSwitcher>
          <Stack
            width="100%"
            sx={{
              color: "#fff",
              backgroundColor: "#040B12",
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
          </Stack>
        </LanguageClassSwitcher>
      </Suspense>
    </LanguageProvider>
  );
};

export default App;

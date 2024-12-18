import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Stack } from "@mui/material";

import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense>
      <Stack
        width="100%"
        sx={{
          color: "#fff",
          // overflow: "clip",
          // position: "relative",
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
        </Routes>
        <Footer />
      </Stack>
    </Suspense>
  );
};

export default App;

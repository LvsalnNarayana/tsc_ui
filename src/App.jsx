import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Suspense>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Suspense>
  );
};

export default App;

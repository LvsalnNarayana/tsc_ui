import React from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";

const Header = () => {
  return (
    <Stack
      p={2}
      gap={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight={"100px"}
    >
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact-us">Contact Us</Link>
    </Stack>
  );
};

export default Header;

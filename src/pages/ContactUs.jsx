import React from "react";

import { Stack, Typography, useMediaQuery } from "@mui/material";
import ContactHeroSection from "../components/contact/ContactHeroSection";

const ContactUs = () => {
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
    <>
      <Stack width="100%" sx={{ color: "#fff", backgroundColor: "#040B12" }}>
        <ContactHeroSection />
      </Stack>
        {/* {mobileView && (
          <Typography variant="h5">ContactUs Mobile View</Typography>
        )}
        {tabletView && (
          <Typography variant="h5">ContactUs Tablet View</Typography>
        )}
        {laptopView && (
          <Typography variant="h5">ContactUs Laptop View</Typography>
        )}
        {desktopView && (
          <Stack
            width="100%"
            sx={{ color: "#fff", backgroundColor: "#040B12" }}
          >
            <ContactHeroSection />
          </Stack>
        )} */}
    </>
  );
};

export default ContactUs;

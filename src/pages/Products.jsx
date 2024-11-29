import React from "react";

import { Stack, useMediaQuery } from "@mui/material";

import ProductServices from "../components/products/ProductServices";
import ProductHelpSection from "../components/products/ProductHelpSection";
import ProductsHeroSection from "../components/products/ProductsHeroSection";
import ProductPersonalized from "../components/products/ProductPersonalized";
import ProductImpactSection from "../components/products/ProductImpactSection";
import ProductModulesSection from "../components/products/ProductModulesSection";
import ProductReinventSection from "../components/products/ProductReinventSection";
import ProductMustHavesSection from "../components/products/ProductMustHavesSection";
import ProductPerformanceSection from "../components/products/ProductPerformanceSection";
import ProductSocialMediaSection from "../components/products/ProductSocialMediaSection";
import ProductEvolutionSection from "../components/products/ProductEvolutionSection";
import HomeConnectSection from "./../components/home/HomeConnectSection";
import Eclipse4 from "../components/shared/Eclipse4";
import Eclipse3 from "../components/shared/Eclipse3";

const Products = () => {
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
      <Stack width="100%" maxWidth="100vw" style={{ position: "relative" }}>
        <Eclipse3
          style={{
            left: 0,
            top: "100vh",
            position: "absolute",
          }}
        />
        <Eclipse4
          style={{
            right: 0,
            top: "150vh",
            position: "absolute",
          }}
        />
        <Eclipse3
          style={{
            left: 0,
            top: "200vh",
            position: "absolute",
          }}
        />
        <Eclipse4
          style={{
            right: 0,
            top: "250vh",
            position: "absolute",
          }}
        />
        <Eclipse3
          style={{
            left: 0,
            top: "300vh",
            position: "absolute",
          }}
        />
        <Eclipse4
          style={{
            right: 0,
            top: "500vh",
            position: "absolute",
          }}
        />
        <Eclipse3
          style={{
            left: 0,
            top: "1500vh",
            position: "absolute",
          }}
        />
        <Eclipse4
          style={{
            right: 0,
            top: "1600vh",
            position: "absolute",
          }}
        />
        <ProductsHeroSection />
        <ProductPerformanceSection />
        <ProductMustHavesSection />
        <ProductImpactSection />
        <ProductSocialMediaSection />
        <ProductReinventSection />
        <ProductPersonalized />
        <ProductServices />
        <ProductModulesSection />
        <ProductHelpSection />
        <ProductEvolutionSection />
        <HomeConnectSection />
      </Stack>
      {/* {mobileView && <Typography variant="h5">Products Mobile View</Typography>}
      {tabletView && <Typography variant="h5">Products Tablet View</Typography>}
      {laptopView && <Typography variant="h5">Products Laptop View</Typography>}
      {desktopView && (
        <Typography variant="h5">Products Desktop View</Typography>
      )} */}
    </>
  );
};

export default Products;

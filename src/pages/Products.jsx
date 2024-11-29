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
      <Stack width="100%" maxWidth="100vw">
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

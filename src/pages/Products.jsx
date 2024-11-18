import React from "react";

import { Typography, useMediaQuery } from "@mui/material";

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
      {mobileView && <Typography variant="h5">Products Mobile View</Typography>}
      {tabletView && <Typography variant="h5">Products Tablet View</Typography>}
      {laptopView && <Typography variant="h5">Products Laptop View</Typography>}
      {desktopView && (
        <Typography variant="h5">Products Desktop View</Typography>
      )}
    </>
  );
};

export default Products;

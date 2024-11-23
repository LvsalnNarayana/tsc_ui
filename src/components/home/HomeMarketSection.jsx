import React from "react";

import { Stack, Typography } from "@mui/material";

const HomeMarketSection = () => {
  return (
    <Stack
      py={20}
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="fit-content"
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundImage: "url(../../public/hexagon_background.gif)",
        "&::before": {
          top: 0,
          left: 0,
          zIndex: 0,
          content: "''",
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "#00000080",
        },
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        fontSize={40}
        sx={{ zIndex: 2 }}
      >
        Win the market where competitors are
        <br /> getting stronger, smarter and faster.
      </Typography>
    </Stack>
  );
};

export default HomeMarketSection;

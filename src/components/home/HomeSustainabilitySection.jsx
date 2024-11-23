import React from "react";

import { Stack, Typography } from "@mui/material";

const HomeSustainabilitySection = () => {
  return (
    <Stack
      my={10}
      gap={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="450px"
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        background: "url(/home_tree.png)",
        "&::before": {
          top: 0,
          left: 0,
          zIndex: 1,
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Typography
        variant="body1"
        fontSize={50}
        fontWeight={700}
        textAlign="center"
        sx={{ zIndex: 2 }}
      >
        Cloud-Powered Sustainability
      </Typography>
      <Typography
        variant="body1"
        fontSize={28}
        fontWeight={400}
        textAlign="center"
        sx={{ zIndex: 2 }}
      >
        Embrace Green Initiatives at the Heart of Our Business
      </Typography>
    </Stack>
  );
};

export default HomeSustainabilitySection;

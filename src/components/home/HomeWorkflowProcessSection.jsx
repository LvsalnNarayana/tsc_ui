import React from "react";

import { Stack, Container, Typography } from "@mui/material";

import WorkflowProcessSVGComponent from "../SVGComponents/WorkflowProcessSVGComponent";

const HomeWorkflowProcessSection = () => {
  return (
    <Container maxWidth="desktop">
      <Typography
        my={6}
        fontSize={{
          laptop: 60,
          tablet: 32,
          mobile: 32,
          desktop: 60,
        }}
        sx={{
          textAlign: "center",
          background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
          // eslint-disable-next-line perfectionist/sort-objects
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Workflow Process
      </Typography>
      <Stack width="100%" justifyContent="center" alignItems="center">
        <WorkflowProcessSVGComponent />
      </Stack>
    </Container>
  );
};

export default HomeWorkflowProcessSection;

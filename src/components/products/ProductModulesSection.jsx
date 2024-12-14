/* eslint-disable no-negated-condition */
import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const ProductModulesSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        py={8}
        gap={{
          laptop: 7,
          desktop: 7,
          tablet: 10,
          mobile: 10,
        }}
        alignItems="center"
      >
        <Typography
          fontSize={{
            laptop: 60,
            tablet: 32,
            mobile: 32,
            desktop: 60,
          }}
          lineHeight={1.2}
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Custom Modules
        </Typography>
        <Typography
          fontSize={{
            laptop: 18,
            tablet: 16,
            mobile: 16,
            desktop: 18,
          }}
          lineHeight={1.5}
          textAlign="center"
          color="#ffffff80"
          className="lato responsive-text"
        >
          Add more to your system with custom modules. Whether you need
          reporting and analytics modules,
          <br /> workflow automation modules or industry-specific modules we
          have got you covered. Optimize your
          <br />
          platform for deeper customer insights and sales growth.
        </Typography>
        <Typography
          fontSize={{
            laptop: 60,
            tablet: 32,
            mobile: 32,
            desktop: 60,
          }}
          lineHeight={1.2}
          textAlign="center"
          color="rgba(255, 255, 255, 0.24)"
        >
          Modules We Develop for Your Sales
        </Typography>
        <Stack
          gap={2}
          width="100%"
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="flex-start"
        >
          {[
            { id: 1, name: "Marketing Module" },
            { id: 2, name: "Sales Module" },
            { id: 3, name: "Personal Service Module" },
            { id: 4, name: "Workflow Module" },
            { id: 5, name: "Chat Integration Module" },
            { id: 6, name: "Leads Management Module" },
          ]?.map((module) => {
            return (
              <Stack
                key={module?.id}
                p={2}
                gap={2}
                mb={4}
                width={{
                  tablet: "100%",
                  mobile: "100%",
                  laptop: "calc(50% - 8px)",
                  desktop: "calc(50% - 8px)",
                }}
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{
                  borderRadius: 3,
                  cursor: "pointer",
                  position: "relative",
                  border: "1px solid transparent",
                  "&:hover": {
                    border: "1px solid #45BDD6",
                  },
                  "&:hover .right-arrow-animation": {
                    transform: "translateX(20px)",
                  },
                }}
              >
                <Typography
                  pl={{
                    tablet: 2,
                    mobile: 2,
                    laptop: 2,
                    desktop: 2,
                  }}
                  fontSize={{
                    laptop: 48,
                    tablet: 32,
                    mobile: 32,
                    desktop: 48,
                  }}
                  lineHeight={1.5}
                  fontWeight={400}
                  variant="body1"
                >
                  {module?.name}
                </Typography>
                <Box
                  className="right-arrow-animation"
                  component="img"
                  src="/blue_right_arrow.png"
                  width={{
                    laptop: 60,
                    mobile: 40,
                    tablet: 40,
                    desktop: 60,
                  }}
                  height={{
                    laptop: 60,
                    mobile: 40,
                    tablet: 40,
                    desktop: 60,
                  }}
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProductModulesSection;

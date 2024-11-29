import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const ProductMustHavesSection = () => {
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      maxWidth="100vw"
    >
      <Container maxWidth="desktop">
        <Stack gap={8}>
          <Typography
            fontSize={{
              laptop: 60,
              tablet: 32,
              mobile: 32,
              desktop: 60,
            }}
            lineHeight={1.2}
            fontWeight={400}
            textAlign="center"
            sx={{
              background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",

              // eslint-disable-next-line perfectionist/sort-objects
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Today’s Must-Haves
          </Typography>
          <Stack
            sx={{
              gap: "0px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            {[
              {
                id: 1,
                icon: "/Cup.svg",
                title: "Adapt Fast and Stay Agile",
                description:
                  "Remain client-centric by adapting quickly to meet market needs.",
              },
              {
                id: 2,
                icon: "/hand_greeting.svg",
                title: "Strategic Planning",
                description:
                  "Strategy and analysis are key. Defining the right direction and goals enables swift execution and competitive advantage.",
              },
              {
                id: 3,
                icon: "/analytics.svg",
                title: "Analytics Capabilities",
                description:
                  "Utilize analytical skills and tools to discover market opportunities and maximize ROI.",
              },
              {
                id: 4,
                icon: "/human_icon.svg",
                title: "Human-Centered Approaches",
                description:
                  "Prioritize customer service and experience to convert loyal customers more easily and quickly.",
              },
            ].map(({ id, icon, title, description }) => {
              return (
                <Stack
                  key={id}
                  p={3}
                  width={{
                    mobile: "100%",
                    tablet: "100%",
                    laptop: id === 1 || id === 4 ? "60%" : "40%",
                    desktop: id === 1 || id === 4 ? "60%" : "40%",
                  }}
                >
                  <Stack
                    key={id}
                    p={5}
                    gap={2}
                    width={{
                      mobile: "100%",
                      tablet: "100%",
                      laptop: "100%",
                      desktop: "100%",
                    }}
                    height="100%"
                    sx={{
                      borderRadius: 5,
                      cursor: "pointer",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: "rgba(215, 241, 245, 0.05)",
                      "&:hover .blur-box": {
                        opacity: 1,
                        transform: "scale(1)",
                      },
                    }}
                  >
                    {/* Blur box that appears on hover */}
                    <Box
                      className="blur-box"
                      component="div"
                      sx={{
                        right: 0,
                        bottom: 0,
                        width: 300,
                        opacity: 0,
                        height: 300,
                        position: "absolute",
                        transform: "scale(0.8)",
                        filter: "blur(192.75px)",
                        background: "rgba(65, 196, 218, 0.70)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    />
                    {/* Section Content */}
                    <Stack
                      direction="column"
                      alignItems="flex-start"
                      width="100%"
                      gap={2}
                    >
                      <Stack
                        p={1}
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#192832",
                        }}
                      >
                        <Box
                          component="img"
                          src={icon}
                          sx={{ width: "80%", height: "auto" }}
                        />
                      </Stack>

                      <Stack
                        width={{
                          laptop: "80%",
                          tablet: "100%",
                          mobile: "100%",
                          desktop: "80%",
                        }}
                        gap={2}
                      >
                        <Typography
                          className="lato"
                          fontSize={44}
                          color="#fff"
                          lineHeight={1.2}
                          fontWeight={500}
                        >
                          {title}
                        </Typography>
                        <Typography
                          fontSize={24}
                          color="#B5B5B8"
                          lineHeight={1.4}
                        >
                          {description}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductMustHavesSection;

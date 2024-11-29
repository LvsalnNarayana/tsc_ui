/* eslint-disable max-lines */
import React from "react";
import Lottie from "lottie-react";

import { Box, Stack, Container, Typography } from "@mui/material";

import phoneJson from "../../assets/phone-02.json";
import cloudJson from "../../assets/cloud-01.json";
import laptopJson from "../../assets/laptop-02.json";
import cartJson from "../../assets/shopping-cart-01.json";

const HomeInnovativeServicesSection = () => {
  return (
    <Stack sx={{ backgroundColor: "#06101A" }}>
      <Container maxWidth="desktop">
        <Stack
          py={{
            mobile: 4,
            tablet: 4,
            laptop: 10,
            desktop: 10,
          }}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          height="fit-content"
        >
          <Typography
            mb={4}
            fontSize={{
              laptop: 60,
              mobile: 40,
              tablet: 40,
              desktop: 60,
            }}
            textAlign={{
              laptop: "left",
              desktop: "left",
              mobile: "center",
              tablet: "center",
            }}
            width="100%"
            sx={{
              background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
              // eslint-disable-next-line perfectionist/sort-objects
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Innovative Services
          </Typography>
          <Typography
            mb={3}
            fontSize={18}
            width={{
              laptop: "60%",
              desktop: "60%",
              mobile: "100%",
              tablet: "100%",
            }}
            textAlign={{
              laptop: "left",
              desktop: "left",
              mobile: "center",
              tablet: "center",
            }}
            lineHeight={1.5}
            className="lato responsive-text"
            color="rgba(255, 255, 255, 0.80)"
            letterSpacing="1px"
          >
            Our range of innovative services is designed to deliver maximum
            value in technology,
            <br /> user experience, and client satisfaction. We ensure our
            clients get maximum ROl on their
            <br /> innovation investments and scale exponentially.
          </Typography>
          {[
            {
              id: 1,
              icon: phoneJson,
              title: "Mobile App Development",
              description:
                "Grab attention with robust user-friendly mobile app solutions \n built with the latest technologies.",
            },
            {
              id: 2,
              icon: laptopJson,
              title: "Web Development",
              description:
                "Boost your online presence with our premium services. We build \n fast, intuitive websites and online solutions for any complexity.",
            },
            {
              id: 3,
              icon: cartJson,
              title: "E-commerce Services",
              description:
                "Get more from your business with a feature-rich eStore. Enjoy\n customized, mobile-friendly solutions that enhance the shopping \nexperience and deliver results.",
            },
            {
              id: 4,
              icon: cloudJson,
              title: "Cloud Consulting",
              description:
                "Transform your business with industry-specific cloud solutions.\n Leverage our cloud infrastructure, software, storage, and\n security services expertise.",
            },
          ]?.map((service) => {
            return (
              <Stack
                my={4}
                key={service?.id}
                width="100%"
                gap={2}
                height={{
                  laptop: "fit-content",
                  mobile: "fit-content",
                  tablet: "fit-content",
                  desktop: "fit-content",
                }}
                minHeight={{
                  laptop: 246,
                  desktop: 246,
                  mobile: "fit-content",
                  tablet: "fit-content",
                }}
                py={{
                  mobile: 4,
                  tablet: 4,
                  laptop: 1,
                  desktop: 1,
                }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  borderRadius: "20px",
                  border: "2px solid rgba(255, 255, 255, 0.10)",
                  "&:hover .hover-element": {
                    // Target the child element with the class "hover-element"
                    opacity: 1,
                  },
                  "&:hover .right-arrow-animation": {
                    // Target the child element with the class "hover-element"
                    transform: "translateX(20px)",
                  },
                }}
              >
                <Stack
                  width={{
                    laptop: "60%",
                    mobile: "70%",
                    tablet: "70%",
                    desktop: "60%",
                  }}
                  pl={{
                    laptop: 0,
                    mobile: 3,
                    tablet: 3,
                    desktop: 0,
                  }}
                  gap={2}
                  sx={{
                    zIndex: 3,
                    position: "relative",
                  }}
                >
                  <Stack
                    gap={{
                      laptop: 4,
                      mobile: 2,
                      tablet: 2,
                      desktop: 4,
                    }}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography
                      fontSize={{
                        laptop: 51,
                        mobile: 18,
                        tablet: 18,
                        desktop: 51,
                      }}
                      letterSpacing={{
                        mobile: "0px",
                        tablet: "0px",
                        laptop: "-1.53px",
                        desktop: "-1.53px",
                      }}
                      lineHeight="120%"
                    >
                      {service?.title}
                    </Typography>
                    <Box
                      className="right-arrow-animation"
                      component="img"
                      src="/blue_right_arrow.png"
                      width={{
                        laptop: 60,
                        mobile: 20,
                        tablet: 20,
                        desktop: 60,
                      }}
                      height={{
                        laptop: 60,
                        mobile: 20,
                        tablet: 20,
                        desktop: 60,
                      }}
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  </Stack>
                  <Typography
                    fontSize={{
                      laptop: 18,
                      mobile: 14,
                      tablet: 14,
                      desktop: 18,
                    }}
                    textAlign="left"
                    lineHeight={{
                      laptop: 2,
                      desktop: 2,
                      mobile: 1.5,
                      tablet: 1.5,
                    }}
                    className="lato responsive-text"
                    fontWeight={400}
                    dangerouslySetInnerHTML={{
                      __html: service?.description.replace(/\n/gu, "<br />"),
                    }}
                  />
                </Stack>
                {/* <Box component="img" src={service?.icon} width={90} /> */}
                <Lottie width={90} animationData={service?.icon} />
                <Box
                  className="hover-element"
                  sx={{
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    opacity: 0,
                    position: "absolute",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <svg
                    width="480"
                    height="246"
                    viewBox="0 0 480 246"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1" filter="url(#filter0_f_2093_10)">
                      <ellipse
                        cx="-53"
                        cy="257.5"
                        rx="185"
                        ry="137.5"
                        fill="#41C4DA"
                        fillOpacity="0.4"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_2093_10"
                        x="-586"
                        y="-228"
                        width="1066"
                        height="971"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="174"
                          result="effect1_foregroundBlur_2093_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomeInnovativeServicesSection;

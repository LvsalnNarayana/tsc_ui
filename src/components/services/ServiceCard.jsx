/* eslint-disable react/no-array-index-key */
/* eslint-disable max-lines */
import React from "react";

import { Box, Stack, Button, Typography } from "@mui/material";

const ServiceCard = ({ card, minHeight }) => {
  return (
    <Stack
      width="90%"
      minHeight={minHeight ? "fit-content" : "700px"}
      gap={5}
      px={{
        laptop: 8,
        mobile: 5,
        tablet: 5,
        desktop: 8,
      }}
      py={{
        mobile: 5,
        tablet: 5,
        laptop: 10,
        desktop: 10,
      }}
      sx={{
        mx: "auto",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#040B12",
        border: "1px solid #292929",
        backdropFilter: "blur(10px)",
        "&:hover .icon-hover-fill": {
          fill: "#41C4DA",
        },
        "&:hover .icon-hover-stroke": {
          stroke: "#41C4DA",
        },
        "&:hover > .hover-box": {
          opacity: 1,
          top: "-50%",
        },
      }}
      justifyContent="center"
    >
      {card?.icon && (
        <>
          <Box
            className="hover-box"
            sx={{
              left: 0,
              opacity: 0,
              zIndex: 20,
              top: "-100%",
              width: "100%",
              height: "100%",
              position: "absolute",
              transition: "all 0.2s ease-out",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 630 512"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <g filter="url(#filter0_f_411_3340)">
                <path
                  d="M546 73C546 209.967 434.967 321 298 321C161.033 321 50 209.967 50 73C50 -63.9666 161.033 -175 298 -175C434.967 -175 546 -63.9666 546 73Z"
                  fill="#41C4DA"
                  fillOpacity="0.6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_411_3340"
                  x="-140.2"
                  y="-365.2"
                  width="876.4"
                  height="876.4"
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
                    stdDeviation="95.1"
                    result="effect1_foregroundBlur_411_3340"
                  />
                </filter>
              </defs>
            </svg>
          </Box>
          <Stack
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            sx={{ mx: "auto", zIndex: 30, position: "relative" }}
          >
            <svg
              width="138"
              height="138"
              viewBox="0 0 138 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="136"
                height="136"
                rx="68"
                fill="url(#paint0_linear_411_3304)"
              />
              <rect
                x="1"
                y="1"
                width="136"
                height="136"
                rx="68"
                stroke="url(#paint1_linear_411_3304)"
                strokeWidth="2"
              />
              <rect
                x="17"
                y="17"
                width="104"
                height="104"
                rx="52"
                fill="url(#paint2_linear_411_3304)"
              />
              <rect
                x="17"
                y="17"
                width="104"
                height="104"
                rx="52"
                stroke="url(#paint3_linear_411_3304)"
                strokeWidth="2"
              />
              <rect
                x="35"
                y="35"
                width="68"
                height="68"
                rx="34"
                fill="url(#paint4_linear_411_3304)"
              />
              <rect
                x="35"
                y="35"
                width="68"
                height="68"
                rx="34"
                stroke="url(#paint5_linear_411_3304)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_411_3304"
                  x1="69"
                  y1="0"
                  x2="69"
                  y2="138"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1A1A1A" />
                  <stop offset="0.565952" stopColor="#1A1A1A" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_411_3304"
                  x1="69"
                  y1="0"
                  x2="69"
                  y2="138"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="0.745602" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_411_3304"
                  x1="69"
                  y1="16"
                  x2="69"
                  y2="122"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1A1A1A" />
                  <stop offset="0.658009" stopColor="#1A1A1A" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_411_3304"
                  x1="69"
                  y1="16"
                  x2="69"
                  y2="122"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="0.82384" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_411_3304"
                  x1="69"
                  y1="36"
                  x2="69"
                  y2="102"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1A1A1A" />
                  <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_411_3304"
                  x1="69"
                  y1="36"
                  x2="69"
                  y2="102"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="0.84964" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Box
              component="div"
              width={34}
              height={34}
              sx={{
                top: "50%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%, -50%)",
              }}
            >
              {card?.icon()}
            </Box>
          </Stack>
          <Box
            sx={{
              top: 0,
              left: 0,
              width: "100%",
              height: "200px",
              overflow: "hidden",
              position: "absolute",
            }}
          >
            <Box
              component="img"
              src="/hero_pattern.png"
              sx={{
                top: 0,
                left: 0,
                zIndex: 1,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                zIndex: 2,
                width: "100%",
                height: "100%",
                position: "absolute",
                background:
                  "linear-gradient(to top, #040B12, rgba(0, 0, 0, 0))",
              }}
            />
          </Box>
        </>
      )}
      <Stack
        gap={card?.description ? 3 : 1}
        sx={{ zIndex: 40, position: "relative" }}
      >
        <Typography
          fontSize={26}
          fontWeight={700}
          lineHeight={1.5}
          textAlign="center"
        >
          {card?.title}
        </Typography>
        {card?.description && (
          <Stack sx={{ minHeight: minHeight || "270px" }} gap={2}>
            <Typography
              width={{
                laptop: "80%",
                mobile: "100%",
                tablet: "100%",
                desktop: "80%",
              }}
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="#8C8C8C"
              sx={{ mx: "auto" }}
              className="lato"
              letterSpacing={1}
            >
              {card?.description}
            </Typography>
            {card?.services?.length > 0 && (
              <ul
                style={{ listStyle: "disc", paddingLeft: "20px" }}
                className="lato"
              >
                {card?.services?.map((service, index) => {
                  return (
                    <li
                      key={index}
                      style={{ color: "#8C8C8C", marginBottom: "10px" }}
                    >
                      {service}
                    </li>
                  );
                })}
              </ul>
            )}
          </Stack>
        )}
        <Button
          sx={{
            p: "10px",
            mx: "auto",
            gap: "16px",
            display: "flex",
            color: " #45BDD6",
            width: "fit-content",
            alignItems: "center",
            borderRadius: "100px",
            justifyContent: "center",
            border: " 1px solid #45BDD6",
          }}
          onClick={() => {
            const element = document.getElementById("connect");

            if (element) {
              const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - 87;

              window.scrollTo({
                behavior: "smooth",
                top: offsetPosition,
              });
            }
          }}
        >
          Let’s talk
          <Stack
            sx={{
              py: "6px",
              px: "14px",
              borderRadius: "130px",
              backgroundColor: "#1A1A1A",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.33301 12.0004C5.33301 11.4205 5.78968 10.9504 6.35301 10.9504H15.3806L12.446 8.20727C12.04 7.80533 12.0273 7.14064 12.4178 6.72263C12.8082 6.30462 13.4539 6.29158 13.86 6.69352L18.62 11.2435C18.82 11.4415 18.933 11.7148 18.933 12.0004C18.933 12.286 18.82 12.5593 18.62 12.7573L13.86 17.3073C13.4539 17.7092 12.8082 17.6962 12.4178 17.2782C12.0273 16.8601 12.04 16.1954 12.446 15.7935L15.3806 13.0504H6.35301C5.78968 13.0504 5.33301 12.5803 5.33301 12.0004Z"
                fill="#45BDD6"
              />
            </svg>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};

export default ServiceCard;

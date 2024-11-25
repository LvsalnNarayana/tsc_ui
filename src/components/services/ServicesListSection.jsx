/* eslint-disable max-lines */
import React from "react";

import { Box, Stack, Button, Container, Typography } from "@mui/material";

const ServicesListSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack gap={4}>
        <Typography
          variant="h1"
          align="center"
          fontWeight={400}
          fontSize={60}
          lineHeight={1.2}
          color="transparent"
          sx={{
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            zIndex: 2,
            whiteSpace: "nowrap",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Dubai-Regular', Helvetica",
          }}
        >
          We craft experiences, foster
          <br /> innovations, and drive acceleration.
        </Typography>
        <Typography
          fontSize={18}
          fontWeight={400}
          textAlign="center"
          lineHeight={1.4}
          color="rgba(255, 255, 255, 0.80)"
          className="lato"
          letterSpacing={1}
        >
          By leveraging innovation and technology, we transform your ideas into
          reality, propelling your business forward swiftly.
        </Typography>
        <Stack display="grid" gridTemplateColumns="47% 1fr" gap={3}>
          <Stack
            width="100%"
            minHeight="700px"
            gap={5}
            px={8}
            py={10}
            sx={{
              position: "relative",
            }}
          >
            <Stack
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              sx={{ mx: "auto", position: "relative" }}
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
                    <stop
                      offset="0.565952"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.745602"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.658009"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.82384"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.84964"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>

              <Box
                component="img"
                src="/phone_small.svg"
                width={34}
                height={34}
                sx={{
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Stack>
            <Typography
              fontSize={26}
              fontWeight={700}
              lineHeight={1.5}
              textAlign="center"
            >
              Mobile Application Development
            </Typography>
            <Typography
              width="80%"
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="#8C8C8C"
              sx={{ mx: "auto", listStyle: "disc", minHeight: "270px" }}
              className="lato"
              letterSpacing={1}
            >
              Get innovative mobile solutions for your business. We redefine
              user appointments using the latest technologies to deliver robust
              and user-friendly applications. Explore Our Mobile Application
              Development Services
              <ul style={{ paddingLeft: "20px" }}>
                <li>iOS App Development</li>
                <li>Android App Development</li>
                <li>Cross-platform App Development</li>
                <li>UI/UX Design</li>
                <li>App Maintenance and Support</li>
              </ul>
            </Typography>
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
          <Stack
            width="100%"
            minHeight="700px"
            gap={5}
            px={8}
            py={10}
            sx={{
              position: "relative",
            }}
          >
            <Stack
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              sx={{ mx: "auto", position: "relative" }}
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
                    <stop
                      offset="0.565952"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.745602"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.658009"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.82384"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.84964"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>

              <Box
                component="img"
                src="/phone_small.svg"
                width={34}
                height={34}
                sx={{
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Stack>
            <Typography
              fontSize={26}
              fontWeight={700}
              lineHeight={1.5}
              textAlign="center"
            >
              Web Development
            </Typography>
            <Typography
              width="80%"
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="#8C8C8C"
              sx={{ mx: "auto", listStyle: "disc", minHeight: "270px" }}
              className="lato"
              letterSpacing={1}
            >
              Get bespoke web solutions for your online presence. We put user
              experience first, using the latest technologies to create
              intuitive and high-performing websites. Explore Our Web
              Development Services
              <ul style={{ paddingLeft: "20px" }}>
                <li> Custom Website Development</li>
                <li>Front-end and Back-end Development</li>
                <li>Content Management Systems (CMS)</li>
                <li>E-commerce Solutions</li>
                <li>Website Maintenance and Support</li>
              </ul>
            </Typography>
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
          <Stack
            width="100%"
            minHeight="700px"
            gap={5}
            px={8}
            py={10}
            sx={{
              position: "relative",
            }}
          >
            <Stack
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              sx={{ mx: "auto", position: "relative" }}
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
                    <stop
                      offset="0.565952"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.745602"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.658009"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.82384"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.84964"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>

              <Box
                component="img"
                src="/phone_small.svg"
                width={34}
                height={34}
                sx={{
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Stack>
            <Typography
              fontSize={26}
              fontWeight={700}
              lineHeight={1.5}
              textAlign="center"
            >
              Cloud Technology for Business Growth
            </Typography>
            <Typography
              width="80%"
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="#8C8C8C"
              sx={{ mx: "auto", listStyle: "disc", minHeight: "270px" }}
              className="lato"
              letterSpacing={1}
            >
              Get business with the cloud. Leverage the cloud for streamlined
              performance. Adopt industry-specific cloud solutions for a faster
              and more efficient future. We maximize the cloud for every byte of
              your business data. Use the cloud as your launchpad for the
              future.
            </Typography>
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
          <Stack
            width="100%"
            minHeight="700px"
            gap={5}
            px={8}
            py={10}
            sx={{
              position: "relative",
            }}
          >
            <Stack
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              sx={{ mx: "auto", position: "relative" }}
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
                    <stop
                      offset="0.565952"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.745602"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.658009"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.82384"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.84964"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>

              <Box
                component="img"
                src="/phone_small.svg"
                width={34}
                height={34}
                sx={{
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Stack>
            <Typography
              fontSize={26}
              fontWeight={700}
              lineHeight={1.5}
              textAlign="center"
            >
              E-Commerce Solutions for All Businesses
            </Typography>
            <Typography
              width="80%"
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="#8C8C8C"
              sx={{ mx: "auto", listStyle: "disc", minHeight: "270px" }}
              className="lato"
              letterSpacing={1}
            >
              Reach global markets and engage customers 24/7 with robust and
              feature-rich online stores. Show your products and services to the
              world using the latest E-Commerce tools. Let customers explore,
              trust, and discover your offerings at their convenience.
            </Typography>
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
          <Stack
            width="100%"
            minHeight="700px"
            gap={5}
            px={8}
            py={10}
            sx={{
              position: "relative",
            }}
          >
            <Stack
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              sx={{ mx: "auto", position: "relative" }}
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
                    <stop
                      offset="0.565952"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.745602"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.658009"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.82384"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.84964"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>

              <Box
                component="img"
                src="/phone_small.svg"
                width={34}
                height={34}
                sx={{
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Stack>
            <Typography
              fontSize={26}
              fontWeight={700}
              lineHeight={1.5}
              textAlign="center"
            >
              Quality Assurance and Software Testing
            </Typography>
            <Typography
              width="80%"
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="#8C8C8C"
              sx={{ mx: "auto", listStyle: "disc", minHeight: "270px" }}
              className="lato"
              letterSpacing={1}
            >
              Experience a new level of QA and software testing. We redefine
              user interactions using a data-driven approach to boost speed,
              productivity, and quality across systems and applications.
              <ul style={{ paddingLeft: "20px" }}>
                <li>Discover Our Software Testing Services</li>
                <li>Manual Testing</li>
                <li>Full Lifecycle Testing</li>
                <li>Automation Testing</li>
                <li>Product Testing</li>
              </ul>
            </Typography>
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
          <Stack
            width="100%"
            minHeight="700px"
            gap={5}
            px={8}
            py={10}
            sx={{
              position: "relative",
            }}
          >
            <Stack
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              sx={{ mx: "auto", position: "relative" }}
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
                    <stop
                      offset="0.565952"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.745602"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.658009"
                      stopColor="#1A1A1A"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.82384"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
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
                    <stop
                      offset="0.84964"
                      stopColor="#333333"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>

              <Box
                component="img"
                src="/phone_small.svg"
                width={34}
                height={34}
                sx={{
                  top: "50%",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Stack>
            <Typography
              fontSize={26}
              fontWeight={700}
              lineHeight={1.5}
              textAlign="center"
            >
              Smart Solutions and HR On-Demand
            </Typography>
            <Typography
              width="80%"
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="#8C8C8C"
              sx={{ mx: "auto", listStyle: "disc", minHeight: "270px" }}
              className="lato"
              letterSpacing={1}
            >
              Stay ahead in a rapidly evolving market—while we manage your
              workforce with tailored HR as a Service, providing skilled
              employees on our payroll to meet your business needs efficiently.
            </Typography>
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
      </Stack>
    </Container>
  );
};

export default ServicesListSection;

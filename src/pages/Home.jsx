/* eslint-disable max-lines */
import React from "react";

import {
  Box,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

import HowWeWorkSVG from "../components/SVGComponents/HowWeWorkSVG";
import HeroBackground from "../components/Backgrounds/HeroBackground";
import WorkflowProcessSVGComponent from "../components/SVGComponents/WorkflowProcessSVGComponent";
import StrategySectionBackgroundSVG from "../components/SVGComponents/StrategySectionBackgroundSVG";

const Home = () => {
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
      {mobileView && <Typography variant="h5">Home Mobile View</Typography>}
      {tabletView && <Typography variant="h5">Home Tablet View</Typography>}
      {laptopView && <Typography variant="h5">Home Laptop View</Typography>}
      {desktopView && (
        <Stack width="100%" sx={{ color: "#fff", backgroundColor: "#040B12" }}>
          {/*
          .##.....##.########.########...#######.
          .##.....##.##.......##.....##.##.....##
          .##.....##.##.......##.....##.##.....##
          .#########.######...########..##.....##
          .##.....##.##.......##...##...##.....##
          .##.....##.##.......##....##..##.....##
          .##.....##.########.##.....##..#######.
          */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{ zIndex: 1, position: "relative" }}
          >
            <HeroBackground
              style={{
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
            <Container maxWidth="desktop">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack
                  gap={0}
                  width="60%"
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography
                    variant="body1"
                    fontSize={120}
                    sx={{
                      color: "#fff",
                      display: "inline-block",
                    }}
                    fontWeight={100}
                  >
                    Transform your
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={120}
                    sx={{
                      color: "#fff",
                      display: "inline-block",
                    }}
                    fontWeight="bold"
                  >
                    Business
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={120}
                    sx={{
                      color: "#fff",
                      display: "inline-block",
                    }}
                    fontWeight="normal"
                  >
                    With TSC
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={20}
                    sx={{
                      mt: 3.5,
                      lineHeight: 1.4,
                      color: "#ffffff80",
                      display: "inline-block",
                    }}
                    fontWeight="normal"
                  >
                    Empower, Innovate, and Accelerate with TSC—Pioneering
                    Businesses <br /> in Ever-Evolving Technology Landscapes
                  </Typography>
                  <Stack
                    mt={4}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap={2}
                  >
                    <Button
                      sx={{
                        px: 6,
                        py: 1.7,
                        fontSize: 18,
                        lineHeight: 1,
                        color: "#fff",
                        borderRadius: "99px",
                        background: "rgba(255, 255, 255, 0.10)",
                      }}
                    >
                      Our Services
                    </Button>
                    <Button
                      sx={{
                        px: 6,
                        py: 1.7,
                        fontSize: 18,
                        lineHeight: 1,
                        color: "#fff",
                        borderRadius: "99px",
                        boxShadow:
                          "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
                        background:
                          "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
                      }}
                    >
                      Get In Touch
                    </Button>
                  </Stack>
                </Stack>
                <Stack
                  width="40%"
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src="/hero_image.png"
                    sx={{
                      width: "90%",
                      objectFit: "contain",
                      height: "fit-content",
                    }}
                  />
                </Stack>
              </Stack>
            </Container>
          </Stack>
          {/*
          .##......##..#######..########..##....##
          .##..##..##.##.....##.##.....##.##...##.
          .##..##..##.##.....##.##.....##.##..##..
          .##..##..##.##.....##.########..#####...
          .##..##..##.##.....##.##...##...##..##..
          .##..##..##.##.....##.##....##..##...##.
          ..###..###...#######..##.....##.##....##
          */}
          <Stack
            minHeight="100vh"
            py={5}
            gap={10}
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="fit-content"
          >
            <Typography
              sx={{
                px: 6,
                py: 1.7,
                fontSize: 24,
                lineHeight: 1,
                color: "#fff",
                borderRadius: "99px",
                border: " 1px solid rgba(255, 255, 255, 0.10)",
                background:
                  "conic-gradient(from 181deg at 50% 50%, rgba(0, 0, 0, 0.00) 172.66420125961304deg, rgba(73, 53, 130, 0.30) 281.25deg, rgba(71, 47, 140, 0.12) 360deg), rgba(255, 255, 255, 0.05)",
              }}
            >
              How we work
            </Typography>
            <Typography
              fontSize={60}
              textAlign="center"
              sx={{
                background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
                // eslint-disable-next-line perfectionist/sort-objects
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We guide your journey in adapting to evolving
              <br /> business demands, creating tangible value for
              <br /> your organization and customers.
            </Typography>
            <HowWeWorkSVG />
          </Stack>
          {/*
          ..######...#######..##.......##.....##.########.####..#######..##....##
          .##....##.##.....##.##.......##.....##....##.....##..##.....##.###...##
          .##.......##.....##.##.......##.....##....##.....##..##.....##.####..##
          ..######..##.....##.##.......##.....##....##.....##..##.....##.##.##.##
          .......##.##.....##.##.......##.....##....##.....##..##.....##.##..####
          .##....##.##.....##.##.......##.....##....##.....##..##.....##.##...###
          ..######...#######..########..#######.....##....####..#######..##....##
          */}
          <Stack
            py={10}
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            position="relative"
          >
            <Typography
              mb={4}
              fontSize={60}
              sx={{
                background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
                // eslint-disable-next-line perfectionist/sort-objects
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Smart Solution
            </Typography>
            <Typography
              mb={15}
              fontSize={18}
              width="60%"
              textAlign="center"
              lineHeight={1.5}
            >
              Explore our comprehensive range of innovative services designed
              <br /> to elevate your business capabilities across various
              domains,
              <br />
              ensuring optimal efficiency and client satisfaction.
            </Typography>
            <Stack width="60%">
              <Stack
                gap={7}
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
              >
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    component="img"
                    src="/solutions_1.png"
                    maxHeight="100%"
                    sx={{ borderRadius: 2 }}
                  />
                </Stack>
                <Stack
                  justifyContent="flex-start"
                  alignItems="center"
                  height="100%"
                >
                  <Typography fontSize={60} fontWeight="bold" sx={{ mb: 1 }}>
                    01
                  </Typography>
                  <Divider
                    orientation="vertical"
                    sx={{
                      color: "red",
                      borderWidth: 3,
                      height: "150px",
                      borderColor: "#41c4da",
                    }}
                  />
                  <Divider
                    orientation="vertical"
                    sx={{
                      color: "red",
                      borderWidth: 3,
                      height: "150px",
                      borderColor: "#112334",
                    }}
                  />
                  <Typography
                    fontSize={60}
                    fontWeight="bold"
                    sx={{ mt: 1 }}
                    color="#ffffff50"
                  >
                    02
                  </Typography>
                </Stack>
                <Stack
                  gap={3}
                  justifyContent="center"
                  alignItems="flex-start"
                  flexGrow={1}
                  height="100%"
                >
                  <Typography fontSize={40} fontWeight="normal">
                    Social Media CRM
                  </Typography>
                  <Typography fontSize={16} lineHeight={1.5} color="#ffffff80">
                    Engage and retain customers with our advanced social media
                    CRM solutions. Harness the power of social platforms to
                    build meaningful relationships and drive business growth.
                  </Typography>
                  <Button>Know more</Button>
                </Stack>
              </Stack>
            </Stack>
            <Box
              component="img"
              src="/hero_pattern.png"
              sx={{
                left: 0,
                bottom: 0,
                zIndex: -1,
                width: "100%",
                height: "60vh",
                objectFit: "cover",
                position: "absolute",
                maskImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.4))",
              }}
            />
          </Stack>
          {/*
          ..######..########.########..##.....##.####..######..########..######.
          .##....##.##.......##.....##.##.....##..##..##....##.##.......##....##
          .##.......##.......##.....##.##.....##..##..##.......##.......##......
          ..######..######...########..##.....##..##..##.......######....######.
          .......##.##.......##...##....##...##...##..##.......##.............##
          .##....##.##.......##....##....##.##....##..##....##.##.......##....##
          ..######..########.##.....##....###....####..######..########..######.
          */}
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
          <Stack sx={{ backgroundColor: "#06101A" }}>
            <Container maxWidth="desktop">
              <Stack
                py={10}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                height="fit-content"
              >
                <Typography
                  mb={4}
                  fontSize={60}
                  sx={{
                    background:
                      "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
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
                  width="60%"
                  textAlign="left"
                  lineHeight={1.5}
                >
                  Our range of innovative services is designed to deliver
                  maximum value in technology,
                  <br /> user experience, and client satisfaction. We ensure our
                  clients get maximum ROl on their
                  <br /> innovation investments and scale exponentially.
                </Typography>
                {[
                  {
                    id: 1,
                    title: "Mobile App Development",
                    description:
                      "Grab attention with robust user-friendly mobile app solutions \n built with the latest technologies.",
                  },
                  {
                    id: 2,
                    title: "Web Development",
                    description:
                      "Boost your online presence with our premium services. We build \n fast, intuitive websites and online solutions for any complexity.",
                  },
                  {
                    id: 3,
                    title: "E-commerce Services",
                    description:
                      "Get more from your business with a feature-rich eStore. Enjoy\n customized, mobile-friendly solutions that enhance the shopping \nexperience and deliver results.",
                  },
                  {
                    id: 4,
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
                      height={246}
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        borderRadius: "20px",
                        border: "2px solid rgba(255, 255, 255, 0.10)",
                      }}
                    >
                      <Stack width="50%" gap={2}>
                        <Stack
                          gap={4}
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <Typography
                            fontSize={51}
                            letterSpacing="-1.53px"
                            lineHeight="120%"
                          >
                            {service?.title}
                          </Typography>
                          <Box
                            component="img"
                            src="/blue_right_arrow.png"
                            width={60}
                            height={60}
                          />
                        </Stack>
                        <Typography
                          fontSize={18}
                          textAlign="left"
                          lineHeight={2}
                          fontWeight={400}
                          dangerouslySetInnerHTML={{
                            __html: service?.description.replace(
                              /\n/gu,
                              "<br />"
                            ),
                          }}
                        />
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
            </Container>
          </Stack>
          {/*
          ..######..########.########.....###....########.########..######...##....##
          .##....##....##....##.....##...##.##......##....##.......##....##...##..##.
          .##..........##....##.....##..##...##.....##....##.......##..........####..
          ..######.....##....########..##.....##....##....######...##...####....##...
          .......##....##....##...##...#########....##....##.......##....##.....##...
          .##....##....##....##....##..##.....##....##....##.......##....##.....##...
          ..######.....##....##.....##.##.....##....##....########..######......##...
          */}
          <Stack
            gap={4}
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="500px"
            sx={{ position: "relative" }}
          >
            <StrategySectionBackgroundSVG
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "450px",
                position: "absolute",
              }}
            />
            <Typography
              variant="body1"
              fontSize={56}
              fontWeight={700}
              textAlign="center"
              sx={{ zIndex: 2 }}
            >
              Supercharge Your Social Strategy
              <br /> with TSC Social!
            </Typography>
            <Button
              sx={{
                py: 1,
                px: 5,
                fontSize: 18,
                color: "#000",
                borderRadius: "8px",
                background: "#41C4DA",
              }}
            >
              Get Started Today!
            </Button>
          </Stack>
          {/*
          .##......##..#######..########..##....##.########.##........#######..##......##
          .##..##..##.##.....##.##.....##.##...##..##.......##.......##.....##.##..##..##
          .##..##..##.##.....##.##.....##.##..##...##.......##.......##.....##.##..##..##
          .##..##..##.##.....##.########..#####....######...##.......##.....##.##..##..##
          .##..##..##.##.....##.##...##...##..##...##.......##.......##.....##.##..##..##
          .##..##..##.##.....##.##....##..##...##..##.......##.......##.....##.##..##..##
          ..###..###...#######..##.....##.##....##.##.......########..#######...###..###.
          */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Workflow process</Typography>
            <WorkflowProcessSVGComponent />
          </Stack>
          {/*
          ..######..##.....##.##.......########.##.....##.########..########
          .##....##.##.....##.##..........##....##.....##.##.....##.##......
          .##.......##.....##.##..........##....##.....##.##.....##.##......
          .##.......##.....##.##..........##....##.....##.########..######..
          .##.......##.....##.##..........##....##.....##.##...##...##......
          .##....##.##.....##.##..........##....##.....##.##....##..##......
          ..######...#######..########....##.....#######..##.....##.########
          */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Culture</Typography>
          </Stack>
          {/*
          .########.##.....##..#######..##.......##.....##.########.####..#######..##....##
          .##.......##.....##.##.....##.##.......##.....##....##.....##..##.....##.###...##
          .##.......##.....##.##.....##.##.......##.....##....##.....##..##.....##.####..##
          .######...##.....##.##.....##.##.......##.....##....##.....##..##.....##.##.##.##
          .##........##...##..##.....##.##.......##.....##....##.....##..##.....##.##..####
          .##.........##.##...##.....##.##.......##.....##....##.....##..##.....##.##...###
          .########....###.....#######..########..#######.....##....####..#######..##....##
          */}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Evolution</Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Home;

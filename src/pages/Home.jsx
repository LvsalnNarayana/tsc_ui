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
        <Stack width="100%" sx={{ color: "#fff", backgroundColor: "#000" }}>
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
            <Box
              component="img"
              src="/hero_pattern.png"
              sx={{
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100%",
                height: "60vh",
                objectFit: "cover",
                position: "absolute",
                maskImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.4))",
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
                        borderRadius: 20,
                        backgroundColor: "#ffffff20",
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
                        borderRadius: 20,
                        background: "linear-gradient(180deg, #525252, #292929)",
                        "&:hover": {
                          background:
                            "linear-gradient(180deg, #6b6b6b, #3d3d3d)",
                        },
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
            py={3}
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
                fontSize: 18,
                lineHeight: 1,
                color: "#fff",
                borderRadius: 20,
                background: "linear-gradient(180deg, #525252, #292929)",
              }}
            >
              How we work
            </Typography>
            <Typography fontSize={60} textAlign="center">
              We guide your journey in adapting to evolving
              <br /> business demands, creating tangible value for
              <br /> your organization and customers.
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Stack
                gap={3}
                width={300}
                direction="column"
                alignItems="center"
                justifyContent="center"
                p={2}
              >
                <Typography
                  fontSize={30}
                  lineHeight={1.2}
                  textAlign="center"
                  fontWeight={400}
                >
                  Innovate
                </Typography>
                <Typography fontSize={18} lineHeight={1.2} textAlign="center">
                  Create value and make a positive change with our solutions
                </Typography>
              </Stack>
              <Stack
                gap={3}
                width={300}
                direction="column"
                alignItems="center"
                justifyContent="center"
                p={2}
              >
                <Typography
                  fontSize={30}
                  lineHeight={1.2}
                  textAlign="center"
                  fontWeight={400}
                >
                  Accelerate
                </Typography>
                <Typography fontSize={18} lineHeight={1.2} textAlign="center">
                  Use data and emerging tech for fast business growth.
                </Typography>
              </Stack>
              <Stack
                gap={3}
                width={300}
                direction="column"
                alignItems="center"
                justifyContent="center"
                p={2}
              >
                <Typography
                  fontSize={30}
                  lineHeight={1.2}
                  textAlign="center"
                  fontWeight={400}
                >
                  Thrive
                </Typography>
                <Typography fontSize={18} lineHeight={1.2} textAlign="center">
                  Reboot your business through digital transformation and beat
                  the competition
                </Typography>
              </Stack>
            </Stack>
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
            gap={8}
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            position="relative"
          >
            <Typography fontSize={60}>Smart Solution</Typography>
            <Typography
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
          >
            <Typography variant="h5" textAlign="center" fontSize={40}>
              Win the market where competitors are
              <br /> getting stronger, smarter and faster.
            </Typography>
          </Stack>
          <Container maxWidth="laptop">
            <Stack
              gap={3}
              py={10}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              height="fit-content"
            >
              <Typography variant="h5" textAlign="left" fontSize={60}>
                Innovative Services
              </Typography>
              <Typography
                width="50%"
                variant="body1"
                fontSize={18}
                color="#ffffff80"
                lineHeight={1.5}
              >
                Our range of innovative services is designed to deliver maximum
                value in technology, user experience, and client satisfaction.
                We ensure our clients get maximum ROl on their innovation
                investments and scale exponentially.
              </Typography>
            </Stack>
          </Container>
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
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Strategy section</Typography>
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

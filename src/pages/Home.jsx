import React from "react";

import {
  Box,
  Stack,
  Button,
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
            <Stack></Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Smart Solution</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Innovative Services</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Strategy section</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Workflow process</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">Culture</Typography>
          </Stack>
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

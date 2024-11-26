/* eslint-disable operator-linebreak */
import { useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

import {
  Box,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
} from "@mui/material";

const HomeSmartSolutionSection = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = scrollPercentage.onChange((latest) => {
      console.log("Scroll Percentage:", latest);

      if (latest > 50) {
        setCurrentSlide(2);
      } else {
        setCurrentSlide(1);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, [scrollPercentage]);

  return (
    <Container>
      <Stack
        ref={containerRef}
        sx={{
          height: "600vh",
          overflowY: "clip",
          position: "relative",
        }}
      >
        {/* Sticky Content */}
        <Stack
          py={10}
          direction="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{
            top: 10,
            zIndex: 10,
            position: "sticky",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <Typography
            mb={2}
            fontSize={{
              laptop: 60,
              tablet: 32,
              mobile: 32,
              desktop: 60,
            }}
            textAlign="center"
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
            mb={10}
            fontSize={18}
            width={{
              laptop: "60%",
              desktop: "60%",
              tablet: "100%",
              mobile: "100%",
            }}
            textAlign={{
              tablet: "left",
              mobile: "left",
              laptop: "center",
              desktop: "center",
            }}
            lineHeight={1.5}
            className="lato responsive-text"
            color="rgba(255, 255, 255, 0.80)"
            letterSpacing="1px"
          >
            Explore our comprehensive range of innovative services designed
            <br /> to elevate your business capabilities across various domains,
            <br />
            ensuring optimal efficiency and client satisfaction.
          </Typography>

          <Stack
            width={{
              laptop: "60%",
              desktop: "60%",
              tablet: "100%",
              mobile: "100%",
            }}
          >
            <Stack
              gap={{
                tablet: 3,
                mobile: 3,
                laptop: 10,
                desktop: 10,
              }}
              direction="row"
              justifyContent="flex-start"
              alignItems={{
                laptop: "center",
                desktop: "center",
                tablet: "flex-start",
                mobile: "flex-start",
              }}
            >
              <Stack
                width="40%"
                flexShrink={0}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={
                    currentSlide === 1 ? "/solutions_1.png" : "/solutions_2.png"
                  }
                  width="100%"
                  maxHeight="100%"
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    objectFit: {
                      laptop: "cover",
                      desktop: "cover",
                      tablet: "contain",
                      mobile: "contain",
                    },
                  }}
                />
              </Stack>

              <Stack
                flexShrink={0}
                justifyContent="flex-start"
                alignItems="center"
                height="100%"
                sx={{ zIndex: 2, position: "relative" }}
              >
                <Typography
                  fontSize={{
                    laptop: 60,
                    tablet: 24,
                    mobile: 24,
                    desktop: 60,
                  }}
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                  color={currentSlide === 1 ? "#fff" : "#ffffff50"}
                >
                  01
                </Typography>

                <Divider
                  orientation="vertical"
                  sx={{
                    borderWidth: 3,
                    height: "150px",
                    borderColor: currentSlide === 1 ? "#41c4da" : "#112334",
                  }}
                />
                <Divider
                  orientation="vertical"
                  sx={{
                    borderWidth: 3,
                    height: "150px",
                    borderColor: currentSlide === 2 ? "#41c4da" : "#112334",
                  }}
                />
                <Typography
                  fontSize={{
                    laptop: 60,
                    tablet: 24,
                    mobile: 24,
                    desktop: 60,
                  }}
                  fontWeight="bold"
                  sx={{ mt: 1 }}
                  color={currentSlide === 2 ? "#fff" : "#ffffff50"}
                >
                  02
                </Typography>
              </Stack>

              <Stack
                width="20%"
                flexShrink={0}
                gap={3}
                justifyContent={{
                  laptop: "cenyter",
                  desktop: "center",
                  tablet: "flex-start",
                  mobile: "flex-start",
                }}
                alignItems="flex-start"
                flexGrow={1}
                height="100%"
              >
                <Typography
                  fontSize={{
                    laptop: 60,
                    tablet: 18,
                    mobile: 18,
                    desktop: 60,
                  }}
                  fontWeight="normal"
                >
                  Social Media CRM
                </Typography>
                <Typography
                  fontSize={{
                    laptop: 18,
                    tablet: 14,
                    mobile: 14,
                    desktop: 18,
                  }}
                  lineHeight={1.5}
                  color="rgba(255, 255, 255, 0.80)"
                  letterSpacing="1px"
                  className="lato"
                >
                  Engage and retain customers with our advanced social media CRM
                  solutions. Harness the power of social platforms to build
                  meaningful relationships and drive business growth.
                </Typography>
                <Button
                  sx={{
                    py: 1.7,
                    lineHeight: 1,
                    color: "#fff",
                    borderRadius: "99px",
                    background: "rgba(255, 255, 255, 0.30)",
                    px: {
                      laptop: 6,
                      tablet: 4,
                      mobile: 4,
                      desktop: 6,
                    },
                    fontSize: {
                      laptop: 18,
                      tablet: 14,
                      mobile: 14,
                      desktop: 18,
                    },
                  }}
                >
                  Know More
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Box
            component="img"
            src="/hero_pattern.png"
            sx={{
              left: 0,
              bottom: 0,
              zIndex: 1,
              opacity: 0.4,
              width: "100%",
              height: "60vh",
              objectFit: "cover",
              position: "absolute",
              maskImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0.4))",
            }}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeSmartSolutionSection;

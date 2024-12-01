import React from "react";

import { Box, Stack, Button, Typography } from "@mui/material";

const ProductPersonalized = () => {
  return (
    <>
      <Stack
        direction={{
          laptop: "row",
          desktop: "row",
          mobile: "column",
          tablet: "column",
        }}
        spacing={10}
        pl={{
          laptop: 10,
          desktop: 10,
          mobile: 2,
          tablet: 2,
        }}
      >
        <Stack direction="column" spacing={2}>
          <Typography
            fontSize={{
              laptop: 56,
              mobile: 32,
              tablet: 32,
              desktop: 56,
            }}
            lineHeight={1.5}
            color="#fff"
            fontWeight={700}
          >
            Choose Personalized CRM Software to Build Your Business
          </Typography>
          <Typography
            fontSize={24}
            lineHeight={1.5}
            color="#ffffff60"
            fontWeight={400}
            className="lato responsive-text"
          >
            Build personalized CRM software solutions that fit your business
            processes and give you a single customer view to make the strategy.
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 32,
                  mobile: 16,
                  tablet: 16,
                  desktop: 32,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                Operational CRM
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 32,
                  mobile: 16,
                  tablet: 16,
                  desktop: 32,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                Analytical CRM
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 32,
                  mobile: 16,
                  tablet: 16,
                  desktop: 32,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                E-Commerce CRM
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box component="img" src="/badge.png" width={42} />
              <Typography
                variant="body1"
                fontSize={{
                  laptop: 32,
                  mobile: 16,
                  tablet: 16,
                  desktop: 32,
                }}
                fontWeight={500}
                lineHeight={1}
                className="lato"
              >
                Small Business and Enterprise CRM
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" width="100%" spacing={2}>
          <Box component="img" src="/mock.png" width="100%" />
        </Stack>
      </Stack>
      <Button
        sx={{
          gap: 1,
          py: 1.7,
          fontSize: 18,
          lineHeight: 1,
          color: "#fff",
          width:"fit-content",
          mx:"auto",
          mb:10,
          display: "flex",
          borderRadius: "99px",
          alignItems: "center",
          boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
          background: "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
          px: {
            mobile: 3,
            tablet: 3,
            laptop: 6,
            desktop: 6,
          },
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
        Lets talk
        <img alt="arrow" src="/ArrowUpRight.svg" />
      </Button>
    </>
  );
};

export default ProductPersonalized;

import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

const HomeInnovativeServicesSection = () => {
  return (
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
            width="60%"
            textAlign="left"
            lineHeight={1.5}
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
              icon: "/home_phone.svg",
              title: "Mobile App Development",
              description:
                "Grab attention with robust user-friendly mobile app solutions \n built with the latest technologies.",
            },
            {
              id: 2,
              title: "Web Development",
              icon: "/home_laptop.svg",
              description:
                "Boost your online presence with our premium services. We build \n fast, intuitive websites and online solutions for any complexity.",
            },
            {
              id: 3,
              title: "E-commerce Services",
              icon: "/home_shopping_cart.svg",
              description:
                "Get more from your business with a feature-rich eStore. Enjoy\n customized, mobile-friendly solutions that enhance the shopping \nexperience and deliver results.",
            },
            {
              id: 4,
              icon: "/home_cloud.svg",
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
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  borderRadius: "20px",
                  border: "2px solid rgba(255, 255, 255, 0.10)",
                }}
              >
                <Stack width="60%" gap={2}>
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
                      __html: service?.description.replace(/\n/gu, "<br />"),
                    }}
                  />
                </Stack>
                <Box component="img" src={service?.icon} width={90} />
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </Stack>
  );
};

export default HomeInnovativeServicesSection;

import React from "react";

import { Stack, Container, Typography } from "@mui/material";

import ServiceCard from "../services/ServiceCard";

const ProductServices = () => {
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
            CRM Services
          </Typography>
          <Typography
            fontSize={{
              laptop: 18,
              tablet: 16,
              mobile: 16,
              desktop: 18,
            }}
            lineHeight={1.5}
            textAlign="center"
            color="#ffffff80"
            className="lato responsive-text"
          >
            Manage your business better with our CRM services and best
            practices. Collect
            <br /> data, automate tasks and get insights to make better
            decisions.
          </Typography>
          <Stack
            sx={{
              gap: "50px",
              width: "100%",
              display: "grid",
              gridAutoRows: "auto",
              gridTemplateRows: "auto",
              gridTemplateColumns: {
                laptop: "repeat(2, 1fr)",
                tablet: "repeat(1, 1fr)",
                mobile: "repeat(1, 1fr)",
                desktop: "repeat(2, 1fr)",
              },
            }}
          >
            {[
              {
                id: 1,
                title: "CRM Consulting",
                icon: "/message_small.svg",
                description: `Grow your business with expert advice and custom solutions designed for your business. Let’s grow together.`,
              },
              {
                id: 2,
                icon: "/switch_small.svg",
                title: "CRM Platform Customization",
                description: `We customize and tailor platforms to fit your industry and help you manage customer relationships better.`,
              },
              {
                id: 3,
                title: "CRM Migration",
                icon: "/reload_small.svg",
                description: `Get a smooth migration at TSC. Upgrade your platform to the latest and greatest with 100% data integrity and no downtime.`,
              },
              {
                id: 4,
                title: "CRM Integration",
                icon: "/settings_small.svg",
                description: `Get 360-degree customer management with modern and useful integrations like chatbots, analytics tools, and IoT feeds.`,
              },
              {
                id: 5,
                title: "CRM Testing",
                icon: "/reload_small.svg",
                description: `Test performance and usability with our testing service. By using our service you can prevent your business from inconsistencies and defects.`,
              },
              {
                id: 6,
                title: "Get in touch to know more",
              },
            ].map((card) => {
              return <ServiceCard card={card} key={card?.id} minHeight={100} />;
            })}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ProductServices;

import React from "react";

import { Stack, Button, Container, Typography } from "@mui/material";

const ProductSocialMediaSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        py={8}
        gap={{
          laptop: 7,
          tablet: 2,
          mobile: 2,
          desktop: 7,
        }}
        alignItems="center"
      >
        <Typography
          fontSize={{
            laptop: 60,
            tablet: 32,
            mobile: 32,
            desktop: 60,
          }}
          lineHeight={1.2}
          textAlign="center"
          sx={{
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Drive Real Impact on Social Media
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
          From Engagement to ROI. Save time, get organized and manage your
          social
          <br /> media with our Social Media CRM. Measure and drive real
          business impact from your social campaigns in one place.
        </Typography>

        <Stack
          my={{
            laptop: 2,
            tablet: 2,
            mobile: 2,
            desktop: 2,
          }}
          gap={{
            laptop: 7,
            desktop: 7,
            tablet: 10,
            mobile: 10,
          }}
          width="100%"
          direction={{
            laptop: "column",
            tablet: "column",
            mobile: "column",
            desktop: "column",
          }}
          justifyContent="center"
          alignItems="stretch"
        >
          {[
            {
              id: 1,
              icon: "/control social media_1.mp4",
              title: "Measure and Prove Your Social Media ROI",
              description: `You know social media is more than brand awareness. Now you can prove it by finding out what posts and conversations drive sales, leads, and traffic. Pull data from Google Analytics. Tie your social media to real revenue goals. Know where to spend your budget.`,
            },
            {
              id: 2,
              icon: "/ethics.mp4",
              title: "Control Your Social Media Content",
              description: `Plan and schedule your social media content across all platforms with a simple post scheduler and shared calendars. Manage your content. Customize your post content for each platform. Collaborate with internal and external teams.`,
            },
            {
              id: 3,
              icon: "/listen.mp4",
              title: "Listen to the Conversations that Matter",
              description: `Monitor and track mentions of your brand, industry, and competitors. Capture conversations from social networks, news sites, and blogs. Measure and protect your brand reputation. Get inspiration for content. Find out what your customers want and increase brand loyalty.`,
            },
            {
              id: 4,
              icon: "/charts.mp4",
              title: "Create Reports Without the Pain",
              description: `Make better decisions with social media reports that don’t take all day to create. Compare key social metrics across all channels from one dashboard. See your top posts for each platform. Build and automate custom, presentation-ready social media reports.`,
            },
            {
              id: 5,
              icon: "/Measure_1.mp4",
              title: "Integrates with Your Existing Tools and Platforms",
              description: `No more switching between social networks and other tools. Use our Social Media CRM to manage all your team’s social media marketing in one place.`,
            },
          ].map((livesItem) => {
            return (
              <Stack
                key={livesItem.id}
                px={5}
                py={5}
                direction={{
                  laptop: "row",
                  desktop: "row",
                  mobile: "column",
                  tablet: "column",
                }}
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  borderRadius: "20px",
                  border: "2px solid transparent",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.40)",
                  },
                }}
              >
                <Stack
                  gap={2}
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  width={{
                    laptop: "50%",
                    desktop: "50%",
                    tablet: "100%",
                    mobile: "100%",
                  }}
                  height="100%"
                  sx={{ zIndex: 3 }}
                >
                  <Typography
                    variant="body1"
                    color="#fff"
                    fontSize={36}
                    lineHeight={1.4}
                    fontWeight={400}
                  >
                    {livesItem?.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#929292"
                    fontSize={16}
                    lineHeight={1.4}
                    fontWeight={400}
                    className="lato"
                    letterSpacing={1}
                  >
                    {livesItem?.description}
                  </Typography>
                </Stack>

                <Stack
                  width="300px"
                  height="300px"
                  sx={{
                    flexShrink: 0,
                    overflow: "hidden",
                    borderRadius: "10px",
                    position: "relative",
                  }}
                >
                  <video
                    src={livesItem?.icon}
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
        <Button
          sx={{
            py: 1.7,
            fontSize: 18,
            lineHeight: 1,
            color: "#fff",
            borderRadius: "99px",
            boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
            background:
              "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
            px: {
              mobile: 3,
              tablet: 3,
              laptop: 6,
              desktop: 6,
            },
            display: "flex",
            alignItems: "center",
            gap: 1,
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
      </Stack>
    </Container>
  );
};

export default ProductSocialMediaSection;

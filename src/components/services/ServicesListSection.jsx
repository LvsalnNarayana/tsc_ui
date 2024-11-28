/* eslint-disable react/no-array-index-key */
/* eslint-disable max-lines */
import React from "react";

import { Stack, Container, Typography } from "@mui/material";

import ServiceCard from "./ServiceCard";

const ServicesListSection = () => {
  return (
    <Container maxWidth="desktop">
      <Stack gap={4}>
        <Typography
          variant="h1"
          align="center"
          fontWeight={400}
          fontSize={{
            laptop: 60,
            mobile: 32,
            tablet: 32,
            desktop: 60,
          }}
          lineHeight={1.2}
          color="transparent"
          sx={{
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            zIndex: 2,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          We craft experiences, foster
          <br /> innovations, and drive acceleration.
        </Typography>
        <Typography
          fontSize={{
            laptop: 20,
            mobile: 16,
            tablet: 16,
            desktop: 20,
          }}
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
        <Stack
          display="grid"
          gridTemplateColumns={{
            laptop: "repeat(2, 1fr)",
            mobile: "repeat(1, 1fr)",
            tablet: "repeat(1, 1fr)",
            desktop: "repeat(2, 1fr)",
          }}
          gap={10}
          py={{
            laptop: 8,
            desktop: 8,
            mobile: 10,
            tablet: 10,
          }}
        >
          {[
            {
              id: 1,
              icon: "/phone_small.svg",
              title: "Mobile Application Development",
              services: [
                "iOS App Development",
                "Android App Development",
                "Cross-platform App Development",
                "UI/UX Design",
                "App Maintenance and Support",
              ],
              description: `Get innovative mobile solutions for your business. We redefine 
              user appointments using the latest technologies to deliver 
              robust and user-friendly applications. Explore Our Mobile 
              Application Development Services.`,
            },
            {
              id: 2,
              icon: "/dev_small.svg",
              title: "Web Development",
              description: `Get bespoke web solutions for your online presence. We put user
              experience first, using the latest technologies to create
              intuitive and high-performing websites. Explore Our Web
              Development Services`,
              services: [
                "Custom Website Development",
                "Front-end and Back-end Development",
                "Content Management Systems (CMS)",
                "E-commerce Solutions",
                "Website Maintenance and Support",
              ],
            },
            {
              id: 3,
              icon: "/cloud_small.svg",
              title: "Cloud Technology for Business Growth",
              description: ` Get business with the cloud. Leverage the cloud for streamlined
              performance. Adopt industry-specific cloud solutions for a faster
              and more efficient future. We maximize the cloud for every byte of
              your business data. Use the cloud as your launchpad for the
              future.`,
            },
            {
              id: 4,
              icon: "/cart_small.svg",
              title: "E-Commerce Solutions for All Businesses",
              description: `Reach global markets and engage customers 24/7 with robust and feature-rich online stores. Show your products and services to the world using the latest E-Commerce tools. Let customers explore, trust, and discover your offerings at their convenience.`,
            },
            {
              id: 5,
              icon: "/star_small.svg",
              title: "Quality Assurance and Software Testing",
              description: `Experience a new level of QA and software testing. We redefine
              user interactions using a data-driven approach to boost speed,
              productivity, and quality across systems and applications.`,
              service: [
                "Discover Our Software Testing Services",
                "Manual Testing",
                "Full Lifecycle Testing",
                "Automation Testing",
                "Product Testing",
              ],
            },
            {
              id: 6,
              icon: "/switch_small.svg",
              title: "Smart Solutions and HR On-Demand",
              description: `Stay ahead in a rapidly evolving market—while we manage your workforce with tailored HR as a Service, providing skilled employees on our payroll to meet your business needs efficiently.`,
            },
          ]?.map((card, index) => {
            return <ServiceCard card={card} key={index} />;
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ServicesListSection;

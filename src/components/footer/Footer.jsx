import React from "react";

import { Stack, Divider, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="desktop">
      <Stack
        direction={{
          laptop: "row",
          desktop: "row",
          mobile: "column",
          tablet: "column",
        }}
        justifyContent="space-between"
        alignItems="flex-end"
        gap={{
          laptop: 0,
          mobile: 5,
          tablet: 5,
          desktop: 0,
        }}
      >
        <Stack
          width={{
            tablet: "100%",
            mobile: "100%",
            laptop: "300px",
            desktop: "300px",
          }}
          gap={2}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <img src="/logo.svg" alt="logo" width={50} />
            <Stack>
              <Typography
                variant="body1"
                fontSize={15}
                fontWeight={500}
                color="#708090"
              >
                TEKAMIL ALSAHABA
              </Typography>
              <Typography
                variant="body1"
                fontSize={11}
                fontWeight={500}
                color="#708090"
              >
                Transforming Visions into Reality
              </Typography>
            </Stack>
          </Stack>
          <Typography color="#fff" fontSize={16} lineHeight={1.5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut
          </Typography>
        </Stack>
        <Stack
          width={{
            tablet: "100%",
            mobile: "100%",
            laptop: "300px",
            desktop: "300px",
          }}
          gap={3}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <img src="/email_footer.svg" alt="logo" width={30} />
            <Typography
              variant="body1"
              fontSize={16}
              fontWeight={400}
              color="#fff"
            >
              info@TSC.com
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <img src="/phone_footer.svg" alt="logo" width={30} />
            <Typography
              variant="body1"
              fontSize={16}
              fontWeight={400}
              color="#fff"
            >
              (001) 1231 3435
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={4}>
            <img src="/facebook_footer.svg" alt="logo" width={30} />
            <img src="/instagram_footer.svg" alt="logo" width={30} />
            <img src="/linkedin_footer.svg" alt="logo" width={30} />
            <img src="/dribble+footer.svg" alt="logo" width={30} />
          </Stack>
        </Stack>
      </Stack>
      <Divider flexItem sx={{ my: 5, borderColor: "#ffffff40" }} />
      <Stack
        direction={{
          laptop: "row",
          desktop: "row",
          mobile: "column",
          tablet: "column",
        }}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        pb={8}
        px={2}
        gap={{
          laptop: 0,
          mobile: 5,
          tablet: 5,
          desktop: 0,
        }}
      >
        <Stack direction="row" alignItems="center" gap={4}>
          <Typography color="#fff" fontSize={16} lineHeight={1.5}>
            Process
          </Typography>
          <Typography color="#fff" fontSize={16} lineHeight={1.5}>
            Benefits
          </Typography>
          <Typography color="#fff" fontSize={16} lineHeight={1.5}>
            Services
          </Typography>
          <Typography color="#fff" fontSize={16} lineHeight={1.5}>
            Portfolio
          </Typography>
          <Typography color="#fff" fontSize={16} lineHeight={1.5}>
            FAQ
          </Typography>
        </Stack>
        <Typography color="#fff" fontSize={16} lineHeight={1.5}>
          © 2023 shantogfx - All Right Reserved
        </Typography>
      </Stack>
    </Container>
  );
};

export default Footer;

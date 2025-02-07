/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-lines */
import React from "react";

import {
  Box,
  List,
  Stack,
  Divider,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";

import AboutHeroPattern from "../components/SVGComponents/AboutHeroPattern";

const TermsConditions = () => {
  return (
    <Stack
      width="100%"
      maxWidth="100%"
      sx={{
        pb: 15,
        color: "#fff",
        fontFamily: "Dubai",
        position: "relative",
        backgroundColor: "#040B12",
      }}
    >
      <Stack
        style={{
          height: "300px",
          display: "flex",
          paddingTop: "87px",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AboutHeroPattern style={{ top: 0, left: 0, position: "absolute" }} />
        <Typography
          variant="h1"
          align="center"
          fontSize={{
            tablet: 35,
            mobile: 35,
            laptop: 65,
            desktop: 65,
          }}
          fontWeight={500}
          sx={{
            zIndex: 2,
            color: "transparent",
            whiteSpace: "nowrap",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
            background:
              "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(4,11,18) 100%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
          }}
        >
          Terms & Conditions
        </Typography>
      </Stack>
      <Stack mt={10} width="70%" mx="auto">
        <Typography variant="body1" fontSize={18} lineHeight={1.5}>
          Greetings and welcome to the TSC website. By continuing to explore and
          utilize our website, you are consenting to adhere to the terms and
          conditions outlined herein.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            my={2}
            color="#45BDD6"
          >
            1. Introduction
          </Typography>
          <Typography variant="body1" fontSize={18} lineHeight={1.5}>
            Welcome to the TSC Company website (the &quot;Website&quot;). These
            terms and conditions (&quot;Terms&quot;) govern your website use.
            You agree to these Terms in full by accessing and using the Website.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            mt={3}
            mb={2}
            color="#45BDD6"
          >
            2. Intellectual Property Rights
          </Typography>
          <Typography variant="body1" fontSize={18} lineHeight={1.5}>
            Unless otherwise stated, TSC Company owns the intellectual property
            rights to the website and materials on the website. All these
            intellectual property rights are reserved.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            mt={3}
            mb={2}
            color="#45BDD6"
          >
            3. License to Use Website
          </Typography>
          <List
            sx={{
              my: 0,
              pl: 4,
              py: 0,
              fontSize: 18,
              lineHeight: 1.5,
              listStyleType: "disc",
            }}
          >
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Republish material from this TSC Website (including republication on another website)." />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Sub-license, sell, copy, or provide material from the Website." />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Show any material from the Website in public." />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Reproduce, duplicate, or exploit material for commercial use." />
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            mt={3}
            mb={2}
            color="#45BDD6"
          >
            4. Limitations of Liability
          </Typography>
          <Typography variant="body1" fontSize={18} lineHeight={1.5}>
            TSC Company will not be liable for any direct, indirect, special, or
            consequential loss arising from the use of this website.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            mt={3}
            mb={2}
            color="#45BDD6"
          >
            5. Links
          </Typography>
          <Typography variant="body1" fontSize={18} lineHeight={1.5}>
            Our website may contain links to external websites. We disclaim
            responsibility for their data collection policies.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            mt={3}
            mb={2}
            color="#45BDD6"
          >
            6. Variation
          </Typography>
          <Typography variant="body1" fontSize={18} lineHeight={1.5}>
            TSC Company may revise these terms periodically. Please check this
            page regularly.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            mt={3}
            mb={2}
            color="#45BDD6"
          >
            7. Entire Agreement
          </Typography>
          <Typography variant="body1" fontSize={18} lineHeight={1.5}>
            These terms constitute the entire agreement between you and TSC
            Company regarding website use.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontSize={26}
            lineHeight={1.5}
            mt={3}
            mb={2}
            color="#45BDD6"
          >
            8. Law and Jurisdiction
          </Typography>
          <Typography variant="body1" fontSize={18} lineHeight={1.5}>
            These terms will be governed by the laws of Saudi Arabia. Any
            disputes will be subject to the exclusive jurisdiction of the courts
            of Saudi Arabia.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default TermsConditions;

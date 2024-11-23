/* eslint-disable max-lines */
import React from "react";

import {
  Box,
  Stack,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
} from "@mui/material";

const HomeConnectSection = () => {
  return (
    <Container>
      <Stack
        p={8}
        gap={3}
        sx={{
          borderRadius: "35px",
          background: "#081420",
          border: "3px solid #0F263D",
        }}
      >
        <Typography
          fontSize={56}
          lineHeight={1}
          fontWeight={700}
          textAlign="center"
        >
          Let&apos;s Begin the Dialogue
        </Typography>
        <Typography
          fontSize={20}
          lineHeight={1.5}
          fontWeight={400}
          textAlign="center"
          color="rgba(255, 255, 255, 0.80"
        >
          We’ve helped many businesses transform. Let’s create a success story
          for your business.
        </Typography>
        <Stack
          mt={7}
          gap={10}
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Stack width="100%" gap={4}>
            <Stack>
              <Typography fontWeight={700} fontSize={40} lineHeight={1.2}>
                Connect With Us
              </Typography>
              <Typography fontSize={20} lineHeight={1.5} fontWeight={400}>
                Tell us about your requirements. We’ll get back to you soon.
              </Typography>
            </Stack>
            <TextField
              placeholder="Name*"
              sx={{
                height: "58px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                input: {
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 18,
                    color: "rgba(255, 255, 255, 0.60)",
                  },
                },
              }}
            />
            <TextField
              placeholder="Company Name (Optional)"
              sx={{
                height: "58px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                input: {
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 18,
                    color: "rgba(255, 255, 255, 0.60)",
                  },
                },
              }}
            />
            <TextField
              placeholder="Phone Number*"
              sx={{
                height: "58px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                input: {
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 18,
                    color: "rgba(255, 255, 255, 0.60)",
                  },
                },
              }}
            />
            <TextField
              placeholder="Email Address*"
              sx={{
                height: "58px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                input: {
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 18,
                    color: "rgba(255, 255, 255, 0.60)",
                  },
                },
              }}
            />
            <TextField
              multiline
              rows={4}
              placeholder="Describe your requirements*"
              sx={{
                borderRadius: "12px",
                "& .MuiOutlinedInput-multiline": {
                  padding: 0,
                },
                "& textarea": {
                  color: "#fff",
                  padding: "0px",
                  "&::placeholder": {
                    fontSize: 18,
                    color: "rgba(255, 255, 255, 0.60)",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.30)",
                  "&:hover": {
                    borderColor: "rgba(65, 196, 218, 0.50)",
                  },
                  "&.Mui-focused": {
                    borderColor: "rgba(65, 196, 218, 1)",
                  },
                },
              }}
            />

            <Stack direction="row" alignItems="center" gap={2}>
              <Box component="img" src="/link.svg" />
              <Stack>
                <Typography fontSize={16} lineHeight={1.2} fontWeight={400}>
                  Attach File
                </Typography>
                <Typography
                  fontSize={14}
                  lineHeight={1.2}
                  fontWeight={400}
                  color="rgba(255, 255, 255, 0.80)"
                >
                  (You may upload only doc, docx & pdf file. Max file size:
                  25MB)
                </Typography>
              </Stack>
            </Stack>
            <Button
              sx={{
                py: 1,
                fontSize: 24,
                color: "#000",
                fontWeight: 700,
                borderRadius: "12px",
                background: " #41C4DA",
              }}
            >
              Submit
            </Button>
          </Stack>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              width: "0px",
              borderTop: "0px",
              borderWidth: "2px",
              position: "relative",
              borderColor: "rgba(255, 255, 255, 0.50)",
            }}
          >
            <Box
              sx={{
                zIndex: 2,
                width: 30,
                height: 30,
                top: "50%",
                left: "50%",
                display: "flex",
                borderRadius: "100%",
                alignItems: "center",
                position: "absolute",
                justifyContent: "center",
                color: "rgba(255, 255, 255, 0.90)",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(50, 50, 50)",
                border: "2px solid rgba(255, 255, 255, 0.50)",
              }}
            >
              <Typography fontSize={12}>OR</Typography>
            </Box>
          </Divider>

          <Stack width="100%" gap={4}>
            <Typography fontSize={32} fontWeight={700} lineHeight={1.5}>
              Quick Connect
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={400}
              lineHeight={1.5}
              color="rgba(255, 255, 255, 0.80)"
            >
              We are just a tap away! Reach out to us for more information
            </Typography>
            <Stack
              gap={2}
              px={4}
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              sx={{
                minHeight: "100px",
                borderRadius: "12px",
                border: "1.6px solid rgba(65, 196, 218, 0.30)",
              }}
            >
              <Box component="img" src="/email.svg" width={40} />
              <Stack gap={0}>
                <Typography fontSize={18} fontWeight={500} lineHeight={1}>
                  Email
                </Typography>
                <Typography
                  fontSize={18}
                  fontWeight={300}
                  lineHeight={1.5}
                  color="#ffffff80"
                >
                  contact@tsc.com.sa
                </Typography>
              </Stack>
            </Stack>
            <Stack
              gap={2}
              px={4}
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              sx={{
                minHeight: "100px",
                borderRadius: "12px",
                border: "1.6px solid rgba(65, 196, 218, 0.30)",
              }}
            >
              <Box component="img" src="/phone.svg" width={40} />
              <Stack gap={0}>
                <Typography fontSize={18} fontWeight={500} lineHeight={1}>
                  Call
                </Typography>
                <Typography
                  fontSize={18}
                  fontWeight={300}
                  lineHeight={1.5}
                  color="#ffffff80"
                >
                  +966123456
                </Typography>
              </Stack>
            </Stack>
            <Stack
              gap={2}
              px={4}
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              sx={{
                minHeight: "100px",
                borderRadius: "12px",
                border: "1.6px solid rgba(65, 196, 218, 0.30)",
              }}
            >
              <Box component="img" src="/teams.svg" width={40} />
              <Stack gap={0}>
                <Typography fontSize={18} fontWeight={500} lineHeight={1}>
                  Teams
                </Typography>
                <Typography
                  fontSize={18}
                  fontWeight={300}
                  lineHeight={1.5}
                  color="#ffffff80"
                >
                  Teams.tsc
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeConnectSection;

/* eslint-disable max-lines */
/* eslint-disable operator-linebreak */
import React from "react";
import Lottie from "lottie-react";

import {
  Box,
  Stack,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ArrowGif from "../../assets/Arrow gif.json";

const HomeWorkflowProcessSection = () => {
  const laptopView = useMediaQuery((laptopTheme) => {
    return laptopTheme.breakpoints.between("laptop", "desktop");
  });
  const desktopView = useMediaQuery((desktopTheme) => {
    return desktopTheme.breakpoints.up("desktop");
  });

  return (
    <Container maxWidth="desktop" sx={{ zIndex: 20, position: "relative" }}>
      <Typography
        my={6}
        fontSize={{
          laptop: 60,
          tablet: 32,
          mobile: 32,
          desktop: 60,
        }}
        sx={{
          textAlign: "center",
          background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
          // eslint-disable-next-line perfectionist/sort-objects
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Workflow Process
      </Typography>

      <Stack
        mb={5}
        gap={5}
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        <Stack
          p={{
            laptop: 8,
            tablet: 4,
            mobile: 2,
            desktop: 8,
          }}
          gap={{
            laptop: 4,
            tablet: 2,
            mobile: 2,
            desktop: 4,
          }}
          width={{
            laptop: "60%",
            desktop: "60%",
            tablet: "100%",
            mobile: "100%",
          }}
          direction={{
            laptop: "row",
            desktop: "row",
            mobile: "column",
            tabley: "column",
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            overflow: "hidden",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <Box
            component="div"
            sx={{
              flexShrink: 0,
              width: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
              height: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100"
                height="100"
                rx="50"
                fill="white"
                fillOpacity="0.08"
              />
              <path
                d="M50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70Z"
                stroke="#41C4DA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M55.4442 42.5319C56.4213 42.2062 56.9099 42.0434 57.2347 42.1592C57.5175 42.2601 57.7399 42.4825 57.8408 42.7653C57.9566 43.0901 57.7938 43.5787 57.4681 44.5558L54.493 53.4811C54.4002 53.7593 54.3538 53.8985 54.2748 54.014C54.2048 54.1164 54.1164 54.2048 54.014 54.2748C53.8985 54.3538 53.7593 54.4002 53.4811 54.493L44.5558 57.4681C43.5787 57.7938 43.0901 57.9566 42.7653 57.8408C42.4825 57.7399 42.2601 57.5175 42.1592 57.2347C42.0434 56.9099 42.2062 56.4213 42.5319 55.4442L45.507 46.5189C45.5998 46.2407 45.6462 46.1015 45.7252 45.986C45.7952 45.8836 45.8836 45.7952 45.986 45.7252C46.1015 45.6462 46.2407 45.5998 46.5189 45.507L55.4442 42.5319Z"
                stroke="#41C4DA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <Stack
            gap={{
              laptop: 4,
              tablet: 2,
              mobile: 2,
              desktop: 4,
            }}
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Typography
              fontSize={{
                laptop: 40,
                tablet: 32,
                mobile: 32,
                desktop: 40,
              }}
              fontWeight={500}
              lineHeight={1.4}
            >
              Discover
            </Typography>
            <Typography
              fontSize={{
                laptop: 20,
                tablet: 16,
                mobile: 16,
                desktop: 20,
              }}
              fontWeight={300}
              lineHeight={1.4}
            >
              We start by understanding your business challenges, expectations,
              and success criteria for the solution.
            </Typography>
          </Stack>
        </Stack>
        {(desktopView || laptopView) && (
          <Lottie
            animationData={ArrowGif}
            style={{ width: "150px", height: "150px", marginBottom: "-50px" }}
          />
        )}
      </Stack>
      <Stack
        mb={5}
        gap={5}
        direction="row-reverse"
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        <Stack
          p={{
            laptop: 8,
            tablet: 4,
            mobile: 2,
            desktop: 8,
          }}
          gap={{
            laptop: 4,
            tablet: 2,
            mobile: 2,
            desktop: 4,
          }}
          width={{
            laptop: "60%",
            desktop: "60%",
            tablet: "100%",
            mobile: "100%",
          }}
          direction={{
            laptop: "row",
            desktop: "row",
            mobile: "column",
            tabley: "column",
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            overflow: "hidden",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <Box
            component="div"
            sx={{
              flexShrink: 0,
              width: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
              height: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100"
                height="100"
                rx="50"
                fill="white"
                fillOpacity="0.08"
              />
              <path
                d="M60.3317 33.3333L66.9984 40M33.665 66.6667L35.7924 58.8664C35.9312 58.3575 36.0006 58.1031 36.1071 57.8658C36.2017 57.6551 36.3179 57.4549 36.4539 57.2682C36.6071 57.058 36.7936 56.8715 37.1665 56.4985L54.3889 39.2762C54.7189 38.9461 54.8839 38.7811 55.0742 38.7193C55.2416 38.6649 55.4219 38.6649 55.5892 38.7193C55.7795 38.7811 55.9445 38.9461 56.2745 39.2762L61.0556 44.0572C61.3856 44.3872 61.5506 44.5522 61.6124 44.7425C61.6668 44.9099 61.6668 45.0902 61.6124 45.2575C61.5506 45.4478 61.3856 45.6128 61.0556 45.9428L43.8332 63.1652C43.4602 63.5382 43.2737 63.7247 43.0635 63.8778C42.8769 64.0138 42.6766 64.13 42.4659 64.2246C42.2286 64.3312 41.9742 64.4006 41.4653 64.5393L33.665 66.6667Z"
                stroke="#41C4DA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <Stack
            gap={4}
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Typography
              fontSize={{
                laptop: 40,
                tablet: 32,
                mobile: 32,
                desktop: 40,
              }}
              fontWeight={500}
              lineHeight={1.4}
            >
              Planning & Collaboration
            </Typography>
            <Typography
              fontSize={{
                laptop: 20,
                tablet: 16,
                mobile: 16,
                desktop: 20,
              }}
              fontWeight={300}
              lineHeight={1.4}
            >
              We collaborate to create processes and conduct mock-up sessions to
              align our team and your business, so we have a shared
              understanding.
            </Typography>
          </Stack>
        </Stack>
        {(desktopView || laptopView) && (
          <Lottie
            animationData={ArrowGif}
            style={{
              width: "150px",
              height: "150px",
              marginBottom: "-50px",
              transform: "scaleX(-1)",
            }}
          />
        )}
      </Stack>

      <Stack
        mb={5}
        gap={5}
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        <Stack
          p={{
            laptop: 8,
            tablet: 4,
            mobile: 2,
            desktop: 8,
          }}
          gap={{
            laptop: 4,
            tablet: 2,
            mobile: 2,
            desktop: 4,
          }}
          width={{
            laptop: "60%",
            desktop: "60%",
            tablet: "100%",
            mobile: "100%",
          }}
          direction={{
            laptop: "row",
            desktop: "row",
            mobile: "column",
            tabley: "column",
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            overflow: "hidden",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <Box
            component="div"
            sx={{
              flexShrink: 0,
              width: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
              height: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100"
                height="100"
                rx="50"
                fill="white"
                fillOpacity="0.08"
              />
              <path
                d="M58.001 58.3333L66.3343 50L58.001 41.6667M41.3343 41.6667L33.001 50L41.3343 58.3333M53.001 35L46.3343 65"
                stroke="#41C4DA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <Stack
            gap={{
              laptop: 4,
              tablet: 2,
              mobile: 2,
              desktop: 4,
            }}
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Typography
              fontSize={{
                laptop: 40,
                tablet: 32,
                mobile: 32,
                desktop: 40,
              }}
              fontWeight={500}
              lineHeight={1.4}
            >
              Execution & Development
            </Typography>
            <Typography
              fontSize={{
                laptop: 20,
                tablet: 16,
                mobile: 16,
                desktop: 20,
              }}
              fontWeight={300}
              lineHeight={1.4}
            >
              We develop and showcase the solution, focusing on coordination,
              resource management, and reqular stakeholder updates to ensure
              quality.
            </Typography>
          </Stack>
        </Stack>
        {(desktopView || laptopView) && (
          <Lottie
            animationData={ArrowGif}
            style={{ width: "150px", height: "150px", marginBottom: "-50px" }}
          />
        )}
      </Stack>

      <Stack
        mb={5}
        gap={5}
        direction="row-reverse"
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        <Stack
          p={{
            laptop: 8,
            tablet: 4,
            mobile: 2,
            desktop: 8,
          }}
          gap={{
            laptop: 4,
            tablet: 2,
            mobile: 2,
            desktop: 4,
          }}
          width={{
            laptop: "60%",
            desktop: "60%",
            tablet: "100%",
            mobile: "100%",
          }}
          direction={{
            laptop: "row",
            desktop: "row",
            mobile: "column",
            tabley: "column",
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            overflow: "hidden",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <Box
            component="div"
            sx={{
              flexShrink: 0,
              width: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
              height: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100"
                height="100"
                rx="50"
                fill="white"
                fillOpacity="0.08"
              />
              <path
                d="M56.9974 26.6719V29.9385C56.9974 31.2453 56.9974 31.8987 56.7431 32.3979C56.5194 32.8369 56.1624 33.1939 55.7234 33.4176C55.2242 33.6719 54.5709 33.6719 53.2641 33.6719H46.7307C45.4239 33.6719 44.7705 33.6719 44.2714 33.4176C43.8324 33.1939 43.4754 32.8369 43.2517 32.3979C42.9974 31.8987 42.9974 31.2453 42.9974 29.9385V26.6719M41.1307 73.3385H58.8641C61.4776 73.3385 62.7844 73.3385 63.7827 72.8299C64.6608 72.3825 65.3747 71.6686 65.8221 70.7905C66.3307 69.7922 66.3307 68.4855 66.3307 65.8719V34.1385C66.3307 31.525 66.3307 30.2182 65.8221 29.2199C65.3747 28.3418 64.6608 27.6279 63.7827 27.1805C62.7844 26.6719 61.4776 26.6719 58.8641 26.6719H41.1307C38.5172 26.6719 37.2104 26.6719 36.2121 27.1805C35.334 27.6279 34.6201 28.3418 34.1727 29.2199C33.6641 30.2182 33.6641 31.525 33.6641 34.1385V65.8719C33.6641 68.4855 33.6641 69.7922 34.1727 70.7905C34.6201 71.6686 35.334 72.3825 36.2121 72.8299C37.2104 73.3385 38.5172 73.3385 41.1307 73.3385Z"
                stroke="#41C4DA"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <Stack
            gap={4}
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Typography
              fontSize={{
                laptop: 40,
                tablet: 32,
                mobile: 32,
                desktop: 40,
              }}
              fontWeight={500}
              lineHeight={1.4}
            >
              Testing and Launch
            </Typography>
            <Typography
              fontSize={{
                laptop: 20,
                tablet: 16,
                mobile: 16,
                desktop: 20,
              }}
              fontWeight={300}
              lineHeight={1.4}
            >
              We test thoroughly to ensure the solution meets specifications and
              delivers on its promise before launch.
            </Typography>
          </Stack>
        </Stack>
        {(desktopView || laptopView) && (
          <Lottie
            animationData={ArrowGif}
            style={{
              width: "150px",
              height: "150px",
              marginBottom: "-50px",
              transform: "scaleX(-1)",
            }}
          />
        )}
      </Stack>

      <Stack
        mb={5}
        gap={5}
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-start"
      >
        <Stack
          p={{
            laptop: 8,
            tablet: 4,
            mobile: 2,
            desktop: 8,
          }}
          gap={{
            laptop: 4,
            tablet: 2,
            mobile: 2,
            desktop: 4,
          }}
          width={{
            laptop: "60%",
            desktop: "60%",
            tablet: "100%",
            mobile: "100%",
          }}
          direction={{
            laptop: "row",
            desktop: "row",
            mobile: "column",
            tabley: "column",
          }}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            overflow: "hidden",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <Box
            component="div"
            sx={{
              flexShrink: 0,
              width: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
              height: {
                mobile: 50,
                tablet: 50,
                laptop: 100,
                desktop: 100,
              },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="100"
                height="100"
                rx="50"
                fill="white"
                fill-opacity="0.08"
              />
              <path
                d="M50 56C53.3137 56 56 53.3137 56 50C56 46.6863 53.3137 44 50 44C46.6863 44 44 46.6863 44 50C44 53.3137 46.6863 56 50 56Z"
                stroke="#41C4DA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M63.4545 55.4545C63.2125 56.0029 63.1403 56.6113 63.2473 57.2011C63.3542 57.7909 63.6354 58.3351 64.0545 58.7636L64.1636 58.8727C64.5017 59.2104 64.7699 59.6115 64.9529 60.0529C65.1359 60.4944 65.2301 60.9676 65.2301 61.4455C65.2301 61.9233 65.1359 62.3965 64.9529 62.838C64.7699 63.2794 64.5017 63.6805 64.1636 64.0182C63.8259 64.3563 63.4249 64.6245 62.9834 64.8075C62.542 64.9905 62.0688 65.0847 61.5909 65.0847C61.113 65.0847 60.6398 64.9905 60.1984 64.8075C59.757 64.6245 59.3559 64.3563 59.0182 64.0182L58.9091 63.9091C58.4806 63.4899 57.9363 63.2088 57.3465 63.1018C56.7567 62.9949 56.1484 63.0671 55.6 63.3091C55.0622 63.5396 54.6036 63.9223 54.2806 64.4101C53.9575 64.8979 53.7842 65.4695 53.7818 66.0545V66.3636C53.7818 67.3281 53.3987 68.253 52.7168 68.9349C52.0348 69.6169 51.1099 70 50.1455 70C49.181 70 48.2561 69.6169 47.5742 68.9349C46.8922 68.253 46.5091 67.3281 46.5091 66.3636V66.2C46.495 65.5982 46.3002 65.0145 45.95 64.5249C45.5998 64.0353 45.1104 63.6623 44.5455 63.4545C43.9971 63.2125 43.3887 63.1403 42.7989 63.2473C42.2091 63.3542 41.6649 63.6354 41.2364 64.0545L41.1273 64.1636C40.7896 64.5017 40.3885 64.7699 39.9471 64.9529C39.5056 65.1359 39.0324 65.2301 38.5545 65.2301C38.0767 65.2301 37.6035 65.1359 37.162 64.9529C36.7206 64.7699 36.3195 64.5017 35.9818 64.1636C35.6437 63.8259 35.3755 63.4249 35.1925 62.9834C35.0095 62.542 34.9153 62.0688 34.9153 61.5909C34.9153 61.113 35.0095 60.6398 35.1925 60.1984C35.3755 59.757 35.6437 59.3559 35.9818 59.0182L36.0909 58.9091C36.5101 58.4806 36.7912 57.9363 36.8982 57.3465C37.0051 56.7567 36.9329 56.1484 36.6909 55.6C36.4604 55.0622 36.0777 54.6036 35.5899 54.2806C35.1021 53.9575 34.5305 53.7842 33.9455 53.7818H33.6364C32.6719 53.7818 31.747 53.3987 31.0651 52.7168C30.3831 52.0348 30 51.1099 30 50.1455C30 49.181 30.3831 48.2561 31.0651 47.5742C31.747 46.8922 32.6719 46.5091 33.6364 46.5091H33.8C34.4018 46.495 34.9855 46.3002 35.4751 45.95C35.9647 45.5998 36.3377 45.1104 36.5455 44.5455C36.7875 43.9971 36.8597 43.3887 36.7527 42.7989C36.6458 42.2091 36.3646 41.6649 35.9455 41.2364L35.8364 41.1273C35.4983 40.7896 35.2301 40.3885 35.0471 39.9471C34.8641 39.5056 34.7699 39.0324 34.7699 38.5545C34.7699 38.0767 34.8641 37.6035 35.0471 37.162C35.2301 36.7206 35.4983 36.3195 35.8364 35.9818C36.1741 35.6437 36.5751 35.3755 37.0166 35.1925C37.458 35.0095 37.9312 34.9153 38.4091 34.9153C38.887 34.9153 39.3602 35.0095 39.8016 35.1925C40.243 35.3755 40.6441 35.6437 40.9818 35.9818L41.0909 36.0909C41.5194 36.5101 42.0637 36.7912 42.6535 36.8982C43.2433 37.0051 43.8516 36.9329 44.4 36.6909H44.5455C45.0832 36.4604 45.5419 36.0777 45.8649 35.5899C46.1879 35.1021 46.3613 34.5305 46.3636 33.9455V33.6364C46.3636 32.6719 46.7468 31.747 47.4287 31.0651C48.1107 30.3831 49.0356 30 50 30C50.9644 30 51.8893 30.3831 52.5713 31.0651C53.2532 31.747 53.6364 32.6719 53.6364 33.6364V33.8C53.6387 34.3851 53.8121 34.9567 54.1351 35.4445C54.4582 35.9323 54.9168 36.315 55.4545 36.5455C56.0029 36.7875 56.6113 36.8597 57.2011 36.7527C57.7909 36.6458 58.3351 36.3646 58.7636 35.9455L58.8727 35.8364C59.2104 35.4983 59.6115 35.2301 60.0529 35.0471C60.4944 34.8641 60.9676 34.7699 61.4455 34.7699C61.9233 34.7699 62.3965 34.8641 62.838 35.0471C63.2794 35.2301 63.6805 35.4983 64.0182 35.8364C64.3563 36.1741 64.6245 36.5751 64.8075 37.0166C64.9905 37.458 65.0847 37.9312 65.0847 38.4091C65.0847 38.887 64.9905 39.3602 64.8075 39.8016C64.6245 40.243 64.3563 40.6441 64.0182 40.9818L63.9091 41.0909C63.4899 41.5194 63.2088 42.0637 63.1018 42.6535C62.9949 43.2433 63.0671 43.8516 63.3091 44.4V44.5455C63.5396 45.0832 63.9223 45.5419 64.4101 45.8649C64.8979 46.1879 65.4695 46.3613 66.0545 46.3636H66.3636C67.3281 46.3636 68.253 46.7468 68.9349 47.4287C69.6169 48.1107 70 49.0356 70 50C70 50.9644 69.6169 51.8893 68.9349 52.5713C68.253 53.2532 67.3281 53.6364 66.3636 53.6364H66.2C65.6149 53.6387 65.0433 53.8121 64.5555 54.1351C64.0677 54.4582 63.685 54.9168 63.4545 55.4545Z"
                stroke="#41C4DA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>

          <Stack
            gap={{
              laptop: 4,
              tablet: 2,
              mobile: 2,
              desktop: 4,
            }}
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Typography
              fontSize={{
                laptop: 40,
                tablet: 32,
                mobile: 32,
                desktop: 40,
              }}
              fontWeight={500}
              lineHeight={1.4}
            >
              Monitoring and Support
            </Typography>
            <Typography
              fontSize={{
                laptop: 20,
                tablet: 16,
                mobile: 16,
                desktop: 20,
              }}
              fontWeight={300}
              lineHeight={1.4}
            >
              After launch, we monitor the solution&rsquo;s features,
              performance, and key metrics to ensure it&apos;s on time, on
              budget, and scope.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeWorkflowProcessSection;

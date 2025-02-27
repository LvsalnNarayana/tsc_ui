/* eslint-disable max-lines */
import React from "react";

import { Box, Stack, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const ProductImpactSection = () => {
  const { language } = useLanguage();

  return (
    <Container maxWidth="desktop">
      <Stack
        py={{
          laptop: 5,
          tablet: 5,
          mobile: 5,
          desktop: 5,
        }}
        gap={{
          laptop: 7,
          desktop: 7,
          tablet: 10,
          mobile: 10,
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
          {language === "en" && " Drive Real Impact on Social Media"}
          {language === "ar" && "إحداث تأثير فعّال على منصات التواصل"}
        </Typography>
        <Typography
          fontSize={{
            laptop: 18,
            tablet: 16,
            mobile: 16,
            desktop: 18,
          }}
          width={{
            laptop: "60%",
            desktop: "60%",
            tablet: "100%",
            mobile: "100%",
          }}
          lineHeight={1.5}
          textAlign="center"
          color="#ffffff80"
          className="lato responsive-text"
        >
          {language === "en" && (
            <>
              From Engagement to ROI. Save time, get organized and manage your
              social media with our Social Media CRM. Measure and drive real
              business impact from your social campaigns in one place.
            </>
          )}
          {language === "ar" && (
            <>
              من المشاركة إلى العائد من الاستثمار. احصل على وقت أكبر ونظم شؤونك،
              وادِر حساباتك على وسائل التواصل الاجتماعي باستخدام إدارة علاقات
              <br />
              العملاء. قيّم تأثير أعمالك ونتائج حملاتك الاجتماعية في منصة واحده
              متكاملة
            </>
          )}
        </Typography>

        <Stack
          my={{
            laptop: 9,
            tablet: 2,
            mobile: 2,
            desktop: 9,
          }}
          gap={{
            laptop: 7,
            desktop: 7,
            tablet: 10,
            mobile: 10,
          }}
          width="100%"
          direction={{
            laptop: "row",
            desktop: "row",
            tablet: "column",
            mobile: "column",
          }}
          justifyContent="center"
          alignItems="center"
        >
          {[
            {
              id: 1,
              titleEnglish: "Manage Your Social Content",
              titleArabic: "إدارة المحتوى الخاص بوسائل التواصل لديك",
              descriptionArabic: `كل ما يلزمك لإدارة محتواك وتطوير علامتك التجارية على مختلف منصات التواصل الاجتماعي الأساسية.`,
              descriptionEnglish: `Everything you need to manage your content and grow your brand across all major social media platforms.`,
              icon: () => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M4 10.4C4 8.15979 4 7.03968 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C7.03969 4 8.15979 4 10.4 4H21.6C23.8402 4 24.9603 4 25.816 4.43597C26.5686 4.81947 27.1805 5.43139 27.564 6.18404C28 7.03968 28 8.15979 28 10.4V17.6C28 19.8402 28 20.9603 27.564 21.816C27.1805 22.5686 26.5686 23.1805 25.816 23.564C24.9603 24 23.8402 24 21.6 24H18.245C17.4129 24 16.9969 24 16.599 24.0817C16.2459 24.1541 15.9043 24.274 15.5833 24.4379C15.2216 24.6228 14.8967 24.8826 14.247 25.4024L11.0663 27.9469C10.5116 28.3908 10.2342 28.6127 10.0007 28.6129C9.79769 28.6131 9.60563 28.5208 9.47897 28.3622C9.33333 28.1797 9.33333 27.8245 9.33333 27.114V24C8.09337 24 7.47339 24 6.96472 23.8637C5.58436 23.4938 4.50617 22.4156 4.1363 21.0353C4 20.5266 4 19.9066 4 18.6667V10.4Z"
                      className="icon-hover-stroke"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9959 10.2657C14.7963 8.88053 12.7958 8.50794 11.2928 9.7763C9.78979 11.0447 9.57818 13.1653 10.7585 14.6654C11.4898 15.5948 13.3252 17.2922 14.6159 18.4493C15.0901 18.8743 15.3271 19.0868 15.6116 19.1724C15.8557 19.2459 16.1361 19.2459 16.3801 19.1724C16.6647 19.0868 16.9017 18.8743 17.3758 18.4493C18.6666 17.2922 20.502 15.5948 21.2333 14.6654C22.4136 13.1653 22.2278 11.0313 20.699 9.7763C19.1701 8.52128 17.1955 8.88053 15.9959 10.2657Z"
                      className="icon-hover-stroke"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                );
              },
            },
            {
              id: 2,
              titleArabic: "تعاون مع فريقك بشكل فعال",
              titleEnglish: "Collaborate with Your Team",
              descriptionEnglish: `No more internal friction and multiple emails and messages to get approvals.`,
              descriptionArabic: `لم يعد من الضروري مواجهة التحديات الداخلية أو التعامل مع العديد من رسائل البريد الإلكتروني والرسائل للحصول على الموافقات.`,
              icon: () => {
                return (
                  <svg
                    width="42"
                    height="24"
                    viewBox="0 0 42 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.4425 4.83509C33.4357 4.8999 33.4152 4.9613 33.3844 5.0227C33.3502 5.16597 33.3332 5.3297 33.3332 5.51048C33.3332 5.52754 33.3366 5.54459 33.3366 5.56165V17.4117C33.4869 17.7835 33.6715 18.0632 33.8936 18.2371C34.0986 18.4009 34.3515 18.4793 34.6591 18.4657C34.6796 18.4623 34.7035 18.4623 34.724 18.4623H38.1277C38.1345 18.4623 38.1448 18.4623 38.1551 18.4623C38.6847 18.4896 39.0675 18.3463 39.3238 18.0529C39.6143 17.7187 39.7817 17.1831 39.8398 16.4634V16.4532L40.8753 5.7629C40.8753 5.74585 40.8753 5.72879 40.8787 5.71174C40.9505 5.10457 40.8172 4.70888 40.5165 4.47693C40.1713 4.21087 39.6006 4.10172 38.859 4.10172C38.8419 4.10172 38.8249 4.10513 38.8078 4.10513H34.9735V4.10172C34.3891 4.10172 33.9585 4.21769 33.6954 4.45647C33.586 4.55539 33.504 4.6816 33.4425 4.83509ZM29.6902 17.9438C29.6082 17.8653 29.5501 17.763 29.5262 17.6504L24.0584 7.82659C23.4501 6.81351 22.9034 6.78963 22.3737 7.10345C21.9978 7.32517 21.6013 7.68674 21.2049 8.04831C20.9657 8.26662 20.7265 8.48493 20.5249 8.65207L19.5851 9.42638L19.5783 9.42979C18.8948 9.97897 18.1225 10.2757 17.3912 10.3337C16.9093 10.3747 16.4445 10.3133 16.0208 10.1529C15.5868 9.9892 15.204 9.72655 14.917 9.36839C14.606 8.98294 14.401 8.49175 14.3531 7.91187H14.3565C14.3463 7.77202 14.3873 7.63216 14.483 7.51619L17.4698 3.96868C16.841 3.95845 16.2839 4.04373 15.7611 4.20746C14.9648 4.45647 14.2198 4.88626 13.4065 5.44226C13.3142 5.51389 13.1946 5.55824 13.0682 5.55824H9.6269V12.0495L9.64057 16.2007H11.6431C11.8345 16.2007 12.0191 16.2997 12.1182 16.477L14.606 20.8057C14.9682 21.4367 15.2895 21.9825 15.6893 22.3407C16.0652 22.6783 16.5573 22.8864 17.316 22.9069C17.5996 22.9137 17.873 22.866 18.1293 22.7602C18.2865 22.6954 18.4437 22.6067 18.5975 22.4942L16.9845 19.4856C16.841 19.2195 16.9435 18.8887 17.21 18.7488C17.4766 18.6055 17.8081 18.7079 17.9482 18.9739L19.7013 22.2451C20.354 22.576 20.9452 22.6783 21.4749 22.5658C21.9602 22.46 22.4181 22.1701 22.8487 21.6994L20.3233 17.7425C20.1626 17.4901 20.2344 17.1524 20.4907 16.9887C20.7436 16.8284 21.0819 16.9 21.2459 17.1558L23.9046 21.3242C24.3728 21.5152 24.8205 21.5561 25.2477 21.4401C25.6543 21.3276 26.0644 21.0683 26.4711 20.6454L24.0618 16.1155C23.9183 15.8494 24.0208 15.5151 24.2908 15.3753C24.5574 15.232 24.8923 15.3343 25.0324 15.6038L27.5271 20.2906C27.8517 20.4782 28.2276 20.526 28.5864 20.468C28.9008 20.4168 29.205 20.2804 29.4544 20.0859C29.6937 19.8949 29.8816 19.6493 29.9705 19.3696C30.0696 19.066 30.0593 18.7113 29.8987 18.3258L29.6902 17.9438ZM30.4147 16.9955H32.2396V5.56165C32.2396 5.548 32.2396 5.53095 32.243 5.51731C32.243 5.33993 32.2533 5.16938 32.2772 5.00906L30.4181 3.77766C30.4079 3.77084 30.3976 3.76402 30.3874 3.7572C30.1448 3.59688 29.8543 3.39222 29.5638 3.18755C28.5078 2.45076 27.4245 1.6901 26.2524 1.3831C25.6202 1.21596 24.8888 1.10681 24.1439 1.09316C23.4911 1.07952 22.8282 1.14092 22.2028 1.30465C21.8303 1.40016 21.4681 1.53319 21.1332 1.71056C20.8359 1.86747 20.559 2.05849 20.313 2.29044L19.0691 3.76743C19.0315 3.84248 18.9768 3.90387 18.9119 3.95504L15.4808 8.03467C15.5321 8.29391 15.6346 8.51222 15.7747 8.68959C15.9388 8.89084 16.1575 9.04093 16.407 9.13644C16.6735 9.23536 16.9811 9.27288 17.3023 9.24559C17.8252 9.20125 18.3856 8.98635 18.888 8.58385L19.8277 7.80954C20.0669 7.6117 20.2686 7.4275 20.4702 7.24671C20.911 6.84421 21.3485 6.44511 21.8132 6.16882C22.8829 5.53095 23.9491 5.51048 25.0016 7.274L25.0119 7.29106L30.4147 16.9955ZM32.4446 18.0905H30.9854C31.1836 18.6669 31.1734 19.2127 31.0162 19.6971C30.8556 20.1951 30.5412 20.6181 30.1379 20.9387C29.7449 21.2491 29.2665 21.464 28.7641 21.5459C28.2755 21.6277 27.7629 21.5834 27.2844 21.3856C26.7308 21.962 26.1464 22.327 25.5381 22.4942C24.9264 22.6613 24.3079 22.6272 23.6825 22.4089C23.0879 23.0672 22.4318 23.4799 21.7073 23.6334C20.9691 23.7938 20.1866 23.6812 19.3561 23.2923C19.0964 23.4936 18.8264 23.6539 18.5428 23.7699C18.143 23.937 17.7226 24.0121 17.2818 23.9984C16.2292 23.9677 15.5219 23.6573 14.958 23.1525C14.418 22.6715 14.0592 22.0575 13.6491 21.348L11.3219 17.2957H9.51755C9.41161 17.8176 9.23049 18.261 8.9571 18.6158C8.49576 19.2093 7.82254 19.5231 6.88618 19.5026C6.87593 19.5026 6.86567 19.5026 6.85542 19.5026H3.76271C2.98355 19.6289 2.31716 19.4378 1.79431 18.8341C1.32955 18.2985 1.01515 17.4287 0.878454 16.153C0.875036 16.1393 0.875036 16.1223 0.871619 16.1052L0.0582864 6.04261C-0.10233 4.95789 0.0753732 4.1904 0.512796 3.6651C0.953636 3.13639 1.62002 2.89761 2.43677 2.86009C2.46069 2.85668 2.4812 2.85668 2.50512 2.85668H6.67088V2.86009C7.45688 2.84986 8.13352 2.98289 8.64612 3.31376C9.05962 3.57982 9.35693 3.95504 9.5073 4.4667H12.9007C13.7551 3.89364 14.5513 3.44338 15.433 3.16709C16.301 2.89761 17.2271 2.8021 18.3378 2.93513L19.4826 1.58435C19.5031 1.55707 19.5236 1.53319 19.5509 1.50931C19.8756 1.20231 20.2378 0.949897 20.6274 0.745233C21.0375 0.530336 21.4749 0.366605 21.9328 0.247218C22.6573 0.0596099 23.4194 -0.0120223 24.1644 0.00162192C25.0085 0.0186772 25.8286 0.141475 26.536 0.325673C27.8893 0.683834 29.058 1.49908 30.1926 2.29385C30.4455 2.47123 30.6984 2.6486 30.9991 2.84645C31.0093 2.85327 31.0196 2.86009 31.0299 2.86691L32.677 3.96527C32.759 3.8493 32.8547 3.74355 32.9641 3.64804C33.4357 3.22507 34.1089 3.017 34.9769 3.017V3.01359H38.8112C38.8249 3.01359 38.8419 3.01359 38.8556 3.017C39.8364 3.01359 40.6361 3.19096 41.1897 3.61735C41.8048 4.09148 42.0953 4.81122 41.9722 5.84477C41.9722 5.855 41.9688 5.86182 41.9688 5.87206L40.9334 16.5521C40.8582 17.5072 40.6019 18.2542 40.1508 18.7727C39.6689 19.3253 39.0026 19.5982 38.1277 19.5606H34.724H34.7206C34.1328 19.5913 33.6305 19.431 33.2101 19.0967C32.9026 18.8477 32.6463 18.5134 32.4446 18.0905ZM4.78792 13.9392C5.198 13.9392 5.52949 14.2701 5.52949 14.6794C5.52949 15.0887 5.198 15.4196 4.78792 15.4196C4.37783 15.4196 4.04635 15.0887 4.04635 14.6794C4.04635 14.2701 4.37783 13.9392 4.78792 13.9392ZM37.0649 13.9392C37.475 13.9392 37.8065 14.2701 37.8065 14.6794C37.8065 15.0887 37.475 15.4196 37.0649 15.4196C36.6548 15.4196 36.3233 15.0887 36.3233 14.6794C36.3233 14.2701 36.6548 13.9392 37.0649 13.9392ZM8.52993 10.7874L8.50943 5.01247C8.50943 5.00224 8.50943 4.992 8.50943 4.97836C8.45133 4.61679 8.29413 4.3746 8.06175 4.22451C7.74394 4.01985 7.26892 3.9414 6.68455 3.94822H6.67772V3.95163H2.50854C2.5017 3.95163 2.49487 3.95163 2.48803 3.95163C1.97201 3.97551 1.57901 4.0983 1.35688 4.36437C1.11767 4.64749 1.03565 5.13868 1.14843 5.89934C1.15184 5.9164 1.15184 5.93004 1.15184 5.9471L1.96518 16.02V16.037C2.07453 17.0808 2.30008 17.7494 2.61789 18.1178C2.87078 18.4111 3.21593 18.493 3.62943 18.4179C3.66019 18.4111 3.69436 18.4077 3.72512 18.4077V18.4043H6.85201C6.87251 18.4043 6.89301 18.4043 6.9101 18.4077C7.46371 18.4179 7.84646 18.2542 8.08567 17.9438C8.3659 17.5822 8.50259 17.016 8.5231 16.286H8.51968V10.7874H8.52993Z"
                      className="icon-hover-fill"
                    />
                  </svg>
                );
              },
            },
            {
              id: 3,
              titleEnglish: "Give Your Team Actionable Insights",
              titleArabic: "زوّد فريقك بأفكار عملية يمكن تنفيذها.",
              descriptionEnglish: `Measure the metrics that matter to your brand. Get the insights and data to write posts and start conversations that grow your business.`,
              descriptionArabic: `حدد المقاييس الرئيسية التي تعكس أهمية علامتك    التجارية
احصل على البيانات والرؤى اللازمة لكتابة المنشورات وبدء المحادثات التي تسهم في نمو أعمالك.`,
              icon: () => {
                return (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9993 16.0001L14.666 18.6667L20.666 12.6667M23.8676 6.66476C24.1421 7.32879 24.6692 7.85661 25.3328 8.13218L27.6597 9.09605C28.3237 9.37112 28.8513 9.89874 29.1264 10.5628C29.4015 11.2269 29.4015 11.9731 29.1264 12.6372L28.1632 14.9625C27.8881 15.6269 27.8877 16.3738 28.1641 17.0378L29.1256 19.3625C29.2619 19.6914 29.3322 20.044 29.3322 20.4C29.3323 20.7561 29.2622 21.1087 29.1259 21.4376C28.9897 21.7666 28.7899 22.0655 28.5381 22.3172C28.2863 22.5689 27.9874 22.7686 27.6584 22.9047L25.3332 23.8679C24.6691 24.1425 24.1413 24.6695 23.8658 25.3331L22.9019 27.6601C22.6269 28.3242 22.0993 28.8518 21.4352 29.1269C20.7712 29.402 20.025 29.402 19.361 29.1269L17.0357 28.1637C16.3716 27.8893 15.6258 27.8899 14.9621 28.1653L12.6352 29.1278C11.9715 29.4022 11.226 29.402 10.5625 29.1271C9.89898 28.8523 9.37169 28.3253 9.09643 27.6619L8.13231 25.3342C7.85775 24.6702 7.33074 24.1423 6.66715 23.8668L4.34023 22.9029C3.67646 22.628 3.14902 22.1007 2.87386 21.437C2.59869 20.7733 2.59832 20.0275 2.87282 19.3635L3.83597 17.0381C4.11035 16.374 4.10979 15.6282 3.83441 14.9645L2.87265 12.6358C2.73629 12.3069 2.66607 11.9543 2.66602 11.5983C2.66596 11.2422 2.73606 10.8896 2.87231 10.5607C3.00857 10.2317 3.2083 9.93282 3.46011 9.68109C3.71191 9.42935 4.01085 9.22971 4.33984 9.09355L6.66508 8.13037C7.32851 7.85604 7.856 7.32968 8.13175 6.66682L9.09559 4.33983C9.37065 3.67574 9.89825 3.14813 10.5623 2.87305C11.2264 2.59798 11.9725 2.59798 12.6366 2.87305L14.9618 3.83624C15.6259 4.11063 16.3718 4.11007 17.0354 3.83468L19.3633 2.87455C20.0273 2.59963 20.7733 2.59968 21.4372 2.8747C22.1011 3.14972 22.6286 3.67719 22.9038 4.3411L23.8679 6.66879L23.8676 6.66476Z"
                      className="icon-hover-stroke"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                );
              },
            },
          ]?.map((livesItem) => {
            return (
              <Stack
                key={livesItem.id}
                px={5}
                py={9}
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                  width: "100%",
                  minHeight: 315,
                  height: "100%",
                  position: "relative",
                  borderRadius: "20px",
                  border: "1px solid #1E1E21",
                  "&:hover .hover-box": {
                    opacity: 1,
                  },
                  "&:hover .icon-hover-fill": {
                    fill: "#41C4DA",
                  },
                  "&:hover .icon-hover-stroke": {
                    stroke: "#41C4DA",
                  },
                }}
              >
                <Box
                  className="hover-box"
                  sx={{
                    right: 0,
                    zIndex: 1,
                    bottom: 0,
                    opacity: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "20px",
                    position: "absolute",
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 317 273"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_2049_6561)">
                      <path
                        d="M337 230C337 270.317 304.317 303 264 303C223.683 303 191 270.317 191 230C191 189.683 223.683 157 264 157C304.317 157 337 189.683 337 230Z"
                        fill="#41C4DA"
                        fillOpacity="1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_2049_6561"
                        x="0.800003"
                        y="-33.2"
                        width="526.4"
                        height="526.4"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="95.1"
                          result="effect1_foregroundBlur_2049_6561"
                        />
                      </filter>
                    </defs>
                  </svg>
                </Box>

                <Stack
                  gap={2}
                  alignItems="center"
                  width="100%"
                  height="100%"
                  sx={{ zIndex: 3 }}
                >
                  <Stack
                    width={100}
                    height={100}
                    bgcolor="#373E44"
                    borderRadius="100%"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      top: -50,
                      left: "50%",
                      position: "absolute",
                      transform: "translateX(-50%)",
                    }}
                  >
                    {/* <img
                      alt="key"
                      src={livesItem?.icon}
                      width={36}
                      height={36}
                    /> */}
                    {livesItem?.icon()}
                  </Stack>
                  <Typography
                    variant="h6"
                    color="#fff"
                    textAlign="center"
                    fontSize={26}
                    lineHeight={1.4}
                    fontWeight={400}
                  >
                    {language === "en" && <>{livesItem?.titleEnglish}</>}
                    {language === "ar" && <>{livesItem?.titleArabic}</>}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#929292"
                    textAlign="center"
                    fontSize={16}
                    lineHeight={1.4}
                    fontWeight={400}
                    className="lato"
                    letterSpacing={1}
                  >
                    {language === "en" && <>{livesItem?.descriptionEnglish}</>}
                    {language === "ar" && <>{livesItem?.descriptionArabic}</>}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProductImpactSection;

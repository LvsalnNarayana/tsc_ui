import React from "react";

import { Stack, Container, Typography } from "@mui/material";

import ServiceCard from "../services/ServiceCard";
import { useLanguage } from "../../LanguageContext";

const ProductServices = () => {
  const { language } = useLanguage();

  return (
    <Stack
      pb={10}
      pt={5}
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
              direction: language === "ar" ? "rtl" : "ltr",
            }}
          >
            {language === "en" && "CRM Services"}
            {language === "ar" && "خدمات نظام إدارة علاقات العملاء (CRM)"}
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
            {language === "en" && (
              <>
                Manage your business better with our CRM services and best
                practices. Collect
                <br /> data, automate tasks and get insights to make better
                decisions.
              </>
            )}
            {language === "ar" && (
              <>
                يمكنك إدارة وجمع المعلومات، وتبسيط المهام، والحصول على رؤى
                تساعدك في اتخاذ قرارات أفضل.
              </>
            )}
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
                titleEnglish: "CRM Consulting",
                titleArabic: "استشارات نظام إدارة علاقات العملاء (CRM)",
                descriptionEnglish: `Grow your business with expert advice and custom solutions designed for your business. Let’s grow together.`,
                descriptionArabic:
                  "ارتقِ بأعمالك إلى آفاق جديدة من خلال الاستفادة من خبرات المتخصصين والحلول الفريدة المخصصة خصيصاً لاحتياجاتك. دعنا ننمو معاً.",
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
                        d="M13.3327 20L9.23234 24.1516C8.6604 24.7306 8.37442 25.0202 8.12862 25.0406C7.91537 25.0583 7.70657 24.9726 7.56729 24.8101C7.40676 24.6229 7.40676 24.2159 7.40676 23.402V21.3221C7.40676 20.5919 6.80878 20.0636 6.08629 19.9577V19.9577C4.33767 19.7016 2.96438 18.3283 2.70825 16.5797C2.66602 16.2914 2.66602 15.9473 2.66602 15.2592V9.06663C2.66602 6.82642 2.66602 5.70631 3.10199 4.85066C3.48548 4.09802 4.09741 3.48609 4.85005 3.1026C5.7057 2.66663 6.82581 2.66663 9.06602 2.66663H18.9327C21.1729 2.66663 22.293 2.66663 23.1486 3.1026C23.9013 3.48609 24.5132 4.09802 24.8967 4.85066C25.3327 5.70631 25.3327 6.82642 25.3327 9.06663V14.6666M25.3327 29.3333L22.4308 27.3158C22.0229 27.0322 21.8189 26.8904 21.597 26.7899C21.3999 26.7006 21.1928 26.6357 20.9801 26.5965C20.7405 26.5523 20.4921 26.5523 19.9952 26.5523H17.5993C16.1059 26.5523 15.3591 26.5523 14.7887 26.2617C14.2869 26.006 13.879 25.5981 13.6233 25.0963C13.3327 24.5259 13.3327 23.7791 13.3327 22.2857V18.9333C13.3327 17.4398 13.3327 16.6931 13.6233 16.1227C13.879 15.6209 14.2869 15.2129 14.7887 14.9573C15.3591 14.6666 16.1059 14.6666 17.5993 14.6666H25.066C26.5595 14.6666 27.3062 14.6666 27.8767 14.9573C28.3784 15.2129 28.7864 15.6209 29.042 16.1227C29.3327 16.6931 29.3327 17.4398 29.3327 18.9333V22.5523C29.3327 23.7949 29.3327 24.4161 29.1297 24.9062C28.859 25.5596 28.3399 26.0787 27.6865 26.3494C27.1965 26.5523 26.5752 26.5523 25.3327 26.5523V29.3333Z"
                        className="icon-hover-stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  );
                },
              },
              {
                id: 2,
                titleEnglish: "CRM Platform Customization",
                titleArabic: "تخصيص منصة نظام إدارة علاقات العملاء (CRM)",
                descriptionArabic:
                  "نقوم بتخصيص المنصات لتتناسب مع عملك ونساعدك على تحسين إدارة علاقات العملاء.",
                descriptionEnglish: `We customize and tailor platforms to fit your industry and help you manage customer relationships better.`,
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
                        d="M4 10.6666L20 10.6666M20 10.6666C20 12.8758 21.7909 14.6666 24 14.6666C26.2091 14.6666 28 12.8758 28 10.6666C28 8.45749 26.2091 6.66663 24 6.66663C21.7909 6.66663 20 8.45749 20 10.6666ZM12 21.3333L28 21.3333M12 21.3333C12 23.5424 10.2091 25.3333 8 25.3333C5.79086 25.3333 4 23.5424 4 21.3333C4 19.1242 5.79086 17.3333 8 17.3333C10.2091 17.3333 12 19.1242 12 21.3333Z"
                        className="icon-hover-stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  );
                },
              },
              {
                id: 3,
                titleEnglish: "CRM Migration",
                titleArabic: "نقل نظام إدارة علاقات العملاء (CRM)",
                descriptionEnglish: `Get a smooth migration at TSC. Upgrade your platform to the latest and greatest with 100% data integrity and no downtime.`,
                descriptionArabic:
                  "احصل على نقل سلس. قم بترقية منصتك إلى النسخ الأحدث والأكثر تطورًا مع ضمان تكامل كامل للبيانات ودون أي انقطاع ملحوظ.",
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
                        d="M2.66602 13.3333C2.66602 13.3333 2.82778 12.201 7.51407 7.51472C12.2004 2.82843 19.7983 2.82843 24.4846 7.51472C26.145 9.17509 27.2171 11.201 27.7009 13.3333M2.66602 13.3333V5.33333M2.66602 13.3333H10.666M29.3327 18.6667C29.3327 18.6667 29.1709 19.799 24.4846 24.4853C19.7983 29.1716 12.2004 29.1716 7.51407 24.4853C5.8537 22.8249 4.78161 20.799 4.29779 18.6667M29.3327 18.6667V26.6667M29.3327 18.6667H21.3327"
                        className="icon-hover-stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  );
                },
              },
              {
                id: 4,
                titleEnglish: "CRM Integration",
                titleArabic: "تكامل نظام إدارة علاقات العملاء (CRM)",
                descriptionEnglish: `Get 360-degree customer management with modern and useful integrations like chatbots, analytics tools, and IoT feeds.`,
                descriptionArabic:
                  "احصل على إدارة شاملة للعملاء مع أدوات عصرية مثل روبوتات المحادثة، أدوات التحليل، وتحديثات إنترنت الأشياء.",
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
                        d="M12.5274 25.8281L13.3066 27.5807C13.5383 28.1024 13.9163 28.5457 14.3949 28.8568C14.8735 29.1678 15.4321 29.3334 16.0029 29.3333C16.5737 29.3334 17.1323 29.1678 17.6109 28.8568C18.0895 28.5457 18.4676 28.1024 18.6992 27.5807L19.4785 25.8281C19.7559 25.2062 20.2225 24.6878 20.8118 24.3466C21.4049 24.0045 22.0909 23.8588 22.7718 23.9303L24.6785 24.1333C25.246 24.1933 25.8188 24.0874 26.3274 23.8284C26.836 23.5694 27.2585 23.1684 27.5437 22.674C27.8292 22.18 27.9653 21.6137 27.9353 21.0438C27.9053 20.4739 27.7106 19.925 27.3748 19.4637L26.2459 17.9126C25.8439 17.3561 25.6291 16.6864 25.6326 16C25.6324 15.3154 25.8492 14.6484 26.2518 14.0948L27.3807 12.5437C27.7165 12.0823 27.9113 11.5334 27.9412 10.9635C27.9712 10.3937 27.8352 9.82735 27.5496 9.33329C27.2644 8.83894 26.8419 8.43795 26.3333 8.17893C25.8248 7.91991 25.252 7.814 24.6844 7.87403L22.7777 8.077C22.0969 8.1485 21.4108 8.00279 20.8177 7.6607C20.2272 7.31763 19.7605 6.79644 19.4844 6.17181L18.6992 4.41922C18.4676 3.89752 18.0895 3.45425 17.6109 3.14316C17.1323 2.83207 16.5737 2.66653 16.0029 2.66663C15.4321 2.66653 14.8735 2.83207 14.3949 3.14316C13.9163 3.45425 13.5383 3.89752 13.3066 4.41922L12.5274 6.17181C12.2513 6.79644 11.7845 7.31763 11.194 7.6607C10.601 8.00279 9.91493 8.1485 9.23404 8.077L7.32145 7.87403C6.75389 7.814 6.1811 7.91991 5.67253 8.17893C5.16397 8.43795 4.74147 8.83894 4.45626 9.33329C4.17069 9.82735 4.03464 10.3937 4.06462 10.9635C4.0946 11.5334 4.28932 12.0823 4.62515 12.5437L5.75404 14.0948C6.15663 14.6484 6.37342 15.3154 6.3733 16C6.37342 16.6845 6.15663 17.3515 5.75404 17.9051L4.62515 19.4563C4.28932 19.9176 4.0946 20.4665 4.06462 21.0364C4.03464 21.6063 4.17069 22.1726 4.45626 22.6666C4.74175 23.1607 5.1643 23.5615 5.67279 23.8205C6.18129 24.0795 6.75393 24.1855 7.32145 24.1259L9.22811 23.9229C9.90901 23.8514 10.5951 23.9971 11.1881 24.3392C11.7808 24.6813 12.2497 25.2026 12.5274 25.8281Z"
                        className="icon-hover-stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0005 20C18.2097 20 20.0005 18.2091 20.0005 16C20.0005 13.7908 18.2097 12 16.0005 12C13.7914 12 12.0005 13.7908 12.0005 16C12.0005 18.2091 13.7914 20 16.0005 20Z"
                        className="icon-hover-stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  );
                },
              },
              {
                id: 5,
                titleEnglish: "CRM Testing",
                titleArabic: "اختبار نظام إدارة علاقات العملاء (CRM)",
                descriptionEnglish: `Test performance and usability with our testing service. By using our service you can prevent your business from inconsistencies and defects.`,
                descriptionArabic:
                  "اختبر تجربة الأداء وسهولة الاستخدام من خلال خدمة الاختبار التي نقدمها. باستخدام هذه الخدمة، يمكنك حماية عملك من المشاكل والعيوب.",
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
                        d="M21.334 5.33341C22.5739 5.33341 23.1939 5.33341 23.7026 5.46971C25.083 5.83958 26.1612 6.91777 26.531 8.29814C26.6673 8.80681 26.6673 9.42679 26.6673 10.6667V22.9334C26.6673 25.1736 26.6673 26.2937 26.2313 27.1494C25.8478 27.902 25.2359 28.5139 24.4833 28.8974C23.6276 29.3334 22.5075 29.3334 20.2673 29.3334H11.734C9.49377 29.3334 8.37367 29.3334 7.51802 28.8974C6.76537 28.5139 6.15345 27.902 5.76996 27.1494C5.33398 26.2937 5.33398 25.1736 5.33398 22.9334V10.6667C5.33398 9.42679 5.33398 8.80681 5.47028 8.29814C5.84015 6.91777 6.91834 5.83958 8.29871 5.46971C8.80737 5.33341 9.42736 5.33341 10.6673 5.33341M12.0007 20.0001L14.6673 22.6667L20.6673 16.6667M12.8007 8.00008H19.2006C19.9474 8.00008 20.3208 8.00008 20.606 7.85476C20.8569 7.72693 21.0608 7.52295 21.1887 7.27207C21.334 6.98685 21.334 6.61348 21.334 5.86675V4.80008C21.334 4.05334 21.334 3.67998 21.1887 3.39476C21.0608 3.14388 20.8569 2.9399 20.606 2.81207C20.3208 2.66675 19.9474 2.66675 19.2007 2.66675H12.8007C12.0539 2.66675 11.6805 2.66675 11.3953 2.81207C11.1444 2.9399 10.9405 3.14388 10.8126 3.39476C10.6673 3.67998 10.6673 4.05334 10.6673 4.80008V5.86675C10.6673 6.61349 10.6673 6.98685 10.8126 7.27207C10.9405 7.52295 11.1444 7.72693 11.3953 7.85476C11.6805 8.00008 12.0539 8.00008 12.8007 8.00008Z"
                        className="icon-hover-stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  );
                },
              },
              {
                id: 6,
                titleArabic: "تواصل معنا لمعرفة المزيد",
                titleEnglish: "Get in touch to know more",
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

/* eslint-disable operator-linebreak */
import React from "react";

import { Stack, Button, Container, Typography } from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const ProductSocialMediaSection = () => {
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
          {language === "en" && "Drive Real Impact on Social Media"}
          {language === "ar" && "إحداث تأثير فعّال على منصات التواصل"}
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
              From Engagement to ROI. Save time, get organized and manage your
              social
              <br /> media with our Social Media CRM. Measure and drive real
              business impact from your social campaigns in one place.
            </>
          )}
          {language === "ar" && <></>}
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
              icon: "/Measure and Prove Your Social Media ROI.mp4",
              titleEnglish: "Measure and Prove Your Social Media ROI",
              titleArabic:
                "قياس وإثبات عائد الاستثمار على وسائل التواصل الاجتماعي",
              descriptionEnglish: `You know social media is more than brand awareness. Now you can prove it by finding out what posts and conversations drive sales, leads, and traffic. Pull data from Google Analytics. Tie your social media to real revenue goals. Know where to spend your budget.`,
              descriptionArabic:
                "وسائل التواصل الاجتماعي ليست فقط لتعزيز الوعي بالعلامة التجارية، بل يمكن إثبات فعاليتها من خلال تحليل المنشورات والمحادثات التي تساهم في زيادة المبيعات والعملاء المحتملين وحركة المرور. استخدم بيانات Google Analytics لتحديد الأداء. اربط حسابات وسائل التواصل الاجتماعي بأهداف الإيرادات الحقيقية، وتعرف على كيفية توزيع ميزانيتك.",
            },
            {
              id: 2,
              icon: "/control social media_1.mp4",
              titleEnglish: "Control Your Social Media Content",
              titleArabic: "أدر محتوى حساباتك على وسائل التواصل الاجتماعي",
              descriptionEnglish: `Plan and schedule your social media content across all platforms with a simple post scheduler and shared calendars. Manage your content. Customize your post content for each platform. Collaborate with internal and external teams.`,
              descriptionArabic:
                "رتب المحتوى على وسائل التواصل الاجتماعي باستخدام المنصة التي تجعل من السهل جدولة المنشورات وإنشاء تقاويم مشتركة. إدارة المحتوى الخاص بك مهم، لذا تأكد من تخصيص كل منشور للمنصة المناسبة له. تعاون بشكل جيد مع الفرق الداخلية والخارجية.",
            },
            {
              id: 3,
              titleArabic: "استمع إلى المحادثات الحيوية ",
              icon: "/Listen to the Conversations that Matter.mp4",
              titleEnglish: "Listen to the Conversations that Matter",
              descriptionArabic:
                "تابع المنشورات الخاصة بعلامتك التجارية ومجالك ومنافسيك. استمع إلى المحادثات على وسائل التواصل الاجتماعي والمواقع الإخبارية والمدونات. قيّم سمعة علامتك التجارية وحافظ عليها. احصل على أفكار لمحتواك. تعرف على احتياجات عملائك وزد من ولائهم لعلامتك التجارية.",
              descriptionEnglish: `Monitor and track mentions of your brand, industry, and competitors. Capture conversations from social networks, news sites, and blogs. Measure and protect your brand reputation. Get inspiration for content. Find out what your customers want and increase brand loyalty.`,
            },
            {
              id: 4,
              titleArabic: "إنشاء تقارير بدون عناء",
              icon: "/Create Reports Without the Pain.mp4",
              titleEnglish: "Create Reports Without the Pain",
              descriptionEnglish: `Make better decisions with social media reports that don’t take all day to create. Compare key social metrics across all channels from one dashboard. See your top posts for each platform. Build and automate custom, presentation-ready social media reports.`,
              descriptionArabic:
                "اتخذ قرارات أفضل باستخدام تقارير وسائل التواصل الاجتماعي التي يمكن إعدادها بسرعة. يمكنك مقارنة المؤشرات المهمة عبر جميع القنوات من مكان واحد. تعرف على أهم المنشورات لديك على كل منصة. قم بإنشاء وتقليل العمل في إعداد تقارير وسائل التواصل الاجتماعي الخاصة بك لتكون جاهزة لتقديمها بشكل متميز.",
            },
            {
              id: 5,
              titleArabic: "التكامل مع أدوات منصاتك الحالية",
              icon: "/Integrates with Your Existing Tools and Platforms.mp4",
              titleEnglish: "Integrates with Your Existing Tools and Platforms",
              descriptionEnglish: `No more switching between social networks and other tools. Use our Social Media CRM to manage all your team’s social media marketing in one place.`,
              descriptionArabic:
                "لا حاجة بعد اليوم لتبديل بين الشبكات الاجتماعية والأدوات المتنوعة. استفد من إدارة علاقات العملاء على وسائل التواصل الاجتماعي لتنظيم جميع استراتيجيات التسويق لفريقك في منصة واحدة متكاملة.",
            },
          ].map((livesItem) => {
            return (
              <Stack
                key={livesItem.id}
                px={5}
                py={5}
                gap={{
                  laptop: 3,
                  tablet: 8,
                  mobile: 8,
                  desktop: 3,
                }}
                direction={{
                  mobile: "column",
                  tablet: "column",
                  laptop: language === "ar" ? "row-reverse" : "row",
                  desktop: language === "ar" ? "row-reverse" : "row",
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
                  alignItems={language === "ar" ? "flex-end" : "flex-start"}
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
                    sx={{
                      textAlign: language === "ar" ? "right" : "left",
                    }}
                  >
                    {language === "en" && <>{livesItem?.titleEnglish}</>}
                    {language === "ar" && <>{livesItem?.titleArabic}</>}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#929292"
                    fontSize={16}
                    lineHeight={1.4}
                    fontWeight={400}
                    className="lato"
                    letterSpacing={1}
                    sx={{
                      textAlign: language === "ar" ? "right" : "left",
                    }}
                  >
                    {language === "en" && <>{livesItem?.descriptionEnglish}</>}
                    {language === "ar" && <>{livesItem?.descriptionArabic}</>}
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
                    muted
                    playsInline
                    loop
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
            gap: 1,
            py: 1.7,
            fontSize: 18,
            lineHeight: 1,
            color: "#fff",
            display: "flex",
            borderRadius: "99px",
            alignItems: "center",
            boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset",
            background:
              "linear-gradient(180deg, #525252 -61.82%, #292929 100%)",
            px: {
              mobile: 3,
              tablet: 3,
              laptop: 6,
              desktop: 6,
            },
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
          {language === "en" && "Lets talk"}
          {language === "ar" && "تواصل معنا"}
          <img alt="arrow" src="/ArrowUpRight.svg" />
        </Button>
      </Stack>
    </Container>
  );
};

export default ProductSocialMediaSection;

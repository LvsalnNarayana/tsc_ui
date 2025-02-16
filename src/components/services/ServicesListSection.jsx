/* eslint-disable react/no-array-index-key */
/* eslint-disable max-lines */
import React from "react";

import { Stack, Container, Typography } from "@mui/material";

import ServiceCard from "./ServiceCard";
import { useLanguage } from "../../LanguageContext";

const ServicesListSection = () => {
  const { language } = useLanguage();

  return (
    <Container maxWidth="desktop">
      <Stack gap={4}>
        <Typography
          variant="h1"
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
            zIndex: 2,
            textAlign: "center",
            WebkitBackgroundClip: "text",
            textFillColor: "transparent",
            WebkitTextFillColor: "transparent",
            background: "linear-gradient(180deg, #FFF 0%, #040B12 139.86%)",
            // eslint-disable-next-line perfectionist/sort-objects
            backgroundClip: "text",
          }}
        >
          {language === "en" && (
            <>
              We craft experiences, foster
              <br /> innovations, and drive acceleration.
            </>
          )}
          {language === "ar" && (
            <span
              style={{
                direction: language === "ar" ? "rtl" : "ltr",
              }}
            >
              نحن نعمل على تشكيل التجارب، ونعزز الابتكارات وندفع عجلة التسريع.
            </span>
          )}
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
          sx={{
            direction: language === "ar" ? "rtl" : "ltr",
          }}
        >
          {language === "en" && (
            <>
              By leveraging innovation and technology, we transform your ideas
              into reality, propelling your business forward swiftly.
            </>
          )}
          {language === "ar" && (
            <>
              نحن نستخدم الابتكار والتقنية لتحويل أفكارك إلى واقع ملموس، وندفع
              أعمالك إلى الأمام بسرعة.
            </>
          )}
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
              titleArabic: "إنشاء تطبيقات الهواتف الذكية",
              titleEnglish: "Mobile Application Development",
              descriptionEnglish: `Get innovative mobile solutions for your business. We redefine 
              user appointments using the latest technologies to deliver 
              robust and user-friendly applications.`,
              servicesEnglish: [
                "iOS App Development",
                "Android App Development",
                "Cross-platform App Development",
                "UI/UX Design",
                "App Maintenance and Support",
              ],
              descriptionArabic:
                "احصل على حلول مبتكرة للأجهزة المحمولة تساهم في تطوير أعمالك. نحن نعيد صياغة تجربة المستخدمين من خلال استخدام أحدث التقنيات لتوفير تطبيقات فعّالة وسهلة الاستخدام.استكشف خدماتنا في مجال تطوير تطبيقات الهواتف المحمولة. ",
              servicesArabic: [
                " تطوير تطبيقات iOS",
                " تطوير تطبيقات الأندرويد",
                " تطوير تطبيقات متعددة المنصات",
                " تصميم واجهة المستخدم/تجربة المستخدم",
                " الصيانة والدعم للبرامج",
              ],
              icon: () => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 17 30"
                    fill="none"
                  >
                    <path
                      d="M0.277514 15.0002C0.277514 11.2122 0.268342 7.41507 0.277514 3.6271C0.277514 2.06789 1.06629 0.930579 2.45124 0.481159C2.78143 0.371097 3.13913 0.325238 3.48766 0.325238C6.68863 0.316066 9.88043 0.316066 13.0722 0.325238C14.9341 0.33441 16.2915 1.68267 16.2915 3.53538C16.3007 11.1755 16.3007 18.8157 16.2915 26.465C16.2915 28.3177 14.9341 29.6751 13.0814 29.6751C9.91712 29.6843 6.75283 29.6843 3.58855 29.6751C1.60743 29.6751 0.286686 28.3727 0.286686 26.3733C0.268342 22.5761 0.277514 18.7881 0.277514 15.0002ZM8.2937 2.98507C7.67002 2.98507 7.04633 2.98507 6.42265 2.98507C5.92737 2.99424 5.65221 3.22354 5.64304 3.6271C5.63387 4.03983 5.89068 4.32416 6.36761 4.32416C7.65167 4.3425 8.92656 4.3425 10.2106 4.32416C10.6692 4.31499 10.981 4.00314 10.9627 3.6271C10.9444 3.24188 10.6417 2.98507 10.1739 2.98507C9.54107 2.98507 8.91739 2.98507 8.2937 2.98507ZM8.2937 24.3463C7.54161 24.3463 6.94544 24.9333 6.95461 25.6762C6.96378 26.4099 7.5783 27.0061 8.31204 26.9969C9.02745 26.9878 9.60527 26.4099 9.61445 25.6854C9.61445 24.9241 9.04579 24.3555 8.2937 24.3463Z"
                      fill="white"
                    />
                  </svg>
                );
              },
            },
            {
              id: 2,
              titleArabic: "تطوير الويب",
              titleEnglish: "Web Development",
              descriptionArabic:
                "احصل على حلول مخصصة لتواجدك الرقمي على الإنترنت. نحن نركز على تجربة المستخدم كأولوية، ونعتمد على أحدث التقنيات لتطوير مواقع إلكترونية تتميز بسهولة الاستخدام وأداء عالي. كتشف خدماتنا لتطوير المواقع الإلكترونية",
              descriptionEnglish: `Get bespoke web solutions for your online presence. We put user
              experience first, using the latest technologies to create
              intuitive and high-performing websites. Explore Our Web
              Development Services`,
              servicesArabic: [
                " تطوير مواقع الويب المخصصة",
                " تطوير الواجهة الأمامية والخلفية",
                " أنظمة إدارة المحتوى (CMS)",
                " حلول التجارة الإلكترونية",
                " صيانة ودعم المواقع الإلكترونية",
              ],
              servicesEnglish: [
                "Custom Website Development",
                "Front-end and Back-end Development",
                "Content Management Systems (CMS)",
                "E-commerce Solutions",
                "Website Maintenance and Support",
              ],
              icon: () => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.1875 8.5C3.1875 6.15279 5.09029 4.25 7.4375 4.25H26.5625C28.9097 4.25 30.8125 6.15279 30.8125 8.5V25.5C30.8125 27.8472 28.9097 29.75 26.5625 29.75H7.4375C5.09029 29.75 3.1875 27.8472 3.1875 25.5V8.5ZM8.8112 9.8737C9.22613 9.45877 9.89887 9.45877 10.3138 9.8737L13.5013 13.0612C13.9162 13.4761 13.9162 14.1489 13.5013 14.5638L10.3138 17.7513C9.89887 18.1662 9.22613 18.1662 8.8112 17.7513C8.39627 17.3364 8.39627 16.6636 8.8112 16.2487L11.2474 13.8125L8.8112 11.3763C8.39627 10.9614 8.39627 10.2886 8.8112 9.8737ZM14.875 15.9375C14.2882 15.9375 13.8125 16.4132 13.8125 17C13.8125 17.5868 14.2882 18.0625 14.875 18.0625H19.125C19.7118 18.0625 20.1875 17.5868 20.1875 17C20.1875 16.4132 19.7118 15.9375 19.125 15.9375H14.875Z"
                      fill="white"
                    />
                  </svg>
                );
              },
            },
            {
              id: 3,
              titleArabic: "الحوسبة السحابية لنمو الأعمال",
              titleEnglish: "Cloud Technology for Business Growth",
              descriptionArabic:
                "استفد من السحابة لتعزيز أداء أعمالك بشكل مبسط. اعتمد على الحلول السحابية المتخصصة في مجالك لضمان مستقبل أسرع وأكثر كفاءة. نحن نهدف إلى تحقيق أقصى استفادة من السحابة لكل بايت من بياناتك. استخدم السحابة كنقطة انطلاق نحو المستقبل.",
              descriptionEnglish: ` Get business with the cloud. Leverage the cloud for streamlined
              performance. Adopt industry-specific cloud solutions for a faster
              and more efficient future. We maximize the cloud for every byte of
              your business data. Use the cloud as your launchpad for the
              future.`,
              icon: () => {
                return (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20898 26.9168C5.68817 26.9168 2.83398 24.0626 2.83398 20.5418C2.83398 17.2218 5.37195 14.4945 8.61362 14.1943C9.27672 10.1607 12.7793 7.0835 17.0007 7.0835C21.222 7.0835 24.7246 10.1607 25.3877 14.1943C28.6293 14.4945 31.1673 17.2218 31.1673 20.5418C31.1673 24.0626 28.3131 26.9168 24.7923 26.9168C18.5734 26.9168 14.6537 26.9168 9.20898 26.9168Z"
                      fill="white"
                      stroke="white"
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
              titleArabic: "حلول التجارة الإلكترونية لجميع الأعمال",
              titleEnglish: "E-Commerce Solutions for All Businesses",
              descriptionEnglish: `Reach global markets and engage customers 24/7 with robust and feature-rich online stores. Show your products and services to the world using the latest E-Commerce tools. Let customers explore, trust, and discover your offerings at their convenience.`,
              descriptionArabic:
                "يمكنك التفاعل مع العملاء والوصول إلى الأسواق العالمية على مدار الساعة طوال أيام الأسبوع من خلال متاجر إلكترونية متقدمة ومليئة بالميزات. قم بعرض منتجاتك وخدماتك للعالم باستخدام أحدث أدوات التجارة الإلكترونية، واترك للعملاء حرية الاستكشاف والثقة واكتشاف عروضك في الوقت الذي يناسبهم.",
              icon: () => {
                return (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5826 23.3752H12.459C11.0562 23.3752 10.3549 23.3752 9.79174 23.1164C9.29552 22.8885 8.87575 22.5219 8.58296 22.061C8.25068 21.5379 8.15613 20.8429 7.96702 19.453L6.47684 8.50016H29.7977C30.2677 8.50016 30.5027 8.50016 30.668 8.59652C30.813 8.68105 30.9233 8.81434 30.9792 8.97262C31.043 9.15306 30.999 9.38389 30.9111 9.84556L29.0359 19.6901C28.7861 21.0018 28.6611 21.6576 28.323 22.1486C28.0249 22.5816 27.6123 22.9231 27.1312 23.1349C26.5856 23.3752 25.9179 23.3752 24.5826 23.3752Z"
                      fill="white"
                    />
                    <path
                      d="M12.7507 31.1668C13.5331 31.1668 14.1673 30.5326 14.1673 29.7502C14.1673 28.9678 13.5331 28.3335 12.7507 28.3335C11.9682 28.3335 11.334 28.9678 11.334 29.7502C11.334 30.5326 11.9682 31.1668 12.7507 31.1668Z"
                      fill="white"
                    />
                    <path
                      d="M24.084 31.1668C24.8664 31.1668 25.5007 30.5326 25.5007 29.7502C25.5007 28.9678 24.8664 28.3335 24.084 28.3335C23.3016 28.3335 22.6673 28.9678 22.6673 29.7502C22.6673 30.5326 23.3016 31.1668 24.084 31.1668Z"
                      fill="white"
                    />
                    <path
                      d="M2.83398 2.8335H4.68438C5.03291 2.8335 5.20717 2.8335 5.34741 2.89759C5.47099 2.95407 5.57572 3.0449 5.64911 3.15925C5.73239 3.28902 5.75704 3.46153 5.80633 3.80655L6.47684 8.50016M6.47684 8.50016L7.96702 19.453C8.15613 20.8429 8.25068 21.5379 8.58296 22.061C8.87575 22.5219 9.29552 22.8885 9.79174 23.1164C10.3549 23.3752 11.0562 23.3752 12.459 23.3752H24.5826C25.9179 23.3752 26.5856 23.3752 27.1312 23.1349C27.6123 22.9231 28.0249 22.5816 28.323 22.1486C28.6611 21.6576 28.7861 21.0018 29.0359 19.6901L30.9111 9.84556C30.999 9.38389 31.043 9.15306 30.9792 8.97262C30.9233 8.81434 30.813 8.68105 30.668 8.59652C30.5027 8.50016 30.2677 8.50016 29.7977 8.50016H6.47684ZM14.1673 29.7502C14.1673 30.5326 13.5331 31.1668 12.7507 31.1668C11.9682 31.1668 11.334 30.5326 11.334 29.7502C11.334 28.9678 11.9682 28.3335 12.7507 28.3335C13.5331 28.3335 14.1673 28.9678 14.1673 29.7502ZM25.5007 29.7502C25.5007 30.5326 24.8664 31.1668 24.084 31.1668C23.3016 31.1668 22.6673 30.5326 22.6673 29.7502C22.6673 28.9678 23.3016 28.3335 24.084 28.3335C24.8664 28.3335 25.5007 28.9678 25.5007 29.7502Z"
                      stroke="white"
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
              titleArabic: "ضمان الجودة واختبار البرمجيات",
              titleEnglish: "Quality Assurance and Software Testing",
              servicesArabic: [
                " الاختبار الاساسي",
                " اختبار دورة الحياة الكاملة",
                " اختبار الأتمتة",
                " اختبار المنتج",
              ],
              descriptionEnglish: `Experience a new level of QA and software testing. We redefine
              user interactions using a data-driven approach to boost speed,
              productivity, and quality across systems and applications.`,
              serviceEnglish: [
                "Discover Our Software Testing Services",
                "Manual Testing",
                "Full Lifecycle Testing",
                "Automation Testing",
                "Product Testing",
              ],
              descriptionArabic:
                "اختبر مستوى جديدًا من ضمان الجودة واختبار البرمجيات. نحن نعيد تعريف تفاعلات المستخدم باستخدام نهج قائم على البيانات لتعزيز السرعة والإنتاجية والجودة عبر الأنظمة والتطبيقات. Dاكتشف خدمات اختبار البرمجيات التي نقدمها",
              icon: () => {
                return (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5826 23.3752H12.459C11.0562 23.3752 10.3549 23.3752 9.79174 23.1164C9.29552 22.8885 8.87575 22.5219 8.58296 22.061C8.25068 21.5379 8.15613 20.8429 7.96702 19.453L6.47684 8.50016H29.7977C30.2677 8.50016 30.5027 8.50016 30.668 8.59652C30.813 8.68105 30.9233 8.81434 30.9792 8.97262C31.043 9.15306 30.999 9.38389 30.9111 9.84556L29.0359 19.6901C28.7861 21.0018 28.6611 21.6576 28.323 22.1486C28.0249 22.5816 27.6123 22.9231 27.1312 23.1349C26.5856 23.3752 25.9179 23.3752 24.5826 23.3752Z"
                      fill="white"
                    />
                    <path
                      d="M12.7507 31.1668C13.5331 31.1668 14.1673 30.5326 14.1673 29.7502C14.1673 28.9678 13.5331 28.3335 12.7507 28.3335C11.9682 28.3335 11.334 28.9678 11.334 29.7502C11.334 30.5326 11.9682 31.1668 12.7507 31.1668Z"
                      fill="white"
                    />
                    <path
                      d="M24.084 31.1668C24.8664 31.1668 25.5007 30.5326 25.5007 29.7502C25.5007 28.9678 24.8664 28.3335 24.084 28.3335C23.3016 28.3335 22.6673 28.9678 22.6673 29.7502C22.6673 30.5326 23.3016 31.1668 24.084 31.1668Z"
                      fill="white"
                    />
                    <path
                      d="M2.83398 2.8335H4.68438C5.03291 2.8335 5.20717 2.8335 5.34741 2.89759C5.47099 2.95407 5.57572 3.0449 5.64911 3.15925C5.73239 3.28902 5.75704 3.46153 5.80633 3.80655L6.47684 8.50016M6.47684 8.50016L7.96702 19.453C8.15613 20.8429 8.25068 21.5379 8.58296 22.061C8.87575 22.5219 9.29552 22.8885 9.79174 23.1164C10.3549 23.3752 11.0562 23.3752 12.459 23.3752H24.5826C25.9179 23.3752 26.5856 23.3752 27.1312 23.1349C27.6123 22.9231 28.0249 22.5816 28.323 22.1486C28.6611 21.6576 28.7861 21.0018 29.0359 19.6901L30.9111 9.84556C30.999 9.38389 31.043 9.15306 30.9792 8.97262C30.9233 8.81434 30.813 8.68105 30.668 8.59652C30.5027 8.50016 30.2677 8.50016 29.7977 8.50016H6.47684ZM14.1673 29.7502C14.1673 30.5326 13.5331 31.1668 12.7507 31.1668C11.9682 31.1668 11.334 30.5326 11.334 29.7502C11.334 28.9678 11.9682 28.3335 12.7507 28.3335C13.5331 28.3335 14.1673 28.9678 14.1673 29.7502ZM25.5007 29.7502C25.5007 30.5326 24.8664 31.1668 24.084 31.1668C23.3016 31.1668 22.6673 30.5326 22.6673 29.7502C22.6673 28.9678 23.3016 28.3335 24.084 28.3335C24.8664 28.3335 25.5007 28.9678 25.5007 29.7502Z"
                      stroke="white"
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
              titleArabic: "حلول ذكية للموارد البشرية ",
              titleEnglish: "Smart Solutions and HR On-Demand",
              descriptionEnglish: `Stay ahead in a rapidly evolving market—while we manage your workforce with tailored HR as a Service, providing skilled employees on our payroll to meet your business needs efficiently.`,
              descriptionArabic:
                "حافظ على تقدمك في سوق سريع التطور - بينما نوفر لك موظفين من خلال مواردنا البشرية كخدمة مصممة خصيصاً لك، ونوفر لك موظفين مهرة على جدول الرواتب لدينا لتلبية احتياجات عملك بكفاءة.",
              icon: () => {
                return (
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20833 29.75C6.46992 29.75 4.25 27.5301 4.25 24.7917C4.25 22.0533 6.46992 19.8333 9.20833 19.8333C11.9467 19.8333 14.1667 22.0533 14.1667 24.7917C14.1667 27.5301 11.9467 29.75 9.20833 29.75Z"
                      fill="white"
                    />
                    <path
                      d="M24.7917 14.1667C27.5301 14.1667 29.75 11.9467 29.75 9.20833C29.75 6.46992 27.5301 4.25 24.7917 4.25C22.0533 4.25 19.8333 6.46992 19.8333 9.20833C19.8333 11.9467 22.0533 14.1667 24.7917 14.1667Z"
                      fill="white"
                    />
                    <path
                      d="M21.3216 12.75H7.79167C5.83566 12.75 4.25 11.1643 4.25 9.20833C4.25 7.25232 5.83566 5.66667 7.79167 5.66667H21.3216M12.6784 28.3333H26.2083C28.1643 28.3333 29.75 26.7477 29.75 24.7917C29.75 22.8357 28.1643 21.25 26.2083 21.25H12.6784M4.25 24.7917C4.25 27.5301 6.46992 29.75 9.20833 29.75C11.9467 29.75 14.1667 27.5301 14.1667 24.7917C14.1667 22.0533 11.9467 19.8333 9.20833 19.8333C6.46992 19.8333 4.25 22.0533 4.25 24.7917ZM29.75 9.20833C29.75 11.9467 27.5301 14.1667 24.7917 14.1667C22.0533 14.1667 19.8333 11.9467 19.8333 9.20833C19.8333 6.46992 22.0533 4.25 24.7917 4.25C27.5301 4.25 29.75 6.46992 29.75 9.20833Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                );
              },
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

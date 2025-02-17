/* eslint-disable complexity */
/* eslint-disable max-lines */
import React from "react";

import {
  Box,
  Stack,
  Button,
  Select,
  Divider,
  MenuItem,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useLanguage } from "../../LanguageContext";

const HomeConnectSection = () => {
  const { language } = useLanguage();
  const mobileView = useMediaQuery((mobileTheme) => {
    return mobileTheme.breakpoints.down("tablet");
  });
  const tabletView = useMediaQuery((tabletTheme) => {
    return tabletTheme.breakpoints.between("tablet", "laptop");
  });
  const laptopView = useMediaQuery((laptopTheme) => {
    return laptopTheme.breakpoints.between("laptop", "desktop");
  });
  const desktopView = useMediaQuery((desktopTheme) => {
    return desktopTheme.breakpoints.up("desktop");
  });

  return (
    <Container
      sx={{
        zIndex: 2,
        px: {
          mobile: 4,
          tablet: 4,
          laptop: 30,
          desktop: 30,
        },
      }}
      id="connect"
    >
      <Stack
        p={{
          laptop: 8,
          mobile: 5,
          tablet: 5,
          desktop: 8,
        }}
        gap={2}
        mb={8}
        mx="auto"
        sx={{
          borderRadius: "35px",
          background: "#081420",
          border: "3px solid #0F263D",
        }}
      >
        <Typography
          fontSize={{
            laptop: 56,
            mobile: 24,
            tablet: 24,
            desktop: 56,
          }}
          lineHeight={1}
          fontWeight={700}
          textAlign="center"
          className="responsive-text"
        >
          {language === "en" && <>Let&apos;s Begin the Dialogue</>}
          {language === "ar" && <>فلنبدأ الحوار</>}
        </Typography>
        <Typography
          fontSize={{
            laptop: 20,
            mobile: 16,
            tablet: 16,
            desktop: 20,
          }}
          lineHeight={1.5}
          fontWeight={400}
          textAlign="center"
          color="rgba(255, 255, 255, 0.80"
        >
          {language === "en" && (
            <>
              We’ve helped many businesses transform. Let’s create a success
              story for your business.
            </>
          )}
          {language === "ar" && (
            <>
              لقد ساعدنا العديد من الشركات على التحول. لنقم بإنشاء قصة نجاح
              لعملك.
            </>
          )}
        </Typography>
        <Stack
          mt={{
            laptop: 7,
            mobile: 2,
            tablet: 2,
            desktop: 7,
          }}
          gap={10}
          direction={{
            mobile: "column",
            tablet: "column",
            laptop: language === "en" ? "row" : "row-reverse",
            desktop: language === "en" ? "row" : "row-reverse",
          }}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Stack
            width="100%"
            gap={4}
            alignItems={language === "ar" ? "flex-end" : "flex-start"}
          >
            <Stack
              alignItems={language === "ar" ? "flex-end" : "flex-start"}
              gap={{
                laptop: 1,
                mobile: 2,
                tablet: 2,
                desktop: 1,
              }}
            >
              <Typography
                fontWeight={700}
                fontSize={{
                  laptop: 40,
                  mobile: 20,
                  tablet: 20,
                  desktop: 40,
                }}
                lineHeight={1.2}
              >
                {language === "en" && "Connect With Us"}
                {language === "ar" && "تواصل معنا"}
              </Typography>
              <Typography
                fontSize={{
                  laptop: 20,
                  mobile: 16,
                  tablet: 16,
                  desktop: 20,
                }}
                lineHeight={1.5}
                fontWeight={400}
              >
                {language === "en" && (
                  <>
                    Tell us about your requirements. We’ll get back to you soon.
                  </>
                )}
                {language === "ar" && (
                  <>أخبرنا عن متطلباتك. سوف نعود اليكم قريبا.</>
                )}
              </Typography>
            </Stack>
            <TextField
              width="100%"
              placeholder={language === "ar" ? "*اسم" : "Name*"}
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              width="100%"
              placeholder={
                language === "ar"
                  ? "اسم الشركة (اختياري)"
                  : "Company Name (MenuItemal)"
              }
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              width="100%"
              placeholder={
                language === "ar" ? "رقم التليفون*" : "Phone Number*"
              }
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <Select
              defaultValue=""
              displayEmpty
              width="100%"
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .MuiSvgIcon-root": {
                  color: "rgba(255, 255, 255, 0.30)",
                },
                "& .MuiSelect-select": {
                  color: "rgba(255, 255, 255, 0.30)",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            >
              <MenuItem data-countryCode="DZ" value="">
                Please Select Country Code
              </MenuItem>
              <MenuItem data-countryCode="DZ" value="213">
                Algeria (+213)
              </MenuItem>
              <MenuItem data-countryCode="AD" value="376">
                Andorra (+376)
              </MenuItem>
              <MenuItem data-countryCode="AO" value="244">
                Angola (+244)
              </MenuItem>
              <MenuItem data-countryCode="AI" value="1264">
                Anguilla (+1264)
              </MenuItem>
              <MenuItem data-countryCode="AG" value="1268">
                Antigua &amp; Barbuda (+1268)
              </MenuItem>
              <MenuItem data-countryCode="AR" value="54">
                Argentina (+54)
              </MenuItem>
              <MenuItem data-countryCode="AM" value="374">
                Armenia (+374)
              </MenuItem>
              <MenuItem data-countryCode="AW" value="297">
                Aruba (+297)
              </MenuItem>
              <MenuItem data-countryCode="AU" value="61">
                Australia (+61)
              </MenuItem>
              <MenuItem data-countryCode="AT" value="43">
                Austria (+43)
              </MenuItem>
              <MenuItem data-countryCode="AZ" value="994">
                Azerbaijan (+994)
              </MenuItem>
              <MenuItem data-countryCode="BS" value="1242">
                Bahamas (+1242)
              </MenuItem>
              <MenuItem data-countryCode="BH" value="973">
                Bahrain (+973)
              </MenuItem>
              <MenuItem data-countryCode="BD" value="880">
                Bangladesh (+880)
              </MenuItem>
              <MenuItem data-countryCode="BB" value="1246">
                Barbados (+1246)
              </MenuItem>
              <MenuItem data-countryCode="BY" value="375">
                Belarus (+375)
              </MenuItem>
              <MenuItem data-countryCode="BE" value="32">
                Belgium (+32)
              </MenuItem>
              <MenuItem data-countryCode="BZ" value="501">
                Belize (+501)
              </MenuItem>
              <MenuItem data-countryCode="BJ" value="229">
                Benin (+229)
              </MenuItem>
              <MenuItem data-countryCode="BM" value="1441">
                Bermuda (+1441)
              </MenuItem>
              <MenuItem data-countryCode="BT" value="975">
                Bhutan (+975)
              </MenuItem>
              <MenuItem data-countryCode="BO" value="591">
                Bolivia (+591)
              </MenuItem>
              <MenuItem data-countryCode="BA" value="387">
                Bosnia Herzegovina (+387)
              </MenuItem>
              <MenuItem data-countryCode="BW" value="267">
                Botswana (+267)
              </MenuItem>
              <MenuItem data-countryCode="BR" value="55">
                Brazil (+55)
              </MenuItem>
              <MenuItem data-countryCode="BN" value="673">
                Brunei (+673)
              </MenuItem>
              <MenuItem data-countryCode="BG" value="359">
                Bulgaria (+359)
              </MenuItem>
              <MenuItem data-countryCode="BF" value="226">
                Burkina Faso (+226)
              </MenuItem>
              <MenuItem data-countryCode="BI" value="257">
                Burundi (+257)
              </MenuItem>
              <MenuItem data-countryCode="KH" value="855">
                Cambodia (+855)
              </MenuItem>
              <MenuItem data-countryCode="CM" value="237">
                Cameroon (+237)
              </MenuItem>
              <MenuItem data-countryCode="CA" value="1">
                Canada (+1)
              </MenuItem>
              <MenuItem data-countryCode="CV" value="238">
                Cape Verde Islands (+238)
              </MenuItem>
              <MenuItem data-countryCode="KY" value="1345">
                Cayman Islands (+1345)
              </MenuItem>
              <MenuItem data-countryCode="CF" value="236">
                Central African Republic (+236)
              </MenuItem>
              <MenuItem data-countryCode="CL" value="56">
                Chile (+56)
              </MenuItem>
              <MenuItem data-countryCode="CN" value="86">
                China (+86)
              </MenuItem>
              <MenuItem data-countryCode="CO" value="57">
                Colombia (+57)
              </MenuItem>
              <MenuItem data-countryCode="KM" value="269">
                Comoros (+269)
              </MenuItem>
              <MenuItem data-countryCode="CG" value="242">
                Congo (+242)
              </MenuItem>
              <MenuItem data-countryCode="CK" value="682">
                Cook Islands (+682)
              </MenuItem>
              <MenuItem data-countryCode="CR" value="506">
                Costa Rica (+506)
              </MenuItem>
              <MenuItem data-countryCode="HR" value="385">
                Croatia (+385)
              </MenuItem>
              <MenuItem data-countryCode="CU" value="53">
                Cuba (+53)
              </MenuItem>
              <MenuItem data-countryCode="CY" value="90392">
                Cyprus North (+90392)
              </MenuItem>
              <MenuItem data-countryCode="CY" value="357">
                Cyprus South (+357)
              </MenuItem>
              <MenuItem data-countryCode="CZ" value="42">
                Czech Republic (+42)
              </MenuItem>
              <MenuItem data-countryCode="DK" value="45">
                Denmark (+45)
              </MenuItem>
              <MenuItem data-countryCode="DJ" value="253">
                Djibouti (+253)
              </MenuItem>
              <MenuItem data-countryCode="DM" value="1809">
                Dominica (+1809)
              </MenuItem>
              <MenuItem data-countryCode="DO" value="1809">
                Dominican Republic (+1809)
              </MenuItem>
              <MenuItem data-countryCode="EC" value="593">
                Ecuador (+593)
              </MenuItem>
              <MenuItem data-countryCode="EG" value="20">
                Egypt (+20)
              </MenuItem>
              <MenuItem data-countryCode="SV" value="503">
                El Salvador (+503)
              </MenuItem>
              <MenuItem data-countryCode="GQ" value="240">
                Equatorial Guinea (+240)
              </MenuItem>
              <MenuItem data-countryCode="ER" value="291">
                Eritrea (+291)
              </MenuItem>
              <MenuItem data-countryCode="EE" value="372">
                Estonia (+372)
              </MenuItem>
              <MenuItem data-countryCode="ET" value="251">
                Ethiopia (+251)
              </MenuItem>
              <MenuItem data-countryCode="FK" value="500">
                Falkland Islands (+500)
              </MenuItem>
              <MenuItem data-countryCode="FO" value="298">
                Faroe Islands (+298)
              </MenuItem>
              <MenuItem data-countryCode="FJ" value="679">
                Fiji (+679)
              </MenuItem>
              <MenuItem data-countryCode="FI" value="358">
                Finland (+358)
              </MenuItem>
              <MenuItem data-countryCode="FR" value="33">
                France (+33)
              </MenuItem>
              <MenuItem data-countryCode="GF" value="594">
                French Guiana (+594)
              </MenuItem>
              <MenuItem data-countryCode="PF" value="689">
                French Polynesia (+689)
              </MenuItem>
              <MenuItem data-countryCode="GA" value="241">
                Gabon (+241)
              </MenuItem>
              <MenuItem data-countryCode="GM" value="220">
                Gambia (+220)
              </MenuItem>
              <MenuItem data-countryCode="GE" value="7880">
                Georgia (+7880)
              </MenuItem>
              <MenuItem data-countryCode="DE" value="49">
                Germany (+49)
              </MenuItem>
              <MenuItem data-countryCode="GH" value="233">
                Ghana (+233)
              </MenuItem>
              <MenuItem data-countryCode="GI" value="350">
                Gibraltar (+350)
              </MenuItem>
              <MenuItem data-countryCode="GR" value="30">
                Greece (+30)
              </MenuItem>
              <MenuItem data-countryCode="GL" value="299">
                Greenland (+299)
              </MenuItem>
              <MenuItem data-countryCode="GD" value="1473">
                Grenada (+1473)
              </MenuItem>
              <MenuItem data-countryCode="GP" value="590">
                Guadeloupe (+590)
              </MenuItem>
              <MenuItem data-countryCode="GU" value="671">
                Guam (+671)
              </MenuItem>
              <MenuItem data-countryCode="GT" value="502">
                Guatemala (+502)
              </MenuItem>
              <MenuItem data-countryCode="GN" value="224">
                Guinea (+224)
              </MenuItem>
              <MenuItem data-countryCode="GW" value="245">
                Guinea - Bissau (+245)
              </MenuItem>
              <MenuItem data-countryCode="GY" value="592">
                Guyana (+592)
              </MenuItem>
              <MenuItem data-countryCode="HT" value="509">
                Haiti (+509)
              </MenuItem>
              <MenuItem data-countryCode="HN" value="504">
                Honduras (+504)
              </MenuItem>
              <MenuItem data-countryCode="HK" value="852">
                Hong Kong (+852)
              </MenuItem>
              <MenuItem data-countryCode="HU" value="36">
                Hungary (+36)
              </MenuItem>
              <MenuItem data-countryCode="IS" value="354">
                Iceland (+354)
              </MenuItem>
              <MenuItem data-countryCode="IN" value="91">
                India (+91)
              </MenuItem>
              <MenuItem data-countryCode="ID" value="62">
                Indonesia (+62)
              </MenuItem>
              <MenuItem data-countryCode="IR" value="98">
                Iran (+98)
              </MenuItem>
              <MenuItem data-countryCode="IQ" value="964">
                Iraq (+964)
              </MenuItem>
              <MenuItem data-countryCode="IE" value="353">
                Ireland (+353)
              </MenuItem>
              <MenuItem data-countryCode="IL" value="972">
                Israel (+972)
              </MenuItem>
              <MenuItem data-countryCode="IT" value="39">
                Italy (+39)
              </MenuItem>
              <MenuItem data-countryCode="JM" value="1876">
                Jamaica (+1876)
              </MenuItem>
              <MenuItem data-countryCode="JP" value="81">
                Japan (+81)
              </MenuItem>
              <MenuItem data-countryCode="JO" value="962">
                Jordan (+962)
              </MenuItem>
              <MenuItem data-countryCode="KZ" value="7">
                Kazakhstan (+7)
              </MenuItem>
              <MenuItem data-countryCode="KE" value="254">
                Kenya (+254)
              </MenuItem>
              <MenuItem data-countryCode="KI" value="686">
                Kiribati (+686)
              </MenuItem>
              <MenuItem data-countryCode="KP" value="850">
                Korea North (+850)
              </MenuItem>
              <MenuItem data-countryCode="KR" value="82">
                Korea South (+82)
              </MenuItem>
              <MenuItem data-countryCode="KW" value="965">
                Kuwait (+965)
              </MenuItem>
              <MenuItem data-countryCode="KG" value="996">
                Kyrgyzstan (+996)
              </MenuItem>
              <MenuItem data-countryCode="LA" value="856">
                Laos (+856)
              </MenuItem>
              <MenuItem data-countryCode="LV" value="371">
                Latvia (+371)
              </MenuItem>
              <MenuItem data-countryCode="LB" value="961">
                Lebanon (+961)
              </MenuItem>
              <MenuItem data-countryCode="LS" value="266">
                Lesotho (+266)
              </MenuItem>
              <MenuItem data-countryCode="LR" value="231">
                Liberia (+231)
              </MenuItem>
              <MenuItem data-countryCode="LY" value="218">
                Libya (+218)
              </MenuItem>
              <MenuItem data-countryCode="LI" value="417">
                Liechtenstein (+417)
              </MenuItem>
              <MenuItem data-countryCode="LT" value="370">
                Lithuania (+370)
              </MenuItem>
              <MenuItem data-countryCode="LU" value="352">
                Luxembourg (+352)
              </MenuItem>
              <MenuItem data-countryCode="MO" value="853">
                Macao (+853)
              </MenuItem>
              <MenuItem data-countryCode="MK" value="389">
                Macedonia (+389)
              </MenuItem>
              <MenuItem data-countryCode="MG" value="261">
                Madagascar (+261)
              </MenuItem>
              <MenuItem data-countryCode="MW" value="265">
                Malawi (+265)
              </MenuItem>
              <MenuItem data-countryCode="MY" value="60">
                Malaysia (+60)
              </MenuItem>
              <MenuItem data-countryCode="MV" value="960">
                Maldives (+960)
              </MenuItem>
              <MenuItem data-countryCode="ML" value="223">
                Mali (+223)
              </MenuItem>
              <MenuItem data-countryCode="MT" value="356">
                Malta (+356)
              </MenuItem>
              <MenuItem data-countryCode="MH" value="692">
                Marshall Islands (+692)
              </MenuItem>
              <MenuItem data-countryCode="MQ" value="596">
                Martinique (+596)
              </MenuItem>
              <MenuItem data-countryCode="MR" value="222">
                Mauritania (+222)
              </MenuItem>
              <MenuItem data-countryCode="YT" value="269">
                Mayotte (+269)
              </MenuItem>
              <MenuItem data-countryCode="MX" value="52">
                Mexico (+52)
              </MenuItem>
              <MenuItem data-countryCode="FM" value="691">
                Micronesia (+691)
              </MenuItem>
              <MenuItem data-countryCode="MD" value="373">
                Moldova (+373)
              </MenuItem>
              <MenuItem data-countryCode="MC" value="377">
                Monaco (+377)
              </MenuItem>
              <MenuItem data-countryCode="MN" value="976">
                Mongolia (+976)
              </MenuItem>
              <MenuItem data-countryCode="MS" value="1664">
                Montserrat (+1664)
              </MenuItem>
              <MenuItem data-countryCode="MA" value="212">
                Morocco (+212)
              </MenuItem>
              <MenuItem data-countryCode="MZ" value="258">
                Mozambique (+258)
              </MenuItem>
              <MenuItem data-countryCode="MN" value="95">
                Myanmar (+95)
              </MenuItem>
              <MenuItem data-countryCode="NA" value="264">
                Namibia (+264)
              </MenuItem>
              <MenuItem data-countryCode="NR" value="674">
                Nauru (+674)
              </MenuItem>
              <MenuItem data-countryCode="NP" value="977">
                Nepal (+977)
              </MenuItem>
              <MenuItem data-countryCode="NL" value="31">
                Netherlands (+31)
              </MenuItem>
              <MenuItem data-countryCode="NC" value="687">
                New Caledonia (+687)
              </MenuItem>
              <MenuItem data-countryCode="NZ" value="64">
                New Zealand (+64)
              </MenuItem>
              <MenuItem data-countryCode="NI" value="505">
                Nicaragua (+505)
              </MenuItem>
              <MenuItem data-countryCode="NE" value="227">
                Niger (+227)
              </MenuItem>
              <MenuItem data-countryCode="NG" value="234">
                Nigeria (+234)
              </MenuItem>
              <MenuItem data-countryCode="NU" value="683">
                Niue (+683)
              </MenuItem>
              <MenuItem data-countryCode="NF" value="672">
                Norfolk Islands (+672)
              </MenuItem>
              <MenuItem data-countryCode="NP" value="670">
                Northern Marianas (+670)
              </MenuItem>
              <MenuItem data-countryCode="NO" value="47">
                Norway (+47)
              </MenuItem>
              <MenuItem data-countryCode="OM" value="968">
                Oman (+968)
              </MenuItem>
              <MenuItem data-countryCode="PW" value="680">
                Palau (+680)
              </MenuItem>
              <MenuItem data-countryCode="PA" value="507">
                Panama (+507)
              </MenuItem>
              <MenuItem data-countryCode="PG" value="675">
                Papua New Guinea (+675)
              </MenuItem>
              <MenuItem data-countryCode="PY" value="595">
                Paraguay (+595)
              </MenuItem>
              <MenuItem data-countryCode="PE" value="51">
                Peru (+51)
              </MenuItem>
              <MenuItem data-countryCode="PH" value="63">
                Philippines (+63)
              </MenuItem>
              <MenuItem data-countryCode="PL" value="48">
                Poland (+48)
              </MenuItem>
              <MenuItem data-countryCode="PT" value="351">
                Portugal (+351)
              </MenuItem>
              <MenuItem data-countryCode="PR" value="1787">
                Puerto Rico (+1787)
              </MenuItem>
              <MenuItem data-countryCode="QA" value="974">
                Qatar (+974)
              </MenuItem>
              <MenuItem data-countryCode="RE" value="262">
                Reunion (+262)
              </MenuItem>
              <MenuItem data-countryCode="RO" value="40">
                Romania (+40)
              </MenuItem>
              <MenuItem data-countryCode="RU" value="7">
                Russia (+7)
              </MenuItem>
              <MenuItem data-countryCode="RW" value="250">
                Rwanda (+250)
              </MenuItem>
              <MenuItem data-countryCode="SM" value="378">
                San Marino (+378)
              </MenuItem>
              <MenuItem data-countryCode="ST" value="239">
                Sao Tome &amp; Principe (+239)
              </MenuItem>
              <MenuItem data-countryCode="SA" value="966">
                Saudi Arabia (+966)
              </MenuItem>
              <MenuItem data-countryCode="SN" value="221">
                Senegal (+221)
              </MenuItem>
              <MenuItem data-countryCode="CS" value="381">
                Serbia (+381)
              </MenuItem>
              <MenuItem data-countryCode="SC" value="248">
                Seychelles (+248)
              </MenuItem>
              <MenuItem data-countryCode="SL" value="232">
                Sierra Leone (+232)
              </MenuItem>
              <MenuItem data-countryCode="SG" value="65">
                Singapore (+65)
              </MenuItem>
              <MenuItem data-countryCode="SK" value="421">
                Slovak Republic (+421)
              </MenuItem>
              <MenuItem data-countryCode="SI" value="386">
                Slovenia (+386)
              </MenuItem>
              <MenuItem data-countryCode="SB" value="677">
                Solomon Islands (+677)
              </MenuItem>
              <MenuItem data-countryCode="SO" value="252">
                Somalia (+252)
              </MenuItem>
              <MenuItem data-countryCode="ZA" value="27">
                South Africa (+27)
              </MenuItem>
              <MenuItem data-countryCode="ES" value="34">
                Spain (+34)
              </MenuItem>
              <MenuItem data-countryCode="LK" value="94">
                Sri Lanka (+94)
              </MenuItem>
              <MenuItem data-countryCode="SH" value="290">
                St. Helena (+290)
              </MenuItem>
              <MenuItem data-countryCode="KN" value="1869">
                St. Kitts (+1869)
              </MenuItem>
              <MenuItem data-countryCode="SC" value="1758">
                St. Lucia (+1758)
              </MenuItem>
              <MenuItem data-countryCode="SD" value="249">
                Sudan (+249)
              </MenuItem>
              <MenuItem data-countryCode="SR" value="597">
                Suriname (+597)
              </MenuItem>
              <MenuItem data-countryCode="SZ" value="268">
                Swaziland (+268)
              </MenuItem>
              <MenuItem data-countryCode="SE" value="46">
                Sweden (+46)
              </MenuItem>
              <MenuItem data-countryCode="CH" value="41">
                Switzerland (+41)
              </MenuItem>
              <MenuItem data-countryCode="SI" value="963">
                Syria (+963)
              </MenuItem>
              <MenuItem data-countryCode="TW" value="886">
                Taiwan (+886)
              </MenuItem>
              <MenuItem data-countryCode="TJ" value="7">
                Tajikstan (+7)
              </MenuItem>
              <MenuItem data-countryCode="TH" value="66">
                Thailand (+66)
              </MenuItem>
              <MenuItem data-countryCode="TG" value="228">
                Togo (+228)
              </MenuItem>
              <MenuItem data-countryCode="TO" value="676">
                Tonga (+676)
              </MenuItem>
              <MenuItem data-countryCode="TT" value="1868">
                Trinidad &amp; Tobago (+1868)
              </MenuItem>
              <MenuItem data-countryCode="TN" value="216">
                Tunisia (+216)
              </MenuItem>
              <MenuItem data-countryCode="TR" value="90">
                Turkey (+90)
              </MenuItem>
              <MenuItem data-countryCode="TM" value="7">
                Turkmenistan (+7)
              </MenuItem>
              <MenuItem data-countryCode="TM" value="993">
                Turkmenistan (+993)
              </MenuItem>
              <MenuItem data-countryCode="TC" value="1649">
                Turks &amp; Caicos Islands (+1649)
              </MenuItem>
              <MenuItem data-countryCode="TV" value="688">
                Tuvalu (+688)
              </MenuItem>
              <MenuItem data-countryCode="UG" value="256">
                Uganda (+256)
              </MenuItem>
              <MenuItem data-countryCode="GB" value="44">
                UK (+44)
              </MenuItem>
              <MenuItem data-countryCode="UA" value="380">
                Ukraine (+380)
              </MenuItem>
              <MenuItem data-countryCode="AE" value="971">
                United Arab Emirates (+971)
              </MenuItem>
              <MenuItem data-countryCode="UY" value="598">
                Uruguay (+598)
              </MenuItem>
              <MenuItem data-countryCode="US" value="1">
                USA (+1)
              </MenuItem>
              <MenuItem data-countryCode="UZ" value="7">
                Uzbekistan (+7)
              </MenuItem>
              <MenuItem data-countryCode="VU" value="678">
                Vanuatu (+678)
              </MenuItem>
              <MenuItem data-countryCode="VA" value="379">
                Vatican City (+379)
              </MenuItem>
              <MenuItem data-countryCode="VE" value="58">
                Venezuela (+58)
              </MenuItem>
              <MenuItem data-countryCode="VN" value="84">
                Vietnam (+84)
              </MenuItem>
              <MenuItem data-countryCode="VG" value="84">
                Virgin Islands - British (+1284)
              </MenuItem>
              <MenuItem data-countryCode="VI" value="84">
                Virgin Islands - US (+1340)
              </MenuItem>
              <MenuItem data-countryCode="WF" value="681">
                Wallis &amp; Futuna (+681)
              </MenuItem>
              <MenuItem data-countryCode="YE" value="969">
                Yemen (North)(+969)
              </MenuItem>
              <MenuItem data-countryCode="YE" value="967">
                Yemen (South)(+967)
              </MenuItem>
              <MenuItem data-countryCode="ZM" value="260">
                Zambia (+260)
              </MenuItem>
              <MenuItem data-countryCode="ZW" value="263">
                Zimbabwe (+263)
              </MenuItem>
            </Select>
            <TextField
              width="100%"
              placeholder={
                language === "ar"
                  ? "عنوان البريد الإلكتروني*"
                  : "Email Address*"
              }
              sx={{
                width: "100%",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(65, 196, 218, 0.30)",
                "& .MuiInputBase-root": {
                  height: "45px",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline ": {
                  outline: "none",
                  borderRadius: "12px",
                  border: "1px solid rgba(65, 196, 218, 0.80)",
                },
                input: {
                  py: 1.5,
                  color: "#fff",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
                  },
                },
              }}
            />
            <TextField
              multiline
              rows={4}
              placeholder={
                language === "ar"
                  ? "قم بوصف متطلباتك*"
                  : "Describe your requirements*"
              }
              sx={{
                width: "100%",
                borderRadius: "12px",
                "& .MuiOutlinedInput-multiline": {
                  padding: 0,
                },
                "& textarea": {
                  color: "#fff",
                  padding: "0px",
                  "&::placeholder": {
                    fontSize: 16,
                    color: "rgba(255, 255, 255, 0.60)",
                    textAlign: language === "ar" ? "right" : "left",
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

            <Stack
              direction={language === "ar" ? "row-reverse" : "row"}
              alignItems="center"
              gap={2}
            >
              <Box component="img" src="/link.svg" />
              <Stack
                justifyContent={language === "ar" ? "flex-end" : "flex-start"}
              >
                <Typography
                  fontSize={16}
                  lineHeight={1.2}
                  fontWeight={400}
                  textAlign={language === "ar" ? "right" : "left"}
                >
                  {language === "ar" ? "إرفاق الملف" : "Attach File"}
                </Typography>
                <Typography
                  fontSize={14}
                  lineHeight={1.2}
                  fontWeight={400}
                  color="rgba(255, 255, 255, 0.80)"
                  textAlign={language === "ar" ? "right" : "left"}
                >
                  {language === "en" && (
                    <>
                      (You may upload only doc, docx & pdf file. Max file size:
                      25MB)
                    </>
                  )}
                  {language === "ar" && (
                    <>
                      (يمكنك تحميل ملفات doc وdocx وpdf فقط. الحد الأقصى لحجم
                      الملف: 25 ميجابايت)
                    </>
                  )}
                </Typography>
              </Stack>
            </Stack>
            <Button
              width="100%"
              sx={{
                py: 1,
                fontSize: 24,
                color: "#000",
                fontWeight: 700,
                minWidth: "100%",
                borderRadius: "12px",
                background: " #41C4DA",
              }}
            >
              {language === "en" && "Submit"}
              {language === "ar" && "يُقدِّم"}
            </Button>
          </Stack>
          <Divider
            orientation={
              laptopView || desktopView
                ? "vertical"
                : tabletView || mobileView
                  ? "horizontal"
                  : "vertical"
            }
            flexItem
            sx={{
              borderTop: "0px",
              borderWidth: "2px",
              position: "relative",
              borderColor: "rgba(255, 255, 255, 0.50)",
              width: {
                laptop: "0px",
                desktop: "0px",
                mobile: "100%",
                tablet: "100%",
              },
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
          <Stack
            width="100%"
            gap={4}
            alignItems={language === "ar" ? "flex-end" : "flex-start"}
          >
            <Stack
              alignItems={language === "ar" ? "flex-end" : "flex-start"}
              gap={{
                laptop: 1,
                mobile: 2,
                tablet: 2,
                desktop: 1,
              }}
            >
              <Typography
                fontSize={{
                  laptop: 40,
                  mobile: 20,
                  tablet: 20,
                  desktop: 40,
                }}
                fontWeight={700}
                lineHeight={1.5}
              >
                {language === "en" && "Quick Connect"}
                {language === "ar" && "اتصال سريع"}
              </Typography>
              <Typography
                fontSize={{
                  laptop: 20,
                  mobile: 16,
                  tablet: 16,
                  desktop: 20,
                }}
                fontWeight={400}
                lineHeight={1.5}
                color="rgba(255, 255, 255, 0.80)"
              >
                {language === "en" && (
                  <>
                    We are just a tap away! Reach out to us for more information
                  </>
                )}
                {language === "ar" && (
                  <>نحن على بعد نقرة واحدة فقط! تواصل معنا لمزيد من المعلومات</>
                )}
              </Typography>
            </Stack>
            <a
              href="mailto:info@tsc.com.sa"
              style={{
                width: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Stack
                width="100%"
                gap={2}
                px={4}
                direction={language === "ar" ? "row-reverse" : "row"}
                alignItems="center"
                sx={{
                  minHeight: "100px",
                  borderRadius: "12px",
                  border: "1.6px solid rgba(65, 196, 218, 0.30)",
                }}
              >
                <Box component="img" src="/email.svg" width={40} />
                <Stack gap={1}>
                  <Typography
                    fontSize={18}
                    fontWeight={500}
                    lineHeight={1}
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {language === "en" && "Email"}
                    {language === "ar" && "بريد إلكتروني"}
                  </Typography>
                  <Typography
                    fontSize={18}
                    fontWeight={300}
                    lineHeight={1.5}
                    color="#ffffff80"
                  >
                    {language === "en" && "info@tsc.com.sa"}
                    {language === "ar" && "info@tsc.com.sa"}
                  </Typography>
                </Stack>
              </Stack>
            </a>
            <a
              href="tel:+966571100020"
              style={{
                width: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Stack
                width="100%"
                gap={2}
                px={4}
                direction={language === "ar" ? "row-reverse" : "row"}
                alignItems="center"
                sx={{
                  minHeight: "100px",
                  borderRadius: "12px",
                  border: "1.6px solid rgba(65, 196, 218, 0.30)",
                }}
              >
                <Box component="img" src="/phone.svg" width={40} />
                <Stack gap={1}>
                  <Typography
                    fontSize={18}
                    fontWeight={500}
                    lineHeight={1}
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {language === "en" && "Call"}
                    {language === "ar" && "يتصل"}
                  </Typography>
                  <Typography
                    fontSize={18}
                    fontWeight={300}
                    lineHeight={1.5}
                    color="#ffffff80"
                  >
                    +966571100020
                  </Typography>
                </Stack>
              </Stack>
            </a>
            <a
              href="https://teams.microsoft.com/l/team/19%3AIbW8P1haAq7fyc1Znmj1AJDnqIduBjmjVkAe1Uf16Ts1%40thread.tacv2/conversations?groupId=5b896b84-756b-435a-8848-84b47520c4f6&tenantId=66f8f7fc-3bc1-476c-993a-b0b3e1185e5c"
              style={{
                width: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Stack
                width="100%"
                gap={2}
                px={4}
                direction={language === "ar" ? "row-reverse" : "row"}
                alignItems="center"
                sx={{
                  minHeight: "100px",
                  borderRadius: "12px",
                  border: "1.6px solid rgba(65, 196, 218, 0.30)",
                }}
              >
                <Box component="img" src="/teams.svg" width={40} />
                <Stack gap={1}>
                  <Typography
                    fontSize={18}
                    fontWeight={500}
                    lineHeight={1}
                    textAlign={language === "ar" ? "right" : "left"}
                  >
                    {language === "en" && "Teams"}
                    {language === "ar" && "فريق"}
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
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeConnectSection;

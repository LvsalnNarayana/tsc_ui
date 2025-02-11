const generateThemeOptions = (appTheme, language) => {
  const mode = appTheme.mode || "light";
  const primaryColor = "#005093";
  const secondaryColor = "#ED502E";

  return {
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 500,
        laptop: 1200,
        desktop: 1440,
      },
    },
    palette: {
      mode,
      theadbg: {
        main: "#EDF3FF",
      },
      activeBlue: {
        main: "#3574F0",
      },
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
    typography: {
      overflow: "hidden",
      fontFamily: language === "ar" ? ["Ara ES Nawar Regular"] : ["Dubai"],
      body2: {
        noWrap: true,
        lineHeight: 1,
        fontWeight: 400,
        textOverflow: "ellipsis",
      },
      body1: {
        noWrap: true,
        lineHeight: 1,
        fontWeight: 400,
        textOverflow: "ellipsis",
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            overflow: "hidden",
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableFocusRipple: true,
          disableTouchRipple: true,
        },
      },
      MuiMenuItem: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            minHeight: 0,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: "small",
          disableRipple: true,
          variant: "contained",
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            "&.MuiTypography-root": {
              fontWeight: 500,
              fontSize: "14px",
            },
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: {
          // FontFace: {
          //   fontFamily: "Dubai",
          //   src: "url(../assets/fonts/Dubai-Light.ttf)",
          // },
          body: {
            scrollbarColor: "#dadada",

            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,

              backgroundColor: "#A7A7A7",

              border: "3px solid #A7A7A7",
            },
          },
        },
      },
    },
  };
};

export default generateThemeOptions;

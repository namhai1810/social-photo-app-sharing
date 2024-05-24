// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FAFAFA",
    10: "#F0F0F0",
    50: "#E0E0E0",
    100: "#D1D1D1",
    200: "#BEBEBE",
    300: "#ABABAB",
    400: "#969696",
    500: "#838383",
    600: "#707070",
    700: "#5D5D5D",
    800: "#4A4A4A",
    900: "#373737",
    1000: "#242424",
  },
  primary: {
    50: "#E0F7FA",
    100: "#B2EBF2",
    200: "#80DEEA",
    300: "#4DD0E1",
    400: "#26C6DA",
    500: "#00BFC5",
    600: "#00A3A9",
    700: "#008A8F",
    800: "#007176",
    900: "#00565C",
  },
  secondary: {
    50: "#FFF8E1",
    100: "#FFECB3",
    200: "#FFE082",
    300: "#FFD54F",
    400: "#FFCA28",
    500: "#FFC107",
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00",
  },
};
// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[300],
              main: colorTokens.primary[600],
              light: colorTokens.primary[800],
            },
            secondary: {
              dark: colorTokens.secondary[300],
              main: colorTokens.secondary[600],
              light: colorTokens.secondary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[400],
              mediumMain: colorTokens.grey[500],
              medium: colorTokens.grey[600],
              light: colorTokens.grey[800],
            },
            background: {
              default: colorTokens.grey[1000],
              alt: colorTokens.grey[900],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[800],
              main: colorTokens.primary[600],
              light: colorTokens.primary[100],
            },
            secondary: {
              dark: colorTokens.secondary[800],
              main: colorTokens.secondary[600],
              light: colorTokens.secondary[100],
            },
            neutral: {
              dark: colorTokens.grey[800],
              main: colorTokens.grey[600],
              mediumMain: colorTokens.grey[500],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[100],
            },
            background: {
              default: colorTokens.grey[50],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontSize: 16,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 48,
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 1.6,
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.7,
      },
      body1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.8,
      },
      body2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.7,
      },
      button: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 500,
        textTransform: "uppercase",
      },
    },
    shadows:
      mode === "dark"
        ? [
            "none",
            "0px 2px 4px rgba(0, 0, 0, 0.12)",
            "0px 3px 6px rgba(0, 0, 0, 0.20)",
            "0px 5px 10px rgba(0, 0, 0, 0.30)",
          ]
        : [
            "none",
            "0px 2px 4px rgba(0, 0, 0, 0.12)",
            "0px 3px 6px rgba(0, 0, 0, 0.20)",
            "0px 5px 10px rgba(0, 0, 0, 0.10)",
          ],
    shape: {
      borderRadius: 8,
    },
  };
};

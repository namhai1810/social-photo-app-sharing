// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F8F9FA",
      50: "#F1F3F5",
      100: "#E9ECEF",
      200: "#DEE2E6",
      300: "#CED4DA",
      400: "#ADB5BD",
      500: "#6C757D",
      600: "#495057",
      700: "#343A40",
      800: "#212529",
      900: "#121416",
      1000: "#000000",
    },
    primary: {
      50: "#E8F8F5",
      100: "#C2ECE7",
      200: "#9BDED9",
      300: "#73D1CC",
      400: "#4BC3BE",
      500: "#23B5B0",
      600: "#1A8D8A",
      700: "#126564",
      800: "#093D3D",
      900: "#051F1F",
    },
    secondary: {
      50: "#FFF3E1",
      100: "#FFE0B2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#FB8C00",
      700: "#F57C00",
      800: "#EF6C00",
      900: "#E65100",
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
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[700],
              },
              secondary: {
                dark: colorTokens.secondary[200],
                main: colorTokens.secondary[500],
                light: colorTokens.secondary[700],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[300],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[500],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              secondary: {
                dark: colorTokens.secondary[700],
                main: colorTokens.secondary[500],
                light: colorTokens.secondary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
        h1: {   
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 42,
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h2:{
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 36,
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 1.6,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 1.7,
      },
      body1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.8,
      },
      body2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.7,
      },
      button: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'uppercase',
      },
    },
    shadows: mode === 'dark'
      ? ["none", "0px 1px 3px rgba(0, 0, 0, 0.12)", "0px 1px 5px rgba(0, 0, 0, 0.2)", "0px 1px 10px rgba(0, 0, 0, 0.3)"]
      : ["none", "0px 1px 3px rgba(0, 0, 0, 0.12)", "0px 1px 5px rgba(0, 0, 0, 0.2)", "0px 1px 10px rgba(0, 0, 0, 0.1)"],
    shape: {
      borderRadius: 8,
    },
  };
};

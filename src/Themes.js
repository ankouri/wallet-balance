import React, { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//DEFINE COLOR MODE CONTEXT
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function MuiThemeProvider({ children }) {
  // DEFINE STATE MODE
  const [mode, setMode] = useState("light");

  //USING useMemo HOOK TO MEMORIZE VALUE OF MODE
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  //DEFINE CUSTOM THEME PROPRIETIES
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // PALETTE VALUES FOR LIGHT MODE
                primary: {
                  main: "#000",
                },
                secondary: {
                  main: "#e6ab4f",
                },
                text: {
                  primary: "#000",
                },
                background: {
                  default: "#f2f2f2",
                },
              }
            : {
                // PALETTE VALUES FOR DARK MODE
                primary: {
                  main: "#ffffff",
                },
                secondary: {
                  main: "#007FFF",
                },
                background: {
                  default: "#222222",
                },
                text: {
                  primary: "#ffffff",
                },
              }),
        },
        typography: {
          fontFamily: "Maven Pro",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

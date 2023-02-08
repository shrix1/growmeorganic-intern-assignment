import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#14171A",
    },
    secondary: {
      main: "#1DA1F2",
      dark: "#657786",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightBold: "900",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

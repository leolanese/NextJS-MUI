import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "monospace",
    h1: {
      fontFamily: "serif",
      color: "red",
    },
    h2: {
      fontFamily: "Comic",
      color: "Blue",
    },
    button: {
      textTransform: "none",
    },
  },
});

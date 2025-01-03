import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#5156bf",
    },
    secondary: {
      main: "#28bdb1",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

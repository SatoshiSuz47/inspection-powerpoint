import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import HeaderLayout from "./components/layout/HeaderLayout";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main/Main";

export default function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderLayout>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBar />
          </Grid>
          <Grid item xs={10}>
            <Main />
          </Grid>
        </Grid>
      </HeaderLayout>
    </ThemeProvider>
  );
}

import { AppBar, Toolbar, Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ヘッダー
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

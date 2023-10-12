import { Box } from "@mui/material";
import SlideProvider from "../Slide/provider/SlideProvider";

export default function Main() {
  return (
    <Box sx={{ p: 1, m: 2 }}>
      <SlideProvider></SlideProvider>
    </Box>
  );
}

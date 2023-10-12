import { Box, ListItem, ListItemText } from "@mui/material";

export default function SideBar() {
  const listItems = new Array<string>(10).fill("").map((_, index) => index);

  return (
    <Box sx={{ p: 2, mx: 2 }}>
      {listItems.map((value) => (
        <ListItem key={value} disableGutters>
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </Box>
  );
}

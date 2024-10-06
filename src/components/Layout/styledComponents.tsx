import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  "& main": {
    height: "calc(100vh - 6.75rem)",
    backgroundColor: theme.palette.grey[200],
    overflowY: "auto",
    position: "relative",
  },
}));

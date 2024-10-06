import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25rem",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  "& .modalContent": {
    padding: theme.spacing(2, 0),
  },
  "& .modalActions": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
    "& button": {
      width: "100%",
    },
  },
}));

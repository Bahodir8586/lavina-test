import { Card, styled } from "@mui/material";

export const StyledContainer = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& .statusBadge": {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  "& .MuiCardActions-root": {
    padding: theme.spacing(4),
    marginTop: "auto",
    "& button": {
      width: "100%",
    },
  },
}));

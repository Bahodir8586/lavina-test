import { styled } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
}));

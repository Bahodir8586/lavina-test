import { MenuList, styled } from "@mui/material";

export const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
}));

export const StyledMenuList = styled(MenuList)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
}));

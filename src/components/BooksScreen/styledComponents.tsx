import { styled } from "@mui/material";

export const StyledContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  "& .addButton": {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(0, 0, 6),
    "& button": {
      minWidth: "20rem",
    },
  },
  "& .books": {
    display: "flex",
    gap: theme.spacing(6),
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },

  "& .bookCard": {
    width: `calc(25% - ${theme.spacing(4.5)})`,
  },
}));

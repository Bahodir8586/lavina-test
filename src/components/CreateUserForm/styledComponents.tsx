import { Paper, styled } from "@mui/material";

export const StyledContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "25rem",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "& .formButtons": {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    "& button": {
      flex: 1,
    },
  },
}));

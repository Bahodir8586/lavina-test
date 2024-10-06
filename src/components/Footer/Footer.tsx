import { FC } from "react";
import { Typography } from "@mui/material";

import { StyledFooter } from "./styledComponents";

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <Typography variant="body2">&copy; All rights reserved</Typography>
    </StyledFooter>
  );
};

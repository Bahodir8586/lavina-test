import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { PATHS } from "app";

import { StyledHeader, StyledMenuList } from "./styledComponents";

export const Header: FC = () => {
  const MENU_ITEMS = [
    {
      label: "Books",
      href: PATHS.BOOKS,
    },
    {
      label: "Create User",
      href: PATHS.CREATE_USER,
    },
  ];

  return (
    <StyledHeader>
      <StyledMenuList>
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.label}>
            <Link to={item.href}>{item.label}</Link>
          </MenuItem>
        ))}
      </StyledMenuList>
    </StyledHeader>
  );
};

import { FC, PropsWithChildren } from "react";
import {
  Modal as MuiModal,
  Typography,
  Box,
  Button,
  ButtonProps,
} from "@mui/material";

import { StyledContainer } from "./styledComponents";

interface IDeleteModalProps extends PropsWithChildren {
  open: boolean;
  title: string;
  onClose: () => void;
  closeText: string;
  closeColor: ButtonProps["color"];
  onConfirm: () => void;
  confirmText: string;
  confirmColor: ButtonProps["color"];
}

export const Modal: FC<IDeleteModalProps> = ({
  open,
  title,
  onClose,
  closeColor,
  closeText,
  onConfirm,
  confirmColor,
  confirmText,
  children,
}) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <StyledContainer>
        <Typography variant="h5" fontWeight="bold" align="center">
          {title}
        </Typography>
        <Box className="modalContent">{children}</Box>
        <Box className="modalActions">
          <Button
            onClick={onClose}
            size="medium"
            variant="outlined"
            color={closeColor}
          >
            {closeText}
          </Button>
          <Button
            onClick={onConfirm}
            size="medium"
            variant="contained"
            color={confirmColor}
          >
            {confirmText}
          </Button>
        </Box>
      </StyledContainer>
    </MuiModal>
  );
};

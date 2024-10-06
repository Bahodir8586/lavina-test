import { FC } from "react";

import { Modal } from "components";

interface IDeleteModalProps {
  open: boolean;
  bookTitle: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteModal: FC<IDeleteModalProps> = ({
  open,
  bookTitle,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      open={open}
      title={`Delete ${bookTitle}`}
      onClose={onClose}
      closeText="Cancel"
      closeColor="info"
      onConfirm={onConfirm}
      confirmText="Delete"
      confirmColor="error"
    />
  );
};

import { FC, useState } from "react";
import { FormControl, TextField } from "@mui/material";

import { Modal } from "components";
import { IBook } from "types";

interface IAddModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (_isbn: string) => void;
}

export const AddModal: FC<IAddModalProps> = ({ open, onClose, onConfirm }) => {
  const [isbn, setIsbn] = useState<IBook["isbn"]>("");

  const closeWithConfirmation = () => {
    onConfirm(isbn);
    setIsbn("");
  };

  const closeModal = () => {
    setIsbn("");
    onClose();
  };

  return (
    <Modal
      open={open}
      title="Add Book"
      onClose={closeModal}
      closeText="Cancel"
      closeColor="info"
      onConfirm={closeWithConfirmation}
      confirmText="Add"
      confirmColor="success"
    >
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          color="primary"
          placeholder="Enter ISBN"
          name="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </FormControl>
    </Modal>
  );
};

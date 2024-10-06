import { FC, useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Modal } from "components";
import { IBookStatus } from "types";

interface IEditModalProps {
  open: boolean;
  bookTitle: string;
  onClose: () => void;
  onConfirm: (_status: IBookStatus) => void;
  bookStatus: IBookStatus;
}

export const EditModal: FC<IEditModalProps> = ({
  open,
  bookTitle,
  onClose,
  onConfirm,
  bookStatus,
}) => {
  const [statusValue, setStatusValue] = useState<IBookStatus>(bookStatus);

  useEffect(() => {
    setStatusValue(bookStatus);
  }, [bookStatus]);

  const closeWithConfirmation = () => {
    onConfirm(statusValue);
  };

  return (
    <Modal
      open={open}
      title={bookTitle}
      onClose={onClose}
      closeText="Cancel"
      closeColor="info"
      onConfirm={closeWithConfirmation}
      confirmText="Save"
      confirmColor="success"
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={statusValue}
          label="Age"
          onChange={(e) => setStatusValue(e.target.value as IBookStatus)}
        >
          <MenuItem value="0">New</MenuItem>
          <MenuItem value="1">Reading</MenuItem>
          <MenuItem value="2">Finished</MenuItem>
        </Select>
      </FormControl>
    </Modal>
  );
};

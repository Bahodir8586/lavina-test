import { Chip } from "@mui/material";
import { FC } from "react";
import { IBookStatus } from "types";

interface IStatusBadgeProps {
  status: IBookStatus;
}

const getChipLabel = (status: IBookStatus) => {
  switch (status) {
    case "0":
      return "New";
    case "1":
      return "Reading";
    case "2":
      return "Finished";
    default:
      return "";
  }
};

const getChipColor = (status: IBookStatus) => {
  switch (status) {
    case "0":
      return "primary";
    case "1":
      return "warning";
    case "2":
      return "success";
    default:
      return "default";
  }
};

export const StatusBadge: FC<IStatusBadgeProps> = ({ status }) => {
  return (
    <Chip
      label={getChipLabel(status)}
      color={getChipColor(status)}
      className="statusBadge"
      sx={{ width: "5rem" }}
    />
  );
};

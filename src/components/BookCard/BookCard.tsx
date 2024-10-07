import { FC } from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { IBookWithStatus } from "types";
import { StatusBadge } from "components";

import { StyledContainer } from "./styledComponents";

interface IBookCardProps {
  item: IBookWithStatus;
  onEdit: () => void;
  onDelete: () => void;
}

// Actually backend should send link to placeholder image, if there is no cover at book
const DEFAULT_IMAGE_PLACEHOLDER = "https://picsum.photos/400/300";

export const BookCard: FC<IBookCardProps> = ({ item, onEdit, onDelete }) => {
  const { book, status } = item;
  return (
    <StyledContainer className="bookCard">
      <CardMedia
        component="img"
        image={book.cover || DEFAULT_IMAGE_PLACEHOLDER}
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h5" align="center">
          {book.title}
        </Typography>
        <Typography variant="body1">Author: {book.author}</Typography>
        <Typography variant="body2">
          Published year: {book.published}
        </Typography>
        <Typography variant="body2">Pages: {book.pages}</Typography>
        <StatusBadge status={status} />
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="outlined"
          color="primary"
          onClick={onEdit}
          className="editButton"
        >
          Edit
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="error"
          onClick={onDelete}
          className="deleteButton"
        >
          Delete
        </Button>
      </CardActions>
    </StyledContainer>
  );
};

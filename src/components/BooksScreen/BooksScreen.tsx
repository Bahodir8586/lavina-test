import { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { IBookStatus, IBookWithStatus } from "types";
import { DeleteModal, EditModal, AddModal, BookCard } from "components";
import {
  useCreateNewBook,
  useUpdateBookStatus,
  useDeleteBook,
  useGetBooks,
} from "hooks";
import { notify } from "utils";

import { StyledContainer } from "./styledComponents";

export const BooksScreen: FC = () => {
  const [selectedBook, setSelectedBook] = useState<IBookWithStatus | null>(
    null
  );
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const { data: { data: books } = { data: [] } } = useGetBooks();
  const { mutateAsync: createBook } = useCreateNewBook();
  const { mutateAsync: deleteBook } = useDeleteBook();
  const { mutateAsync: updateBookStatus } = useUpdateBookStatus();

  const onClickAdd = () => {
    setShowAddModal(true);
  };

  const onCloseAddModal = () => {
    setShowAddModal(false);
  };

  const onConfirmAdd = (isbn: string) => {
    createBook({ isbn })
      .then(() => {
        notify("Book added successfully", "success");
      })
      .finally(() => {
        setShowAddModal(false);
      });
  };

  const onClickEdit = (book: IBookWithStatus) => {
    setSelectedBook(book);
    setShowEditModal(true);
  };

  const onCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedBook(null);
  };

  const onConfirmEdit = (status: IBookStatus) => {
    updateBookStatus({ id: selectedBook!.book.id, status })
      .then(() => {
        notify("Book status updated successfully", "success");
      })
      .finally(() => {
        setShowEditModal(false);
        setSelectedBook(null);
      });
  };

  const onClickDelete = (book: IBookWithStatus) => {
    setSelectedBook(book);
    setShowDeleteModal(true);
  };

  const onCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedBook(null);
  };

  const onConfirmDelete = () => {
    deleteBook(selectedBook!.book.id)
      .then(() => {
        notify("Book deleted successfully", "success");
      })
      .finally(() => {
        setShowDeleteModal(false);
        setSelectedBook(null);
      });
  };

  return (
    <StyledContainer>
      <AddModal
        open={showAddModal}
        onClose={onCloseAddModal}
        onConfirm={onConfirmAdd}
      />
      <DeleteModal
        open={showDeleteModal}
        bookTitle={selectedBook?.book.title || ""}
        onClose={onCloseDeleteModal}
        onConfirm={onConfirmDelete}
      />
      <EditModal
        open={showEditModal}
        bookTitle={selectedBook?.book.title || ""}
        onClose={onCloseEditModal}
        onConfirm={onConfirmEdit}
        bookStatus={selectedBook?.status || "0"}
      />
      <Box className="addButton">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onClickAdd}
        >
          Add Book
        </Button>
      </Box>

      <Box className="books">
        {books.map((item) => (
          <BookCard
            key={item.book.id}
            item={item}
            onEdit={() => onClickEdit(item)}
            onDelete={() => onClickDelete(item)}
          />
        ))}
      </Box>
    </StyledContainer>
  );
};

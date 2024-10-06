import { FC, useState } from "react";
import { FormControl, TextField, Box, Button, Typography } from "@mui/material";
import { useCreateNewUser } from "hooks";
import { ICreateUserRequest } from "types";
import { notify } from "utils";

import { StyledContainer } from "./styledComponents";

const DEFAULT_USER_DATA: ICreateUserRequest = {
  name: "",
  email: "",
  key: "",
  secret: "",
};

export const CreateUserForm: FC = () => {
  // I'm not using form control libraries, because state is enough for this small application
  const [userData, setUserData] =
    useState<ICreateUserRequest>(DEFAULT_USER_DATA);

  const { mutateAsync: createUser } = useCreateNewUser();

  const handleFieldChange = <T extends keyof ICreateUserRequest>(
    fieldName: T,
    newValue: ICreateUserRequest[T]
  ) => {
    setUserData((prev) => ({ ...prev, [fieldName]: newValue }));
  };

  const resetForm = () => {
    setUserData(DEFAULT_USER_DATA);
  };

  const submitForm = () => {
    createUser(userData)
      .then(() => {
        notify("User created successfully", "success");
        setUserData(DEFAULT_USER_DATA);
      })
      .finally(() => {});
  };

  return (
    <StyledContainer>
      <Typography variant="h4" color="primary" align="center">
        Create User
      </Typography>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          color="primary"
          placeholder="Enter name"
          name="name"
          value={userData.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          color="primary"
          placeholder="Enter email"
          name="email"
          value={userData.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          color="primary"
          placeholder="Enter key"
          name="key"
          value={userData.key}
          onChange={(e) => handleFieldChange("key", e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          color="primary"
          placeholder="Enter secret"
          name="isbn"
          value={userData.secret}
          onChange={(e) => handleFieldChange("secret", e.target.value)}
        />
      </FormControl>
      <Box className="formButtons">
        <Button
          onClick={resetForm}
          size="medium"
          variant="outlined"
          color="info"
        >
          Reset
        </Button>
        <Button
          onClick={submitForm}
          size="medium"
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </Box>
    </StyledContainer>
  );
};

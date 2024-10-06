import { FC } from "react";
import { Layout } from "components";
import { Typography } from "@mui/material";

export const NotFound: FC = () => {
  return (
    <Layout>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textTransform: "capitalize",
        }}
      >
        not found
      </Typography>
    </Layout>
  );
};

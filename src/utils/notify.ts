import { Notyf } from "notyf";

const notyf = new Notyf({
  duration: 3000,
  dismissible: true,
  position: {
    x: "right",
    y: "top",
  },
  types: [
    {
      type: "success",
    },
    {
      type: "error",
    },
  ],
});

export const notify = (
  message: string,
  type: "success" | "error" = "error"
) => {
  notyf.open({
    type,
    message,
  });
};

import * as Pages from "pages";

interface IRoute {
  path: string;
  title: string;
  element: JSX.Element;
}

export const PATHS = {
  BOOKS: "/books",
  CREATE_USER: "/create-user",
} as const;

export const ROUTES: Array<IRoute> = [
  {
    path: PATHS.BOOKS,
    title: "Books screen",
    element: <Pages.Books />,
  },
  {
    path: PATHS.CREATE_USER,
    title: "Create user screen",
    element: <Pages.CreateUser />,
  },
  {
    path: "*",
    title: "Not found",
    element: <Pages.NotFound />,
  },
];

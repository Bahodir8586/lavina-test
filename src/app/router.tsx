import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

export const Router: FC = () => {
  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route key={item.title} {...item} />
      ))}
    </Routes>
  );
};

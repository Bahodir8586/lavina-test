import { useEffect, FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "./routes";
import { Router } from "./router";

export const App: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate(PATHS.BOOKS);
    }
  }, [navigate, pathname]);

  return <Router />;
};

export default App;

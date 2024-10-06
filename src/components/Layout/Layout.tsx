import { FC, PropsWithChildren } from "react";
import { Header, Footer } from "components";

import { StyledContainer } from "./styledComponents";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledContainer>
  );
};

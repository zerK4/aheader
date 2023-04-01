import React, { ReactElement } from "react";
import Header from "../../components/Header/Header.component";

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;

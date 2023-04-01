import SearchBarComponent from "@/components/SearchBarComponent/SearchBar.component";
import MainLayout from "@/layouts/MainLayout/Main.layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex items-center flex-col gap-10">
      <SearchBarComponent />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

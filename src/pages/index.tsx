import MainLayout from "@/layouts/MainLayout/Main.layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex items-center flex-col gap-10">
      <h1 className="text-4xl font-semibold">Aheader.ink</h1>
      <p className="text-xl">From juniors for juniors</p>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

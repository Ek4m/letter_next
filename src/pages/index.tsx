import Head from "next/head";
import { MainLayout } from "@/modules/layout";
import { withAuth } from "@/modules/auth/hoc/with_auth";
import { GamesTable } from "@/modules/game/components";

function Home() {
  return (
    <>
      <Head>
        <title>Love Letter</title>
        <meta name="description" content="Love Letter web version by Ek4m" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <GamesTable />
      </MainLayout>
    </>
  );
}
export default withAuth(Home);

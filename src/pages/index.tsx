import { UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "~/components/layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <PageLayout>
      <UserButton />
    </PageLayout>
  );
};

export default Home;

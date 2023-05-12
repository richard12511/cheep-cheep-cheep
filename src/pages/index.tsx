import { UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "~/components/layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data, isLoading } = api.posts.all.useQuery();
  if (isLoading) return <div>Loading ...</div>;
  if (!data) return <div>Something went wrong</div>;

  console.log(data);

  return <PageLayout></PageLayout>;
};

export default Home;

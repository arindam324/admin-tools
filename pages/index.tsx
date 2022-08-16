import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";

import { Banner, Layout } from "../components";

const Home: NextPage = () => {
  const [isBannerActivate, setBannerActive] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isBannerActivate && (
          <Banner
            heading="New Arrival Just for you"
            borderRadius={10}
            bg="#e9c46a"
            padding={50}
            src="https://images.pexels.com/photos/1550618/pexels-photo-1550618.jpeg?auto=compress&cs=tinysrgb&w=1600"
            imageYposition="bottom"
            imageXposition="center"
            headingXposition="center"
            fontFamily="Roboto"
            background="color"
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;

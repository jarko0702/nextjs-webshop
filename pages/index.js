import Head from "next/head";

import Header from "../components/Header";
import Product from "../components/Product";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Webshop</title>
      </Head>
      <Header />

      <main className="flex flex-col items-center">
        <Product />
      </main>
    </div>
  );
}

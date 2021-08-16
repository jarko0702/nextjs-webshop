import Head from "next/head";

import Header from "../components/Header";
import ProductSmall from "../components/ProductSmall";

const photoLink1 =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2Fsamsung-galaxy-a52-5g-128gb-awesome-black%2F9300000023366015%2F&psig=AOvVaw0rBvrittiVZoAuqWwzf_Nf&ust=1629203934698000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjyx-HHtfICFQAAAAAdAAAAABAD";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Webshop</title>
      </Head>
      <Header />

      <main className="flex flex-col items-center">
        <ProductSmall title="Samsung Galaxy A52" photoURL={photoLink1} />
      </main>
    </div>
  );
}

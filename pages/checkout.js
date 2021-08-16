import { selectItems } from "../slices/shoppingCartSlice";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Head from "next/head";
function checkout() {
  const items = useSelector(selectItems);
  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      <Header />
      <div>
        {items.map((item) => (
          <div key={item.title}>
            <p className="font-semibold">{item.title}</p>
            <p className="text-gray-400">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default checkout;

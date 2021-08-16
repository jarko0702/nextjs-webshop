import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToShoppingCart } from "../slices/shoppingCartSlice";

function Product({ title, photoURL }) {
  const dispatch = useDispatch();

  const addItemToShoppingCart = () => {
    dispatch(addToShoppingCart({ title: title, price: 4.99 }));
  };

  return (
    <div className="flex flex-row border-2 rounded-lg p-4">
      <div className="flex flex-col">
        <p className="font-semibold text-lg">{title}</p>
        <button onClick={addItemToShoppingCart}>add to basket</button>
      </div>
      <div className="relative h-16 w-16"></div>
    </div>
  );
}

export default Product;

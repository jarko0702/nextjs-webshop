import { useDispatch } from "react-redux";
import { addToShoppingCart } from "../slices/shoppingCartSlice";

function Product() {
  const dispatch = useDispatch();

  const addItemToShoppingCart = () => {
    dispatch(addToShoppingCart({ title: "test", price: 4.99 }));
  };

  return (
    <div>
      <p>I am a product</p>
      <button onClick={addItemToShoppingCart}>add to basket</button>
    </div>
  );
}

export default Product;

import { useAppSelector } from "../../hooks/useDispatch";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const { cart, isSuccess, isError } = useAppSelector((state) => state.store);

  return (
    <div>
      {isSuccess && <div>Order successfully completed</div>}
      {isError && <div>isError</div>}
      {cart.map((product) => (
        <CartItem key={product.info.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;

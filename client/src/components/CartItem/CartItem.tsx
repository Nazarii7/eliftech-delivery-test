import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/useDispatch";
import { CartItemType } from "../../shared/type/type";
import {
  changeAmount,
  removeProductFromCart,
} from "../../redux/reducers/storeReducers";


type Props = {
  product: CartItemType;
};

const CartItem = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeAmount({ id: product.info.id, value: parseInt(e.target.value, 10) })
    );
  };
  const handleDelete = () => {
    dispatch(removeProductFromCart(product.info.id));
  };

  return (
    <div>
      <div>
        <img src={product.info.photo} alt={product.info.name} />
      </div>
      <div >
        <button type="button" onClick={handleDelete} >
          <AiOutlineClose />
        </button>
        <div >
          <div >
            <div >{product.info.name}</div>
            <div >
              {" "}
              {product.info.price * product.amount}
            </div>
          </div>
        </div>
        <input
          
          onChange={handleAmount}
          type="number"
          value={product.amount}
        />
      </div>
    </div>
  );
};

export default CartItem;

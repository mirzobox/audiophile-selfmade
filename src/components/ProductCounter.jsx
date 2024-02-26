import { useDispatch } from "react-redux";
import {
  decrementOrRemoveProduct,
  incrementOrAddProduct,
} from "../redux/slices/cart";

function ProductCounter({ amount }) {
  const dispatch = useDispatch();
  function handleClick(type, product) {
    if (type === "+") {
      dispatch(incrementOrAddProduct());
    } else {
      dispatch(decrementOrRemoveProduct());
    }
  }
  return (
    <div className="relative flex w-[120px] items-center justify-center gap-5 bg-gray p-4 text-[13px] tracking-[1px]">
      <button
        className="text-dark-25  absolute left-0 p-4 font-bold outline-none transition-colors hover:text-orange"
        onClick={() => handleClick("-")}
      >
        -
      </button>
      <span className="text-dark-100">{amount}</span>
      <button
        className="text-dark-25 absolute right-0 p-4 font-bold outline-none transition-colors hover:text-orange"
        onClick={() => handleClick("+")}
      >
        +
      </button>
    </div>
  );
}

export default ProductCounter;

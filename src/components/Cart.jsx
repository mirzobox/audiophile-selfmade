import Basket from "../assets/shared/desktop/icon-cart.svg";
function Cart() {
  return (
    <div className="relative ml-auto">
      <span className="pointer-events-none absolute -right-1 top-0 inline-block -translate-y-2 rounded-full bg-orange p-1 text-[10px] leading-none  text-white-100">
        0
      </span>
      <button>
        <img src={Basket} width="24" height="20" alt="Basket icon" />
      </button>
    </div>
  );
}

export default Cart;

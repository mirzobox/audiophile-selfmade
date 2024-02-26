function ProductCounter({ amount }) {
  return (
    <div className="relative flex w-[120px] items-center justify-center gap-5 bg-gray p-4 text-[13px] tracking-[1px]">
      <button className="text-dark-25  absolute left-0 p-4 font-bold outline-none transition-colors hover:text-orange">
        -
      </button>
      <span className="text-dark-100">{amount}</span>
      <button className="text-dark-25 absolute right-0 p-4 font-bold outline-none transition-colors hover:text-orange">
        +
      </button>
    </div>
  );
}

export default ProductCounter;

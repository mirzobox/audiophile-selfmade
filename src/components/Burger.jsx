import BurgerMenuIcon from "../assets/shared/tablet/icon-hamburger.svg";
function Burger() {
  return (
    <button className="mr-10 shrink-0 transition hover:opacity-80 active:scale-90 md:hidden">
      <img
        className="h-4 w-4 object-contain"
        src={BurgerMenuIcon}
        width="16"
        height="16"
        alt="Menu icon"
      />
    </button>
  );
}

export default Burger;

import { NavLink } from "react-router-dom";
import BurgerMenuIcon from "../assets/shared/tablet/icon-hamburger.svg";
import links from "../constants/links";
function Burger() {
  const burgerLinks = links;
  return (
    <div className="dropdown dropdown-bottom">
      <button
        className="mr-10 shrink-0 transition hover:opacity-80 active:scale-90 md:hidden"
        tabIndex={0}
      >
        <img
          className="h-4 w-4 object-contain"
          src={BurgerMenuIcon}
          width="16"
          height="16"
          alt="Menu icon"
        />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-[1] w-52 bg-black p-2 shadow"
      >
        {burgerLinks.map(({ path, text }) => {
          return (
            <li key={path}>
              <NavLink
                className="text-[13px] font-bold uppercase leading-6 tracking-[2px] text-white-100 transition-colors hover:text-orange"
                to={path}
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Burger;

import { NavLink } from "react-router-dom";
import LogoImg from "../assets/shared/desktop/logo.svg";

function Logo() {
  return (
    <NavLink className="flex shrink-0" to="/">
      <img
        className="h-[25px] w-[143px] object-contain"
        src={LogoImg}
        width="143"
        height="25"
        alt="Audiophile logo"
      />
    </NavLink>
  );
}

export default Logo;

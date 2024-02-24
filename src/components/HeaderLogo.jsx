import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function HeaderLogo() {
  return (
    <NavLink className="mr-auto flex shrink-0 sm:mr-0" to="/">
      <Logo />
    </NavLink>
  );
}

export default HeaderLogo;

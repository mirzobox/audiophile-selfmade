import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function FooterLogo() {
  return (
    <NavLink className="mb-12 flex shrink-0 sm:mb-8 lg:mb-0" to="/">
      <Logo />
    </NavLink>
  );
}

export default FooterLogo;

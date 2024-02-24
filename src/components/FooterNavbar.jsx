import { NavLink } from "react-router-dom";
import links from "../constants/links";

function FooterNavbar() {
  const footerLinks = links;
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row">
      {footerLinks.map(({ path, text }) => {
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
  );
}

export default FooterNavbar;

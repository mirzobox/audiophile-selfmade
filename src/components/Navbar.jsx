import { NavLink } from "react-router-dom";

function HeaderNavbar({ type }) {
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/headphones",
      text: "Headphones",
    },
    {
      path: "/speakers",
      text: "Speakers",
    },
    {
      path: "/earphones",
      text: "Earphones",
    },
  ];

  return (
    <nav className="ml-auto hidden md:block">
      <ul className="flex items-center gap-8">
        {links.map(({ path, text }) => {
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
    </nav>
  );
}

export default HeaderNavbar;

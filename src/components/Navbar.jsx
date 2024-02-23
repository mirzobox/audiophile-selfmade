import { NavLink } from "react-router-dom";

function Navbar() {
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
    <nav>
      <ul className="flex items-center gap-8">
        {links.map(({ path, text }) => {
          return (
            <li key={path}>
              <NavLink
                className="text-white-100 text-[13px] font-bold uppercase leading-6 tracking-[2px]"
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

export default Navbar;

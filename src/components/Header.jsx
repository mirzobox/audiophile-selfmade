import Navbar from "./Navbar";
import Cart from "./Cart";
import Burger from "./Burger";
import HeaderLogo from "./HeaderLogo";
import AuthManager from "./AuthManager";

function Header() {
  return (
    <header className="border-b border-b-white-20 bg-black pb-9 pt-8">
      <div className="base-container flex items-center justify-between">
        <Burger />
        <HeaderLogo />
        <Navbar />
        <Cart />
        <AuthManager />
      </div>
    </header>
  );
}

export default Header;

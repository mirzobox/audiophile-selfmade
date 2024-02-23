import Navbar from "./Navbar";
import Cart from "./Cart";
import Logo from "./Logo";

function Header() {
  return (
    <header className="border-b border-b-white-20 bg-black pb-9 pt-8">
      <div className="base-container flex items-center justify-between">
        <Logo />
        <Navbar />
        <Cart />
      </div>
    </header>
  );
}

export default Header;

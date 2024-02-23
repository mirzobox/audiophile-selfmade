import Logo from "./Logo";
import Navbar from "./Navbar";
import Socials from "./Socials";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white-50 bg-black text-[15px] leading-6">
      <div className="base-container relative pb-12 pt-[75px]">
        <span className="absolute top-0 h-1 w-[101px] bg-orange"></span>
        <div className="flex items-center justify-between pb-9">
          <Logo />
          <Navbar />
        </div>
        <div className="flex items-end justify-between pb-14">
          <div className="w-full max-w-[540px]">
            <p className="font-medium">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <Socials />
        </div>
        <div className="font-bold">
          Copyright {currentYear}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

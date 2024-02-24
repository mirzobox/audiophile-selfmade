import FooterLogo from "./FooterLogo";
import FooterNavbar from "./FooterNavbar";
import OrangeLine from "./OrangeLine";
import Socials from "./Socials";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-white-50 bg-black text-[15px] leading-6">
      <div className="base-container relative pb-10 pt-14 sm:pb-11 sm:pt-16 lg:pb-12 lg:pt-20">
        <OrangeLine />
        <div className="mb-12 flex flex-col items-center sm:items-start lg:mb-9 lg:flex-row lg:justify-between">
          <FooterLogo />
          <FooterNavbar />
        </div>
        <div className="mx-auto mb-12 w-full  sm:mx-0 sm:mb-20 lg:mb-14 lg:max-w-[540px]">
          <p className="text-center font-medium sm:text-left">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="mb-12 font-bold sm:mb-0">
            Copyright {currentYear}. All Rights Reserved
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

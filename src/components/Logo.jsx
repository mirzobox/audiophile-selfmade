import LogoImg from "/assets/shared/desktop/logo.svg";

function Logo() {
  return (
    <img
      className="h-[25px] w-[143px] object-contain"
      src={LogoImg}
      width="143"
      height="25"
      alt="Audiophile logo"
    />
  );
}

export default Logo;

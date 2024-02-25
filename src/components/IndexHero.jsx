import { NavLink } from "react-router-dom";
function IndexHero() {
  return (
    <div className="bg-black bg-mobile-header-bg bg-cover bg-center bg-no-repeat sm:bg-tablet-header-bg lg:bg-desktop-header-bg">
      <div className="base-container py-28 sm:pb-40 sm:pt-32 lg:pb-60 lg:pt-40">
        <div className="mx-auto flex w-full max-w-96 flex-col items-center text-center lg:mx-0 lg:items-start lg:text-start">
          <span className="new-badge mb-4 text-white-50">New product</span>
          <h1 className="title mb-6 text-white-100">XX99 Mark II Headphones</h1>
          <p className="mb-7 text-white-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <NavLink className="orange-button" to="/headphones">
            See product
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default IndexHero;

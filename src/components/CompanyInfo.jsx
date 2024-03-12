import BestGearImgMobile from "/assets/shared/mobile/image-best-gear.jpg";
import BestGearImgTablet from "/assets/shared/tablet/image-best-gear.jpg";
import BestGearImgDesktop from "/assets/shared/desktop/image-best-gear.jpg";

function CompanyInfo() {
  return (
    <div className="base-container pb-32 pt-16 sm:pb-24 sm:pt-12">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="order-2 w-full text-center sm:max-w-xl lg:-order-1 lg:max-w-[440px] lg:text-left">
          <h2 className="title mb-8 tracking-[1px] text-dark-100 sm:tracking-[1.43px]">
            Bringing you the <strong className="text-orange">best</strong> audio
            gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <picture>
          <source media="(min-width: 1024px)" srcSet={BestGearImgDesktop} />
          <source media="(min-width: 640px)" srcSet={BestGearImgTablet} />
          <source media="(min-width: 375px)" srcSet={BestGearImgMobile} />
          <img
            className="mb-10 rounded-lg object-cover object-center sm:mb-16 lg:mb-0"
            src={BestGearImgMobile}
            alt="Best image gear"
          />
        </picture>
      </div>
    </div>
  );
}

export default CompanyInfo;

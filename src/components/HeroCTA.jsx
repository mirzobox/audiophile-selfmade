import { NavLink } from "react-router-dom";

// Images
import ZX9SpeakerMobileImg from "/assets/home/mobile/image-speaker-zx9.png";
import ZX9SpeakerTabletImg from "/assets/home/tablet/image-speaker-zx9.png";
import ZX9SpeakerDesktopImg from "/assets/home/desktop/image-speaker-zx9.png";

import ZX7SpeakerMobileImg from "/assets/home/mobile/image-speaker-zx7.jpg";
import ZX7SpeakerTabletImg from "/assets/home/tablet/image-speaker-zx7.jpg";
import ZX7SpeakerDesktopImg from "/assets/home/desktop/image-speaker-zx7.jpg";

import YX1EarphoneMobileImg from "/assets/home/mobile/image-earphones-yx1.jpg";
import YX1EarphoneTabletImg from "/assets/home/tablet/image-earphones-yx1.jpg";
import YX1EarphoneDesktopImg from "/assets/home/desktop/image-earphones-yx1.jpg";

function HeroCTA() {
  return (
    <section className="py-16 sm:py-12 lg:py-20">
      <div className="base-container flex flex-col gap-6">
        {/* ZX9  */}
        <section className="relative overflow-hidden rounded-lg bg-orange bg-circles-bg bg-cover  px-6 py-14 lg:bg-left lg:px-24 lg:py-32">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="order-2 flex w-full flex-col items-center text-center lg:ml-auto lg:max-w-[349px] lg:items-start lg:text-left">
              <h2 className="title mb-6 text-[36px] text-white-100 sm:text-[56px]">
                Zx9 speaker
              </h2>
              <p className="mb-6 text-white-75 sm:mb-10">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <NavLink
                className="accent-button border-dark-100 bg-dark-100 text-white-100 transition-opacity hover:opacity-80"
                to="/speakers"
              >
                See product
              </NavLink>
            </div>
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={ZX9SpeakerDesktopImg}
                width="410"
                height="493"
              />
              <source
                media="(min-width: 640px)"
                srcSet={ZX9SpeakerTabletImg}
                width="197"
                height="237"
              />
              <source
                media="(min-width: 375px)"
                srcSet={ZX9SpeakerMobileImg}
                width="172"
                height="207"
              />
              <img
                className="mb-8 object-cover object-center sm:mb-16 lg:absolute lg:-bottom-20"
                src={ZX9SpeakerMobileImg}
                alt="ZX9 Speaker"
              />
            </picture>
          </div>
        </section>
        {/* ZX7  */}
        <section className="position relative">
          <div className="absolute flex flex-col items-start pl-6 pt-24 sm:pl-16">
            <h2 className="title mb-8 text-dark-100">Zx7 speaker</h2>
            <NavLink className="accent-button" to="/speakers">
              See product
            </NavLink>
          </div>
          <picture>
            <source media="(min-width: 1024px)" srcSet={ZX7SpeakerDesktopImg} />
            <source media="(min-width: 640px)" srcSet={ZX7SpeakerTabletImg} />
            <source media="(min-width: 375px)" srcSet={ZX7SpeakerMobileImg} />
            <img
              className="w-full rounded-lg object-cover object-center"
              src={ZX7SpeakerMobileImg}
              alt="ZX7 Speaker"
            />
          </picture>
        </section>
        {/* YX1 */}
        <section className="flex flex-col-reverse gap-6 sm:flex-row-reverse sm:gap-3 lg:justify-between lg:gap-7">
          <div className="flex w-full flex-col items-start rounded-lg bg-gray px-6 py-10 sm:max-w-[340px] lg:max-w-[540px]">
            <h2 className="title mb-8 text-dark-100">Yx1 earphones</h2>
            <NavLink className="accent-button" to="/earphones">
              See product
            </NavLink>
          </div>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={YX1EarphoneDesktopImg}
            />
            <source
              media="(min-width: 640px)"
              srcSet={YX1EarphoneTabletImg}
              height="320"
            />
            <source
              media="(min-width: 375px)"
              srcSet={YX1EarphoneMobileImg}
              height="200"
            />
            <img
              className="w-full rounded-lg object-cover object-center"
              src={YX1EarphoneMobileImg}
              alt="YX1 Earphone"
            />
          </picture>
        </section>
      </div>
    </section>
  );
}

export default HeroCTA;

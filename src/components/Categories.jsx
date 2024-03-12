import HeadphoneImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakerImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { NavLink } from "react-router-dom";
function Categories() {
  const categories = [
    {
      path: "/headphones",
      title: "Headphones",
      img: HeadphoneImg,
    },
    {
      path: "/speakers",
      title: "Speakers",
      img: SpeakerImg,
    },
    {
      path: "/earphones",
      title: "Earphones",
      img: EarphoneImg,
    },
  ];
  return (
    <section className="flex pb-16 pt-24">
      <div className="base-container">
        <h2 className="sr-only">Categories</h2>
        <ul className="grid gap-16 sm:gap-20 md:grid-cols-2 xl:grid-cols-3 xl:gap-3">
          {categories.map(({ path, title, img }) => {
            return (
              <li key={title}>
                <div className="relative flex min-h-[165px] flex-col items-center rounded-lg bg-gray text-center sm:min-h-44">
                  <img
                    className="absolute top-0 h-36 w-40 -translate-y-1/3 object-contain object-center sm:h-40 sm:w-44"
                    src={img}
                    alt={title}
                  />
                  <div className="mt-auto">
                    <h3 className="font-bold uppercase tracking-[1.07px] text-dark-100">
                      {title}
                    </h3>
                    <NavLink className="link-button outline-none" to={path}>
                      Shop
                    </NavLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Categories;

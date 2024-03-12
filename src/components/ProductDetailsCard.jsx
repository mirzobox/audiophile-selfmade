import { NavLink } from "react-router-dom";

function ProductDetailsCard({ productContent }) {
  console.log(productContent);
  const {
    categoryImage,
    new: isNew,
    name: title,
    description,
    slug,
  } = productContent;
  return (
    <li className="flex flex-col-reverse items-center lg:gap-32 lg:odd:flex-row-reverse lg:even:flex-row">
      <div className="flex w-full flex-col items-center text-center lg:max-w-md lg:items-start lg:text-left">
        {isNew && <span className="new-badge mb-6">New product</span>}
        <h3 className="title mb-6 text-dark-100 sm:mb-8">{title}</h3>
        <p className="mb-6">{description}</p>
        <NavLink
          className="orange-button"
          to={`/single-product-details/${slug}`}
        >
          See product
        </NavLink>
      </div>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={categoryImage?.desktop.splice}
        />
        <source
          media="(min-width: 768px)"
          srcSet={categoryImage?.tablet.splice}
        />
        <source
          media="(min-width: 375px)"
          srcSet={categoryImage?.mobile.splice}
        />
        <img
          className="mb-8 w-full rounded-lg object-cover object-center sm:mb-[52px]"
          src={categoryImage?.mobile.splice}
          alt={title}
        />
      </picture>
    </li>
  );
}

export default ProductDetailsCard;

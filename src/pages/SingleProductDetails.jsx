import {
  NavLink,
  ScrollRestoration,
  useNavigate,
  useParams,
} from "react-router-dom";
import CompanyInfo from "../components/CompanyInfo";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import getSingleData from "../utils/get-single-data";
import ProductCounter from "../components/ProductCounter";
import { useDispatch } from "react-redux";
import { incrementOrAddProduct } from "../redux/slices/cart";

function SingleProductDetails() {
  const [singleDetails, setSingleDetails] = useState({});
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getSingleData(slug)
      .then((res) => res.json())
      .then((res) => setSingleDetails(...res));
  }, [slug]);

  const {
    new: isNew,
    name: title,
    description,
    price,
    image,
    amount,
    features,
    includes,
    gallery,
    others,
    slug: uniqueSlug,
  } = singleDetails;

  console.log(singleDetails);

  function handleClick(item) {
    getSingleData(item)
      .then((res) => res.json())
      .then((res) => dispatch(incrementOrAddProduct(...res)));
  }

  return (
    <section>
      <ScrollRestoration />
      <div className="base-container pb-[120px] pt-4 sm:pt-8">
        <button
          className="mb-6 capitalize text-dark-50 hover:underline"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
        <div className="flex flex-col-reverse items-start pb-11 sm:flex-row-reverse sm:items-center sm:gap-16 sm:pb-16 lg:gap-28 lg:pb-20">
          <div className="flex w-full flex-col items-start sm:max-w-[357px]">
            {isNew && (
              <span className="new-badge mb-6 sm:mb-4">New product</span>
            )}
            <h2
              className="title mb-6 line-clamp-2 text-dark-100 sm:mb-8"
              title={title}
            >
              {title}
            </h2>
            <p className="mb-6 sm:mb-8">{description}</p>
            <strong className="mb-8 text-[18px] tracking-[1.29px] text-dark-100 sm:mb-8">
              ${price?.toLocaleString()}
            </strong>
            <div className="flex gap-2">
              <ProductCounter amount={amount} />
              <button
                className="orange-button"
                onClick={() => handleClick(uniqueSlug)}
              >
                Add to cart
              </button>
            </div>
          </div>
          <picture>
            <source media="(min-width: 1024px)" srcSet={image?.desktop} />
            <source media="(min-width: 624px)" srcSet={image?.tablet} />
            <source media="(min-width: 375px)" srcSet={image?.mobile} />
            <img
              className="mb-10 w-full rounded-lg object-cover object-center sm:mb-0"
              src={image?.mobile}
              alt={title}
            />
          </picture>
        </div>
        <div className="flex flex-col py-11 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="w-full py-11 sm:py-16 lg:max-w-lg lg:py-20">
              <h3 className="title mb-6">Features</h3>
              <p>{features}</p>
            </div>
            <div className="py-11 sm:flex sm:items-start sm:justify-between sm:py-16 lg:flex-col lg:justify-stretch lg:py-20">
              <h3 className="title mb-6">In the box</h3>
              <ul className="flex flex-col">
                {includes?.map(({ quantity, item }) => {
                  return (
                    <li className="flex gap-6" key={item}>
                      <strong className="text-orange">{quantity}x</strong>
                      <span className="capitalize text-dark-50">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="pb-16 pt-11 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <div className="flex flex-col gap-5">
                <div>
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={gallery?.first?.desktop}
                    />
                    <source
                      media="(min-width: 624px)"
                      srcSet={gallery?.first?.tablet}
                    />
                    <source
                      media="(min-width: 375px)"
                      srcSet={gallery?.first?.mobile}
                    />
                    <img
                      className="w-full rounded-lg object-cover object-center"
                      src={gallery?.first?.mobile}
                      alt={title}
                    />
                  </picture>
                </div>
                <div>
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={gallery?.second?.desktop}
                    />
                    <source
                      media="(min-width: 624px)"
                      srcSet={gallery?.second?.tablet}
                    />
                    <source
                      media="(min-width: 375px)"
                      srcSet={gallery?.second?.mobile}
                    />
                    <img
                      className="w-full rounded-lg object-cover object-center"
                      src={gallery?.second?.mobile}
                      alt={title}
                    />
                  </picture>
                </div>
              </div>
              <div>
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={gallery?.third?.desktop}
                  />
                  <source
                    media="(min-width: 624px)"
                    srcSet={gallery?.third?.tablet}
                  />
                  <source
                    media="(min-width: 375px)"
                    srcSet={gallery?.third?.mobile}
                  />
                  <img
                    className="w-full rounded-lg object-cover object-center"
                    src={gallery?.third?.mobile}
                    alt={title}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-11sm:py-16 lg:py-20">
          <h2 className="title mb-10">You may also like</h2>
          <ul className="flex flex-col gap-14 sm:flex-row">
            {others?.map(({ image, name: title, slug }) => {
              return (
                <li
                  className="flex flex-col-reverse items-center text-center"
                  key={title}
                >
                  <div>
                    <h3 className="mb-8 text-[24px] font-bold tracking-[1.71px] text-dark-100">
                      {title}
                    </h3>
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
                      srcSet={image?.desktop}
                    />
                    <source media="(min-width: 624px)" srcSet={image?.tablet} />
                    <source media="(min-width: 375px)" srcSet={image?.mobile} />
                    <img
                      className="mb-8 w-full rounded-lg object-cover object-center"
                      src={image?.mobile}
                      alt={title}
                    />
                  </picture>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Categories />
      <CompanyInfo />
    </section>
  );
}

export default SingleProductDetails;

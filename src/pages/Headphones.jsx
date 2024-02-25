import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import CategoryHero from "../components/CategoryHero";
import CompanyInfo from "../components/CompanyInfo";
import getCategory from "../utils/get-category";
import CategoriesWrapper from "../components/CategoriesWrapper";
import { useLocation } from "react-router-dom";

function Headphones() {
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();
  const path = pathname.slice(1);

  useEffect(() => {
    getCategory(path)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch(({ message }) => console.error(message));
  }, []);

  return (
    <>
      <CategoryHero content={path} />
      <CategoriesWrapper products={products} />
      <Categories />
      <CompanyInfo />
    </>
  );
}

export default Headphones;

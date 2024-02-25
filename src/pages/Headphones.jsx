import Categories from "../components/Categories";
import CategoryHero from "../components/CategoryHero";
import CompanyInfo from "../components/CompanyInfo";

function Headphones() {
  return (
    <>
      <CategoryHero content={"Headphones"} />
      <Categories />
      <CompanyInfo />
    </>
  );
}

export default Headphones;

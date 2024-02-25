import Categories from "../components/Categories";
import CategoryHero from "../components/CategoryHero";
import CompanyInfo from "../components/CompanyInfo";

function Speakers() {
  return (
    <>
      <CategoryHero content={"Speakers"} />
      <Categories />
      <CompanyInfo />
    </>
  );
}

export default Speakers;

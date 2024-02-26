import { ScrollRestoration } from "react-router-dom";
import Categories from "../components/Categories";
import CompanyInfo from "../components/CompanyInfo";
import HeroCTA from "../components/HeroCTA";
import IndexHero from "../components/IndexHero";

function Home() {
  return (
    <>
      <ScrollRestoration />
      <IndexHero />
      <Categories />
      <HeroCTA />
      <CompanyInfo />
    </>
  );
}

export default Home;

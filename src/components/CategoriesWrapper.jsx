import LoadingText from "./LoadingText";
import ProductDetailsCard from "./ProductDetailsCard";

function CategoriesWrapper({ products }) {
  return (
    <section className="py-16">
      <div className="base-container">
        <ul className="flex flex-col gap-[120px] lg:gap-40">
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <ProductDetailsCard key={product.id} productContent={product} />
              );
            })
          ) : (
            <LoadingText />
          )}
        </ul>
      </div>
    </section>
  );
}

export default CategoriesWrapper;

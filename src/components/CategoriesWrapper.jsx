function CategoriesWrapper({ products }) {
  return (
    <section>
      <div className="base-container">
        {products.length > 0 ? "Ma'lumotlar chiqdi" : "Loading..."}
      </div>
    </section>
  );
}

export default CategoriesWrapper;

async function getCategory(category = "") {
  return await fetch(
    `https://audiophile-backend-htgg.onrender.com/products?category=${category}`,
  );
}

export default getCategory;

async function getCategory(category = "") {
  return await fetch(`http://localhost:4000/products?category=${category}`);
}

export default getCategory;

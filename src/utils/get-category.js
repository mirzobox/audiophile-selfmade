async function getCategory(category = "") {
  const response = await fetch(
    `http://localhost:4000/products?category=${category}`,
  );
  return response;
}

export default getCategory;

async function getSingleData(slug = "") {
  return await fetch(
    `https://audiophile-backend-htgg.onrender.com/products?slug=${slug}`,
  );
}

export default getSingleData;

async function getSingleData(slug = "") {
  return await fetch(`http://localhost:4000/products?slug=${slug}`);
}

export default getSingleData;

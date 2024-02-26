function getImageLocation(img = "") {
  return `${location.origin}/src${img.slice(1)}`;
}

export default getImageLocation;

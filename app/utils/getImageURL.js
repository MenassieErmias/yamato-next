function getImageURL(name) {
  return new URL(`../../pulblic/assets/Images/${name}`, import.meta.url).href;
}

export { getImageURL }
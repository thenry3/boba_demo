function importAll(r) {
  return r.keys().map(r);
}

let DrinkImages = importAll(require.context("./DrinkImages", true, /\.jpg$/));
let InsideImages = importAll(require.context("./MenuImages", true, /\.jpg$/));
let MenuImages = importAll(require.context("./MenuImages", true, /\.jpg$/));
let OutsideImages = importAll(
  require.context("./OutsideImages", true, /\.jpg$/)
);

let Gallery = [DrinkImages, InsideImages, MenuImages, OutsideImages];

export default Gallery;

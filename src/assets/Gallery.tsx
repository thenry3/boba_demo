function importAll(r) {
  return r.keys().map(path => r(path));
}

let DrinkImages = importAll(require.context("./DrinkImages", true, /\.jpg$/));
let InsideImages = importAll(require.context("./MenuImages", true, /\.jpg$/));
let MenuImages = importAll(require.context("./MenuImages", true, /\.jpg$/));
let OutsideImages = importAll(
  require.context("./OutsideImages", true, /\.jpg$/)
);

var Gallery = {};

Gallery["DrinkImages"] = DrinkImages;
Gallery["InsideImages"] = InsideImages;
Gallery["MenuImages"] = MenuImages;
Gallery["OutsideImages"] = OutsideImages;

export default Gallery;

let DrinkImages = require.context("./DrinkImages", true, /\.jpg$/);
let InsideImages = require.context("./MenuImages", true, /\.jpg$/);
let MenuImages = require.context("./MenuImages", true, /\.jpg$/);
let OutsideImages = require.context("./OutsideImages", true, /\.jpg$/);

export default DrinkImages;

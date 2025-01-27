import viataBlack from "./img/viata-black.jpg";
import gasmaskBlack from "./img/gasmask-black.jpg";
import lasaMaBlack from "./img/lasa-ma-black.jpg";
import aripiBlack from "./img/aripi-black.jpg";
import viatawhite from "./img/viata-white.jpg";
import gasmaskwhite from "./img/gasmask-white.jpg";
import lasaMaWhite from "./img/lasa-ma-white.jpg";
import aripiwhite from "./img/aripi-white.jpg";
// Assuming a common white t-shirt image for demonstration
// import shirtWhite from "./img/shirt4-white.jpg";

const productsArray = [
  {
    id: "price_1OjHIQKXAegDiFEBgf9B1xZ0",
    title: "O viata avem",
    description: "Live Boldly, Sing Loudly",
    price: 90.0,
    // usd: "price_1Oj6kMKXAegDiFEBe2EB0F1k",
    // ron: "price_1Oj8ohKXAegDiFEBQYgKPQyi",
    // eur: "price_1Oj8pZKXAegDiFEBHFp8zr3U",
    currency: "ron",
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultImage: viataBlack,
    images: {
      Black: viataBlack,
      White: viatawhite,
    },
  },
  {
    // id: "price_1OjHJ9KXAegDiFEB9KfjNnA0",
    id: "price_1OjP5WKXAegDiFEBnNvS9zzB",
    title: "Gas Mask",
    description: "Rebel Breath in a Toxic World",
    price: 90.0,
    currency: "ron",
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultImage: gasmaskBlack,
    images: {
      Black: gasmaskBlack,
      White: gasmaskwhite,
    },
  },
  {
    id: "price_1OjHJrKXAegDiFEBH9WyaYsJ",
    title: "Lasa-ma!",
    description: "Defiant Solitude, Unchained Spirit",
    price: 90.0,
    currency: "ron",
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultImage: lasaMaBlack,
    images: {
      Black: lasaMaBlack,
      White: lasaMaWhite,
    },
  },
  {
    id: "price_1OjHltKXAegDiFEBR0oR7EvC",
    title: "Aripi de cenusa",
    description: "Soar Through Shadows, Embrace Rebirth",
    price: 90.0,
    currency: "ron",
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultImage: aripiBlack,
    images: {
      Black: aripiBlack,
      White: aripiwhite,
    },
  },
];

function getProductData(id) {
  return productsArray.find((product) => product.id === id);
}

export { productsArray, getProductData };

// {
//   id: "price_1OXADrKXAegDiFEBS42FHLia",
//   title: "Band Sticker Pack",
//   description: "Decorate your gear with our exclusive sticker pack.",
//   price: 4.99,
//   image: "/images/sticker-pack.jpg",
// },
// {
//   id: "price_1OXAEuKXAegDiFEBzPItu6vl",
//   title: "Band Sunglasses",
//   description: "Stay cool with our band-branded sunglasses.",
//   price: 9.99,
//   image: "/images/sunglasses.jpg",
// },
// {
//   id: "price_1OXAFXKXAegDiFEBBNY1TBOY",
//   title: "Band Camera",
//   description: "Capture your moments with our custom camera.",
//   price: 39.99,
//   image: "/images/camera.jpg",
// },

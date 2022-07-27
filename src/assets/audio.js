import ad700x from "./headphones/ad700x.jpg";
import hd600x from "./headphones/hd600x.jpg";
import utopia from "./headphones/utopia.jpeg";
import portapro from "./headphones/portapro.jpeg";
import he400 from "./headphones/he400.jpeg";

import kefls50 from "./speakers/kefls50.jpg";
import aria926 from "./speakers/aria926.jpg";

export function getProducts(category) {
  return products[category];
}

export function getProduct(category, id) {
  return products[category].find((product) => product.id === parseInt(id, 10));
}

const products = {
  headphones: [
    {
      title: "Koss Porta Pro Black",
      singleUnitPrice: 49.99,
      image: portapro,
      id: 1,
    },
    {
      title: "Audio-Technica ATH-AD700X",
      singleUnitPrice: 119.99,
      image: ad700x,
      id: 2,
    },
    {
      title: "Sennheiser HD600x",
      singleUnitPrice: 220.99,
      image: hd600x,
      id: 3,
    },
    {
      title: "Focal Utopia",
      singleUnitPrice: 3999.99,
      image: utopia,
      id: 4,
    },
    {
      title: "Hifiman HE-400I Planar",
      singleUnitPrice: 399.99,
      image: he400,
      id: 5,
    },
  ],
  speakers: [
    {
      title: "KEF LS50 Wireless II",
      singleUnitPrice: 2499.99,
      image: kefls50,
      id: 6,
    },
    {
      title: "Focal Aria 926",
      singleUnitPrice: 1599.99,
      image: aria926,
      id: 7,
    },
  ],
};

import ad700x from "./headphones/ad700x.jpg";
import hd600x from "./headphones/hd600x.jpg";
import utopia from "./headphones/utopia.jpeg";
import portapro from "./headphones/portapro.jpeg";
import he400 from "./headphones/he400.jpeg";
import kefls50 from "./speakers/kefls50.jpg";
import aria926 from "./speakers/aria926.jpg";
import { FIREBASE } from "../Firebase.ts";

const images = {
  ad700x,
  hd600x,
  utopia,
  portapro,
  he400,
  kefls50,
  aria926,
};

export async function getProducts(category) {
  const products = await FIREBASE.getCollectionByWhere("items", {
    key: "type",
    id: category,
  });
  return {
    products: products.map((product) => ({
      ...product,
      image: images[product.imageKey],
    })),
  };
}

export async function getProduct(id) {
  const product = await FIREBASE.getDocument("items", id);
  return {
    ...product,
    image: images[product.imageKey],
  };
}

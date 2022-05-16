import uniqid from "uniqid";

import hd600 from "./hd600.jpg";
import ad700x from "./ad700x.jpg";
import dt1770pro from "./dt1770pro.JPG";
import kefls50 from "./kefls50.jpg";
import aria926 from "./aria926.jpg";
import hd600x from "./hd600x.jpg";
import utopia from "./utopia.jpeg";
import portapro from "./portapro.jpeg";
import he400 from "./he400.jpeg";

const headphones = [
  {
    title: "Sennheiser HD600",
    singleUnitPrice: 286.99,
    image: hd600,
    id: uniqid(),
  },
  {
    title: "Audio-Technica ATH-AD700X",
    singleUnitPrice: 119.99,
    image: ad700x,
    id: uniqid(),
  },
  {
    title: "Beyerdynamic DT1770 Pro",
    singleUnitPrice: 499.99,
    image: dt1770pro,
    id: uniqid(),
  },
  {
    title: "Sennheiser HD600x",
    singleUnitPrice: 220.99,
    image: hd600x,
    id: uniqid(),
  },
  {
    title: "Focal Utopia",
    singleUnitPrice: 3999.99,
    image: utopia,
    id: uniqid(),
  },
  {
    title: "Koss Porta Pro Black",
    singleUnitPrice: 49.99,
    image: portapro,
    id: uniqid(),
  },
  {
    title: "Hifiman HE-400I Planar",
    singleUnitPrice: 399.99,
    image: he400,
    id: uniqid(),
  },
];

const speakers = [
  {
    title: "KEF LS50 Wireless II",
    singleUnitPrice: 2499.99,
    image: kefls50,
    id: uniqid(),
  },
  {
    title: "Focal Aria 926",
    singleUnitPrice: 1599.99,
    image: aria926,
    id: uniqid(),
  },
];

export { headphones, speakers };

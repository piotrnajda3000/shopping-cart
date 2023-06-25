// Script to import data into Firestore collection

import { FIREBASE } from "./Firebase";

const data = [
  {
    title: "Koss Porta Pro Black",
    singleUnitPrice: 49.99,
    type: "headphones",
    imageKey: "portapro",
  },
  {
    title: "Audio-Technica ATH-AD700X",
    singleUnitPrice: 119.99,
    type: "headphones",
    imageKey: "ad700x",
  },
  {
    title: "Sennheiser HD600x",
    singleUnitPrice: 220.99,
    type: "headphones",
    imageKey: "hd600x",
  },
  {
    title: "Focal Utopia",
    singleUnitPrice: 3999.99,
    type: "headphones",
    imageKey: "utopia",
  },
  {
    title: "Hifiman HE-400I Planar",
    singleUnitPrice: 399.99,
    type: "headphones",
    imageKey: "he400",
  },
  {
    title: "KEF LS50 Wireless II",
    singleUnitPrice: 2499.99,
    imageKey: "kefls50",
    type: "speakers",
  },
  {
    title: "Focal Aria 926",
    singleUnitPrice: 1599.99,
    imageKey: "aria926",
    type: "speakers",
  },
];

FIREBASE.importDataArray(data, "items");

// exit process
process.exit();

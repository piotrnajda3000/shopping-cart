import { mdiHeadphones, mdiSpeaker, mdiBrush } from "@mdi/js";

export const categories = [
  {
    name: "Audio",
    links: [
      {
        to: "/catalog/headphones",
        text: "Headphones",
        icon: mdiHeadphones,
      },
      {
        to: "/catalog/speakers",
        text: "Speakers",
        icon: mdiSpeaker,
      },
    ],
  },
  {
    name: "Artworks",
    links: [
      {
        to: "/catalog/paintings",
        text: "Paintings",
        icon: mdiBrush,
      },
    ],
  },
];

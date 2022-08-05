import { mdiHeadphones, mdiSpeaker, mdiBrush } from "@mdi/js";

export const categories = [
  {
    name: "Audio",
    links: [
      {
        to: "/headphones",
        text: "Headphones",
        icon: mdiHeadphones,
      },
      {
        to: "/speakers",
        text: "Speakers",
        icon: mdiSpeaker,
      },
    ],
  },
  {
    name: "Artworks",
    links: [
      {
        to: "/artworks",
        text: "Artworks",
        icon: mdiBrush,
      },
    ],
  },
];

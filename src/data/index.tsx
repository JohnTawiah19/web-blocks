import { hero } from "./templates/hero";
import { Category } from "./types";

export const data: Category[] = [
  {
    name: "Page Sections",
    subLabel: "Large Page Sections like Hero, Features ...",
    id: "page-sections",
    children: [hero],
  },
];

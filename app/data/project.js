// app/data/project.js
import project1 from "../../public/images/project-1.webp";
import project2 from "../../public/images/project-2.webp";
import project3 from "../../public/images/project-3.webp";
import project4 from "../../public/images/project-4.webp";


export const PROJECTS = [
  { id: 1, src: project1, alt: "Locksmith website UI",   bg: "bg-[#0B49FF]" },
  { id: 2, src: project2, alt: "Analytics landing UI",   bg: "bg-[#FFD55C]" },
  { id: 3, src: project4, alt: "Book mockup design",     bg: "bg-[#89D1F7]" },
  { id: 4, src: project3, alt: "Medical mask shop UI",   bg: "bg-[#BFEAF4]" },
];


// ---- keep your PROJECTS export above ----

export const BLOGS = [
  {
    id: "1",
    tag: "DEVELOPMENT",
    title: "How To Build Strong Customer Relationships For User",
    excerpt:
      "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car",
    image: "/images/project-2.webp", // glasses on yellow
  },
  {
    id: "2",
    tag: "DEVELOPMENT",
    title: "Show at the University of the Michigan Started.",
    excerpt:
      "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car",
    image: "/images/project-3.webp", // medical mask site
  },
  {
    id: "3",
    tag: "DEVELOPMENT",
    title: "Hair Strobing: Are You Ready for the Next",
    excerpt:
      "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car",
    image: "/images/project-4.webp", // book mockup
  },
];


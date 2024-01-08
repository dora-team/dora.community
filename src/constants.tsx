import post1 from "./posts/blog-post.20240105.md";
import post2 from "./posts/blog-post.20231231.md";
import doraSummitFamilyPhoto from "./assets/dora-summit-family-photo-2023.png";
import robDora from "./assets/robdoracommunity.jpg";




export const posts = [
  {
    title: "January Community News",
    article: post1,
    date: "2024-01",
    dateText: "January 2024",
    id: "2024-01-05-1",
    tags: ["DORA"],
    description: "What's happening in the DORA community in January 2024",
    image: robDora,
    imageLabel: "Image Text",
    featured: true,
  },
  {
    title: "DORA Community of Practice: 2023 in Review",
    article: post2,
    date: "2023-12",
    dateText: "December 2023",
    id: "2023-12-31-1",
    tags: ["DORA", "DevOps", "Code Reviews"],
    description: "Recap of 2023 in the DORA Community of Practice",
    image: doraSummitFamilyPhoto,
    imageLabel: "Image Text",
    featured: true,
  },
];

export const sidebar = {
  title: "Join the Conversation",
  description:
    "Join the Google Group to read, and participate in the asynchronous discussions.",
};

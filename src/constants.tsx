import post1 from "./posts/blog-post.20240105.md";
import post2 from "./posts/blog-post.20231231.md";
import post3 from "./posts/blog-post.20240111.md";
import post4 from "./posts/blog-post.20240122.md";
import post5 from "./posts/blog-post.20240125.md";
import post6 from "./posts/blog-post.20240201.md";
import post7 from "./posts/blog-post.20240208.md";
import post8 from "./posts/blog-post.20240222.md";
import post9 from "./posts/blog-post.20240318.md"
import doraSummitFamilyPhoto from "./assets/dora-summit-family-photo-2023.png";
import robDora from "./assets/robdoracommunity.jpg";
import metricMonday from "./assets/metric_monday160x160.jpg";

export const posts = [
  {
    title: "March 2024 Community News",
    article: post9,
    date: "2024-03",
    dateText: "March 2024",
    id: "2024-03-18-1",
    tags: [
      "DORA",
      "Work Distribution"
      ,
      "Events"
    ],
    description:
      "What's happening in the DORA community in March 2024",
    image: robDora,
    imageLabel: "DORA Community Lean Coffee",
    featured: true,
  },
  {
    title: "Testing All the Way Around the DevOps Loop",
    article: post8,
    date: "2024-02",
    dateText: "February 2024",
    id: "2024-02-22-1",
    tags: [
      "DORA",
      "Testing",
      "QA",

      "Continuous Improvement",
      "Engineering Productivity",

      "Metrics",
    ],
    description:
      "Lisa Crispin, an independent consultant, author and speaker, kicked off a community discussion on Testing.",
    image: robDora,
    imageLabel: "DORA Community Lean Coffee",
    featured: true,
  },
  {
    title: "Open Discussion on Code Review Use Cases",
    article: post7,
    date: "2024-02",
    dateText: "February 2024",
    id: "2024-02-08-1",
    tags: [
      "DORA",
      "Code Reviews",

      "Continuous Improvement",
      "Engineering Productivity",

      "Metrics",
    ],
    description:
      "Daniel Izquierdo Cortázar, CEO @ Bitergia, kicked off a community discussion on code reviews ",
    image: robDora,
    imageLabel: "DORA Community Lean Coffee",
    featured: false,
  },
  {
    title: "February 2024 Community News",
    article: post6,
    date: "2024-02",
    dateText: "February 2024",
    id: "2024-02-02-1",
    tags: [
      "DORA",
      "Goals",

      "Continuous Improvement",
      "Engineering Productivity",

      "Metrics",
    ],
    description:
      "What's happening in the DORA community in February 2024 ",
    image: robDora,
    imageLabel: "DORA Community Lean Coffee",
    featured: false,
  },
  {
    title: "Applying DORA in Your Context",
    article: post5,
    date: "2024-01",
    dateText: "January 2024",
    id: "2024-01-25-1",
    tags: [
      "DORA",
      "Goals",

      "Continuous Improvement",
      "Engineering Productivity",

      "Metrics",
    ],
    description:
      "Teams that adopt a mindset and practice of continuous improvement are likely to see the most benefits. To get the most out of DORA, consider it in the context of your team and your users. ",
    image: robDora,
    imageLabel: "DORA Community Lean Coffee",
    featured: false,
  },
  {
    title: "Metrics Monday January 2024 - DORA Community Discussion",
    article: post4,
    date: "2024-01",
    dateText: "January 2024",
    id: "2024-01-22-1",
    tags: [
      "DORA",
      "Goals",
      "Product Management",
      "Engineering Productivity",
      "Metrics",
      "Culture",
    ],
    description:
      "Metric Mondays are an opportunity for the community to have a lean coffee discussion around metrics. ",
    image: metricMonday,
    imageLabel: "DORA Community Lean Coffee",
    featured: false,
  },
  {
    title: "Bottom-up or top-down? DORA Community Discussion",
    article: post3,
    date: "2024-01",
    dateText: "January 2024",
    id: "2024-01-11-1",
    tags: [
      "DORA",
      "Goals",
      "Platform",
      "Cloud Costs",
      "Engineering Productivity",
      "AI",
      "Metrics",
    ],
    description:
      "Recap from the DORA Community Discussion on the focus for 2024.",
    image: robDora,
    imageLabel: "DORA Community Lean Coffee",
    featured: false,
  },
  {
    title: "January Community News",
    article: post1,
    date: "2024-01",
    dateText: "January 2024",
    id: "2024-01-05-1",
    tags: ["DORA"],
    description: "What's happening in the DORA community in January 2024",
    image: robDora,
    imageLabel: "DORA Community Lean Coffee",
    featured: false,
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
    imageLabel: "DORA Community Summit Family Photo",
    featured: false,
  },
];

export const sidebar = {
  title: "DORA Community Blog",
  description: "Community News, Event Recaps, and Community Shared Resources.",
};

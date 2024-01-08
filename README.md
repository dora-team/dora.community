# DORA Community Website

## Community Blog

How to add a blog article:

1. Add a md file under /posts, follow this naming convention: [blog-post.yyyymmdd.md](blog-post-.yyyymmdd.md), if more than 1 blog for that date, follow blog-post.yyyymmdd.#.md (ex. blog-post.20231231.1.md)
   <br/><br/>
2. Add blog post to the /constants.tsx file:

   title: "Blog Title",

   article: post#, [1]

   date: "YYYY-MM",

   dateText: "Month Year",

   id: "YYYY-MM-DD-#",[2]

   tags: ["DORA", "DevOps", "Code Reviews"],[3]

   description: "Description",

   <b>image</b>: image,

   imageLabel: "image text",

   featured: true,[4]

<br/>

[1] the next post number

[2] default to 1, increment for additional posts on same day

[3] Add relevant tags, these will show up in the sidebar on the blog page

[4] If you want the blog to be featured, mark as 2. Only 2 should be featured.

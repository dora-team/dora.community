import { sidebar, posts } from "../constants";
import { FeaturedPost } from "../components/FeaturedPost";
import { BlogPostList } from "../components/BlogPostList";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { Hero } from "./Hero";
import { SiteBanner } from "./SiteBanner";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "../components/Card";

export const Blog = () => {
  const { id } = useParams();

  const activePosts = id
    ? posts.filter(
        (post) => post.id === id || post.date === id || post.tags.includes(id)
      )
    : posts.slice(0, 4);

  return (
    <main>
      <SiteBanner />
      <Hero />
      <Container maxWidth="xl">
        <Card title="DORA Community Blog">
          <Grid container spacing={4}>
            {posts
              .filter((post) => post.featured)
              .map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <BlogPostList title="Latest Posts" posts={activePosts} />
            <Sidebar title={sidebar.title} description={sidebar.description} />
          </Grid>
        </Card>
      </Container>
    </main>
  );
};

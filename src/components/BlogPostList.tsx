import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "@mui/material";
import { Markdown } from "./Markdown";

interface BlogPostListProps {
  posts: {
    article: string;
    id: string;
    title: string;
  }[];
  title: string;
}

export const BlogPostList = (props: BlogPostListProps) => {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        
          {title}
        
      </Typography>
      <Divider />
      {posts.map((post) => (
        <>
        <Link display="block" variant="body1" href={"/blog/" + post.id}>
          <h1>{post.title}</h1>
          </Link>
          <Markdown className="markdown" key={post.article.substring(0, 40)}>
            {post.article}
          </Markdown>
        </>
      ))}
    </Grid>
  );
};
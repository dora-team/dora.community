import { posts } from "../constants";
import { uniq, flatten, uniqBy } from "lodash";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface SidebarProps {
  description: string;
  
    
  title: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { description, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {uniqBy(posts, "date").map((post) => (
        <Link
          display="block"
          variant="body1"
          href={"/blog/" + post.date}
          key={post.dateText}
        >
          {post.dateText}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Tags
      </Typography>
      {uniq(flatten(posts.map((post) => post.tags))).map((tag) => (
        <Link display="block" variant="body1" href={"/blog/" + tag} key={tag}>
          {tag}
        </Link>
      ))}
      
      
    </Grid>
  );
};
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Twitter } from "@mui/icons-material";

type GuideProps = {
  altText: string;
  image?: string;
  title: string;
  body: string | JSX.Element;
  linkedIn?: any;
  twitter?: any;
};

export const DoraGuideHighlight = ({
  title,
  altText,
  image,
  body,
  linkedIn,
  twitter,
}: GuideProps) => {
  return (
    <Card>
      <CardMedia sx={{ height: 500 }} image={image} title={altText} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        {linkedIn && (
          <Link to={linkedIn} target="_blank">
            <LinkedInIcon />
          </Link>
        )}
        {twitter && (
          <Link to={twitter} target="_blank">
            <Twitter />
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

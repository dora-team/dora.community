import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { LinkedIn as LinkedInIcon, Twitter } from "@mui/icons-material";

type GuideProps = {
  altText: string;
  image?: string;
  title: string;
  role?: string;
  body: string | JSX.Element;
  linkedIn?: string;
  twitter?: string;
};

export const DoraGuideHighlight = ({
  title,
  altText,
  image,
  role,
  body,
  linkedIn,
  twitter,
}: GuideProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 280,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        image={image}
        title={altText}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 2.5,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="h4"
          fontWeight={700}
          sx={{ mb: role ? 0.5 : 1.5, fontSize: "1.35rem" }}
        >
          {title}
        </Typography>
        {role && (
          <Box mb={1.5}>
            <Chip
              label={role}
              size="small"
              sx={{
                fontWeight: 600,
                fontSize: "0.75rem",
                borderRadius: "6px",
              }}
              color={role.toLowerCase().includes("advocacy") ? "primary" : "secondary"}
              variant="outlined"
            />
          </Box>
        )}
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          sx={{ lineHeight: 1.6, flexGrow: 1 }}
        >
          {body}
        </Typography>
      </CardContent>
      {(linkedIn || twitter) && (
        <CardActions
          sx={{
            px: 2,
            py: 1,
            borderTop: "1px solid #f0f0f0",
            backgroundColor: "#fafafa",
            display: "flex",
            gap: 0.5,
          }}
        >
          {linkedIn && (
            <Tooltip title={`${title}'s LinkedIn`}>
              <IconButton
                component="a"
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}'s LinkedIn profile`}
                size="small"
                sx={{
                  color: "#0a66c2",
                  "&:hover": { backgroundColor: "rgba(10, 102, 194, 0.08)" },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          {twitter && (
            <Tooltip title={`${title}'s Twitter / X`}>
              <IconButton
                component="a"
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}'s Twitter profile`}
                size="small"
                sx={{
                  color: "#1da1f2",
                  "&:hover": { backgroundColor: "rgba(29, 161, 242, 0.08)" },
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
      )}
    </Card>
  );
};

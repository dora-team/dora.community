import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const NavDesktop = ({ pages }: { pages: { label: string; path: string }[] }) => (
  <>
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
      }}
    >
      {pages.map((page) => (
        <Button
          key={page.label}
          component={Link}
          to={page.path}
          sx={{
            my: 2,
            color: "#58595e",
            display: "block",
            textDecoration: "none",
            textTransform: "inherit",
            fontFamily: "'Google Sans', Roboto, Arial, Helvetica, sans-serif",
            fontSize: "1.1rem"

          }}
        >
          {page.label}
        </Button>
      ))}
    </Box>
  </>
);

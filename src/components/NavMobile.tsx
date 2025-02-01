import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export const NavMobile = ({
  pages,
}: {
  pages: { label: string; path: string }[];
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        justifyContent: "flex-end",
      }}
    >
      <IconButton
        size="large"
        aria-label="mobile navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ color: "rgb(88, 89, 94)" }} // <-- Style the IconButton
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)} // Use the passed Boolean function!
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.label}
            onClick={handleCloseNavMenu}
            component={Link}
            to={page.path}
          >
            <Typography textAlign="center">{page.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

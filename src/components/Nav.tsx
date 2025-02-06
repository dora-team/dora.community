import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavStyled = styled(Box)({
  display: "flex",
});

const NavItemStyled = styled(Box)({
  padding: "0.5rem",
});

const NavItem = ({ path = "", label = "" }) => (
  <NavItemStyled>
    <Link style={{ textDecoration: "none", color: "#5f6368" }} to={path}>
      {label}{" "}
    </Link>
  </NavItemStyled>
);

export const Nav = () => (
  <NavStyled>
    <NavItem path="/" label="Home" />
    <NavItem path="/communityguidelines" label="Community Guidelines" />
    <NavItem path="/join" label="Join Community" />
    <NavItem path="summit" label="Community Summit" />
  </NavStyled>
);

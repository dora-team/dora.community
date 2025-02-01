import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import doraCommunityLogo from "../assets/dora-community-of-practice.png";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";

const HeaderStyled = styled(Box)({
  padding: "0.5rem",
  display: "flex",
  boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 0 0 #dadce0"
});

const LogoStyled = styled(Box)({
  flexGrow: 1,
});

/**
 * @deprecated Use the new {@link HeaderResponsive} component instead.
 */
export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <Link to="/">
        <img src={doraCommunityLogo} height="70px" />
        </Link>
      </LogoStyled>
      <Nav />
    </HeaderStyled>
  );
};

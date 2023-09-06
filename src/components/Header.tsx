import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import doraLogoNoWords from "../assets/dora-logo-no-words.svg";
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

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <Link to="/">
        <img src={doraLogoNoWords} height="50px" />
        </Link>
      </LogoStyled>
      <Nav />
      
      
    </HeaderStyled>
  );
};

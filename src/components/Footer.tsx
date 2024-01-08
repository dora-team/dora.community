import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterStyled = styled(Box)({
  padding: "0.5rem",
  display: "flex",
  borderTop: "1px solid black",
});

const NavStyled = styled(Box)({});

export const Footer = () => {
  return (
    <FooterStyled>
      <NavStyled>
        © 2023 DORA is a program run by Google Cloud. All content on this site
        is licensed by Google LLC under CC BY-NC-SA 4.0, unless otherwise
        specified. All Rights Reserved{" "}
        <a href="https://policies.google.com/privacy">Privacy Policy</a>
      </NavStyled>
    </FooterStyled>
  );
};

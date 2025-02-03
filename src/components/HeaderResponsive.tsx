import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Logo } from "./Logo";
import { menuItems } from "../routes/Routes";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export const HeaderResponsive = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'inherit'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <NavMobile pages={menuItems} />
          <NavDesktop pages={menuItems} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import { Link } from "react-router-dom";
import doraCommunityLogo from "../assets/dora-community-of-practice.png";

export const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <img
        src={doraCommunityLogo}
        height="70px"
        style={{ paddingTop: "0.5rem" }}
      />
    </Link>
  );
};

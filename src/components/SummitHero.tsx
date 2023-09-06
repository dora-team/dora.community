import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const SummitHero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fde293",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <>
        Oct 2 2023: Join the{" "}
        <b>DORA Community Summit at DevOps Enterprise Summit</b> to learn,
        discuss, and collaborate with fellow community members.{" "}
        <Link to={"/summit"}>Tickets and Info </Link>
      </>
    </Box>
  );
};

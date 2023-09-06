import { Button } from "./Button";

const handleSignUpButton = () => {
  window.open("https://groups.google.com/g/dora-community/about", "_blank");
};

export const SignUpButton = ({ centered = false }) => (
  <Button onClick={handleSignUpButton} variant="contained" centered={centered}>
    Join the DORA Community of Practice
  </Button>
);

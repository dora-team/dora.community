import { default as MuiButton } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const ButtonStyled = styled(MuiButton)({
  // padding: "0.5rem",
});

export const Button = (props: any) => {
  if (props.centered) {
    return (
      <Box textAlign="center" pt="1rem">
        <ButtonStyled {...props} />
      </Box>
    );
  }
  return ButtonStyled(props);
};

import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = {
  title: string;
  imageLeft?: string;
  iconLeft?: any;
  iconStyle?: any;
  // children?: JSX.Element | JSX.Element[] | string;
  children?: any;
  size?: "s" | "m" | "l";
};

const imageWidth = {
  s: "150px",
  m: "250px",
  l: "350px",
};



export const Card = ({ title, imageLeft, iconLeft, iconStyle, children, size= "m" }: CardProps) => {
  return (
    <Box m="0.5rem" display="flex" flex={1} flexDirection="column">
      <Box
        style={{
          borderRadius: "14px 14px 0 0",
          border: "1px solid #dadce0",
          overflow: "hidden"

        }}
      >
        <Box
          p="1rem"
          textAlign="center"
          style={{
            backgroundColor: "#f8f9fa",
            // backgroundColor: "#f00",
            // borderRadius: "14px 14px 0 0",

            borderRadius: "8px",

          }}
        >
         <h2>{title}</h2>
        </Box>
        <Box display="flex" height="100%">
          {imageLeft && (
            <Box p="1rem">
              <img src={imageLeft} width={imageWidth[size]} />
            </Box>
          )}
          {iconLeft && (
            <Box p="1rem">
              <FontAwesomeIcon icon={iconLeft} style={{...iconStyle,width:imageWidth[size], fontSize: "200px"}}  />
            </Box>
          )}
          <Box p="1rem" width="100%" id="card-content">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
// import { styled } from "@mui/material/styles";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

type NoTitleCardProps = {
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
  l: "600px",
};



export const NoTitleCard = ({ imageLeft, iconLeft, iconStyle, children, size= "m" }: NoTitleCardProps) => {
  return (
    <Box m="0.5rem" display="flex" flex={1} flexDirection="column">
      <Box
        style={{
          borderRadius: "14px 14px 0 0",
          border: "0px solid #dadce0",
          overflow: "hidden"
        }}
      >
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
  );
};

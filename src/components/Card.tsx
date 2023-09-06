import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";
// import { styled } from "@mui/material/styles";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

type CardProps = {
  title: string;
  imageLeft?: string;
  iconLeft?: any;
  iconStyle?: any;
  // children?: JSX.Element | JSX.Element[] | string;
  children?: any;
};

export const Card = ({ title, imageLeft, iconLeft, iconStyle, children }: CardProps) => {
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
              <img src={imageLeft} width="150px" />
            </Box>
          )}
          {iconLeft && (
            <Box p="1rem">
              <FontAwesomeIcon icon={iconLeft} style={{...iconStyle,width:"150px", fontSize: "200px"}}  />
            </Box>
          )}
          <Box p="1rem" width="100%" id="card-content">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

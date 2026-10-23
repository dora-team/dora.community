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
  link?: string;
};

const imageWidth = {
  s: "150px",
  m: "250px",
  l: "350px",
};

const ImageContent = ({
  imageLeft,
  iconLeft,
  iconStyle,
  size,
}: {
  imageLeft?: string;
  iconLeft?: any;
  iconStyle?: any;
  size: "s" | "m" | "l";
}) => (
  <>
    {imageLeft && <img src={imageLeft} width={imageWidth[size]} />}
    {iconLeft && (
      <FontAwesomeIcon
        icon={iconLeft}
        style={{ ...iconStyle, width: imageWidth[size], fontSize: "200px" }}
      />
    )}
  </>
);

export const Card = ({
  title,
  imageLeft,
  iconLeft,
  iconStyle,
  children,
  size = "m",
  link,
}: CardProps) => {
  return (
    <Box m="0.5rem" display="flex" flex={1} flexDirection="column" height="calc(100% - 1rem)">
      <Box
        style={{
          borderRadius: "14px",
          border: "1px solid #dadce0",
          overflow: "hidden",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100%",
        }}
      >
        <Box
          p="1rem"
          textAlign="center"
          style={{
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #dadce0",
          }}
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h2>{title}</h2>
            </a>
          ) : (
            <h2>{title}</h2>
          )}
        </Box>
        <Box display="flex" flex={1} height="100%">
          {(imageLeft || iconLeft) && (
            <Box p="1rem">
              {link ? (
                <a href={link} target="_blank">
                  <ImageContent
                    imageLeft={imageLeft}
                    iconLeft={iconLeft}
                    iconStyle={iconStyle}
                    size={size}
                  />
                </a>
              ) : (
                <ImageContent
                  imageLeft={imageLeft}
                  iconLeft={iconLeft}
                  iconStyle={iconStyle}
                  size={size}
                />
              )}
            </Box>
          )}
          <Box p="1rem" width="100%" id="card-content" display="flex" flexDirection="column" flex={1}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

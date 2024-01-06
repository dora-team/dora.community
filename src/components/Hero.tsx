import { Box } from "@mui/material";
import doraCommunityOfPractice from "../assets/dora-community-of-practice.png";

import { SignUpButton } from "./SignUpButton";

export const Hero = () => {
  return (
    <Box display="flex">
      <Box>
        <Box>
          <Box display="flex" style={{ backgroundColor: "#f8f9fa" }}>
            <Box width="600px" p="1rem">
              <img src={doraCommunityOfPractice} height="200px" />
            </Box>
            <Box display="flex" alignItems="center">
              <Box>
                <Box p="1rem" fontSize="1.5rem" textAlign="center">
                  The DORA Community provides opportunities to learn, discuss,
                  and collaborate on software delivery and operational
                  performance. Enabling a culture of continuous improvement.
                </Box>

                <SignUpButton centered />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

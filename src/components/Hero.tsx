import { Box } from "@mui/material";

import { SignUpButton } from "./SignUpButton";

export const Hero = () => {
  return (
    <Box display="flex" padding="1rem">
      <Box>
        <Box>
          <Box display="flex" style={{ backgroundColor: "#f8f9fa" }}>
            <Box display="flex" alignItems="center">
              <Box paddingBottom="1rem">
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

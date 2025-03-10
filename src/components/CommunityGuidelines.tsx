import { Card } from "./Card";
import { Box } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { Hero } from "./Hero";
import { SiteBanner } from "./SiteBanner";

export const CommunityGuidelinesPage = () => {
  return (
    <>
      <SiteBanner />

      <Box maxWidth="1600px" margin="auto" padding="1rem">
        <Hero />
        <Card title="Community Guidelines">
          <h3>Overview:</h3>
          <p>
            This DORA Community creates opportunities for members to connect,
            listen, share, learn, and support each other on the journey of
            improving our software delivery and operations. Fostering
            psychological safety is important for members to feel they are in a
            safe space where they can participate with people who share similar
            interests. We as a community, pledge to make participation in our
            community, harassment free experience for everyone, regardless of
            age, body, size, disability, ethnicity, gender identity and
            expression, level of experience, education, socio-economic status,
            nationality, personal appearance, race, religion, or sexual identity
            and orientation. Please read and adhere to the following guidelines:
          </p>

          <h3>Guidelines:</h3>

          <p>
            <li>Use welcoming and inclusive language</li>
            <li>Be respectful of differing viewpoints and experiences</li>
            <li>Gracefully accept constructive criticism</li>
            <li>Focus on what is best for the community</li>
            <li>Show empathy towards other community members.</li>{" "}
          </p>

          <h3> Examples of unacceptable behavior by participants include: </h3>

          <p>
            <li>
              The use of sexualized language or imagery and unwelcome sexual
              attention or advances{" "}
            </li>

            <li>
              Trolling, insulting/derogatory comments, and personal or political
              attacks
            </li>

            <li>
              {" "}
              Public or private harassment Publishing others’ private
              information, such as a physical or electronic address, without
              explicit permission
            </li>

            <li>
              {" "}
              Other conduct which could reasonably be considered inappropriate
              in a professional setting
            </li>
          </p>
        </Card>
      </Box>
    </>
  );
};

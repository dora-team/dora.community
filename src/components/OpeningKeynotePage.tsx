import { Card } from "./Card";
import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import nicoleForsgren from "../assets/nicoleforsgrenheadshot.jpeg";
import { SODRHero } from "./SODRHero";

export const OpeningKeynotePage = () => {
  return (
    <>
      <SODRHero />
      <Hero />

      <Box maxWidth="1600px" margin="auto">
        <Card title="Opening Keynote">
        <p>
          <a href="/src/assets/slides/DORA-Community-Summit-Nicole-Forsgren-Keynote.pdf" target="_blank">Slides</a> (PDF)
        </p>

          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridAutoRows="1fr"
            gap="1em"
            p="0.5rem"
            maxWidth="1600px"
            margin="auto"
          >
            <Box textAlign="center">
              <img src={nicoleForsgren} width="50%" />
            </Box>
            <Box>
              <h2>Nicole Forsgren, PhD </h2>

              <p>
                Dr. Nicole Forsgren is a Partner at Microsoft Research, where
                she leads{" "}
                <a href="https://techcommunity.microsoft.com/t5/azure-developer-community-blog/introducing-developer-velocity-lab-a-research-initiative-to/ba-p/2333140">
                  Developer Velocity Lab
                </a>
                . She is author of the Shingo Publication Award-winning book{" "}
                <a href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations-ebook/dp/B07B9F83WM">
                  Accelerate: The Science of Lean Software and DevOps
                </a>{" "}
                and is best known as lead investigator on the largest DevOps
                studies to date. She has been a successful entrepreneur (
                <a href="https://dora.dev/news/dora-joins-google-cloud/">
                  with an exit to Google
                </a>
                ), professor, performance engineer, and sysadmin. Her work has
                been published in several peer-reviewed journals.
              </p>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

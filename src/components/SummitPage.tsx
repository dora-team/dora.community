import { Card } from "./Card";
import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import { Link } from "react-router-dom";
import { SODRHero } from "./SODRHero";
import nathenSlides  from "../assets/slides/DORA-Community-Summit-Nathen-Harvey.pdf";
import lummaSlides  from "../assets/slides/DORA-Community-Summit-Denali-Lumma.pdf";
import ringSlides  from "../assets/slides/DORA-Community-Summit-Matt-Ring.pdf";
import forsgrenSlides from "../assets/slides/DORA-Community-Summit-Nicole-Forsgren-Keynote.pdf";

import doraSummitLogo from "../assets/dora-summit-at-does.png";

export const SummitPage = () => {
  return (
    <>
      <SODRHero />
      <Hero />

      <Box maxWidth="1600px" margin="auto">
        <Card title="DORA Community Summit">
          <Box textAlign="center">
            <img src={doraSummitLogo} width="720" height="361" alt="DORA Summit at DOES" />
          </Box>

          <h2>Accelerate your journey with lessons from fellow travelers</h2>

          <p>
            DORA studies the culture and capabilities that enable
            high-performing technology-driven organizations like yours. Join the
            inaugural DORA Community Summit to learn, discuss, and collaborate
            on putting the research findings into practice.
          </p>

          <p>
            The inaugural DORA Community Summit was held on Monday, October 2 as a pre-event for the {" "}
            <a href="https://itrevolution.com/product/devops-enterprise-summit-las-vegas-2023/?utm_medium=referral&utm_source=dora&utm_term=doracommunitysummit&utm_content=onsale&utm_campaign=does23lv" target="_blank">DevOps Enterprise Summit</a>.
          </p>

          <h3>Schedule</h3>
          <p>8AM - 12PM Monday, October 2 at The Cosmopolitan in Las Vegas</p>

          <p>
            08:00 - 09:00 - Coffee with fellow travelers, our DORA Summit
            adventure begins!
          </p>

          <p>09:00 - 09:10 - Welcome Remarks | <a href = {nathenSlides} target="_blank">Slides</a></p>

          <p>
            09:10 - 09:30 -{" "}
            <Link to={"/summit/opening-keynote"}>Opening Keynote</Link>, Nicole
            Forsgren, PhD | <a href = {forsgrenSlides} target="_blank">Slides</a>
          </p>

          <p>
            09:30 - 10:00 - Agenda Building - what topics matter most to you,
            right now?
          </p>

          <p>
            10:00 - 10:05 -{" "}
            <Link to="/summit/john-deere">
              How DORA influenced John Deere's Agile Operating Model
            </Link>{" "} | <a href = {ringSlides} target="_blank">Slides</a>
          </p>

          <p>10:05 - 11:00 - Group discussions</p>

          <p>
            11:00 - 11:05 -
            <Link to="/summit/denali-lumma"> Guide to DORA Community</Link> | <a href = {lummaSlides} target="_blank">Slides</a>
          </p>

          <p>11:05 - 11:40 - Group discussions</p>

          <p>11:40 - 12:00 - Closing Remarks, Nathen Harvey</p>
        </Card>
      </Box>
    </>
  );
};

import { Card } from "./Card";
import { Box } from "@mui/material";
import { Hero } from "./Hero";
import { Link } from "react-router-dom";
import { DORAAwardsHero } from "./DORAAwardsHero";
import nathenSlides  from "../assets/slides/DORA-Community-Summit-Nathen-Harvey.pdf";
import lummaSlides  from "../assets/slides/DORA-Community-Summit-Denali-Lumma.pdf";
import ringSlides  from "../assets/slides/DORA-Community-Summit-Matt-Ring.pdf";
import forsgrenSlides from "../assets/slides/DORA-Community-Summit-Nicole-Forsgren-Keynote.pdf";
import doraFamiilyPhoto from "../assets/dora-summit-family-photo-2023.png"

export const SummitPage = () => {
  return (
    <>
      <DORAAwardsHero />
      <Hero />

      <Box maxWidth="1600px" margin="auto">
        <Card title="DORA Community Summit">
          <Box textAlign="center">
            <img src={doraFamiilyPhoto} width="720" height="252" alt="DORA Summit Family Photo - 2023" />
          </Box>

          <h2>Accelerating the journey with lessons from fellow travelers</h2>

          <p>
            The inaugural DORA Community Summit was held on Monday, October 2 as a pre-event for the DevOps Enterprise Summit. Catch-up on the recordings in this <a href="https://www.youtube.com/playlist?list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5" target="_youtube">YouTube Playlist</a>.
          </p>

          <h3>Schedule</h3>
          <p>8AM - 12PM Monday, October 2 at The Cosmopolitan in Las Vegas</p>

          <p>
            08:00 - 09:00 - Coffee with fellow travelers, our DORA Summit
            adventure begins!
          </p>

          <p>09:00 - 09:10 - Welcome Remarks | <a href = {nathenSlides} target="_blank">Slides</a> | <a href="https://www.youtube.com/watch?v=ZVXaU-C-l64&list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5&index=1" target="_youtube">Recording</a></p>

          <p>
            09:10 - 09:30 -{" "}
            <Link to={"/summit/opening-keynote"}>Opening Keynote</Link>, Nicole
            Forsgren, PhD | <a href = {forsgrenSlides} target="_blank">Slides</a> | <a href="https://www.youtube.com/watch?v=Hydf67rDUrY&list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5&index=2" target="_youtube">Recording</a>
          </p>

          <p>
            09:30 - 10:00 - Agenda Building - what topics matter most to you,
            right now?  | <a href="https://www.youtube.com/watch?v=V0lfBcDPAXY&list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5&index=5" target="_youtube">Recording</a>
          </p>

          <p>
            10:00 - 10:05 -{" "}
            <Link to="/summit/john-deere">
              How DORA influenced John Deere's Agile Operating Model
            </Link>{" "} | <a href = {ringSlides} target="_blank">Slides</a> | <a href="https://www.youtube.com/watch?v=1EZsgWhOdyw&list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5&index=3" target="_youtube">Recording</a>
          </p>

          <p>10:05 - 11:00 - Group discussions</p>

          <p>
            11:00 - 11:05 -
            <Link to="/summit/denali-lumma"> Guide to DORA Community</Link> | <a href = {lummaSlides} target="_blank">Slides</a> | <a href="https://www.youtube.com/watch?v=mTRw_w3AP88&list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5&index=4" target="_youtube">Recording</a>
          </p>

          <p>11:05 - 11:40 - Group discussions</p>

          <p>11:40 - 12:00 - Closing Remarks, Nathen Harvey | <a href="https://www.youtube.com/watch?v=6adps-h_TTc&list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5&index=6" target="_youtube">Recording</a></p>
        </Card>
      </Box>
    </>
  );
};

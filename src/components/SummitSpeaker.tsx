import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import {nicoleForsgren} from "../assets/nicoleforsgrenheadshot.jpeg";
import { SummitHero } from "./SummitHero";
import { Hero } from "./Hero";






export const SummitSpeaker = ()  => {
  return (
    <>
   
    <SummitHero />
    <Hero / >
   <Box>
   <Card>
   <img src={nicoleForsgren} width="150px" />
    </Card>
    </Box>
    </>
  );
};

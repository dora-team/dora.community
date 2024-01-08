import { Card } from "./Card";
import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import mattRing from "../assets/matt-ring.jpg";
import justinThomsen from "../assets/justin-thomsen.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ringSlides  from "../assets/slides/DORA-Community-Summit-Matt-Ring.pdf";
import { Link } from "react-router-dom";
import { SODRHero } from "./SODRHero";

export const JohnDeerePage = () => {
  return (
    <>
      <SODRHero />
      <Hero />

      <Box maxWidth="1600px" margin="auto">
        <h2>How DORA influenced John Deere's Agile Operating Model</h2>

        <p>  
          <a href = {ringSlides} target="_blank">Slides</a> (PDF) | <a href="https://www.youtube.com/watch?v=1EZsgWhOdyw&list=PLMtxeMdO4DaD6lHxCiccbP3vQtuH-MBB5&index=3" target="_youtube">Recording</a>
        </p>

        <p>
          In our{" "}
          <a href="https://videos.itrevolution.com/watch/778295505/">
            DOES 2022 talk
          </a>
          , we shared how we successfully transformed ~500 global technology
          teams over three years, in adopting Agility & DevOps, shifting from
          projects to products, and promoting a generative organizational
          culture. In this talk, we'll double-click into how DORA influenced our
          transformation, from informing how we measured overall success to
          guiding where to focus our coaching and transformation efforts.
        </p>
      </Box>

      <Box maxWidth="1600px" margin="auto">
        <Card
          title="Justin Thomsen, Group Product Manager, Developer Experience
            Platform, John Deere"
        >
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridAutoRows="1fr"
            gap="1em"
            p="0.5rem"
          >
            <Box textAlign="center">
              <img src={justinThomsen} width="30%" />
            </Box>

            <Box>
              <p>
                Justin Thomsen is a Group Product Manager for the Developer
                Experience with John Deere’s Agile Operating Model Foundry.
                Justin has been a part of many transformations in multiple
                companies and throughout John Deere. He has been a staunch
                supporter of DevOps, XP, agile, and generally improving the
                lives of developers for the last 10 years at John Deere.
              </p>
            </Box>
          </Box>
        </Card>
      </Box>
      <Box maxWidth="1600px" margin="auto">
        <Card
          title="Matt Ring, Sr. Product & Engineering Coach, Global IT Strategy &
            Transformational"
        >
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridAutoRows="1fr"
            gap="1em"
            p="0.5rem"
          >
            <Box textAlign="center">
              <img src={mattRing} width="30%" />
            </Box>
            <Box>
              <p>
                John Deere Matt Ring is a Sr. Product & Engineering Coach with
                John Deere’s Agile Operating Model Foundry. Matt has 18 years of
                experience in the IT industry and 10 years as a coach, working
                with individuals, teams and organizations on improving ways of
                working, adopting Product, Lean-Agile and DevOps practices and
                fostering an organizational culture of continuous learning and
                experimentation.
              </p>
              <Link
                to="https://www.linkedin.com/in/matt-ring-3793b365/"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

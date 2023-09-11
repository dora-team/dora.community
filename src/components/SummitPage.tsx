import { Card } from "./Card";
import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import { Link } from "react-router-dom";

import doraSummitLogo from "../assets/dora-summit-at-does.png";

export const SummitPage = () => {
  return (
    <>
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
            <a
              href="https://itrevolution.com/product/devops-enterprise-summit-las-vegas-2023/?utm_medium=referral&utm_source=dora&utm_term=doracommunitysummit&utm_content=onsale&utm_campaign=does23lv"
              target="_blank"
            >
              Register now
            </a>{" "}
            by adding the DORA Community Summit ($75) to your{" "}
            <a
              href="https://itrevolution.com/product/devops-enterprise-summit-las-vegas-2023/?utm_medium=referral&utm_source=dora&utm_term=doracommunitysummit&utm_content=onsale&utm_campaign=does23lv"
              target="_blank"
            >
              DevOps Enterprise Summit registration
            </a>
            .
          </p>

          <h3>Schedule</h3>
          <p>8AM - 12PM Monday, October 2 at The Cosmopolitan in Las Vegas</p>

          <p>
            08:00 - 09:00 - Coffee with fellow travelers, our DORA Summit
            adventure begins!
          </p>

          <p>09:00 - 09:10 - Welcome Remarks</p>

          <p>
            09:10 - 09:30 -{" "}
            <Link to={"/summit/opening-keynote"}>Opening Keynote</Link>, Nicole
            Forsgren, PhD
          </p>

          <p>
            09:30 - 10:00 - Agenda Building - what topics matter most to you,
            right now?
          </p>

          <p>
            10:00 - 10:05 -{" "}
            <Link to="/summit/john-deere">
              How DORA influenced John Deere’s Agile Operating Model
            </Link>
          </p>

          <p>10:05 - 11:00 - Group discussions</p>

          <p>
            11:00 - 11:05 -
            <Link to="/summit/denali-lumma"> Guide to DORA Community</Link>
          </p>

          <p>11:05 - 11:40 - Group discussions</p>

          <p>11:40 - 12:00 - Closing Remarks, Nathen Harvey</p>

          <p>
            This event is being held as a pre-conference event with the{" "}
            <a
              href="https://itrevolution.com/product/devops-enterprise-summit-las-vegas-2023/?utm_medium=referral&utm_source=dora&utm_term=doracommunitysummit&utm_content=onsale&utm_campaign=does23lv"
              target="_blank"
            >
              DevOps Enterprise Summit
            </a>
            .
          </p>
        </Card>
      </Box>
    </>
  );
};

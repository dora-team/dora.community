import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import doraDevCard from "../assets/doradevcard.png";
import doraReport2025Thumb from "../assets/2025-state-of-ai-assisted-software-development-report.png";
import doraAICapabilitiesModelReportThumb from "../assets/2025-dora-ai-capabilities-model-report.png";
import { Button } from "./Button";
import { Card } from "./Card";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Hero } from "./Hero";
import { SiteBanner } from "./SiteBanner";
import { useInPageLinking } from "../hooks/useInPageLinking";

const handleDoraDevButton = () => {
  window.open("https://dora.dev", "_blank");
};

const handleYoutubeButton = () => {
  window.open("https://www.youtube.com/@dora-dev?sub_confirmation=1", "_blank");
};

const handle2025ReportButton = () => {
  window.open("https://cloud.google.com/dora", "_blank");
};

const handleAICapabilitiesModelReportButton = () => {
  window.open(
    "https://cloud.google.com/resources/content/2025-dora-ai-capabilities-model-report",
    "_blank",
  );
};

export const HomePage = () => {
  useInPageLinking();
  return (
    <Stack spacing={0}>
      <SiteBanner />

      <Grid container spacing={2} maxWidth={1600} margin="auto" padding="1rem">
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid container item spacing={2} justifyContent="center">
          <Grid item xl={6} md={6} xs={12} id="dora-dev">
            <Card title="DORA.dev" imageLeft={doraDevCard} size="s">
              DORA is the largest and longest running research program of its
              kind, that seeks to understand the capabilities that drive
              software delivery and operations performance. <br /> <br /> DORA
              helps teams apply those capabilities, leading to better
              organizational performance.
              <br />
              <br />
              <Button
                onClick={handleDoraDevButton}
                variant="contained"
                centered
              >
                Explore DORA.dev
              </Button>
            </Card>
          </Grid>

          <Grid item xl={6} md={6} xs={12}>
            <Card
              title="DORA State of AI-assisted Software Development"
              imageLeft={doraReport2025Thumb}
              size="s"
            >
              The State of AI-assisted Software Development report reveals AI’s
              primary role is as an amplifier, magnifying an organization’s
              existing strengths and weaknesses. The greatest returns on AI
              investment come not from the tools themselves, but from a
              strategic focus on the underlying organizational system.
              <br />
              <br />
              <br />
              <Button
                onClick={handle2025ReportButton}
                variant="contained"
                centered
              >
                Download the Report
              </Button>
            </Card>
          </Grid>



          <Grid item xl={6} md={6} xs={12} id="youtube">
            <Card
              title="YouTube Channel"
              iconLeft={faYoutube}
              iconStyle={{ color: "#d01b1b" }}
              size="s"
            >
              Most sessions start with a guest speaker who's presentation is
              recorded.
              <br />
              <br />
              Some recent topics:
              <br />
              <ul>
                <li>
                  <a href="https://www.youtube.com/watch?v=Sz8NWaTiWfE&list=PLMtxeMdO4DaAyqLaGrm8q55COt8eCMrKl&index=14" target="_blank">
                    State of AI-assisted Software Development
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=qyikCFaHLRk&list=PLMtxeMdO4DaAyqLaGrm8q55COt8eCMrKl&index=10" target="_blank">
                    Mobile applications & DORA
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=HBEtKSIznn0&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=36" target="_blank">
                    Value Stream Mapping (VSM)
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=7gjLjRRXB7Y&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=42" target="_blank">
                    Building a Generative Culture
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=AlOJ-3vRyjE&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=12" target="_blank">
                    DORA &amp; SPACE
                  </a>
                </li>
              </ul>
              <br />
              <Button
                onClick={handleYoutubeButton}
                variant="contained"
                centered
              >
                Subscribe to Our Channel
              </Button>
            </Card>
          </Grid>

          <Grid item xl={6} md={6} xs={12}>
            <Card
              title="DORA AI Capabilities Model report"
              imageLeft={doraAICapabilitiesModelReportThumb}
              size="s"
            >
              The DORA AI Capabilities Model report, a companion guide to the
              2025 State of AI-assisted Software Development report, serves as
              a practical guide to the seven capabilities that amplify the
              benefits of AI. For each of the seven core capabilities, this
              report details implementation strategies, specific tactics for
              teams to get started, and methods for monitoring progress and
              fostering continuous improvement.
              <br />
              <br />
              <br />
              <br />
              <Button
                onClick={handleAICapabilitiesModelReportButton}
                variant="contained"
                centered
              >
                Download the Report
              </Button>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} id="calendar">
          <Card title="Calendar">
            <Box display="flex" justifyContent="center">
              <Box
                position="relative"
                overflow="hidden"
                maxWidth="800px"
                width="100%"
                height="600px"
                margin="0 auto"
              >
                <p>
                  <small>
                    Have an event that the DORA Community might be interested
                    in?{" "}
                    <a
                      href="mailto:dora-community-events@googlegroups.com?Subject=DORA+Community+Calendar+suggestion"
                      target="_blank"
                    >
                      Send us the details
                    </a>
                    .
                  </small>
                </p>
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=America%2FNew_York&mode=AGENDA&src=ZTNmYmQ3NzY3ZDcxYWM2MDE3ZTJhYTZmOTBkYmRjZDNhYWNhZDg4MDkyNTllZGQ4NGEzNTgzZTVkZTMzYzViNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
                  style={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "85%",
                    border: "none",
                  }}
                ></iframe>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Stack >
  );
};

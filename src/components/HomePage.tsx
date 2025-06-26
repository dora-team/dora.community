import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import doraDevCard from "../assets/doradevcard.png";
import tshirtCard from "../assets/dora-community-shirts.png";
import genAIReportThumb from "../assets/dora-impact-of-generative-ai-in-software-development-report.png";
import doraAwardsThumb from "../assets/dora-award.png";
import doraSurveyThumb from "../assets/survey.png";
import { Button } from "./Button";
import { Card } from "./Card";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Hero } from "./Hero";
import { SiteBanner } from "./SiteBanner";

const handleDoraDevButton = () => {
  window.open("https://dora.dev", "_blank");
};

const handleTshirtButton = () => {
  window.open("https://www.customink.com/g/yrs0-00cz-1q8d", "_blank");
};

const handleYoutubeButton = () => {
  window.open("https://www.youtube.com/@dora-dev?sub_confirmation=1", "_blank");
};

const handleDoraSurveyButton = () => {
  window.open("https://dora.dev/survey/", "_blank");
};

const handleDoraAwardButton = () => {
  window.open("https://cloud.google.com/awards/devops/", "_blank");
};

const handleGenAIReportButton = () => {
  window.open("https://cloud.google.com/resources/content/dora-impact-of-gen-ai-software-development", "_blank");
};

export const HomePage = () => {
  return (
    <Stack spacing={0}>
      <SiteBanner />

      <Grid container spacing={2} maxWidth={1600} margin="auto" padding="1rem">
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid container item spacing={2} justifyContent="center">
          <Grid item xl={4} md={6} xs={12}>
            <Card
              title="2025 DORA Survey"
              imageLeft={doraSurveyThumb}
              size="s"
            >
              Contribute to the latest research by taking the DORA Survey.
              <br /><br />
              The DORA research program is dedicated to helping technology-driven teams get better at getting better. Use this a unique opportunity to pause and evaluate your team's ways of working.
              <br /><br />
              <Button onClick={handleDoraSurveyButton} variant="contained" centered>
                Take the DORA Survey
              </Button>
            </Card>
          </Grid>

          <Grid item xl={4} md={6} xs={12}>
            <Card title="DORA.dev" imageLeft={doraDevCard} size="s">
              DORA is the largest and longest
              running research program of its kind, that seeks to understand the
              capabilities that drive software delivery and operations
              performance. <br /> <br /> DORA helps teams apply those
              capabilities, leading to better organizational performance.
              <br /><br />
              <Button onClick={handleDoraDevButton} variant="contained" centered>
                Explore DORA.dev
              </Button>
            </Card>
          </Grid>

          <Grid item xl={4} md={6} xs={12}>
            <Card
              title="Google Cloud DORA Awards"
              imageLeft={doraAwardsThumb}
              size="s"
            >
              Has your team achieved remarkable success through DORA principles?
              <br />
              <br />
              It's time to shine! We're thrilled to announce the launch of the 2025
              DORA Awards, celebrating outstanding achievements in technology delivery
              and operational performance.
              <br /><br />
              <Button onClick={handleDoraAwardButton} variant="contained" centered>
                Apply for the DORA Awards
              </Button>
            </Card>
          </Grid>
        </Grid>

        <Grid container item spacing={2} justifyContent="center">
          <Grid item xl={4} md={6} xs={12}>
            <Card
              title="Impact of Generative AI"
              imageLeft={genAIReportThumb}
              size="s"
            >
              Generative AI is rapidly reshaping the software development
              landscape, presenting both exciting opportunities and complex
              challenges.<br /><br />
              Read research-backed guidance for leaders and
              practitioners to effectively navigate this transformation and to
              maximize AI's benefits.
              <br />
              <br />
              <Button onClick={handleGenAIReportButton} variant="contained" centered>
                Download the Report
              </Button>
            </Card>
          </Grid>

          <Grid item xl={4} md={6} xs={12}>
            <Card title="T-shirts" imageLeft={tshirtCard} size="s">
            Limited-edition DORA tees are here! Multiple colors, straight cut &
            fitted styles. Get yours before they disappear!
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button onClick={handleTshirtButton} variant="contained" centered>
                Order t-shirts now
              </Button>
            </Card>
          </Grid>

          <Grid item xl={4} md={6} xs={12}>
            <Card
              title="YouTube Channel"
              iconLeft={faYoutube}
              iconStyle={{ color: "#d01b1b" }}
              size="s"
            >
              Most sessions start with a guest speaker who's presentation is
              recorded.<br />
              <br />
              Some recent topics:
              <br />
              <br />
              <li><a href="https://www.youtube.com/watch?v=HBEtKSIznn0&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=36">Value Stream Mapping (VSM)</a></li>
              <li><a href="https://www.youtube.com/watch?v=7gjLjRRXB7Y&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=42">Building a Generative Culture</a></li>
              <li><a href="https://www.youtube.com/watch?v=Cj4HX6iR7DE&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=41">A Decade with DORA</a></li>
              <li><a href="https://www.youtube.com/watch?v=7_myznsXP8Y&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=37">AI Adoption</a></li>
              <li><a href="https://www.youtube.com/watch?v=AlOJ-3vRyjE&list=PLMtxeMdO4DaDmWE8raSDr-uju3j91x21w&index=12">DORA &amp; SPACE</a></li>
              <br />
              <Button onClick={handleYoutubeButton} variant="contained" centered>
                Subscribe to Our Channel
              </Button>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Card title="Calendar">
            <Box display="flex" justifyContent="center" id="test">
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
                    Have an event that the DORA Community might be interested in? <a href="mailto:dora-community-events@googlegroups.com?Subject=DORA+Community+Calendar+suggestion" target="_blank">Send us the details</a>.
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
    </Stack>
  );
};

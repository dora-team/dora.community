import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import doraDevCard from "../assets/doradevcard.png";
// import sodr2024thumb from "../assets/sodr-2024-thumb.png";
import googleCloudNext from "../assets/google-cloud-next.png"; // Import the new image
import { Button } from "./Button";
import { Card } from "./Card";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Hero } from "./Hero";
import { SiteBanner } from "./SiteBanner";

const handleDoraDevButton = () => {
  window.open("https://dora.dev", "_blank");
};

const handleYoutubeButton = () => {
  window.open("https://www.youtube.com/@dora-dev?sub_confirmation=1", "_blank");
};

// const handleSodrButton = () => {
//   window.open("https://dora.dev/dora-report-2024", "_blank");
// };

const handleGoogleCloudNextButton = () => {
    window.open("https://cloud.withgoogle.com/next/25/?utm_source=gamma&utm_medium=email&utm_campaign=FY25-Q2-global-EXP106-physicalevent-er-next25-mc&utm_content=dora-community-letter&utm_term=-", "_blank")
}

export const HomePage = () => {
  return (
    <Stack spacing={0}>
      <SiteBanner />

      <Grid container spacing={0} maxWidth={1600} margin="auto" padding="1rem">
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xl={4} md={6} xs={12}>
          <Card title="DORA.dev" imageLeft={doraDevCard} size="s">
            DORA is the largest and longest
            running research program of its kind, that seeks to understand the
            capabilities that drive software delivery and operations
            performance. <br /> <br /> DORA helps teams apply those
            capabilities, leading to better organizational performance.
            <br />
            <br />
            <Button onClick={handleDoraDevButton} variant="contained" centered>
              Explore DORA.dev
            </Button>
          </Card>
        </Grid>

{/* 2024 DORA Report
        <Grid item xl={4} md={6} xs={12}>
          <Card
            title="Accelerate State of DevOps Report"
            imageLeft={sodr2024thumb}
            size="s"
          >
            DORA's tenth annual report, based on insights from 39,000
            professionals, reveals AI's significant impact on software
            development. The report also explores platform engineering and
            highlights the importance of user-centricity and stable priorities
            for organizational success.
            <br /><br /><br />
            <Button onClick={handleSodrButton} variant="contained" centered>
              Read the Report
            </Button>
          </Card>
        </Grid>
 */}

        <Grid item xl={4} md={6} xs={12}>
          <Card
            title="Google Cloud Next"
            imageLeft={googleCloudNext}
            size="s"
          >
            Connect <em>in person</em> at Google Cloud Next, April 9-11 in Las Vegas!<br/><br/>
            Meet fellow community members, explore AI, and improve your cloud skills.<br/><br/>
            Join the <a href="https://cloud.withgoogle.com/next/25/session-library?session=MTUP210&utm_source=gamma&utm_medium=email&utm_campaign=FY25-Q2-global-EXP106-physicalevent-er-next25-mc&utm_content=dora-community-letter&utm_term=-" target="_blank">DORA Community meetup</a>, keynotes, and many technical sessions.
            <br /><br />
            <Button onClick={handleGoogleCloudNextButton} variant="contained" centered>
              Register Now
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
            <Button onClick={handleYoutubeButton} variant="contained" centered>
              Subscribe to Our Channel
            </Button>
          </Card>
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
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=America%2FNew_York&mode=AGENDA&src=ZTNmYmQ3NzY3ZDcxYWM2MDE3ZTJhYTZmOTBkYmRjZDNhYWNhZDg4MDkyNTllZGQ4NGEzNTgzZTVkZTMzYzViNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
                  style={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
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

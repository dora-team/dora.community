import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import doraDevCard from "../assets/doradevcard.png";
import tshirtCard from "../assets/dora-community-shirts.png";
// import sodr2024thumb from "../assets/sodr-2024-thumb.png"; // removed temporarily, restore after Feb 14
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

const handleSodrButton = () => {
  window.open("https://dora.dev/dora-report-2024", "_blank");
};

const handleTshirtButton = () => {
  window.open("https://dora.dev/merch/", "_blank");
};

export const HomePage = () => {
  return (
    <Stack spacing={0}>
      <SiteBanner />

      <Grid container spacing={2} maxWidth={1600} margin="auto" padding="1rem">
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

        <Grid item xl={4} md={6} xs={12}>
          <Card title="T-shirts" imageLeft={tshirtCard} size="s">
          Limited-edition DORA tees are here! Two designs (DORA & DORA Community), multiple colors, straight cut & fitted styles. Get yours before they disappear!
            <br />
            <br />
            <Button onClick={handleTshirtButton} variant="contained" centered>
              Browse t-shirts now
            </Button>
          </Card>
        </Grid>
{/*  removed temporarily, restore after Feb 14
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
            <br /><br />
            <Button onClick={handleSodrButton} variant="contained" centered>
              Read the Report
            </Button>
          </Card>
        </Grid>
 */}
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
            <li>Team Topologies</li>
            <li>Minimum Viable CD</li>
            <li>Documentation</li>
            <li>DORA & Space Metrics</li>
            <li>Scaling DORA</li>
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
                  // style="border:solid 1px #777"
                  style={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}

                  // frameborder="0"
                  // scrolling="no"
                ></iframe>
              </Box>
              {/* <iframe
                src="https://calendar.google.com/calendar/embed?src=e3fbd7767d71ac6017e2aa6f90dbdcd3aacad8809259edd84a3583e5de33c5b6%40group.calendar.google.com&ctz=America%2FNew_York"
                // style="border: 0"
                width="800"
                height="600"
                frameborder="0"
                // scrolling="no"
              ></iframe> */}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

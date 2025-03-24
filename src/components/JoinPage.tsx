import { Box, Grid } from "@mui/material";

import {
  Card,
  DoraGuideHighlight,
  Hero,
  SignUpButton,
  SiteBanner,
} from "./";

import {
  amandaLewisHeadshot,
  daveStanke,
  denaliLumma,
  dhruvAgarwal,
  lisaCrispin,
  nathenHarvey,
  saulWilliamson,
  steveFenton,
} from "../assets";

export const JoinPage = () => {
  return (
    <>
      <SiteBanner />
      <Box maxWidth="1600px" margin="auto" padding="1rem">
        <Hero />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Card title="Google Group Mailing List">
              <Box marginBottom="1rem" fontSize="1.5rem">
                Join the DORA Community of Practice Google Group Mailing list to:
              </Box>
              <li>Connect with members asynchronously</li>
              <li>Receive invitations for community events</li>
              <li>Stay up-to-date on community news </li>
              <Box marginTop="2rem" textAlign="center">
                <SignUpButton />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card title="Lean Coffee Discussions">
              <p>
                Community discussions use the{" "}
                <a href="https://leancoffee.org/">Lean Coffee Format</a>. The
                goal of these discussions is to provide opportunities for the
                community to learn, listen, and collaborate. All types of
                participation is welcome, including active listening.
              </p>
              <p>
                Most sessions start with a guest speaker who's presentation is
                recorded.{" "}
                <a href="https://www.youtube.com/@dora-dev">
                  Watch previous sessions.
                </a>{" "}
              </p>
              <p>
                Would you like to present at a community discussion? Please
                email{" "}
                <a href="emailto:dora-community-events@googlegroups.com">
                  dora-community-events@googlegroups.com
                </a>
              </p>
            </Card>
          </Grid>
        </Grid>
        <Card title="DORA Community Guides">
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
          >
          <Grid item xs={12} sm={6} md={3}>
            <DoraGuideHighlight
              title="Steve Fenton"
              altText="Steve Fenton"
              image={steveFenton}
              body="Steve Fenton is an Octonaut at Octopus Deploy and a five-
              time Microsoft MVP with more than two decades of experience in
              software delivery. He has written books on TypeScript (Apress,
              InfoQ), Octopus Deploy, and Web Operations. Steve has worked in
              the role of Software Engineer, SDET, Development Manager, and
              Director of Product and Data in a range of startups, SMEs, and
              enterprises."
              linkedIn="https://www.linkedin.com/in/stevefenton/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DoraGuideHighlight
              title="Denali Lumma"
              altText="Denali Lumma"
              image={denaliLumma}
              body="Denali Lumma is a technology executive with over 20 years
              experience in startup to public offering, small, midsize and
              global companies supporting teams responsible for customer-facing
              product development for B2C, B2B, healthcare and life sciences,
              and infrastructure teams responsible for technical platforms,
              security, privacy, compliance, corporate IT, quality,
              reliability, and availability. She has helped to build multiple
              unicorns as an early engineer at companies like Netflix, 23andMe,
              Okta, Salesforce, and Uber. Denali serves on the board for Savage
              Jazz Dance Company, distinguished by its disciplined dancers and
              instructors, and its dedication to the exploration of jazz music's
              range of expression. She is an investor in Steezy, making dance
              the next big global sport. Denali is Founder and CEO at Doubling,
              offering technical advisory services to portfolio companies at Y
              Combinator, Andreessen Horowitz, and other venture capital
              groups. Denali lives in Los Gatos, California with her husband and
              two children. "
              linkedIn="https://www.linkedin.com/in/denali-lumma/"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DoraGuideHighlight
              title="Betsalel (Saul) Williamson"
              altText="Betsalel (Saul) Williamson"
              image={saulWilliamson}
              body="Betsalel (Saul) Williamson is an Electrical Engineer and has
              a broad range of experiences in community development and DevOps.
              He is the owner of Williamson Computing Services, LLC and helps
              companies implement best practices in DevOps and new product
              development. He is passionate about helping his peers and projects
              succeed. Saul has served on the boards of Pittsburgh chapters of
              PDMA and IEEE where he developed workshops, events, and conducted
              market research to help students and professionals engage with
              their local communities. Saul lives with sensory sensitivities and
              is a disability and LGBT+ advocate. He promotes diversity,
              equity, and inclusion practices that supply a healthy environment
              for everyone to learn and grow! Outside of work, Saul enjoys
              working on software hobby projects, traveling, and playing
              classical piano.  He lives in Palm Springs, California."
              linkedIn="https://www.linkedin.com/in/betsalel/"
            />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={3}>
              <DoraGuideHighlight
                title="Lisa Crispin"
                altText="Lisa Crispin"
                image={lisaCrispin}
                body={
                  <Box>
                    Lisa Crispin is the co-author, with Janet Gregory, of three
                    books: Agile Testing Condensed: A Brief Introduction, More
                    Agile Testing: Learning Journeys for the Whole Team, Agile
                    Testing: A Practical Guide for Testers and Agile Teams; the
                    LiveLessons Agile Testing Essentials video course. She and
                    Janet co-founded the Agile Testing Fellowship, which offers
                    “Holistic Testing: Strategies for agile teams” live training
                    course both remotely and in-person. Lisa was voted by her
                    peers as the Most InfluentialAgile Testing Professional
                    Person at Agile Testing Days in 2012. She is co-founder with
                    Janet of Agile Testing Fellowship, Inc. and is happily
                    available for training and consulting. Please visit{" "}
                    <a href="https://www.lisacrispin.com" target="_blank">
                      www.lisacrispin.com
                    </a>
                    ,{" "}
                    <a href="https://www.agiletestingfellow.com" target="_blank">
                      www.agiletestingfellow.com
                    </a>
                    , and{" "}
                    <a href="https://www.agiletester.ca" target="_blank">
                      www.agiletester.ca
                    </a>{" "}
                    for more. Contact Lisa on Twitter, and LinkedIn.
                  </Box>
                }
                linkedIn="https://www.linkedin.com/in/lisa-crispin-88420a/"
                twitter="https://twitter.com/lisacrispin"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DoraGuideHighlight
                title="Dhruv Agarwal"
                altText="Dhruv Agarwal"
                image={dhruvAgarwal}
                body={
                  <Box>
                    <p>
                      Dhruv Agarwal thrives on bringing structure to chaos,
                      building sustainable systems, and scaling high-performing
                      teams. A builder at heart, he has spent the last decade
                      crafting software, leading teams, and driving efficiency in
                      engineering workflows.
                    </p>
                    <p>
                      Beyond technology, Dhruv is a passionate storyteller, hosting
                      podcasts like The Change Story and The Tech Voyager, where he
                      explores innovation, leadership, and transformation.
                    </p>
                    <p>
                      As the CEO of <a href="https://www.middlewarehq.com/" target="_blank">MiddlewareHQ</a>,
                      he is on a mission to help engineering teams streamline
                      operations, improve efficiency, and build resilient
                      systems for the future."
                    </p>
                  </Box>
                }
                linkedIn="https://www.linkedin.com/in/dhruvagga/"
              />
            </Grid>
          </Grid>
        </Card>


        <Card title="DORA Advocacy Team">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <DoraGuideHighlight
                title="Nathen Harvey"
                altText="Nathen Harvey"
                image={nathenHarvey}
                body={
                  <Box>
                    Nathen Harvey leads the DORA team at Google Cloud, where he
                    guides technology-driven teams and organizations on
                    optimizing their software delivery and operational
                    performance. Nathen leverages DORA's industry-leading
                    research to help teams measurably improve developer
                    experience and software delivery speed, stability, and
                    efficiency. He is a co-author of several influential DORA
                    reports and a contributor and editor of the O'Reilly book,
                    "97 Things Every Cloud Engineer Should Know" (2020).
                  </Box>
                }
                linkedIn="https://www.linkedin.com/in/nathen/"
                twitter="https://twitter.com/nathenharvey"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DoraGuideHighlight
                title="Dave Stanke"
                altText="Dave Stanke"
                image={daveStanke}
                body="Dave Stanke is a Developer Advocate for DORA, a program
                run by Google Cloud. He specializes in DevOps, Site Reliability
                Engineering (SRE), and other flavors of technical relationship
                therapy. He loves chatting with practitioners: listening to
                stories, telling stories, sharing a healthy cry. Prior to
                Google, he was the CTO of OvationTix, a SaaS startup in the
                performing arts industry, where he specialized in feeding memory
                to Java servers. He chose on purpose to live in New Jersey,
                where he enjoys cooking, indie rock, and fatherhood."
                linkedIn="https://www.linkedin.com/in/davidstanke/"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DoraGuideHighlight
                title="Amanda Lewis"
                altText="Amanda Lewis"
                image={amandaLewisHeadshot}
                body="Amanda Lewis is the DORA.community Development Lead and a
                developer advocate with Google Cloud, focused on DORA, DevOps,
                and Developer Productivity. Amanda has spent her career building
                connections across leadership, developers, product managers,
                project management, and operators through working on teams that
                developed e-commerce platforms, content management systems,
                observability tools, and supported developers. These connections
                and conversations lead to happy customers and better outcomes
                for the business. She brings her years of experience and empathy
                to the work that she does helping teams understand and implement
                DevOps and reliability practices."
                linkedIn="https://www.linkedin.com/in/lewisamanda/"
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

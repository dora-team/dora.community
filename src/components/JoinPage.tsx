import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  EmailOutlined as EmailIcon,
  SubscriptionsOutlined as YouTubeIcon,
  ForumOutlined as ForumIcon,
  CheckCircleOutline as CheckIcon,
} from "@mui/icons-material";
import { useInPageLinking } from "../hooks/useInPageLinking";

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
  lisaCrispin,
  nathenHarvey,
  saulWilliamson,
  steveFenton,
} from "../assets";

export const JoinPage = () => {
  useInPageLinking();

  return (
    <>
      <SiteBanner />
      <Box maxWidth="1600px" margin="auto" padding={{ xs: "1rem", md: "1.5rem" }}>
        <Hero />

        {/* Section: Community Channels & Discussions */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Card title="Google Group Mailing List">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "#202124",
                      lineHeight: 1.4,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    Join the DORA Community of Practice Google Group Mailing list to:
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      p: 0,
                      m: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      color: "#3c4043",
                      fontSize: "1rem",
                    }}
                  >
                    <Box component="li" sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                      <CheckIcon sx={{ color: "#19857b", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                      <span>Connect with members asynchronously</span>
                    </Box>
                    <Box component="li" sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                      <CheckIcon sx={{ color: "#19857b", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                      <span>Receive invitations for community events</span>
                    </Box>
                    <Box component="li" sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                      <CheckIcon sx={{ color: "#19857b", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                      <span>Stay up-to-date on community news</span>
                    </Box>
                  </Box>
                </Box>

                <Box mt={3} pt={2} textAlign="center" borderTop="1px solid #f0f0f0">
                  <SignUpButton />
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Card title="Lean Coffee Discussions">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Box sx={{ color: "#3c4043", lineHeight: 1.6 }}>
                  <Typography variant="body1" sx={{ mb: 2, fontSize: "1rem", lineHeight: 1.6 }}>
                    Community discussions use the{" "}
                    <a
                      href="https://leancoffee.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1a73e8", fontWeight: 600, textDecoration: "none" }}
                    >
                      Lean Coffee Format
                    </a>
                    . The goal of these discussions is to provide opportunities for the
                    community to learn, listen, and collaborate. All types of
                    participation are welcome, including active listening.
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2, fontSize: "1rem", lineHeight: 1.6 }}>
                    Most sessions start with a guest speaker whose presentation is
                    recorded.{" "}
                    <a
                      href="https://www.youtube.com/@dora-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1a73e8", fontWeight: 600, textDecoration: "none" }}
                    >
                      Watch previous sessions.
                    </a>
                  </Typography>

                  <Typography variant="body1" sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
                    Would you like to present at a community discussion? Please
                    email{" "}
                    <a
                      href="mailto:dora-community-events@googlegroups.com"
                      style={{ color: "#1a73e8", fontWeight: 600, textDecoration: "none" }}
                    >
                      dora-community-events@googlegroups.com
                    </a>
                  </Typography>
                </Box>

                <Box
                  mt={3}
                  pt={2}
                  borderTop="1px solid #f0f0f0"
                  display="flex"
                  flexWrap="wrap"
                  gap={1.5}
                  justifyContent="center"
                >
                  <Box
                    component="a"
                    href="https://www.youtube.com/@dora-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 2,
                      py: 0.75,
                      borderRadius: "6px",
                      backgroundColor: "#fdf2f2",
                      color: "#c5221f",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      border: "1px solid #fce8e6",
                      transition: "all 0.2s ease",
                      "&:hover": { backgroundColor: "#fce8e6" },
                    }}
                  >
                    <YouTubeIcon fontSize="small" />
                    <span>Watch Sessions on YouTube</span>
                  </Box>

                  <Box
                    component="a"
                    href="mailto:dora-community-events@googlegroups.com"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 2,
                      py: 0.75,
                      borderRadius: "6px",
                      backgroundColor: "#e8f0fe",
                      color: "#1967d2",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      border: "1px solid #d2e3fc",
                      transition: "all 0.2s ease",
                      "&:hover": { backgroundColor: "#d2e3fc" },
                    }}
                  >
                    <EmailIcon fontSize="small" />
                    <span>Propose a Presentation</span>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Section: DORA Community Guides & Leads */}
        <Box id="dora-community-guides" sx={{ mt: 3 }}>
          <span id="dora-advocacy-team" />
          <Card title="DORA Community Guides">
            <Box p={{ xs: "1rem", md: "1.5rem" }}>
              <Box
                mb={4}
                sx={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  p: { xs: 2, md: 2.5 },
                  border: "1px solid #e9ecef",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <ForumIcon sx={{ color: "#556cd6", fontSize: 36, display: { xs: "none", sm: "block" } }} />
                <Typography variant="body1" sx={{ color: "#374151", fontSize: "1.05rem", lineHeight: 1.6 }}>
                  The DORA Community brings together software practitioners, researchers, and leaders.
                  Our <strong>DORA Community Leads</strong> and <strong>DORA Community Guides</strong> work
                  together to guide discussions, host events, and share insights to help organizations improve software delivery
                  and operational performance.
                </Typography>
              </Box>

              <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
                  <DoraGuideHighlight
                    title="Amanda Lewis"
                    altText="Amanda Lewis"
                    role="DORA Community Lead"
                    image={amandaLewisHeadshot}
                    body="Amanda Lewis is a Senior Developer Relations Engineer on Google’s Builder Relations team, championing engineering culture, developer productivity, and pragmatic AI adoption. Her tech path began coding BASIC on a TRS-80 at age eight, paired with an early foundation in hospitality that honed her emphasis on empathy, communication, and human-centered leadership. A co-author of the DORA AI Capabilities Model Report and co-founder of the DORA Community of Practice, Amanda brings two decades of cross-platform software experience to her current focus on agentic workflows and eliminating developer toil."
                    linkedIn="https://www.linkedin.com/in/lewisamanda/"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
                  <DoraGuideHighlight
                    title="Nathen Harvey"
                    altText="Nathen Harvey"
                    role="DORA Community Lead"
                    image={nathenHarvey}
                    body={
                      <Box>
                        Nathen Harvey is a Principal Technologist on the Developer 
                        Experience team at Amazon Web Services (AWS).
                        <br /><br />
                        He focuses on software delivery performance, platform 
                        engineering, and AI enablement. Nathen has deep expertise
                        in shaping developer ecosystems and was the lead author of 
                        multiple DORA reports.
                      </Box>
                    }
                    linkedIn="https://www.linkedin.com/in/nathen/"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
                  <DoraGuideHighlight
                    title="Dave Stanke"
                    altText="Dave Stanke"
                    role="DORA Community Lead"
                    image={daveStanke}
                    body="Dave Stanke is a Developer Advocate for DORA, a program run by Google Cloud. He specializes in DevOps, Site Reliability Engineering (SRE), and other flavors of technical relationship therapy. He loves chatting with practitioners: listening to stories, telling stories, sharing a healthy cry. Prior to Google, he was the CTO of OvationTix, a SaaS startup in the performing arts industry, where he specialized in feeding memory to Java servers. He chose on purpose to live in New Jersey, where he enjoys cooking, indie rock, and fatherhood."
                    linkedIn="https://www.linkedin.com/in/davidstanke/"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
                  <DoraGuideHighlight
                    title="Steve Fenton"
                    altText="Steve Fenton"
                    role="DORA Community Guide"
                    image={steveFenton}
                    body="Steve Fenton is an Octonaut at Octopus Deploy and a five-time Microsoft MVP with more than two decades of experience in software delivery. He has written books on TypeScript (Apress, InfoQ), Octopus Deploy, and Web Operations. Steve has worked in the role of Software Engineer, SDET, Development Manager, and Director of Product and Data in a range of startups, SMEs, and enterprises."
                    linkedIn="https://www.linkedin.com/in/stevefenton/"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
                  <DoraGuideHighlight
                    title="Denali Lumma"
                    altText="Denali Lumma"
                    role="DORA Community Guide"
                    image={denaliLumma}
                    body="Denali Lumma is a technology executive with over 20 years experience in startup to public offering, small, midsize and global companies supporting teams responsible for customer-facing product development for B2C, B2B, healthcare and life sciences, and infrastructure teams responsible for technical platforms, security, privacy, compliance, corporate IT, quality, reliability, and availability. She has helped to build multiple unicorns as an early engineer at companies like Netflix, 23andMe, Okta, Salesforce, and Uber. Denali serves on the board for Savage Jazz Dance Company, distinguished by its disciplined dancers and instructors, and its dedication to the exploration of jazz music's range of expression. She is an investor in Steezy, making dance the next big global sport. Denali is Founder and CEO at Doubling, offering technical advisory services to portfolio companies at Y Combinator, Andreessen Horowitz, and other venture capital groups. Denali lives in Los Gatos, California with her husband and two children."
                    linkedIn="https://www.linkedin.com/in/denali-lumma/"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
                  <DoraGuideHighlight
                    title="Betsalel (Saul) Williamson"
                    altText="Betsalel (Saul) Williamson"
                    role="DORA Community Guide"
                    image={saulWilliamson}
                    body="Betsalel (Saul) Williamson brings a broad range of experience in DevOps and community development as a Technology and Business Consultant. He is the owner of Williamson Consulting Services and helps companies implement best practices in DevOps and new product development. He is passionate about helping his peers and projects succeed. Saul is committed to community leadership, applying his expertise in market research and event development to engage local communities. This includes his past service on the boards of Pittsburgh's PDMA and IEEE chapters, as well as his current volunteer work for a local LGBT+ non-profit. Saul lives with sensory sensitivities and is a disability and LGBT+ advocate. He promotes diversity, equity, and inclusion practices that supply a healthy environment for everyone to learn and grow! Outside of work, Saul enjoys working on software hobby projects, traveling, and playing classical piano. He lives in Palm Springs, California."
                    linkedIn="https://www.linkedin.com/in/betsalel/"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: "flex" }}>
                  <DoraGuideHighlight
                    title="Lisa Crispin"
                    altText="Lisa Crispin"
                    role="DORA Community Guide"
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
                        peers as the Most Influential Agile Testing Professional
                        Person at Agile Testing Days in 2012. She is co-founder with
                        Janet of Agile Testing Fellowship, Inc. and is happily
                        available for training and consulting. Please visit{" "}
                        <a
                          href="https://www.lisacrispin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#1a73e8", textDecoration: "none" }}
                        >
                          www.lisacrispin.com
                        </a>
                        ,{" "}
                        <a
                          href="https://www.agiletestingfellow.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#1a73e8", textDecoration: "none" }}
                        >
                          www.agiletestingfellow.com
                        </a>
                        , and{" "}
                        <a
                          href="https://www.agiletester.ca"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#1a73e8", textDecoration: "none" }}
                        >
                          www.agiletester.ca
                        </a>{" "}
                        for more. Contact Lisa on Twitter, and LinkedIn.
                      </Box>
                    }
                    linkedIn="https://www.linkedin.com/in/lisa-crispin-88420a/"
                    twitter="https://twitter.com/lisacrispin"
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>

        {/* Section: Previous DORA Community Guides */}
        <Box id="previous-dora-community-guides" sx={{ mt: 3 }}>
          <Card title="Previous DORA Community Guides">
            <Box p={{ xs: "1rem", md: "1.5rem" }}>
              <Typography variant="body2" sx={{ color: "#5f6368", mb: 2.5, fontSize: "0.95rem" }}>
                We thank our previous DORA Community Guides for their volunteer leadership, time, and dedication in supporting this community.
              </Typography>

              <TableContainer
                component={Paper}
                elevation={0}
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Table aria-label="Previous DORA Community Guides">
                  <TableHead sx={{ backgroundColor: "#f8f9fa" }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700, color: "#202124", py: 1.5, fontSize: "0.95rem" }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700, color: "#202124", py: 1.5, fontSize: "0.95rem" }}>
                        Dates of service
                      </TableCell>
                      <TableCell sx={{ fontWeight: 700, color: "#202124", py: 1.5, fontSize: "0.95rem" }}>
                        Social profile
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell sx={{ fontWeight: 600, color: "#202124", fontSize: "0.95rem" }}>
                        Dhruv Agarwal
                      </TableCell>
                      <TableCell sx={{ color: "#5f6368", fontSize: "0.95rem" }}>
                        March 18, 2025 - February 23, 2026
                      </TableCell>
                      <TableCell>
                        <a
                          href="https://www.linkedin.com/in/dhruvagga/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#0a66c2",
                            textDecoration: "none",
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          LinkedIn
                        </a>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

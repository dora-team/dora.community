import { Card } from "./Card";
import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import denaliLumma from "../assets/DenaliLumma.jpeg";
import { SODRHero } from "./SODRHero";

export const DenaliLummaPage = () => {
  return (
    <>
      <SODRHero />
      <Hero />
      <Box maxWidth="1600px" margin="auto">
        <h2>Guide to the DORA Community</h2>

        <p>
          The DORA Community was formally launched with the release of the 2022
          Accelerate State of DevOps Report, almost a year ago. The community
          includes practitioners, leaders, and researchers interested in
          learning more about and sharing their experiences with driving high
          performance in technology-driven organizations.
        </p>
        <p>
          The DORA Community includes four Community Guides who help create a 
          welcoming, inclusive environment for everyone while also shaping the 
          future of the community.  Denali Lumma, DORA Community Guide, will 
          share her experience with the DORA Community including insights into 
          the value of community and how you can get involved.
        </p>
      </Box>

      <Box maxWidth="1600px" margin="auto">
        <Card title="Denali Lumma, CEO, Doubling and DORA Community Guide">
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridAutoRows="1fr"
            gap="1em"
            p="0.5rem"
          >
            <Box textAlign="center">
              <img src={denaliLumma} width="40%" />
            </Box>

            <Box>
              <p>
                Denali Lumma is a technology executive with over 20 years
                experience in startup to public offering, small, midsize and
                global companies supporting teams responsible for
                customer-facing product development for B2C, B2B, healthcare and
                life sciences, and infrastructure teams responsible for
                technical platforms, security, privacy, compliance, corporate
                IT, quality, reliability, and availability. She has helped to
                build multiple unicorns as an early engineer at companies like
                Netflix, 23andMe, Okta, Salesforce, and Uber. Denali serves on
                the board for Savage Jazz Dance Company, distinguished by its
                disciplined dancers and instructors, and its dedication to the
                exploration of jazz music’s range of expression. She is an
                investor in Steezy, making dance the next big global sport.
                Denali is Founder and CEO at{" "}
                <a href="https://www.doubling.io/">Doubling</a>, offering
                technical advisory services to portfolio companies at Y
                Combinator, Andreessen Horowitz, and other venture capital
                groups. Denali lives in Los Gatos, California with her husband
                and two children.
              </p>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

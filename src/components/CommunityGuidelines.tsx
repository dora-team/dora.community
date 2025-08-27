import { Card } from "./Card";
import { Box } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { Hero } from "./Hero";
import { SiteBanner } from "./SiteBanner";

export const CommunityGuidelinesPage = () => {
  return (
    <>
      <SiteBanner />

      <Box maxWidth="1600px" margin="auto" padding="1rem">
        <Hero />
        <Card title="DORA Community Guidelines">
          <p>
            Welcome to the DORA Community! Our goal is to foster a vibrant,
            inclusive, and valuable space for practitioners, researchers, and
            leaders to explore and advance the principles of high-performing
            software delivery. These guidelines are here to help us create a
            positive and productive environment for everyone.
          </p>

          <h3>Engaging on the mailing list</h3>

          <p>
            The mailing list is the heart of our community discussion. It's the
            place to ask questions, share experiences, and collaborate with your peers.
          </p>

          <p>
            We encourage you to post about:
          </p>

          <ul>
            <li>
              <strong>Questions and challenges</strong>: Asking for advice on
              implementing DORA's findings, overcoming organizational hurdles,
              or understanding specific practices.
            </li>
            <li>
              <strong>Sharing experiences</strong>: Sharing your "aha!" moments,
              case studies, or learnings from your own DORA journey. Tell us
              what worked, what didn't, and what you discovered along the way.
            </li>
            <li>
              <strong>Discussing research</strong>: Sparking a conversation
              about the latest DORA findings, an academic paper, or other
              relevant industry research.
            </li>
            <li>
              <strong>Seeking feedback</strong>: Requesting community feedback
              on an open-source tool you're building, a conference talk
              proposal, or a new idea related to DORA principles.
            </li>
            <li>
              <strong>Sharing interesting content</strong>: Found a great blog
              post, article, or talk? Share it with a summary of why you found
              it valuable and a question to prompt discussion. Please avoid
              "drive-by" link drops.
            </li>
          </ul>

          <p>
            This is not a forum for unsolicited product promotions or sales
            pitches. If you share a tool or framework that has helped you, and
            you have a professional connection to it (for example, you are the
            owner or work for a company with a commercial offering of the tool
            or framework), please add a disclaimer clarifying your relationship
            to the product.
          </p>

          <h3>Community meetings</h3>

          <p>
            The open discussion portion of our community meetings are generally
            held following the <a href="https://www.chathamhouse.org/about-us/chatham-house-rule" target="_blank">chatham
            house rule</a>: participants are free to use the information
            received, but neither the identity nor the affiliation of the
            speaker(s), nor that of any other participant, may be revealed.
          </p>

          <p>
            Our meetings are a safe space for open discussion. To maintain this
            environment and ensure everyone's privacy, we ask that you do not
            use AI tools that transcribe or record the conversation. This
            includes services like Otter.ai, Fireflies.ai, and other similar
            programs. The presentation portion of community meetings are usually
            recorded and shared on the <a href="https://youtube.com/@dora-dev" target="_blank">DORA
            YouTube channel</a>.
          </p>

          <h3>Harassment-free experiences</h3>

          <p>
            Fostering psychological safety is important for members to feel they
            are in a safe space where they can participate with people who share
            similar interests. We, as a community, pledge to make participation
            in our community a harassment-free experience for everyone. Please
            read and adhere to the following guidelines:
          </p>

          <ul>
            <li>Use welcoming and inclusive language</li>
            <li>Be respectful of differing viewpoints and experiences</li>
            <li>Gracefully accept constructive criticism</li>
            <li>Focus on what is best for the community</li>
            <li>Show empathy towards other community members.</li>
          </ul>

          <p>
            Examples of unacceptable behavior by participants include:
          </p>

          <ul>
            <li>
              The use of sexualized language or imagery and unwelcome sexual
              attention or advances
            </li>
            <li>
              Trolling, insulting/derogatory comments, and personal or political
              attacks
            </li>
            <li>
              Public or private harassment
            </li>
            <li>
              Publishing others' private information, such as a physical or
              electronic address, without explicit permission
            </li>
            <li>
              Other conduct which could reasonably be considered inappropriate
              in a professional setting
            </li>
          </ul>

          <p>
            Our community thrives on open sharing, respectful debate, and a
            commitment to learning from one another. We are a community of
            practice, not a marketplace. To ensure conversations remain
            high-quality and on-topic, please use the following guidelines when
            sharing.
          </p>

          <h3>Enforcement of these guidelines</h3>

          <p>
            We strive to create a community where everyone feels welcome and can
            participate in a harassment-free environment. When a community
            member violates these guidelines, the <a href="/join/#dora-advocacy-team">DORA
            Advocacy Team</a> will take
            action. These actions are at the sole discretion of the DORA
            Advocacy Team and may include:
          </p>

          <ul>
            <li>
              A private warning to the individual.
            </li>
            <li>
              Temporary or permanent removal from the DORA Community Google
              Group (mailing list).
            </li>
            <li>
              Being barred from attending community meetings.
            </li>
          </ul>

          <p>
            If you experience or witness a violation of these guidelines,
            please <a href="mailto:dora-advocacy@google.com" target="_blank">contact
            the DORA Advocacy Team</a>.
          </p>

          <h3>Sharing with the community: Mailing list and community calendar</h3>

          <p>
            We have two primary channels for sharing information: the <a href="https://groups.google.com/g/dora-community/about" target="_blank">DORA
            Community Google Group</a> (<a href="https://groups.google.com/g/dora-community/about" target="_blank">our
            mailing list</a>) and the <a href="/#calendar">DORA Community
            Calendar</a>. Each has a different purpose.
          </p>

          <ul>
            <li>
              The <strong>mailing list</strong> is for conversation and
              discussion.
            </li>
            <li>
              The <strong>calendar</strong> is for events and announcements.
            </li>
          </ul>

          <p>
            A good rule of thumb: If your post is a date-sensitive announcement
            that doesn't invite a two-way conversation, it probably belongs on
            the calendar.
          </p>

          <h4>Adding to the community calendar</h4>

          <p>
            We are a global network and welcome participation, events, and
            contributions from all time zones. The community calendar is our
            central hub for DORA-related events If you are hosting or know of an
            event that would benefit the community,
            please <a href="mailto:dora-community-events@googlegroups.com?Subject=DORA+Community+Calendar+suggestion" target="_blank">send
            us the details</a>!
          </p>

          <p>
            The calendar is the perfect place for:
          </p>

          <ul>
            <li>
              <strong>Community-focused webinars</strong>: Online talks and
              presentations that focus on education and sharing practical
              knowledge about DORA, DevOps, and software delivery.
            </li>
            <li>
              <strong>Meetups and user groups</strong>: Announcements for local
              or virtual meetups for practitioners to connect and learn from
              each other.
            </li>
            <li>
              <strong>Conference announcements</strong>: Sharing registration
              information for relevant conferences and industry events.
            </li>
            <li>
              <strong>Workshops and training</strong>: Educational workshops or
              training sessions (both free and paid) that help practitioners
              improve their skills.
            </li>
            <li>
              <strong>Community live streams</strong>: "Ask Me Anything" (AMA)
              sessions, live-coding streams, or office hours with practitioners
              and experts.
            </li>
          </ul>

          <p>
            Thank you for being a part of the DORA Community, your presence and
            contributions are celebrated.
          </p>
        </Card>
      </Box>
    </>
  );
};

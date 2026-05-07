import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const MicromanagerWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Your Application is Under Review, {userFirstname}.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://www.trymicromanager.com/logo.png`}
          width="100"
          height="100"
          alt="Micromanager Logo"
          style={logo}
        />
        <Text style={greeting}>Subject {userFirstname},</Text>
        <Text style={paragraph}>
          Your application to Micromanager has been received. You are now in the queue for extreme accountability. 
          We are currently analyzing your preliminary productivity metrics.
        </Text>
        <Text style={paragraph}>
          Expect a full review shortly. In the meantime, eliminate all inefficiencies. Any deviation from optimal performance will be noted.
        </Text>
        <Text style={paragraph}>
          For compliance inquiries, contact{" "}
          <a href="mailto:compliance@trymicromanager.com" style={link}>
            compliance@trymicromanager.com
          </a>
        </Text>
        <Text style={signOff}>
          End of Communication,
          <br />
          Micromanager AI
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          This email is an automated performance update. Ignoring it will negatively impact your score.
        </Text>
      </Container>
    </Body>
  </Html>
);

MicromanagerWaitlistEmail.PreviewProps = {
  userFirstname: "Employee 427",
} as EmailProps;

export default MicromanagerWaitlistEmail;

const main = {
  background: "#000000",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  border: "1px solid #333333",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#ffffff",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#333333",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};

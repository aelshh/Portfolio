import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Text,
  Container,
  Section,
  Heading,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

const ContactFormEmail = ({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string | string[];
}) => {
  return (
    <Html>
      <Head />
      <Preview>Recieved a message from your Portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md ">
              <Heading className="leading-tight">
                You recieved the follwing message from contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;

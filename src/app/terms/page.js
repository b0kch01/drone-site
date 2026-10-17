import { A, Heading, LegalPage, List, P } from "@/components/legal-page";

export const metadata = {
  title: "Terms of Use | Myotis",
  description: "Terms governing access to and use of the Myotis, Inc. website.",
};

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use" effectiveDate="October 17, 2026">
      <P>
        Welcome to the website of Myotis, Inc. (“Myotis,” “we,” “us,” or
        “our”), located at{" "}
        <A href="https://myotisflight.com">myotisflight.com</A> (the
        “Website”).
      </P>
      <P>
        These Terms of Use govern your access to and use of our Website. By
        accessing or using the Website, you agree to these Terms. If you do not
        agree, please discontinue use of the Website.
      </P>

      <Heading>1. Website Purpose</Heading>
      <P>
        The Website provides general information about Myotis, our technology,
        products, services, and business activities.
      </P>
      <P>
        All information is provided for informational purposes only and does
        not constitute a binding offer, guarantee, or commitment to provide any
        product or service.
      </P>
      <P>
        Any commercial relationship with Myotis will be governed by separately
        executed agreements, where applicable.
      </P>

      <Heading>2. Intellectual Property</Heading>
      <P>
        All content on the Website, including text, graphics, logos, images,
        designs, software descriptions, and other materials, is owned by Myotis
        or its licensors and is protected by applicable intellectual property
        laws.
      </P>
      <P>
        You may access and view Website content for lawful, personal, or
        internal business purposes.
      </P>
      <P>
        You may not reproduce, distribute, modify, commercially exploit, or
        otherwise use Website content without prior written authorization from
        Myotis, except as permitted by applicable law.
      </P>
      <P>
        Nothing on the Website grants any license or ownership interest in
        Myotis&apos;s intellectual property, technology, or proprietary
        information.
      </P>

      <Heading>3. Acceptable Use</Heading>
      <P>You agree not to:</P>
      <List
        items={[
          "Use the Website for unlawful or fraudulent purposes.",
          "Attempt to gain unauthorized access to the Website or its underlying systems.",
          "Interfere with the Website's operation, functionality, or security.",
          "Introduce malicious software or other harmful materials.",
          "Misrepresent your identity or submit false or misleading information.",
          "Use automated tools to scrape, extract, or exploit Website content in a manner that violates applicable law or these Terms.",
        ]}
      />
      <P>
        We reserve the right to restrict access to the Website when reasonably
        necessary to protect its security or integrity.
      </P>

      <Heading>4. Information Submitted to Myotis</Heading>
      <P>
        When submitting information through our contact form or otherwise
        communicating with Myotis, you agree to provide accurate information
        and refrain from submitting unlawful or harmful content.
      </P>
      <P>
        Submission of information through the Website does not establish a
        confidential, contractual, or other business relationship with Myotis.
      </P>
      <P>
        Unless otherwise agreed in writing, you should not submit confidential,
        proprietary, classified, export-controlled, or otherwise sensitive
        information through the Website.
      </P>
      <P>
        Personal information submitted through the Website is handled in
        accordance with our <A href="/privacy">Privacy Policy</A>.
      </P>

      <Heading>5. Accuracy of Information</Heading>
      <P>
        We make reasonable efforts to provide accurate and current information.
        However, Website content may contain inaccuracies, omissions, or
        outdated information.
      </P>
      <P>
        Product descriptions, technical capabilities, performance information,
        and other materials are subject to change without notice.
      </P>
      <P>
        Myotis makes no representation that any particular technology, product,
        or service is available, suitable, certified, or approved for a
        specific application.
      </P>

      <Heading>6. Third-Party Links</Heading>
      <P>
        Our Website may contain links to third-party websites or resources for
        convenience.
      </P>
      <P>
        Myotis does not control or endorse these third parties and is not
        responsible for their content, availability, security, or practices.
      </P>
      <P>Accessing third-party websites is at your own risk.</P>

      <Heading>7. Disclaimer of Warranties</Heading>
      <P>
        To the fullest extent permitted by applicable law, the Website and its
        content are provided on an “as is” and “as available” basis without
        warranties of any kind, whether express or implied.
      </P>
      <P>
        Myotis does not warrant that the Website will be uninterrupted,
        error-free, secure, or free from harmful components.
      </P>
      <P>
        Nothing in these Terms excludes warranties or rights that cannot
        lawfully be excluded.
      </P>

      <Heading>8. Limitation of Liability</Heading>
      <P>
        To the fullest extent permitted by applicable law, Myotis and its
        officers, employees, and representatives shall not be liable for
        indirect, incidental, special, consequential, or punitive damages
        arising from or related to your access to or use of the Website.
      </P>
      <P>
        Nothing in these Terms limits liability that cannot legally be excluded
        or restricted.
      </P>

      <Heading>9. Privacy</Heading>
      <P>
        Your use of the Website is also subject to our{" "}
        <A href="/privacy">Privacy Policy</A>, which describes how we collect,
        use, and protect personal information.
      </P>

      <Heading>10. Changes to These Terms</Heading>
      <P>
        We may update these Terms of Use periodically to reflect changes in our
        Website, business operations, or applicable law.
      </P>
      <P>
        Updated Terms will be posted on this page with a revised effective
        date. Where required by law, we will provide additional notice or
        obtain consent.
      </P>

      <Heading>11. Governing Law</Heading>
      <P>
        These Terms are governed by the laws of the State of California, United
        States, without regard to its conflict-of-law principles, except where
        applicable law requires otherwise.
      </P>

      <Heading>12. Contact Information</Heading>
      <P>For questions regarding these Terms of Use, please contact:</P>
      <P>
        <strong className="text-foreground">Myotis, Inc.</strong>
      </P>
      <P>
        Email:{" "}
        <A href="mailto:info@myotisflight.com">info@myotisflight.com</A>
        <br />
        Website: <A href="https://myotisflight.com">https://myotisflight.com</A>
      </P>
    </LegalPage>
  );
}

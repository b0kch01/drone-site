import { A, Heading, LegalPage, List, P, Subheading } from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy | Myotis",
  description: "How Myotis, Inc. collects, uses, and protects information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="October 17, 2026">
      <P>
        Myotis, Inc. (“Myotis,” “we,” “us,” or “our”) respects your privacy
        and is committed to protecting personal information collected
        through our website,{" "}
        <A href="https://myotisflight.com">myotisflight.com</A> (the
        “Website”).
      </P>
      <P>
        This Privacy Policy explains how we collect, use, disclose, and
        protect information when you visit our Website or communicate with
        us.
      </P>

      <Heading>1. Information We Collect</Heading>
      <P>We may collect the following categories of information:</P>
      <Subheading>Information You Provide</Subheading>
      <P>
        When you submit a contact form or otherwise communicate with us, we
        may collect your name, email address, company or organization, phone
        number, and any information included in your message.
      </P>
      <Subheading>Automatically Collected Information</Subheading>
      <P>
        When you visit our Website, our hosting and technical service
        providers may automatically collect information such as your IP
        address, browser type, device information, referring website, and
        website access logs.
      </P>
      <P>
        We may also introduce website analytics technologies in the future
        to better understand visitor interactions and improve our Website.
      </P>

      <Heading>2. How We Use Information</Heading>
      <P>We may use collected information to:</P>
      <List
        items={[
          "Respond to inquiries and communications.",
          "Evaluate potential business relationships, partnerships, and customer opportunities.",
          "Provide information about our products and services.",
          "Maintain, secure, and improve our Website.",
          "Analyze website performance and visitor engagement, if analytics services are enabled.",
          "Comply with applicable legal requirements.",
        ]}
      />
      <P>We do not sell personal information collected through our Website.</P>

      <Heading>3. Information Sharing</Heading>
      <P>
        We may share information with trusted third-party service providers
        that support our operations, including website hosting, contact form
        processing, business communications, security, and website
        analytics, where applicable.
      </P>
      <P>
        We may also disclose information when required by law, to protect
        our legal rights, or in connection with a corporate transaction.
      </P>
      <P>
        We do not share personal information with third parties for their
        independent advertising purposes.
      </P>

      <Heading>4. Cookies and Website Analytics</Heading>
      <P>
        Our Website may use cookies and similar technologies to support
        website functionality, security, performance, and analytics.
      </P>
      <P>
        We may use third-party analytics services, including Google
        Analytics, in the future to understand how visitors interact with
        our Website. Such services may collect information about website
        visits, pages viewed, session activity, and device or browser
        characteristics.
      </P>
      <P>
        If Google Analytics is implemented, we will update this Privacy
        Policy as necessary to disclose its use and explain how Google
        processes information. Additional information about Google&apos;s
        data practices is available at{" "}
        <A href="https://policies.google.com/technologies/partner-sites">
          How Google uses information from sites or apps that use our
          services
        </A>
        .
      </P>
      <P>
        You may manage or disable cookies through your browser settings.
        Where required by applicable law, we will provide additional notices
        or consent mechanisms for nonessential tracking technologies.
      </P>

      <Heading>5. Data Retention and Security</Heading>
      <P>
        We retain personal information for as long as reasonably necessary
        to fulfill the purposes described in this Privacy Policy, maintain
        business records, resolve disputes, and comply with legal
        obligations.
      </P>
      <P>
        We implement reasonable administrative and technical safeguards
        designed to protect personal information. However, no method of
        electronic transmission or storage is completely secure.
      </P>

      <Heading>6. Your Privacy Choices</Heading>
      <P>
        You may contact us to request access to, correction of, or deletion
        of personal information you have provided.
      </P>
      <P>
        We will review and respond to such requests in accordance with
        applicable law and our legitimate business obligations.
      </P>
      <P>
        To submit a request, please email{" "}
        <strong className="text-foreground">
          <A href="mailto:info@myotisflight.com">info@myotisflight.com</A>
        </strong>
        .
      </P>

      <Heading>7. Do Not Track and Third-Party Tracking</Heading>
      <P>
        Our Website does not currently use Google Analytics or third-party
        advertising trackers.
      </P>
      <P>
        We do not currently alter our website operations in response to
        browser-based Do Not Track signals.
      </P>
      <P>
        Our hosting and technical service providers may collect information
        necessary to operate and protect the Website. If third-party
        analytics or tracking services are introduced, we will update our
        disclosures as appropriate.
      </P>

      <Heading>8. Third-Party Websites</Heading>
      <P>
        Our Website may contain links to external websites. We are not
        responsible for their content, security, or privacy practices. We
        encourage visitors to review the privacy policies of those websites.
      </P>

      <Heading>9. Children&apos;s Privacy</Heading>
      <P>
        Our Website is intended for a general business audience and is not
        directed toward children under the age of 13.
      </P>
      <P>
        We do not knowingly collect personal information from children under
        13. If we become aware of such collection, we will take reasonable
        steps to delete the information.
      </P>

      <Heading>10. Changes to This Privacy Policy</Heading>
      <P>
        We may update this Privacy Policy periodically to reflect changes in
        our business operations, website functionality, technology, or legal
        obligations.
      </P>
      <P>
        Updates will be posted on this page with a revised effective date. We
        will provide additional notice of material changes when appropriate
        or legally required.
      </P>

      <Heading>11. Contact Us</Heading>
      <P>
        For questions about this Privacy Policy or requests concerning your
        personal information, please contact:
      </P>
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

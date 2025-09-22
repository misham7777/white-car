import { legal } from "@/data/legal";

export const metadata = {
  title: "Privacy Policy — CarVault",
  description: "Privacy Policy for CarVault UAE car buyout service - UAE PDPL compliant",
};

export default function PrivacyPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs opacity-70">Last updated: {legal.lastUpdatedISO} • Draft — not legal advice.</p>
      
      <h1>Privacy Policy</h1>
      
      <h2>1. Data Controller</h2>
      <p>
        <strong>Controller:</strong> {legal.privacy.controller}
      </p>
      <p>
        <strong>Contact:</strong> {legal.contact.email}
      </p>
      <p>
        <strong>Data Protection Officer:</strong> {legal.contact.dpoEmail}
      </p>
      
      <h2>2. Categories of Personal Data</h2>
      <p>We collect the following categories of personal data:</p>
      <ul>
        {legal.privacy.dataCategories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <h2>3. Purposes and Legal Bases</h2>
      
      <h3>3.1 Contract Performance</h3>
      <p>{legal.privacy.purposes.contract}</p>
      
      <h3>3.2 Legitimate Interests</h3>
      <p>{legal.privacy.purposes.legitimateInterests}</p>
      
      <h3>3.3 Legal Obligation</h3>
      <p>{legal.privacy.purposes.legalObligation}</p>

      <h2>4. Your Data Subject Rights (UAE PDPL)</h2>
      <p>Under the UAE Personal Data Protection Law, you have the following rights:</p>
      <ul>
        {legal.privacy.dataRights.map((right, index) => (
          <li key={index}>{right}</li>
        ))}
      </ul>
      
      <p>
        To exercise these rights, contact us at {legal.contact.dpoEmail}. 
        We will respond within 30 days of receiving your request.
      </p>

      <h2>5. Data Sharing</h2>
      
      <h3>5.1 Service Providers</h3>
      <p>We share data with the following processors:</p>
      <ul>
        {legal.privacy.sharing.processors.map((processor, index) => (
          <li key={index}>{processor}</li>
        ))}
      </ul>
      
      <h3>5.2 Law Enforcement</h3>
      <p>{legal.privacy.sharing.lawEnforcement}</p>

      <h2>6. Cross-Border Data Transfers</h2>
      <p>{legal.privacy.transfers.policy}</p>
      
      <h3>6.1 Safeguards</h3>
      <p>We implement appropriate safeguards including:</p>
      <ul>
        {legal.privacy.transfers.safeguards.map((safeguard, index) => (
          <li key={index}>{safeguard}</li>
        ))}
      </ul>

      <h2>7. Data Retention</h2>
      
      <h3>7.1 KYC Documentation</h3>
      <p>{legal.privacy.retention.kyc}</p>
      
      <h3>7.2 General Data</h3>
      <p>{legal.privacy.retention.general}</p>
      
      <h3>7.3 Marketing Data</h3>
      <p>{legal.privacy.retention.marketing}</p>

      <h2>8. Children's Privacy</h2>
      <p>{legal.privacy.children.policy}</p>
      <p>{legal.privacy.children.collection}</p>

      <h2>9. Complaints</h2>
      <p>
        If you have concerns about our data processing, you can:
      </p>
      <ul>
        <li>Contact our DPO at {legal.privacy.complaints.internal}</li>
        <li>File a complaint with the {legal.privacy.complaints.regulator}</li>
      </ul>
      <p>We aim to respond to complaints within {legal.privacy.complaints.timeline}.</p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be 
        communicated via email or website notice. The "Last updated" date indicates 
        when this policy was last revised.
      </p>

      <h2>11. Contact Information</h2>
      <p>For privacy-related questions:</p>
      <ul>
        <li>Email: {legal.contact.dpoEmail}</li>
        <li>Phone: {legal.contact.phone}</li>
        <li>Address: {legal.contact.address}</li>
      </ul>
    </main>
  );
}

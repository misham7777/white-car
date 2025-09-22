import { legal } from "@/data/legal";

export const metadata = {
  title: "Terms of Service — CarVault",
  description: "Terms of Service for CarVault UAE car buyout service",
};

export default function TermsPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs opacity-70">Last updated: {legal.lastUpdatedISO} • Draft — not legal advice.</p>
      
      <h1>Terms of Service</h1>
      
      <h2>1. Parties and Service Scope</h2>
      <p>
        These Terms of Service ("Terms") govern the relationship between {legal.legalName} 
        ("CarVault", "we", "us", "our") and users ("you", "your") of our premium car buyout service 
        in the United Arab Emirates.
      </p>
      
      <h3>1.1 Eligibility</h3>
      <ul>
        <li>You must be {legal.terms.eligibility.age} years or older</li>
        <li>Service available only in {legal.terms.eligibility.territory}</li>
        <li>Scope: {legal.terms.eligibility.scope}</li>
      </ul>

      <h2>2. Service Process</h2>
      
      <h3>2.1 Online Inspection</h3>
      <p>{legal.terms.process.onlineInspection}</p>
      
      <h3>2.2 On-Site Verification</h3>
      <p>{legal.terms.process.onsiteVerification}</p>
      
      <h3>2.3 Offer Validity</h3>
      <p>{legal.terms.process.offerValidity}</p>
      
      <h3>2.4 Final Pricing</h3>
      <p>{legal.terms.process.finalPrice}</p>

      <h2>3. Prohibited Uses</h2>
      <p>You agree not to use our service for:</p>
      <ul>
        {legal.terms.prohibitedUses.map((use, index) => (
          <li key={index}>{use}</li>
        ))}
      </ul>

      <h2>4. User Representations</h2>
      <p>By using our service, you represent and warrant that:</p>
      <ul>
        {legal.terms.userRepresentations.map((rep, index) => (
          <li key={index}>{rep}</li>
        ))}
      </ul>

      <h2>5. Payment Terms</h2>
      
      <h3>5.1 Payment Methods</h3>
      <p>We accept payment via:</p>
      <ul>
        {legal.terms.payment.methods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
      
      <h3>5.2 KYC Requirements</h3>
      <p>{legal.terms.payment.kyc}</p>
      
      <h3>5.3 Processing Times</h3>
      <p>{legal.terms.payment.processing}</p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Our total liability to you for any claims arising from or related to these Terms 
        or our services shall not exceed {legal.terms.liability.cap}.
      </p>
      
      <p>We exclude liability for:</p>
      <ul>
        {legal.terms.liability.exclusions.map((exclusion, index) => (
          <li key={index}>{exclusion}</li>
        ))}
      </ul>

      <h2>7. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless CarVault from any claims, damages, 
        or expenses arising from your breach of these Terms or misrepresentation of vehicle information.
      </p>

      <h2>8. Force Majeure</h2>
      <p>
        We shall not be liable for any delay or failure to perform due to circumstances 
        beyond our reasonable control, including but not limited to natural disasters, 
        government actions, or pandemics.
      </p>

      <h2>9. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Material changes will be 
        communicated via email or website notice. Continued use constitutes acceptance of 
        updated Terms.
      </p>

      <h2>10. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by {legal.terms.jurisdiction.law} and any disputes 
        shall be subject to the jurisdiction of the {legal.terms.jurisdiction.courts}.
      </p>

      <h2>11. Contact Information</h2>
      <p>For questions regarding these Terms, contact us at:</p>
      <ul>
        <li>Email: {legal.contact.email}</li>
        <li>Phone: {legal.contact.phone}</li>
        <li>Address: {legal.contact.address}</li>
      </ul>
    </main>
  );
}

import { legal } from "@/data/legal";

export const metadata = {
  title: "KYC/AML Statement — CarVault",
  description: "Know Your Customer and Anti-Money Laundering compliance statement for CarVault UAE",
};

export default function KYCAMLPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs opacity-70">Last updated: {legal.lastUpdatedISO} • Draft — not legal advice.</p>
      
      <h1>KYC/AML Statement</h1>
      
      <h2>1. Regulatory Compliance</h2>
      <p>
        CarVault is fully committed to compliance with UAE Federal Decree-Law No. 20 of 2018 
        on Anti-Money Laundering and Combating the Financing of Terrorism, and all related 
        regulations and guidelines issued by the UAE Central Bank and other relevant authorities.
      </p>
      <p>
        <strong>Compliance Statement:</strong> {legal.kycAml.compliance}
      </p>

      <h2>2. Customer Due Diligence (CDD)</h2>
      <p>
        We implement comprehensive Customer Due Diligence procedures to verify the identity 
        of our customers and understand the nature of their business relationship with us.
      </p>

      <h3>2.1 Verification Steps</h3>
      <p>Our KYC process includes the following verification steps:</p>
      <ul>
        {legal.kycAml.verificationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h2>3. Enhanced Due Diligence (EDD)</h2>
      <p>
        For high-risk customers or transactions, we implement Enhanced Due Diligence 
        procedures, which may include additional verification steps and ongoing monitoring.
      </p>

      <h3>3.1 Politically Exposed Persons (PEPs)</h3>
      <p>{legal.kycAml.screening.pep}</p>
      
      <h3>3.2 Sanctions Screening</h3>
      <p>{legal.kycAml.screening.sanctions}</p>
      
      <h3>3.3 Watchlist Screening</h3>
      <p>{legal.kycAml.screening.watchlists}</p>

      <h2>4. Transaction Monitoring</h2>
      <p>
        We continuously monitor transactions for suspicious activity and maintain 
        comprehensive records of all customer interactions and transactions.
      </p>

      <h2>5. Reporting Obligations</h2>
      
      <h3>5.1 Threshold Reporting</h3>
      <p>{legal.kycAml.reporting.threshold}</p>
      
      <h3>5.2 Suspicious Transaction Reporting</h3>
      <p>{legal.kycAml.reporting.suspicious}</p>
      
      <h3>5.3 Reporting Timeframes</h3>
      <p>{legal.kycAml.reporting.timeframe}</p>

      <h2>6. Record Keeping</h2>
      <p>
        We maintain comprehensive records of all KYC documentation, transaction records, 
        and compliance activities for the minimum periods required by UAE law.
      </p>

      <h2>7. Staff Training</h2>
      <p>
        All staff members receive regular training on AML/CFT requirements, including 
        customer identification, transaction monitoring, and suspicious activity reporting.
      </p>

      <h2>8. Digital Asset Policy</h2>
      <p>{legal.kycAml.digitalAssets.policy}</p>
      <p>{legal.kycAml.digitalAssets.compliance}</p>

      <h2>9. Data Protection</h2>
      <p>
        All personal data collected as part of our KYC/AML processes is handled in 
        accordance with our Privacy Policy and UAE Personal Data Protection Law. 
        We implement appropriate technical and organizational measures to protect 
        customer information.
      </p>

      <h2>10. Independent Audit</h2>
      <p>
        Our AML/CFT compliance program is subject to regular independent audits 
        to ensure effectiveness and regulatory compliance.
      </p>

      <h2>11. Contact Information</h2>
      <p>For questions regarding our KYC/AML procedures:</p>
      <ul>
        <li>Email: {legal.contact.email}</li>
        <li>Phone: {legal.contact.phone}</li>
        <li>Address: {legal.contact.address}</li>
      </ul>

      <h2>12. Regulatory Updates</h2>
      <p>
        This statement may be updated to reflect changes in UAE AML/CFT regulations 
        or our internal procedures. Any material changes will be communicated to 
        affected customers.
      </p>
    </main>
  );
}

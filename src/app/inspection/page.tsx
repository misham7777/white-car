import { legal } from "@/data/legal";

export const metadata = {
  title: "Inspection & Valuation Policy — CarVault",
  description: "Inspection and valuation policy for CarVault UAE car buyout service",
};

export default function InspectionPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs opacity-70">Last updated: {legal.lastUpdatedISO} • Draft — not legal advice.</p>
      
      <h1>Inspection & Valuation Policy</h1>
      
      <h2>1. Overview</h2>
      <p>
        This policy outlines our comprehensive inspection and valuation process, 
        designed to provide fair and accurate assessments of your vehicle's value 
        based on current market conditions and vehicle condition.
      </p>

      <h2>2. Online Inspection Process</h2>
      <p>Our online inspection includes the following components:</p>
      
      <h3>2.1 Video Inspection</h3>
      <p>{legal.inspection.onlineProcess.video}</p>
      
      <h3>2.2 VIN Verification</h3>
      <p>{legal.inspection.onlineProcess.vin}</p>
      
      <h3>2.3 Odometer Reading</h3>
      <p>{legal.inspection.onlineProcess.odometer}</p>
      
      <h3>2.4 Document Review</h3>
      <p>{legal.inspection.onlineProcess.documents}</p>

      <h2>3. On-Site Verification</h2>
      <p>
        Following the online inspection, we conduct a comprehensive on-site verification 
        to confirm the vehicle's condition and provide a final valuation.
      </p>
      
      <h3>3.1 Duration</h3>
      <p>{legal.inspection.onsiteProcess.duration}</p>
      
      <h3>3.2 Inspection Checklist</h3>
      <p>Our certified inspectors evaluate the following areas:</p>
      <ul>
        {legal.inspection.onsiteProcess.checklist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>4. Valuation Methodology</h2>
      
      <h3>4.1 Market-Based Approach</h3>
      <p>{legal.inspection.valuation.methodology}</p>
      
      <h3>4.2 Valuation Factors</h3>
      <p>Our valuations consider the following factors:</p>
      <ul>
        {legal.inspection.valuation.factors.map((factor, index) => (
          <li key={index}>{factor}</li>
        ))}
      </ul>
      
      <h3>4.3 Final Price Logic</h3>
      <p>{legal.inspection.valuation.finalLogic}</p>

      <h2>5. Title and Ownership Verification</h2>
      
      <h3>5.1 Lien Checks</h3>
      <p>{legal.inspection.titleChecks.liens}</p>
      
      <h3>5.2 Ownership Verification</h3>
      <p>{legal.inspection.titleChecks.ownership}</p>
      
      <h3>5.3 Loan Balance Checks</h3>
      <p>{legal.inspection.titleChecks.loans}</p>
      
      <h3>5.4 Insurance History</h3>
      <p>{legal.inspection.titleChecks.insurance}</p>

      <h2>6. Inspection Standards</h2>
      <p>
        All inspections are conducted by certified automotive inspectors who follow 
        industry-standard procedures and maintain detailed documentation of their findings.
      </p>

      <h2>7. Dispute Resolution</h2>
      <p>
        If you disagree with our valuation, you may request a second inspection 
        or provide additional documentation that may affect the vehicle's value. 
        All disputes are handled through our customer service team.
      </p>

      <h2>8. Quality Assurance</h2>
      <p>
        We maintain strict quality control standards and regularly audit our 
        inspection processes to ensure accuracy and consistency.
      </p>

      <h2>9. Privacy and Data Protection</h2>
      <p>
        All inspection data and photographs are handled in accordance with our 
        Privacy Policy and UAE Personal Data Protection Law. We do not share 
        your vehicle information with third parties without your consent.
      </p>

      <h2>10. Contact Information</h2>
      <p>For questions about our inspection process:</p>
      <ul>
        <li>Email: {legal.contact.email}</li>
        <li>Phone: {legal.contact.phone}</li>
        <li>Address: {legal.contact.address}</li>
      </ul>

      <h2>11. Updates to This Policy</h2>
      <p>
        This policy may be updated to reflect changes in our inspection procedures 
        or regulatory requirements. Any material changes will be communicated to 
        customers in advance.
      </p>
    </main>
  );
}

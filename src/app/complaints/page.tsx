import { legal } from "@/data/legal";

export const metadata = {
  title: "Complaints & Contact — CarVault",
  description: "Complaints handling process and contact information for CarVault UAE",
};

export default function ComplaintsPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs opacity-70">Last updated: {legal.lastUpdatedISO} • Draft — not legal advice.</p>
      
      <h1>Complaints & Contact</h1>
      
      <h2>1. Our Commitment</h2>
      <p>
        At CarVault, we are committed to providing excellent customer service and 
        resolving any concerns you may have quickly and fairly. We take all 
        complaints seriously and strive to resolve them to your satisfaction.
      </p>

      <h2>2. Complaints Process</h2>
      <p>Our stepwise resolution process ensures timely handling of your concerns:</p>
      
      <h3>2.1 Timeline</h3>
      <ol>
        {legal.complaints.process.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <h2>3. How to Submit a Complaint</h2>
      
      <h3>3.1 Online</h3>
      <p>
        Submit your complaint via email to {legal.complaints.escalation.email} 
        with the subject line "Complaint - [Your Reference Number]".
      </p>
      
      <h3>3.2 Phone</h3>
      <p>
        Call us at {legal.complaints.escalation.phone} during business hours 
        (Sunday to Thursday, 9:00 AM - 6:00 PM UAE time).
      </p>
      
      <h3>3.3 Postal Mail</h3>
      <p>
        Send written complaints to:<br />
        {legal.complaints.escalation.address}
      </p>

      <h2>4. Information to Include</h2>
      <p>To help us resolve your complaint quickly, please provide:</p>
      <ul>
        <li>Your full name and contact information</li>
        <li>Vehicle details (make, model, year, VIN if available)</li>
        <li>Transaction reference number (if applicable)</li>
        <li>Detailed description of your concern</li>
        <li>Any supporting documentation</li>
        <li>Your preferred resolution outcome</li>
      </ul>

      <h2>5. Escalation Process</h2>
      <p>
        If you are not satisfied with our initial response, you may escalate 
        your complaint to our management team. We will provide you with 
        escalation contact details if needed.
      </p>

      <h2>6. External Dispute Resolution</h2>
      <p>
        If we cannot resolve your complaint to your satisfaction, you may 
        refer the matter to relevant UAE consumer protection authorities 
        or industry ombudsman services.
      </p>

      <h2>7. Jurisdiction</h2>
      <p>
        Any legal disputes arising from our services are subject to the 
        jurisdiction of the {legal.complaints.jurisdiction}.
      </p>

      <h2>8. General Contact Information</h2>
      
      <h3>8.1 Customer Service</h3>
      <ul>
        <li>Email: {legal.contact.email}</li>
        <li>Phone: {legal.contact.phone}</li>
        <li>Address: {legal.contact.address}</li>
      </ul>
      
      <h3>8.2 Business Hours</h3>
      <p>Sunday to Thursday: 9:00 AM - 6:00 PM (UAE time)</p>
      <p>Friday: 2:00 PM - 6:00 PM (UAE time)</p>
      <p>Saturday: Closed</p>

      <h2>9. Emergency Contact</h2>
      <p>
        For urgent matters related to ongoing transactions, you can reach 
        our emergency line at {legal.contact.phone} during business hours.
      </p>

      <h2>10. Feedback and Suggestions</h2>
      <p>
        We welcome your feedback and suggestions to help us improve our 
        services. Please send them to {legal.contact.email} with the 
        subject line "Feedback".
      </p>

      <h2>11. Privacy</h2>
      <p>
        All complaints and communications are handled in accordance with 
        our Privacy Policy and UAE Personal Data Protection Law. We will 
        only use your information to resolve your complaint and improve 
        our services.
      </p>

      <h2>12. Updates to This Policy</h2>
      <p>
        We may update this complaints policy from time to time. Any changes 
        will be reflected on this page with an updated "Last updated" date.
      </p>
    </main>
  );
}

import { legal } from "@/data/legal";

export const metadata = {
  title: "Cookie & Tracking Policy — CarVault",
  description: "Cookie and tracking policy for CarVault UAE car buyout service",
};

export default function CookiesPage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs opacity-70">Last updated: {legal.lastUpdatedISO} • Draft — not legal advice.</p>
      
      <h1>Cookie & Tracking Policy</h1>
      
      <h2>1. Overview</h2>
      <p>
        This Cookie Policy explains how CarVault uses cookies and similar tracking 
        technologies on our website. We use only essential cookies by default, 
        with analytics cookies requiring your explicit consent.
      </p>

      <h2>2. What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device when you visit 
        our website. They help us provide you with a better experience by remembering 
        your preferences and understanding how you use our site.
      </p>

      <h2>3. Types of Cookies We Use</h2>
      
      <h3>3.1 Essential Cookies</h3>
      <p>These cookies are necessary for the website to function properly and cannot be disabled:</p>
      <ul>
        {legal.cookies.essential.map((cookie, index) => (
          <li key={index}>{cookie}</li>
        ))}
      </ul>
      
      <h3>3.2 Analytics Cookies</h3>
      <p>These cookies help us understand how visitors use our website:</p>
      <ul>
        {legal.cookies.analytics.map((cookie, index) => (
          <li key={index}>{cookie}</li>
        ))}
      </ul>

      <h2>4. Cookie Consent</h2>
      
      <h3>4.1 Default Settings</h3>
      <p>{legal.cookies.consent.default}</p>
      
      <h3>4.2 Analytics Consent</h3>
      <p>{legal.cookies.consent.analytics}</p>
      
      <h3>4.3 Withdrawing Consent</h3>
      <p>{legal.cookies.consent.withdrawal}</p>

      <h2>5. Third-Party Cookies</h2>
      <p>
        We may use third-party services that set their own cookies. These include:
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
        <li><strong>Payment Processors:</strong> Secure payment processing</li>
        <li><strong>Communication Services:</strong> Email and SMS delivery</li>
      </ul>

      <h2>6. Managing Your Cookie Preferences</h2>
      
      <h3>6.1 Cookie Banner</h3>
      <p>
        When you first visit our website, you'll see a cookie consent banner. 
        You can choose to accept or reject non-essential cookies.
      </p>
      
      <h3>6.2 Browser Settings</h3>
      <p>
        You can also manage cookies through your browser settings. Most browsers 
        allow you to:
      </p>
      <ul>
        <li>View and delete cookies</li>
        <li>Block cookies from specific websites</li>
        <li>Block all cookies</li>
        <li>Receive notifications when cookies are set</li>
      </ul>

      <h2>7. Impact of Disabling Cookies</h2>
      <p>
        If you disable essential cookies, some features of our website may not 
        work properly. Disabling analytics cookies will not affect the core 
        functionality of our service.
      </p>

      <h2>8. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes 
        in our practices or for other operational, legal, or regulatory reasons.
      </p>

      <h2>9. Contact Us</h2>
      <p>If you have questions about our use of cookies:</p>
      <ul>
        <li>Email: {legal.contact.email}</li>
        <li>Phone: {legal.contact.phone}</li>
        <li>Address: {legal.contact.address}</li>
      </ul>
    </main>
  );
}

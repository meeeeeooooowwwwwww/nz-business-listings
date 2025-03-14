export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            This Privacy Policy describes how we collect, use, process, and disclose your information
            on business.nataliegwinters.com ("the Website").
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We use Google Analytics to collect standard internet log information and details of visitor behavior patterns.
            This information is processed in a way that does not identify anyone.
          </p>
          <h3 className="text-lg font-semibold mb-2">2.1 Information collected automatically:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and navigation patterns</li>
            <li>Time and date of visits</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Analyze website traffic and improve our services</li>
            <li>Monitor the effectiveness of our content</li>
            <li>Protect against, identify, and prevent fraud and other illegal activity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Cookies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our Website and hold certain information.
            Cookies are files with small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="mb-4">
            We use Google Analytics, which is provided by Google Inc. It uses cookies to help us analyze how users use the Website.
            The information generated by the cookie about your use of the Website will be transmitted to and stored by Google on servers
            in the United States.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Under GDPR and CCPA, you have several rights, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to object to processing</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Contact Information</h2>
          <p className="mb-4">
            For any questions or concerns regarding this Privacy Policy, please contact us through the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>
      </div>
    </main>
  );
} 
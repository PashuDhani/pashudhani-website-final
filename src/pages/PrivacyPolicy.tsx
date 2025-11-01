import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-8 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="space-y-4 mb-10">
          <p>
            PashuDhani ("we", "our", "us") provides a marketplace to discover, list,
            and chat about livestock. This Privacy Policy explains what information we
            collect, how we use it, and your choices. By using our mobile app, website,
            and related services ("Services"), you agree to this Policy.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Account data: name, phone, email, profile photo (when provided or via Google
              Sign-In).
            </li>
            <li>
              Listing data: titles, descriptions, locations (state/district), pricing, and
              media (images/videos) which we upload to secure object storage (e.g., Amazon S3)
              and store only the resulting URLs.
            </li>
            <li>
              Chat data: messages sent/received, message metadata (timestamps, sender/recipient IDs),
              and read-receipt status (sent/read) for reliable delivery and UX. We do not add
              message content analytics.
            </li>
            <li>
              Technical data: device identifiers, app version, language, IP address, and basic
              diagnostics, collected to ensure reliability, security, and performance of the app.
            </li>
            <li>
              Local storage: we store your session token and minimal preferences on-device using
              secure storage mechanisms (e.g., AsyncStorage on mobile) to keep you signed in.
            </li>
          </ul>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Authenticate you and maintain your session.</li>
            <li>Enable listing creation, editing, display, and search.</li>
            <li>Upload and serve listing media via secure storage links.</li>
            <li>
              Provide real-time chat using WebSockets (e.g., Socket.IO), including delivery
              status and read receipts on the sender side.
            </li>
            <li>Detect, prevent, and respond to fraud, abuse, and security incidents.</li>
            <li>Improve our Services through diagnostics and limited analytics.</li>
            <li>Communicate with you about updates, support, and important notices.</li>
          </ul>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Legal Bases (Where Applicable)</h2>
          <p>
            We process your data to perform our contract with you (to provide the Services),
            based on your consent (e.g., Google Sign-In), and for our legitimate interests
            (security, fraud prevention, service improvement). When required, we obtain your
            consent and you can withdraw it at any time.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Storage and Transfers</h2>
          <p>
            We use reputable cloud providers and object storage (e.g., Amazon S3) to store
            media and serve it via secure links. Your data may be processed and stored in
            locations outside your state or country. We take reasonable measures to protect
            data in transit and at rest.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Media Uploads</h2>
          <p>
            When you upload images or videos, our backend receives the files and uploads them
            to storage on your behalf. We do not store raw base64 media in the database; only
            the resulting URLs and lightweight metadata (e.g., content type, duration) are kept.
            We may apply basic validations (size/type) to ensure platform reliability.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Real‑Time Chat and Read Receipts</h2>
          <p>
            We maintain a single WebSocket connection per signed-in user to deliver messages
            and updates efficiently across your chats. Read receipts are visible only to the
            sender (single tick for sent, double blue ticks for read) and are derived from
            message delivery and read events.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Cookies and Local Storage</h2>
          <p>
            On the website, we may use cookies/local storage to keep essential preferences and
            sessions. In the app, we use secure equivalents (e.g., AsyncStorage). You can clear
            these through your browser or device settings.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Google Sign‑In</h2>
          <p>
            If you sign in with Google, we receive basic profile details (name, email, photo)
            and tokens required to authenticate you with our backend. Your Google credentials
            are handled by Google’s SDK; we do not see your password.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Data Retention</h2>
          <p>
            We retain personal data for as long as your account is active or as needed to
            provide the Services, comply with legal obligations, resolve disputes, and enforce
            our agreements. You can request deletion as described below.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p>
            Subject to applicable law, you may have rights to access, correct, delete, or
            restrict processing of your data, and to object or request portability. Contact us
            to exercise these rights. We may need to verify your identity before responding.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your data.
            No method of transmission or storage is 100% secure; we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Children’s Privacy</h2>
          <p>
            Our Services are not directed to children under 13. If you believe a child has
            provided us personal information, please contact us and we will take appropriate
            steps to remove it.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update this Policy from time to time. We will post the updated version and
            indicate the effective date. Continued use of the Services after changes means you
            accept the updated Policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have questions or requests related to privacy, please contact us at
            <span className="ml-1 font-medium">support@pashudhani.com</span>.
          </p>
        </section>
    </main>
  )
}

export default PrivacyPolicy



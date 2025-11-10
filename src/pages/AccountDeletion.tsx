import React from 'react'

const AccountDeletion: React.FC = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-gray-800">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
        <span className="font-semibold">PashuDhani</span>
        <span>•</span>
        <span>Account & Data Deletion</span>
      </div>
      <h1 className="text-3xl font-bold mb-6">Request Account Deletion</h1>
      <p className="mb-6 text-sm text-gray-600">
        This page explains how to request deletion of your PashuDhani account and associated data.
        The steps below apply to the PashuDhani app published by “PashuDhani”.
      </p>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">How to request deletion</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            From the app: open Settings → Account → “Request Account Deletion”. If you don’t see this option,
            use the email method below.
          </li>
          <li>
            Or email us at{' '}
            <a className="underline" href="mailto:info@pashudhani.com">info@pashudhani.com</a>{' '}
            using the subject “Delete my PashuDhani account”.
          </li>
          <li>
            Include the following details:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Your account email and/or phone number used in the app</li>
              <li>Your full name (as shown in profile)</li>
              <li>Optional: reason for deletion</li>
            </ul>
          </li>
          <li>We’ll confirm receipt and complete deletion within 7 days (usually much sooner).</li>
        </ol>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">What data will be deleted</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Account profile (name, email/phone, avatar)</li>
          <li>Cattle listings you created and their associated media (images/videos) stored via secure links</li>
          <li>Chats and messages associated with your account (including read status)</li>
          <li>Session tokens and app preferences stored on our servers</li>
        </ul>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">What may be retained and why</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Legal/compliance records (e.g., security logs, fraud prevention signals) for up to 90 days</li>
          <li>Backups containing your data for up to 30 days until they naturally expire</li>
          <li>Non-identifying aggregate analytics that do not personally identify you</li>
        </ul>
        <p className="rounded-md border p-3 bg-gray-50 text-sm">
          During the short retention period, retained data is not used to serve features and is securely destroyed on schedule.
        </p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Third-party services</h2>
        <p>
          Media files are stored through cloud object storage (e.g., Amazon S3) and referenced via secure URLs in our database.
          Deletion requests remove those links and underlying files we control. If you used Google Sign-In, your Google password is
          never shared with us.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Need help?</h2>
        <p>
          Contact our support team at{' '}
          <a className="underline" href="mailto:info@pashudhani.com">info@pashudhani.com</a>{' '}
          if you have any questions.
        </p>
      </section>
    </main>
  )
}

export default AccountDeletion



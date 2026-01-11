import Link from "next/link";
import { format } from "date-fns";

const XchangerPrivacyPage = () => {
  return (
    <main className="page-layout pt-20 pb-20">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-medium text-orange-900 mb-4">
          Xchanger - Privacy Policy
        </h1>

        <p className="text-lg text-orange-900 mb-8">
          <strong>
            Last Updated: {format(new Date(1768142163077), "MM/dd/yyyy")}
          </strong>
        </p>

        <div className="prose prose-lg max-w-none text-orange-900 space-y-6">
          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              Mango Labs ("we," "us," or "our") respects your privacy and is
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, store, and protect your information
              when you use the Xchanger mobile application ("App").
            </p>
            <p>
              By using the App, you agree to the collection and use of
              information in accordance with this Privacy Policy. If you do not
              agree with this policy, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              2.1 Information You Provide
            </h3>

            <p className="font-medium">Consent Preferences</p>
            <ul className="markdown">
              <li>Your consent status for data processing</li>
              <li>
                This information is stored locally on your device in encrypted
                storage
              </li>
            </ul>

            <p className="font-medium mt-4">
              Payment and Subscription Information
            </p>
            <ul className="markdown">
              <li>Subscription status and preferences</li>
              <li>
                Customer identifier (anonymized customer ID through RevenueCat)
              </li>
              <li>
                Payment information is processed by Apple App Store or Google
                Play Store (we do not store your payment details)
              </li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              2.2 Information Collected Automatically
            </h3>

            <p className="font-medium">App Usage Data</p>
            <ul className="markdown">
              <li>Recently used currencies and their timestamps</li>
              <li>Last selected currency pairs (from/to currencies)</li>
              <li>Subscription status cache (stored locally)</li>
            </ul>

            <p className="font-medium mt-4">Device and Technical Information</p>
            <ul className="markdown">
              <li>
                Device type, operating system, and app version (collected only
                with your consent through error tracking)
              </li>
              <li>
                Crash reports and error logs (only if you have consented to data
                collection)
              </li>
              <li>IP addresses are explicitly removed from error reports</li>
            </ul>

            <p className="font-medium mt-4">Local Storage</p>
            <ul className="markdown">
              <li>
                Exchange rate data (downloaded and stored locally for offline
                use)
              </li>
              <li>Currency information (downloaded and stored locally)</li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              2.3 Information We Do NOT Collect
            </h3>
            <p>We do NOT collect:</p>
            <ul className="markdown">
              <li>
                Personal identification information (names, email addresses,
                phone numbers)
              </li>
              <li>Location data</li>
              <li>Contact lists or device contacts</li>
              <li>Photos, videos, or other media files</li>
              <li>Browsing history or web activity outside the App</li>
              <li>
                IP addresses (these are explicitly removed from any data we
                might receive)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="markdown">
              <li>
                <strong>Provide and Maintain the App</strong>: Deliver currency
                conversion services, exchange rate information, and App
                functionality
              </li>
              <li>
                <strong>Improve User Experience</strong>: Remember your currency
                preferences and recently used currencies to provide personalized
                features
              </li>
              <li>
                <strong>Support Premium Features</strong>: Manage subscription
                status and provide premium functionality
              </li>
              <li>
                <strong>Error Tracking and Debugging</strong>: Identify and fix
                technical issues (only with your explicit consent)
              </li>
              <li>
                <strong>Comply with Legal Obligations</strong>: Meet legal
                requirements and respond to lawful requests
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              4. Data Storage and Security
            </h2>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              4.1 Local Storage
            </h3>

            <p className="font-medium">Your Data Stays on Your Device</p>
            <p>
              The majority of your data is stored locally on your device in
              encrypted storage:
            </p>

            <ul className="markdown">
              <li>
                <strong>Secure Storage</strong>: We use Expo SecureStore, which
                provides encrypted local storage on your device
              </li>
              <li>
                <strong>SQLite Database</strong>: Exchange rates and currency
                data are stored in a local SQLite database on your device
              </li>
              <li>
                <strong>No Cloud Sync</strong>: We do not synchronize your data
                to cloud servers
              </li>
            </ul>

            <p className="font-medium mt-4">Data Stored Locally:</p>
            <ul className="markdown">
              <li>Recently used currencies and timestamps</li>
              <li>Last selected currency pairs</li>
              <li>Your consent preferences</li>
              <li>Subscription status cache</li>
              <li>Exchange rate data (for offline functionality)</li>
              <li>Currency information</li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              4.2 Encryption
            </h3>
            <ul className="markdown">
              <li>
                All locally stored preferences and settings are encrypted using
                your device's secure storage capabilities
              </li>
              <li>
                Exchange rate data stored in SQLite is accessible only within
                the App
              </li>
              <li>
                We use industry-standard encryption methods provided by your
                device's operating system
              </li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              4.3 Data Retention
            </h3>
            <ul className="markdown">
              <li>
                <strong>Local Data</strong>: Data stored on your device remains
                there until you uninstall the App or manually clear the App's
                data
              </li>
              <li>
                <strong>Error Tracking Data</strong>: If you have consented to
                error tracking, crash reports are retained by Sentry according
                to their data retention policies (typically 90 days)
              </li>
              <li>
                <strong>Subscription Data</strong>: Subscription information is
                managed through RevenueCat and App Store/Google Play, subject to
                their respective retention policies
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              5. Third-Party Services
            </h2>
            <p>
              We use the following third-party services to support App
              functionality:
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.1 Error Tracking (Sentry)
            </h3>
            <p className="font-medium">Purpose:</p>
            <p>
              To identify and fix technical issues and improve App stability
            </p>

            <p className="font-medium mt-4">Data Collected:</p>
            <ul className="markdown">
              <li>Crash reports and error logs</li>
              <li>Device type, operating system, and app version</li>
              <li>Stack traces and error context</li>
            </ul>

            <p className="font-medium mt-4">Privacy Measures:</p>
            <ul className="markdown">
              <li>Only enabled with your explicit consent</li>
              <li>
                Personal Identifiable Information (PII) collection is disabled
              </li>
              <li>IP addresses are explicitly removed from all data</li>
              <li>No user identifiers or personal information is collected</li>
            </ul>

            <p className="mt-4">
              <strong>Service Provider</strong>: Sentry, Inc. (
              <Link
                href="https://sentry.io/"
                className="text-orange-700 hover:text-orange-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://sentry.io/
              </Link>
              )
              <br />
              Privacy Policy:{" "}
              <Link
                href="https://sentry.io/privacy/"
                className="text-orange-700 hover:text-orange-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://sentry.io/privacy/
              </Link>
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.2 Subscription Management (RevenueCat)
            </h3>
            <p className="font-medium">Purpose:</p>
            <p>To manage subscriptions and premium features</p>

            <p className="font-medium mt-4">Data Collected:</p>
            <ul className="markdown">
              <li>
                Anonymous customer identifier (device-specific, not personally
                identifiable)
              </li>
              <li>Subscription status and entitlement information</li>
              <li>Transaction history (managed by App Store/Google Play)</li>
            </ul>

            <p className="mt-4">
              <strong>Service Provider</strong>: RevenueCat, Inc. (
              <Link
                href="https://www.revenuecat.com/"
                className="text-orange-700 hover:text-orange-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.revenuecat.com/
              </Link>
              )
              <br />
              Privacy Policy:{" "}
              <Link
                href="https://www.revenuecat.com/privacy"
                className="text-orange-700 hover:text-orange-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.revenuecat.com/privacy
              </Link>
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.3 Payment Processing (App Store / Google Play)
            </h3>
            <p className="font-medium">Purpose:</p>
            <p>To process subscription payments</p>

            <p className="font-medium mt-4">Data Collected:</p>
            <ul className="markdown">
              <li>Payment information (handled entirely by Apple or Google)</li>
              <li>Purchase history and receipts</li>
            </ul>

            <p className="font-medium mt-4">Service Providers:</p>
            <ul className="markdown">
              <li>
                Apple Inc. (for iOS):{" "}
                <Link
                  href="https://www.apple.com/privacy/"
                  className="text-orange-700 hover:text-orange-900 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.apple.com/privacy/
                </Link>
              </li>
              <li>
                Google LLC (for Android):{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  className="text-orange-700 hover:text-orange-900 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </Link>
              </li>
            </ul>

            <p>
              <strong>Note</strong>: We do not have access to your payment
              details. All payment information is processed directly by Apple or
              Google.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.4 Exchange Rate Data
            </h3>
            <p className="font-medium">Purpose:</p>
            <p>To provide current and historical exchange rate information</p>

            <p className="font-medium mt-4">Data Source:</p>
            <p>
              Exchange rate data is obtained from third-party financial data
              providers
            </p>

            <p>
              <strong>Note</strong>: We are not responsible for the accuracy,
              timeliness, or privacy practices of these third-party data
              providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              6. Your Privacy Rights and Choices
            </h2>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.1 Consent Management
            </h3>
            <p>You have full control over data collection:</p>
            <ul className="markdown">
              <li>
                <strong>Accept Consent</strong>: Enables error tracking (with
                privacy protections as described above)
              </li>
              <li>
                <strong>Reject Consent</strong>: Disables all optional data
                collection; App continues to function with full features
              </li>
            </ul>
            <p>
              You can change your consent preference at any time through the App
              settings.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.2 Access to Your Data
            </h3>
            <p>Since most data is stored locally on your device:</p>
            <ul className="markdown">
              <li>
                You can access your locally stored preferences through the App
              </li>
              <li>
                You can clear App data at any time through your device settings
              </li>
              <li>
                For error tracking data (if consented), you may request
                information by contacting us
              </li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.3 Data Deletion
            </h3>
            <p className="font-medium">Local Data:</p>
            <ul className="markdown">
              <li>Uninstalling the App will delete all locally stored data</li>
              <li>
                You can also clear App data through your device settings without
                uninstalling
              </li>
            </ul>

            <p className="font-medium mt-4">Error Tracking Data:</p>
            <ul className="markdown">
              <li>
                If you have consented to error tracking and wish to have your
                data deleted from Sentry, please contact us
              </li>
            </ul>

            <p className="font-medium mt-4">Subscription Data:</p>
            <ul className="markdown">
              <li>
                Subscription information is managed through App Store or Google
                Play
              </li>
              <li>
                Canceling your subscription does not delete historical
                transaction records maintained by Apple or Google
              </li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.4 GDPR Rights (European Users)
            </h3>
            <p>
              If you are located in the European Economic Area (EEA), you have
              the following rights:
            </p>
            <ul className="markdown">
              <li>
                <strong>Right to Access</strong>: Request information about your
                personal data
              </li>
              <li>
                <strong>Right to Rectification</strong>: Request correction of
                inaccurate data
              </li>
              <li>
                <strong>Right to Erasure</strong>: Request deletion of your data
              </li>
              <li>
                <strong>Right to Restrict Processing</strong>: Request
                limitation of data processing
              </li>
              <li>
                <strong>Right to Data Portability</strong>: Request transfer of
                your data
              </li>
              <li>
                <strong>Right to Object</strong>: Object to processing of your
                data
              </li>
              <li>
                <strong>Right to Withdraw Consent</strong>: Withdraw consent for
                data processing at any time
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided in Section 10.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.5 California Privacy Rights (CCPA)
            </h3>
            <p>
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="markdown">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>
                Right to opt-out of the sale of personal information (we do not
                sell personal information)
              </li>
              <li>
                Right to non-discrimination for exercising your privacy rights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              7. Children's Privacy
            </h2>
            <p>
              The App is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us
              immediately.
            </p>
            <p>
              If we discover that we have collected information from a child
              under 13, we will delete that information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              8. International Data Transfers
            </h2>
            <p>
              Your data is primarily stored locally on your device. However,
              some third-party services we use (such as Sentry and RevenueCat)
              may process data outside your country of residence. These services
              have implemented appropriate safeguards to protect your data in
              accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by:
            </p>
            <ul className="markdown">
              <li>
                Updating the "Last Updated" date at the top of this policy
              </li>
              <li>Posting a notice in the App (for significant changes)</li>
              <li>
                In some cases, providing additional notice through the App
              </li>
            </ul>
            <p>
              Your continued use of the App after changes become effective
              constitutes acceptance of the updated Privacy Policy.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <p className="mt-4">
              <strong>Mango Labs</strong>
              <br />
              Email:{" "}
              <Link
                href="mailto:hello@mangolabs.com.br"
                className="text-orange-700 hover:text-orange-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hello@mangolabs.com.br
              </Link>
              <br />
              Website:{" "}
              <Link
                href="https://mangolabs.com.br"
                className="text-orange-700 hover:text-orange-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mangolabs.com.br
              </Link>
            </p>
            <p>
              We will respond to your inquiry as soon as possible, typically
              within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              11. Data Controller
            </h2>
            <p className="font-medium">Data Controller: Mango Labs</p>
            <p>
              For questions about data processing or to exercise your privacy
              rights, please contact us using the information provided in
              Section 10.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              12. Additional Information
            </h2>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              12.1 Offline Functionality
            </h3>
            <p>
              When using the App in offline mode (Premium feature), the App uses
              previously downloaded exchange rate data stored locally on your
              device. This data may become outdated when used offline.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              12.2 Data Minimization
            </h3>
            <p>
              We collect and process only the minimum amount of data necessary
              to provide App functionality and improve user experience.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              12.3 No Data Sharing
            </h3>
            <p>
              We do not sell, rent, or share your personal information with
              third parties for their marketing purposes. We only share data
              with service providers necessary for App functionality (as
              described in Section 5), and only with appropriate privacy
              protections in place.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              12.4 App Permissions
            </h3>
            <p>The App may request the following permissions:</p>
            <ul className="markdown">
              <li>
                <strong>Internet Access</strong>: Required to download exchange
                rate data and manage subscriptions
              </li>
              <li>
                <strong>Network State</strong>: Required to determine
                online/offline status
              </li>
              <li>
                <strong>Billing (Android)</strong>: Required for in-app
                purchases and subscriptions
              </li>
            </ul>

            <p className="mt-4">The App does not request access to:</p>
            <ul className="markdown">
              <li>Location services</li>
              <li>Contacts</li>
              <li>Camera or microphone</li>
              <li>Photo library</li>
              <li>Calendar</li>
              <li>Other sensitive permissions</li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-orange-300">
            <p className="text-center font-medium">
              <strong>
                By using Xchanger, you acknowledge that you have read and
                understood this Privacy Policy and consent to the collection and
                use of your information as described herein.
              </strong>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default XchangerPrivacyPage;

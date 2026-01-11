import Link from "next/link";
import { format } from "date-fns";

const XchangerTermsPage = () => {
  return (
    <main className="page-layout pt-20 pb-20">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-medium text-orange-900 mb-4">
          Xchanger - Terms of Use
        </h1>

        <p className="text-lg text-orange-900 mb-8">
          <strong>
            Last Updated: {format(new Date(1768142163077), "MM/dd/yyyy")}
          </strong>
        </p>

        <div className="prose prose-lg max-w-none text-orange-900 space-y-6">
          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using the Xchanger
              mobile application ("App"), you agree to be bound by these Terms
              of Use ("Terms"). If you do not agree to these Terms, please do
              not use the App.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and
              Mango Labs ("we," "us," or "our"). We may update these Terms from
              time to time, and your continued use of the App after such changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              2. Description of Service
            </h2>
            <p>
              Xchanger is a currency converter application that provides
              exchange rate information and currency conversion services. The
              App offers:
            </p>
            <ul className="markdown">
              <li>Real-time and historical exchange rate data</li>
              <li>Currency conversion calculations</li>
              <li>Offline functionality (Premium feature)</li>
              <li>
                Additional premium features available through subscription
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              3. Eligibility
            </h2>
            <p>
              You must be at least 13 years old (or the age of majority in your
              jurisdiction, whichever is higher) to use this App. By using the
              App, you represent and warrant that you meet this age requirement
              and have the legal capacity to enter into this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              4. Account Registration
            </h2>
            <p>
              Some features of the App may require registration or account
              creation. You are responsible for:
            </p>
            <ul className="markdown">
              <li>
                Maintaining the confidentiality of your account credentials
              </li>
              <li>All activities that occur under your account</li>
              <li>
                Notifying us immediately of any unauthorized access or security
                breaches
              </li>
              <li>
                Providing accurate and complete information during registration
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              5. Exchange Rate Information
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.1 Accuracy Disclaimer
            </h3>
            <p>
              Exchange rates are provided for informational purposes only. While
              we strive to provide accurate and up-to-date exchange rate
              information, we do not guarantee the accuracy, completeness, or
              timeliness of exchange rates displayed in the App.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.2 Not Financial Advice
            </h3>
            <p>
              The exchange rate information provided by the App is not
              financial, investment, or trading advice. You should consult with
              qualified financial professionals before making any financial
              decisions based on information from the App.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.3 Source of Data
            </h3>
            <p>
              Exchange rate data may be sourced from third-party providers. We
              are not responsible for any errors or delays in data provided by
              these third parties.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.4 Real-World Transactions
            </h3>
            <p>
              Exchange rates shown in the App may differ from rates offered by
              banks, currency exchange services, or payment processors. Actual
              exchange rates for real transactions will be determined by the
              service provider you use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              6. Premium Features and Subscriptions
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.1 Subscription Plans
            </h3>
            <p>
              The App offers premium features through subscription plans
              (monthly and annual). Subscription terms, pricing, and features
              are subject to change.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.2 Payment Terms
            </h3>
            <ul className="markdown">
              <li>Subscriptions are billed in advance on a recurring basis</li>
              <li>
                Payment will be charged to your App Store or Google Play account
              </li>
              <li>
                Subscriptions automatically renew unless cancelled at least 24
                hours before the end of the current period
              </li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.3 Cancellation and Refunds
            </h3>
            <ul className="markdown">
              <li>
                You may cancel your subscription at any time through your
                device's subscription settings
              </li>
              <li>
                Cancellation will take effect at the end of the current billing
                period
              </li>
              <li>
                Refunds are subject to the policies of the App Store or Google
                Play Store
              </li>
              <li>
                No refunds will be provided for partial subscription periods
              </li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              6.4 Free Trial
            </h3>
            <p>
              If we offer a free trial, you may be charged after the trial
              period ends unless you cancel before the trial expires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              7. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="markdown">
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Infringe upon the rights of others</li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble the App
              </li>
              <li>
                Use automated systems to access the App (scraping, bots, etc.)
              </li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Use the App to transmit malware or harmful code</li>
              <li>Impersonate others or provide false information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              8. Intellectual Property
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              8.1 Ownership
            </h3>
            <p>
              The App, including all content, features, functionality, design,
              logos, and trademarks, is owned by Mango Labs and protected by
              copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              8.2 Limited License
            </h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the App for personal, non-commercial purposes in
              accordance with these Terms.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              8.3 Restrictions
            </h3>
            <p>You may not:</p>
            <ul className="markdown">
              <li>Copy, modify, or create derivative works of the App</li>
              <li>Sell, lease, or sublicense the App</li>
              <li>
                Remove or alter any copyright, trademark, or proprietary notices
              </li>
              <li>
                Use our trademarks or logos without prior written permission
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              9. Privacy
            </h2>
            <p>
              Your use of the App is also governed by our Privacy Policy. Please
              review our Privacy Policy to understand how we collect, use, and
              protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              10. Data Storage and Offline Functionality
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.1 Local Storage
            </h3>
            <p>
              Certain data may be stored locally on your device. You are
              responsible for backing up your data and device security.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.2 Offline Mode
            </h3>
            <p>
              Premium offline functionality allows you to access previously
              downloaded exchange rate data without an internet connection. This
              data may become outdated when used offline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              11. Disclaimers and Limitations of Liability
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              11.1 Service Availability
            </h3>
            <p>
              We strive to maintain continuous service availability but do not
              guarantee uninterrupted or error-free operation. The App may be
              unavailable due to maintenance, updates, technical issues, or
              circumstances beyond our control.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              11.2 "AS IS" Service
            </h3>
            <p className="font-medium">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              11.3 Limitation of Liability
            </h3>
            <p className="font-medium">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR
              OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              11.4 Maximum Liability
            </h3>
            <p>
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE
              TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS
              ($100), WHICHEVER IS GREATER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              12. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Mango Labs and
              its officers, directors, employees, and agents from and against
              any claims, liabilities, damages, losses, and expenses, including
              reasonable attorney's fees, arising out of or in any way connected
              with:
            </p>
            <ul className="markdown">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              13. Termination
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              13.1 By You
            </h3>
            <p>
              You may stop using the App at any time by uninstalling it from
              your device. Cancellation of subscriptions is subject to Section
              6.3.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              13.2 By Us
            </h3>
            <p>
              We may suspend or terminate your access to the App at any time,
              with or without cause or notice, if you violate these Terms or for
              any other reason we deem necessary.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              13.3 Effect of Termination
            </h3>
            <p>
              Upon termination, your right to use the App will immediately
              cease. Provisions of these Terms that by their nature should
              survive termination will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              14. Third-Party Services
            </h2>
            <p>
              The App may integrate with or link to third-party services,
              websites, or applications. We are not responsible for the content,
              privacy practices, or terms of use of third-party services. Your
              use of third-party services is subject to their respective terms
              and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              15. Geographic Restrictions
            </h2>
            <p>
              The App may be subject to restrictions in certain jurisdictions.
              You are responsible for ensuring that your use of the App complies
              with all applicable local laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              16. Dispute Resolution
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              16.1 Governing Law
            </h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Jurisdiction], without regard to its conflict of law
              provisions.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              16.2 Dispute Resolution Process
            </h3>
            <p>
              Any disputes arising out of or relating to these Terms or the App
              shall be resolved through [binding arbitration / courts of
              competent jurisdiction] in [Location].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              17. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by:
            </p>
            <ul className="markdown">
              <li>Posting the updated Terms in the App</li>
              <li>Updating the "Last Updated" date</li>
              <li>
                In some cases, providing additional notice through the App or
                email
              </li>
            </ul>
            <p>
              Your continued use of the App after changes become effective
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              18. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              19. Entire Agreement
            </h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Mango Labs regarding the use of
              the App and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              20. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              21. Additional Terms for App Stores
            </h2>
            <p>
              If you downloaded the App from the Apple App Store or Google Play
              Store, the following additional terms apply:
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              21.1 Apple App Store
            </h3>
            <ul className="markdown">
              <li>These Terms are between you and Mango Labs, not Apple</li>
              <li>Apple is not responsible for the App or its content</li>
              <li>Apple has no obligation to provide support for the App</li>
              <li>
                In the event of App failure, you may notify Apple for a refund
              </li>
              <li>
                Apple and its subsidiaries are third-party beneficiaries of
                these Terms
              </li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              21.2 Google Play Store
            </h3>
            <ul className="markdown">
              <li>These Terms are between you and Mango Labs</li>
              <li>Google is not responsible for the App or its content</li>
              <li>
                Your use of the App is subject to Google Play Store's terms and
                conditions
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-orange-300">
            <p className="text-center font-medium">
              <strong>
                By using Xchanger, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Use.
              </strong>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default XchangerTermsPage;

import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import { format } from "date-fns";

export default async function SunRouterTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="page-layout pt-20 pb-20">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-medium text-black mb-4">
          SunRouter - Terms of Use
        </h1>

        <p className="text-lg text-black mb-8">
          <strong>
            Last Updated: {format(new Date(1770508800000), "MM/dd/yyyy")}
          </strong>
        </p>

        <div className="prose prose-lg max-w-none text-black space-y-6">
          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using the SunRouter
              mobile application (&ldquo;App&rdquo;), you agree to be bound by
              these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to
              these Terms, please do not use the App.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and
              Mango Labs (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;). We may update these Terms from time to time,
              and your continued use of the App after such changes constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              2. Description of Service
            </h2>
            <p>
              SunRouter is a route planning and multi-stop navigation
              application that helps users create, optimize, and navigate routes
              with multiple stops. The App offers:
            </p>
            <ul className="markdown">
              <li>
                Route creation with origin, destination, and multiple stops
              </li>
              <li>Place search powered by Google Places</li>
              <li>Route computation and directions via Google Routes</li>
              <li>
                Navigation integration with Google Maps, Apple Maps, and Waze
              </li>
              <li>Stop tracking during navigation</li>
              <li>
                Support for multiple vehicle types (car, bicycle, walk,
                two-wheeler)
              </li>
              <li>Route optimization (Premium feature)</li>
              <li>
                Unlimited routes and up to 25 stops per route (Premium feature)
              </li>
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
              4. Route and Navigation Information
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              4.1 Accuracy Disclaimer
            </h3>
            <p>
              Route information, directions, distances, and estimated travel
              times are provided for informational and planning purposes only.
              While we strive to provide accurate and up-to-date route data, we
              do not guarantee the accuracy, completeness, or timeliness of
              information displayed in the App.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              4.2 Not a Substitute for Safe Navigation
            </h3>
            <p>
              The route and navigation information provided by the App is not a
              substitute for careful, attentive driving and safe navigation
              practices. You are solely responsible for your safety and the
              safety of others while following routes suggested by the App.
              Always obey local traffic laws and road signs.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              4.3 Source of Data
            </h3>
            <p>
              Route and place data is sourced from Google Maps Platform (Google
              Places API and Google Routes API). We are not responsible for any
              errors, delays, or inaccuracies in data provided by these
              third-party services.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              4.4 Real-World Conditions
            </h3>
            <p>
              Routes displayed in the App may not reflect real-time road
              conditions, closures, construction, or other hazards. Actual
              travel times and conditions may differ from those shown in the
              App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              5. Premium Features and Subscriptions
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.1 Subscription Plans
            </h3>
            <p>
              The App offers premium features through subscription plans
              (monthly and annual). Subscription terms, pricing, and features
              are subject to change.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.2 Premium Features Include
            </h3>
            <ul className="markdown">
              <li>
                Route optimization (automatic reordering of stops for
                efficiency)
              </li>
              <li>Unlimited routes</li>
              <li>Up to 25 stops per route</li>
            </ul>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              5.3 Payment Terms
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
              5.4 Cancellation and Refunds
            </h3>
            <ul className="markdown">
              <li>
                You may cancel your subscription at any time through your
                device&apos;s subscription settings
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
              5.5 Free Trial
            </h3>
            <p>
              If we offer a free trial, you may be charged after the trial
              period ends unless you cancel before the trial expires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              6. Acceptable Use
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
              <li>Interfere with or disrupt the App&apos;s functionality</li>
              <li>Use the App to transmit malware or harmful code</li>
              <li>Impersonate others or provide false information</li>
              <li>
                Use the App while driving or operating a vehicle in a manner
                that distracts from safe operation
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              7. Intellectual Property
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              7.1 Ownership
            </h3>
            <p>
              The App, including all content, features, functionality, design,
              logos, and trademarks, is owned by Mango Labs and protected by
              copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              7.2 Limited License
            </h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the App for personal, non-commercial purposes in
              accordance with these Terms.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              7.3 Restrictions
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

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              7.4 Third-Party Content
            </h3>
            <p>
              The App uses data from Google Maps Platform. Google Maps content
              is subject to Google&apos;s Terms of Service and may not be
              copied, redistributed, or used outside of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              8. Privacy
            </h2>
            <p>
              Your use of the App is also governed by our Privacy Policy. Please
              review our Privacy Policy to understand how we collect, use, and
              protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              9. Data Storage
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              9.1 Local Storage
            </h3>
            <p>
              All route data, places, and preferences are stored locally on your
              device. You are responsible for backing up your data and device
              security.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              9.2 No Cloud Sync
            </h3>
            <p>
              We do not synchronize your data to cloud servers. If you uninstall
              the App or switch devices, your locally stored data will be lost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              10. Disclaimers and Limitations of Liability
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.1 Service Availability
            </h3>
            <p>
              We strive to maintain continuous service availability but do not
              guarantee uninterrupted or error-free operation. The App may be
              unavailable due to maintenance, updates, technical issues, or
              circumstances beyond our control.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.2 Third-Party Service Dependencies
            </h3>
            <p>
              The App depends on third-party services (Google Maps Platform,
              etc.) for route computation and place search. We do not control
              and cannot guarantee the availability, accuracy, or performance of
              these services.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.3 &ldquo;AS IS&rdquo; Service
            </h3>
            <p className="font-medium">
              THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
              AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.4 Navigation Disclaimer
            </h3>
            <p className="font-medium">
              WE ARE NOT RESPONSIBLE FOR ANY ACCIDENTS, INJURIES, DAMAGES, OR
              LOSSES THAT MAY OCCUR WHILE YOU ARE FOLLOWING ROUTES OR DIRECTIONS
              PROVIDED BY THE APP. USE THE APP&apos;S NAVIGATION FEATURES AT
              YOUR OWN RISK AND ALWAYS EXERCISE CAUTION.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.5 Limitation of Liability
            </h3>
            <p className="font-medium">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR
              OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              10.6 Maximum Liability
            </h3>
            <p>
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE
              TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS
              ($100), WHICHEVER IS GREATER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              11. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Mango Labs and
              its officers, directors, employees, and agents from and against
              any claims, liabilities, damages, losses, and expenses, including
              reasonable attorney&apos;s fees, arising out of or in any way
              connected with:
            </p>
            <ul className="markdown">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>
                Any accidents or injuries related to navigation using the App
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              12. Termination
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              12.1 By You
            </h3>
            <p>
              You may stop using the App at any time by uninstalling it from
              your device. Cancellation of subscriptions is subject to Section
              5.4.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              12.2 By Us
            </h3>
            <p>
              We may suspend or terminate your access to the App at any time,
              with or without cause or notice, if you violate these Terms or for
              any other reason we deem necessary.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              12.3 Effect of Termination
            </h3>
            <p>
              Upon termination, your right to use the App will immediately
              cease. Provisions of these Terms that by their nature should
              survive termination will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              13. Third-Party Services
            </h2>
            <p>
              The App integrates with the following third-party services:
            </p>
            <ul className="markdown">
              <li>
                <strong>Google Maps Platform</strong>: For place search and
                route computation
              </li>
              <li>
                <strong>Google Maps, Apple Maps, and Waze</strong>: For
                turn-by-turn navigation
              </li>
              <li>
                <strong>RevenueCat</strong>: For subscription management
              </li>
              <li>
                <strong>Sentry</strong>: For error tracking (with your consent)
              </li>
            </ul>
            <p>
              We are not responsible for the content, privacy practices, or
              terms of use of third-party services. Your use of third-party
              services is subject to their respective terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              14. Geographic Restrictions
            </h2>
            <p>
              The App may be subject to restrictions in certain jurisdictions.
              Route availability and accuracy may vary by region. You are
              responsible for ensuring that your use of the App complies with
              all applicable local laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              15. Dispute Resolution
            </h2>
            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              15.1 Governing Law
            </h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Jurisdiction], without regard to its conflict of law
              provisions.
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              15.2 Dispute Resolution Process
            </h3>
            <p>
              Any disputes arising out of or relating to these Terms or the App
              shall be resolved through [binding arbitration / courts of
              competent jurisdiction] in [Location].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              16. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by:
            </p>
            <ul className="markdown">
              <li>Posting the updated Terms in the App</li>
              <li>Updating the &ldquo;Last Updated&rdquo; date</li>
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
              17. Severability
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
              18. Entire Agreement
            </h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Mango Labs regarding the use of
              the App and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium mt-8 mb-4">
              19. Contact Information
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
              20. Additional Terms for App Stores
            </h2>
            <p>
              If you downloaded the App from the Apple App Store or Google Play
              Store, the following additional terms apply:
            </p>

            <h3 className="text-xl font-serif font-medium mt-6 mb-3">
              20.1 Apple App Store
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
              20.2 Google Play Store
            </h3>
            <ul className="markdown">
              <li>These Terms are between you and Mango Labs</li>
              <li>Google is not responsible for the App or its content</li>
              <li>
                Your use of the App is subject to Google Play Store&apos;s terms
                and conditions
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-orange-300">
            <p className="text-center text-orange-900 font-medium">
              <strong>
                By using SunRouter, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Use.
              </strong>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

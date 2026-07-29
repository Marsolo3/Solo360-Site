import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Solo 360 Digital Growth",
  description:
    "Learn how Solo 360 Digital Growth collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="bg-[#FAF8F5] flex-1 min-h-0">
        {/* ── Hero Banner ── */}
        <div className="bg-brand-dark border-b border-zinc-800 py-14 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] font-extrabold tracking-widest text-brand-gold uppercase mb-3 block">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-7 max-w-lg">
              We take your privacy seriously. Here is exactly how we handle your data.
            </p>
            <p className="text-zinc-600 text-xs mt-5 font-medium">Effective Date: July 28, 2026</p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-10 flex-wrap">
            <Link href="/" className="hover:text-brand-gold-dark transition-colors whitespace-nowrap">
              Home
            </Link>
            <span className="text-zinc-300" aria-hidden="true">›</span>
            <span className="text-zinc-600 truncate">Privacy Policy</span>
          </nav>

          {/* Legal Notice */}
          <div 
            className="mb-10 p-6 rounded-2xl border border-amber-300 bg-amber-50 text-sm leading-6 font-medium"
            style={{ color: '#78350f', backgroundColor: '#fdf6e2', borderColor: '#f5d06c' }}
          >
            <strong className="font-bold text-amber-950">Important Legal Notice:</strong> This Privacy Policy is a general informational draft and does not constitute legal advice. Privacy requirements depend on Solo360’s actual business practices, website technology, clients, geographic reach, and applicable laws. This policy should be reviewed by a qualified attorney before publication.
          </div>

          <div className="bg-white rounded-2xl border border-[#eae6db] p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-zinc-700 text-sm sm:text-base leading-7">
            {/* Introduction */}
            <div className="space-y-4">
              <p>
                Solo360 is a Nevada limited liability company operating under the name “Solo360.” In this Privacy Policy, “Solo360,” “we,” “us,” and “our” refer to Solo360.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Visit or interact with <a href="https://solo360.co/" className="text-brand-gold-dark hover:underline font-medium">https://solo360.co/</a></li>
                <li>Submit a contact, consultation, or quote-request form</li>
                <li>Schedule a call or appointment</li>
                <li>Subscribe to marketing communications</li>
                <li>Communicate with us by email, telephone, text message, social media, or another channel</li>
                <li>Purchase or inquire about our services</li>
                <li>Become a client, contractor, vendor, or business partner</li>
                <li>Otherwise interact with Solo360</li>
              </ul>
              <p>
                Our services may include growth strategy, marketing consulting, advertising, website development, analytics, lead generation, customer relationship management, creative services, and related marketing execution.
              </p>
              <p>
                By using our website or providing information to us, you acknowledge the practices described in this Privacy Policy.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 1. Personal Information We May Collect */}
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">1. Personal Information We May Collect</h2>
              <p>
                The personal information we collect depends on how you interact with us, which website features are active, and which services you request.
              </p>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Information You Provide Directly</h3>
                <p>We may collect information that you voluntarily provide, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>First and last name</li>
                  <li>Business or company name</li>
                  <li>Job title or professional role</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Mailing or business address</li>
                  <li>Preferred contact method</li>
                  <li>Information included in contact or quote-request forms</li>
                  <li>Information submitted when scheduling a consultation</li>
                  <li>Marketing goals, service interests, project requirements, and budget information</li>
                  <li>Communications, messages, files, feedback, and correspondence</li>
                  <li>Billing contact information</li>
                  <li>Transaction and payment-related information</li>
                  <li>Information provided during client onboarding</li>
                  <li>Account credentials, when an account-based service is offered</li>
                  <li>Other information you choose to provide</li>
                </ul>
                <p className="text-xs text-zinc-500 italic">
                  Please do not submit Social Security numbers, government identification numbers, medical information, financial account credentials, or other highly sensitive information through general website forms.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Information Collected Automatically</h3>
                <p>
                  When you access or use our website, we and our technology providers may automatically collect information such as:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Internet Protocol address</li>
                  <li>Browser type and browser settings</li>
                  <li>Device type and operating system</li>
                  <li>Approximate location derived from an Internet Protocol address</li>
                  <li>Referring website or source</li>
                  <li>Pages viewed and links clicked</li>
                  <li>Date, time, and duration of visits</li>
                  <li>Website navigation and interaction activity</li>
                  <li>Advertising identifiers</li>
                  <li>Cookie identifiers and similar online identifiers</li>
                  <li>Campaign, referral, and conversion information</li>
                  <li>General diagnostic, performance, and error information</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Scheduling Information</h3>
                <p>
                  When you schedule a consultation through a scheduling service such as Calendly or a similar provider, we may receive:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Company information</li>
                  <li>Appointment date and time</li>
                  <li>Time zone</li>
                  <li>Answers to scheduling questions</li>
                  <li>Notes or information you include with the appointment</li>
                </ul>
                <p>
                  The scheduling provider may separately collect information under its own privacy policy.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Payment Information</h3>
                <p>
                  When online payments are offered, payments may be processed by a third-party payment provider such as Stripe or another payment processor.
                </p>
                <p>
                  Solo360 generally does not directly receive or store complete payment card numbers, security codes, or financial account credentials. The payment processor may provide us with limited transaction information, such as:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customer name</li>
                  <li>Billing contact information</li>
                  <li>Transaction amount</li>
                  <li>Payment status</li>
                  <li>Date of payment</li>
                  <li>Invoice or transaction identifier</li>
                  <li>Partial payment-method information</li>
                </ul>
                <p>
                  Payment providers process payment information according to their own privacy policies and contractual obligations.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Information From Other Sources</h3>
                <p>We may receive information from:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clients and prospective clients</li>
                  <li>Business partners and referral sources</li>
                  <li>Publicly available websites and business directories</li>
                  <li>Social media platforms</li>
                  <li>Advertising and analytics providers</li>
                  <li>Customer relationship management platforms</li>
                  <li>Lead-generation providers</li>
                  <li>Data enrichment or business-information providers</li>
                  <li>Vendors and service providers</li>
                  <li>Other individuals or organizations that direct you to us</li>
                </ul>
                <p>
                  We may combine information received from these sources with information collected directly from you.
                </p>
              </div>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 2. How We Collect Information */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">2. How We Collect Information</h2>
              <p>We may collect personal information through:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Website forms</li>
                <li>Email, telephone, and text communications</li>
                <li>Strategy-call and consultation bookings</li>
                <li>Newsletter or marketing signups</li>
                <li>Client onboarding forms</li>
                <li>Contracts, proposals, and invoices</li>
                <li>Customer relationship management systems</li>
                <li>Cookies, pixels, tags, scripts, and analytics technologies</li>
                <li>Advertising campaigns and landing pages</li>
                <li>Call-tracking and call-recording systems</li>
                <li>Social media pages and messaging platforms</li>
                <li>Publicly available business sources</li>
                <li>Referrals and professional networking</li>
                <li>Payment and invoicing platforms</li>
                <li>Other interactions with our website or services</li>
              </ul>
              <p>
                Where required, we will request consent before using certain cookies, recording calls, sending marketing messages, or engaging in other regulated activities.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 3. How We Use Personal Information */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">3. How We Use Personal Information</h2>
              <p>We may use personal information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to questions, inquiries, and quote requests</li>
                <li>Schedule and conduct consultations</li>
                <li>Evaluate whether our services are a good fit</li>
                <li>Prepare proposals, strategies, estimates, and statements of work</li>
                <li>Provide, manage, and improve our services</li>
                <li>Communicate with clients and prospective clients</li>
                <li>Manage client relationships and project delivery</li>
                <li>Process payments and maintain transaction records</li>
                <li>Send administrative, service-related, and account communications</li>
                <li>Send newsletters, promotions, and marketing communications</li>
                <li>Measure website performance and visitor engagement</li>
                <li>Understand how visitors find and use our website</li>
                <li>Attribute leads, calls, bookings, and conversions to marketing campaigns</li>
                <li>Personalize website content and advertising</li>
                <li>Create and manage advertising audiences</li>
                <li>Conduct retargeting and remarketing campaigns</li>
                <li>Improve our website, services, and marketing strategy</li>
                <li>Detect fraud, spam, security incidents, and misuse</li>
                <li>Maintain business, accounting, tax, and legal records</li>
                <li>Enforce contracts, policies, and legal rights</li>
                <li>Comply with applicable laws, court orders, and regulatory requirements</li>
                <li>Complete a merger, acquisition, financing, restructuring, or sale of business assets</li>
                <li>Carry out other purposes disclosed when information is collected</li>
              </ul>
              <p>
                We may use aggregated or de-identified information for research, analytics, reporting, benchmarking, and business planning. Where information has been properly de-identified, we will not attempt to re-identify it except as permitted by law.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 4. Legal Bases for Processing */}
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">4. Legal Bases for Processing</h2>
              <p>
                For visitors in the European Economic Area, United Kingdom, Switzerland, or another jurisdiction requiring a lawful basis for processing, we may process personal information under one or more of the following bases:
              </p>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Contractual Necessity</h3>
                <p>We may process information when necessary to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Take steps at your request before entering into a contract</li>
                  <li>Prepare a proposal or service agreement</li>
                  <li>Provide contracted services</li>
                  <li>Process payments</li>
                  <li>Manage our client relationship</li>
                  <li>Fulfill our contractual obligations</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Legitimate Interests</h3>
                <p>We may process information when reasonably necessary for legitimate business interests, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Responding to business inquiries</li>
                  <li>Developing and improving our services</li>
                  <li>Operating and securing our website</li>
                  <li>Managing client and vendor relationships</li>
                  <li>Measuring business and marketing performance</li>
                  <li>Preventing fraud and misuse</li>
                  <li>Conducting appropriate business-to-business marketing</li>
                  <li>Establishing, exercising, or defending legal claims</li>
                </ul>
                <p>
                  We consider whether these interests are overridden by your privacy rights before relying on legitimate interests.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Consent</h3>
                <p>We may rely on your consent for activities such as:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sending certain marketing communications</li>
                  <li>Using nonessential cookies</li>
                  <li>Using certain advertising or tracking technologies</li>
                  <li>Recording calls where consent is legally required</li>
                  <li>Processing information for another purpose clearly explained when consent is requested</li>
                </ul>
                <p>
                  You may withdraw consent at any time. Withdrawing consent does not affect processing that occurred before withdrawal.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Legal Obligations</h3>
                <p>
                  We may process information when necessary to comply with laws, regulations, tax requirements, court orders, subpoenas, or other lawful obligations.
                </p>
              </div>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 5. Cookies and Similar Technologies */}
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">5. Cookies and Similar Technologies</h2>
              <p>
                We and our service providers may use cookies, pixels, tags, scripts, local storage, software development kits, and similar technologies.
              </p>
              <p>
                Cookies are small files stored on a browser or device that can help websites function, remember preferences, measure activity, and support advertising.
              </p>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Types of Cookies We May Use</h3>
                <ul className="space-y-3">
                  <li><strong>Essential cookies</strong> help operate the website, provide security, remember privacy settings, and enable requested functionality.</li>
                  <li><strong>Analytics cookies</strong> help us understand website traffic, page performance, referral sources, and visitor interactions.</li>
                  <li><strong>Functional cookies</strong> remember preferences and support features such as scheduling, forms, video players, or chat functionality.</li>
                  <li><strong>Advertising cookies and pixels</strong> may help measure advertising performance, attribute conversions, create audiences, limit repeated ads, and deliver more relevant advertising.</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Managing Cookies</h3>
                <p>
                  Depending on the website configuration and your location, you may manage nonessential cookies through:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A website cookie banner or preference center</li>
                  <li>Browser settings</li>
                  <li>Device settings</li>
                  <li>Advertising-platform controls</li>
                  <li>Industry opt-out tools</li>
                  <li>A “Do Not Sell or Share My Personal Information” link, where applicable</li>
                  <li>A legally recognized browser-based opt-out preference signal</li>
                </ul>
                <p>
                  Blocking cookies may affect certain website features. Essential cookies may continue to operate because they are necessary to provide the website or honor your privacy choices.
                </p>
              </div>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 6. Analytics, Advertising, and Retargeting */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">6. Analytics, Advertising, and Retargeting</h2>
              <p>Solo360 may use analytics and advertising services such as:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Analytics</li>
                <li>Google Ads</li>
                <li>Meta advertising tools</li>
                <li>LinkedIn advertising tools</li>
                <li>Microsoft advertising tools</li>
                <li>Call-tracking platforms</li>
                <li>Conversion-tracking systems</li>
                <li>Other measurement, audience, and advertising providers</li>
              </ul>
              <p>
                These providers may collect identifiers, Internet or network activity, device information, approximate location, referral information, and interactions with our website.
              </p>
              <p>We may use this information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Measure website traffic</li>
                <li>Understand visitor behavior</li>
                <li>Identify referral sources</li>
                <li>Measure advertising effectiveness</li>
                <li>Attribute inquiries, calls, appointments, or purchases</li>
                <li>Create advertising audiences</li>
                <li>Display advertisements on other websites or platforms</li>
                <li>Conduct remarketing or retargeting</li>
                <li>Improve campaign performance</li>
              </ul>
              <p>
                Third-party advertising providers may collect information about your online activity over time and across different websites, applications, or services.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 7. Call Tracking and Communications */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">7. Call Tracking and Communications</h2>
              <p>Solo360 may use call-tracking platforms such as CallRail or similar services to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Assign tracking telephone numbers</li>
                <li>Identify the marketing source associated with a call</li>
                <li>Measure advertising performance</li>
                <li>Route calls</li>
                <li>Maintain call logs</li>
                <li>Review call quality</li>
                <li>Improve sales and customer service</li>
              </ul>
              <p>
                Where call recording is enabled, callers may receive an announcement or other notice before recording begins when required by applicable law.
              </p>
              <p>
                We may also communicate by email, telephone, text message, video conferencing, or social media. These communication providers may process information according to their own privacy practices.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 8. Customer Relationship Management and Marketing Platforms */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">8. Customer Relationship Management and Marketing Platforms</h2>
              <p>
                We may use customer relationship management, marketing automation, and communication platforms such as HubSpot, GoHighLevel, or similar providers.
              </p>
              <p>These systems may store and process information including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact details</li>
                <li>Company information</li>
                <li>Inquiry and lead source</li>
                <li>Communication history</li>
                <li>Appointment history</li>
                <li>Service interests</li>
                <li>Project status</li>
                <li>Marketing preferences</li>
                <li>Form submissions</li>
                <li>Notes and follow-up activity</li>
              </ul>
              <p>
                We use these systems to organize business relationships, respond to inquiries, provide services, manage projects, and send appropriate communications.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 9. Email and Marketing Communications */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">9. Email and Marketing Communications</h2>
              <p>We may send marketing communications when:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You request information</li>
                <li>You subscribe to a newsletter</li>
                <li>You consent to receive marketing</li>
                <li>We have another lawful basis to contact you</li>
                <li>The communication is otherwise permitted by applicable law</li>
              </ul>
              <p>
                You may unsubscribe from marketing emails by using the unsubscribe link in the message or contacting us at <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline font-semibold">info@solo360.co</a>.
              </p>
              <p>
                Unsubscribing from marketing does not prevent us from sending necessary service, account, billing, security, or transactional communications.
              </p>
              <p>
                We may retain limited information about an unsubscribe request to ensure that the preference continues to be honored.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 10. How We Disclose Personal Information */}
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">10. How We Disclose Personal Information</h2>
              <p>We may disclose personal information to the following categories of recipients:</p>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Service Providers and Contractors</h3>
                <p>We may engage companies and contractors that support:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Website hosting and content management</li>
                  <li>Cloud storage</li>
                  <li>Website forms</li>
                  <li>Scheduling</li>
                  <li>Customer relationship management</li>
                  <li>Email delivery and marketing automation</li>
                  <li>Analytics and reporting</li>
                  <li>Advertising and conversion tracking</li>
                  <li>Call tracking</li>
                  <li>Payment processing and invoicing</li>
                  <li>Accounting and bookkeeping</li>
                  <li>Cybersecurity, fraud prevention, and technical support</li>
                  <li>Website design and development</li>
                  <li>Creative and marketing execution</li>
                  <li>Professional consulting</li>
                </ul>
                <p>
                  These providers may access information only as reasonably necessary to provide their services, subject to applicable contractual and legal requirements.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Advertising and Analytics Partners</h3>
                <p>
                  We may disclose device identifiers, cookie identifiers, approximate location, Internet activity, and campaign information to advertising and analytics providers.
                </p>
                <p>
                  Depending on applicable law and how the technology is configured, this disclosure may be considered “selling,” “sharing,” or processing for targeted advertising, even when no money is exchanged for personal information.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Professional Advisers</h3>
                <p>
                  We may disclose information to attorneys, accountants, insurance providers, auditors, consultants, and other professional advisers when reasonably necessary.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Legal and Safety Disclosures</h3>
                <p>We may disclose information when we reasonably believe it is necessary to:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Comply with applicable law</li>
                  <li>Respond to a subpoena, court order, or lawful government request</li>
                  <li>Protect our rights, property, services, users, or others</li>
                  <li>Investigate fraud, misuse, or security incidents</li>
                  <li>Enforce an agreement or policy</li>
                  <li>Establish, exercise, or defend legal claims</li>
                  <li>Address an emergency involving potential harm</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Business Transactions</h3>
                <p>Information may be disclosed or transferred as part of an actual or proposed:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Merger</li>
                  <li>Acquisition</li>
                  <li>Financing</li>
                  <li>Reorganization</li>
                  <li>Bankruptcy</li>
                  <li>Sale of assets</li>
                  <li>Change in ownership or control</li>
                </ul>
                <p>
                  The recipient may use transferred information in accordance with this Privacy Policy unless you receive notice of a new policy.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">At Your Direction</h3>
                <p>We may disclose information when you request, authorize, or direct us to do so.</p>
              </div>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 11. Sale and Sharing of Personal Information */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">11. Sale and Sharing of Personal Information</h2>
              <p>
                Solo360 does not sell personal information to third parties for monetary consideration as part of its ordinary business operations.
              </p>
              <p>
                However, certain advertising, analytics, audience-building, and retargeting technologies may involve disclosing identifiers or Internet activity to advertising platforms. Under California and certain other state privacy laws, some of these activities may be defined as “sharing,” “sale,” or targeted advertising.
              </p>
              <p>
                Depending on the tools enabled on our website, the categories of information potentially disclosed for these purposes may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Online identifiers</li>
                <li>Cookie and device identifiers</li>
                <li>Internet or network activity</li>
                <li>Approximate location</li>
                <li>Advertising and campaign information</li>
                <li>Inferences concerning marketing interests</li>
              </ul>
              <p>
                The recipients may include advertising networks, analytics providers, social media platforms, and marketing technology providers.
              </p>
              <p>Where applicable, you may opt out by:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Adjusting your cookie preferences</li>
                <li>Using a “Do Not Sell or Share My Personal Information” link, if displayed</li>
                <li>Enabling a legally recognized opt-out preference signal</li>
                <li>Emailing <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline font-semibold">info@solo360.co</a> with the subject line “Privacy Opt-Out”</li>
              </ul>
              <p>
                We do not knowingly sell or share personal information belonging to individuals under 16 years of age.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 12. Global Privacy Control and Do Not Track */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">12. Global Privacy Control and Do Not Track</h2>
              <p>
                Some browsers and extensions allow users to transmit privacy preference signals, such as Global Privacy Control.
              </p>
              <p>
                Where applicable law requires us to recognize a browser-based opt-out preference signal, we will process the signal as required for the browser or device transmitting it.
              </p>
              <p>
                Because there is not one universally accepted standard governing all “Do Not Track” signals, our website may not respond to every Do Not Track setting. You may still use available cookie controls or contact us directly to submit a privacy request.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 13. Data Retention */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">13. Data Retention</h2>
              <p>
                We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to inquiries</li>
                <li>Maintain client and business relationships</li>
                <li>Provide services</li>
                <li>Complete transactions</li>
                <li>Maintain business and accounting records</li>
                <li>Honor marketing preferences</li>
                <li>Resolve disputes</li>
                <li>Enforce agreements</li>
                <li>Prevent fraud and abuse</li>
                <li>Satisfy tax, legal, insurance, and regulatory requirements</li>
              </ul>
              <p>Retention periods may depend on:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The type and sensitivity of information</li>
                <li>The purpose for which it was collected</li>
                <li>The duration of a client or business relationship</li>
                <li>Applicable contractual requirements</li>
                <li>Legal limitation periods</li>
                <li>Tax and accounting obligations</li>
                <li>Security and fraud-prevention needs</li>
                <li>Whether the information is needed for a legal dispute</li>
              </ul>
              <p>
                When information is no longer reasonably required, we may delete it, de-identify it, or securely retain it until deletion is reasonably practicable. Information may remain in backups for a limited period after deletion from active systems.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 14. Data Security */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">14. Data Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational measures intended to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.
              </p>
              <p>
                The safeguards used may vary depending on the nature of the information and the systems involved.
              </p>
              <p>
                However, no website, transmission method, storage platform, or security measure is completely secure. We cannot guarantee absolute security.
              </p>
              <p>
                You are responsible for using caution when submitting information online and for protecting any passwords or account credentials associated with our services.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 15. Your Privacy Choices and Rights */}
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">15. Your Privacy Choices and Rights</h2>
              <p>Depending on where you live and which laws apply, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirm whether we process your personal information</li>
                <li>Request access to your personal information</li>
                <li>Request a copy of certain personal information</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of personal information</li>
                <li>Restrict certain processing</li>
                <li>Object to certain processing</li>
                <li>Withdraw consent</li>
                <li>Opt out of marketing communications</li>
                <li>Opt out of the sale or sharing of personal information</li>
                <li>Opt out of targeted advertising</li>
                <li>Limit certain uses of sensitive personal information</li>
                <li>Request data portability</li>
                <li>Appeal the denial of a privacy request</li>
                <li>Receive equal service and pricing when exercising privacy rights</li>
                <li>Complain to an appropriate regulator or supervisory authority</li>
              </ul>
              <p>
                These rights are not absolute. We may deny or limit a request where permitted by law, including when information must be retained to comply with legal obligations, complete a transaction, prevent fraud, protect rights, or establish or defend legal claims.
              </p>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Submitting a Privacy Request</h3>
                <p>You may submit a request by contacting:</p>
                <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#eae6db] space-y-2 text-sm">
                  <p><strong>Email:</strong> <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline">info@solo360.co</a></p>
                  <p><strong>Suggested subject line:</strong> Privacy Request</p>
                  <p className="mt-3"><strong>Mail:</strong></p>
                  <address className="not-italic text-zinc-600 pl-4 border-l border-zinc-300">
                    Solo360<br />
                    1550 W Horizon Ridge Pkwy<br />
                    Ste R #3177<br />
                    Henderson, NV 89012<br />
                    United States
                  </address>
                </div>
                <p>
                  Please describe the request and identify the email address or other information associated with your interaction with Solo360.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Verification</h3>
                <p>
                  We may need to verify your identity before completing a request. Verification may require confirming information already maintained by Solo360.
                </p>
                <p>
                  We will not request more information than reasonably necessary to verify and process the request.
                </p>
                <p>
                  An authorized agent may submit a request where permitted by law. We may request proof that the agent is authorized to act on your behalf and may ask you to confirm your identity directly.
                </p>
                <p>
                  We will respond within the period required by applicable law. Where legally permitted, we may extend the response period and will provide notice of the extension.
                </p>
              </div>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 16. California Privacy Rights */}
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">16. California Privacy Rights</h2>
              <p>
                This section applies to California residents only to the extent Solo360 is subject to the California Consumer Privacy Act, as amended by the California Privacy Rights Act, or voluntarily extends comparable rights.
              </p>
              <p>California residents may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Know the categories of personal information collected</li>
                <li>Know the categories of sources from which personal information is collected</li>
                <li>Know the purposes for collecting, using, selling, or sharing personal information</li>
                <li>Know the categories of third parties to which information is disclosed</li>
                <li>Access specific pieces of personal information</li>
                <li>Correct inaccurate personal information</li>
                <li>Delete personal information, subject to exceptions</li>
                <li>Opt out of the sale or sharing of personal information</li>
                <li>Limit certain uses or disclosures of sensitive personal information</li>
                <li>Receive information in a portable format</li>
                <li>Receive equal treatment when exercising privacy rights</li>
              </ul>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-4">
                <h3 className="font-bold text-zinc-900">Categories of Personal Information</h3>
                <p>
                  Depending on your interaction with Solo360, we may collect the following categories of personal information:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#eae6db] text-sm text-left">
                    <thead>
                      <tr className="text-zinc-900 border-b border-[#eae6db]">
                        <th className="py-3 font-semibold pr-4">Category</th>
                        <th className="py-3 font-semibold">Examples</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eae6db]/60 text-zinc-600">
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Identifiers</td>
                        <td className="py-3">Name, email address, telephone number, business address, Internet Protocol address, cookie identifier, and account identifier</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Customer-record information</td>
                        <td className="py-3">Contact details, billing contact information, correspondence, and service information</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Commercial information</td>
                        <td className="py-3">Services requested, transaction records, project interests, purchasing history, and marketing budget information</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Internet or network activity</td>
                        <td className="py-3">Browsing activity, pages viewed, links clicked, referral sources, website interactions, and advertising engagement</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Geolocation information</td>
                        <td className="py-3">General or approximate location derived from an Internet Protocol address</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Professional information</td>
                        <td className="py-3">Company name, job title, professional role, and business contact information</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Inferences</td>
                        <td className="py-3">Possible interests or preferences inferred from website activity or marketing engagement</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-zinc-900 pr-4">Communications</td>
                        <td className="py-3">Emails, messages, call information, form submissions, and customer-service correspondence</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-zinc-500 italic mt-2">
                  Solo360 does not intentionally collect sensitive personal information through its general website forms. Payment credentials may be collected directly by a payment processor rather than Solo360.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Sources of Personal Information</h3>
                <p>We may collect California personal information from:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You</li>
                  <li>Your browser or device</li>
                  <li>Clients and business partners</li>
                  <li>Advertising and analytics providers</li>
                  <li>Social media platforms</li>
                  <li>Service providers</li>
                  <li>Publicly available business sources</li>
                  <li>Referral sources</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Business and Commercial Purposes</h3>
                <p>
                  We may use and disclose California personal information for the business and commercial purposes described throughout this Privacy Policy, including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Providing and improving services</li>
                  <li>Responding to inquiries</li>
                  <li>Processing transactions</li>
                  <li>Managing client relationships</li>
                  <li>Analytics and measurement</li>
                  <li>Advertising and marketing</li>
                  <li>Security and fraud prevention</li>
                  <li>Legal and regulatory compliance</li>
                  <li>Internal administration</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Sale or Sharing</h3>
                <p>We do not sell personal information for monetary consideration.</p>
                <p>
                  If advertising or retargeting technologies are enabled, identifiers and Internet activity may be disclosed to advertising or analytics providers in a way that may constitute sharing under California law.
                </p>
                <p>
                  California residents may submit an opt-out request using the methods described in Section 15.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Sensitive Personal Information</h3>
                <p>
                  Solo360 does not use or disclose sensitive personal information for the purpose of inferring characteristics about individuals unless separately disclosed.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Financial Incentives</h3>
                <p>
                  Solo360 does not currently offer financial incentives or price differences in exchange for personal information.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-brand-gold/30 space-y-3">
                <h3 className="font-bold text-zinc-900">Nondiscrimination</h3>
                <p>
                  We will not unlawfully discriminate against you for exercising an applicable California privacy right.
                </p>
              </div>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 17. Nevada Privacy Rights */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">17. Nevada Privacy Rights</h2>
              <p>
                Nevada law may provide Nevada consumers with the right to direct certain website operators not to sell covered information for monetary consideration.
              </p>
              <p>
                Solo360 does not sell covered information for monetary consideration as part of its ordinary business operations.
              </p>
              <p>
                Nevada consumers may nevertheless submit a verified request directing Solo360 not to make a future sale of covered information by emailing:
              </p>
              <p className="font-semibold">
                <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline">info@solo360.co</a>
              </p>
              <p>
                Use the subject line “Nevada Privacy Request” and provide sufficient information for us to reasonably verify and process the request.
              </p>
              <p>
                Nevada’s definition of a sale may differ from definitions used by California and other jurisdictions.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 18. EEA, United Kingdom, and International Privacy Rights */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">18. EEA, United Kingdom, and International Privacy Rights</h2>
              <p>
                If you are located in the European Economic Area, United Kingdom, Switzerland, or another jurisdiction with similar privacy laws, you may have rights to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion</li>
                <li>Restrict processing</li>
                <li>Object to processing based on legitimate interests</li>
                <li>Object to direct marketing</li>
                <li>Receive portable information</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint with a supervisory authority</li>
                <li>Receive information about international transfers</li>
                <li>Exercise rights relating to certain automated decisions</li>
              </ul>
              <p className="font-bold text-zinc-900">
                You have the right to object at any time to the use of your personal information for direct marketing.
              </p>
              <p>
                Solo360 is based in the United States. When you provide personal information to Solo360, information may be transferred to, stored in, or processed in the United States and other countries where our service providers operate.
              </p>
              <p>
                Where required by applicable law, Solo360 and its providers may rely on recognized safeguards for international transfers, such as:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>An adequacy decision</li>
                <li>Standard contractual clauses</li>
                <li>The United Kingdom International Data Transfer Agreement or Addendum</li>
                <li>Another legally recognized transfer mechanism</li>
                <li>A permitted statutory exception</li>
              </ul>
              <p>
                You may request additional information about applicable transfer safeguards by contacting <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline font-semibold">info@solo360.co</a>.
              </p>
              <p>
                You may also lodge a complaint with the data protection authority responsible for the country or region where you live or work. We encourage you to contact us first so we can attempt to address the concern.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 19. Information Processed on Behalf of Clients */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">19. Information Processed on Behalf of Clients</h2>
              <p>
                As a marketing and consulting provider, Solo360 may process personal information on behalf of clients while providing services such as:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advertising management</li>
                <li>Website development</li>
                <li>Analytics</li>
                <li>Lead generation</li>
                <li>Customer relationship management</li>
                <li>Email marketing</li>
                <li>Marketing automation</li>
                <li>Call tracking</li>
                <li>Conversion tracking</li>
                <li>Campaign reporting</li>
              </ul>
              <p>
                When Solo360 processes information solely under a client’s instructions, the client generally determines why and how the information is processed.
              </p>
              <p>
                Requests concerning information controlled by one of our clients should generally be directed to that client. We may assist clients with privacy requests as required by contract or applicable law.
              </p>
              <p>
                This Privacy Policy primarily describes information Solo360 controls for its own website, operations, and business relationships.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 20. Third-Party Websites and Services */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">20. Third-Party Websites and Services</h2>
              <p>
                Our website may contain links to websites, platforms, scheduling tools, social media services, payment services, or other third-party resources.
              </p>
              <p>
                Solo360 does not control the privacy, security, or content practices of third parties. This Privacy Policy does not apply to information collected directly by a third party under its own terms or privacy policy.
              </p>
              <p>
                Review the privacy policies of third-party services before providing personal information.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 21. Children’s Privacy */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">21. Children’s Privacy</h2>
              <p>
                Our website and services are intended for businesses and adults. They are not directed to children under 13 years of age, and we do not knowingly collect personal information from children under 13.
              </p>
              <p>
                If you believe a child has provided personal information to us, contact <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline font-semibold">info@solo360.co</a>. We will review the request and take appropriate action.
              </p>
              <p>
                We do not knowingly sell or share personal information belonging to individuals under 16 years of age.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 22. Changes to This Privacy Policy */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">22. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Changes to our website or services</li>
                <li>New technologies or service providers</li>
                <li>Changes to our information practices</li>
                <li>Changes to legal or regulatory requirements</li>
                <li>Business or organizational changes</li>
              </ul>
              <p>
                When we update the policy, we will revise the effective date at the top.
              </p>
              <p>
                When required by law, we may provide additional notice of material changes through the website, by email, or through another appropriate method.
              </p>
              <p>
                Your continued use of the website after an updated policy becomes effective is subject to the updated policy, to the extent permitted by law.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 23. Contact Solo360 */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">23. Contact Solo360</h2>
              <p>Questions, concerns, complaints, or privacy requests may be directed to:</p>
              <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#eae6db] space-y-2 text-sm">
                <p><strong>Solo360</strong></p>
                <address className="not-italic text-zinc-600 pl-4 border-l border-zinc-300 space-y-1">
                  1550 W Horizon Ridge Pkwy<br />
                  Ste R #3177<br />
                  Henderson, NV 89012<br />
                  United States
                </address>
                <p className="mt-3"><strong>Email:</strong> <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline">info@solo360.co</a></p>
                <p><strong>Website:</strong> <a href="https://solo360.co/" className="text-brand-gold-dark hover:underline">https://solo360.co/</a></p>
              </div>
            </div>
          </div>

          {/* ── CTA Strip ── */}
          <div className="mt-10 sm:mt-16 rounded-2xl bg-brand-dark border border-zinc-800 p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8">
            <div className="min-w-0">
              <p className="text-[10px] font-extrabold tracking-widest text-brand-gold uppercase mb-1.5">
                Questions?
              </p>
              <p className="text-white font-semibold text-sm sm:text-base leading-snug">
                We are happy to clarify anything.
              </p>
            </div>
            <a
              href="mailto:info@solo360.co"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand-gold px-6 sm:px-8 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:bg-brand-gold-dark hover:scale-[1.02] shrink-0 whitespace-nowrap"
            >
              Email Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Solo 360 Digital Growth",
  description:
    "Read the Terms and Conditions governing use of Solo 360 Digital Growth's website and services.",
};

export default function TermsAndConditions() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-7 max-w-lg">
              Please read these terms carefully before using our website or engaging our services.
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
            <span className="text-zinc-600 truncate">Terms &amp; Conditions</span>
          </nav>

          {/* Legal Notice */}
          <div 
            className="mb-10 p-6 rounded-2xl border border-amber-300 bg-amber-50 text-sm leading-6 font-medium"
            style={{ color: '#78350f', backgroundColor: '#fdf6e2', borderColor: '#f5d06c' }}
          >
            <strong className="font-bold text-amber-950">Important Legal Notice:</strong> These Terms and Conditions are a general informational draft and do not constitute legal advice. They should be reviewed by a qualified attorney before publication, especially before Solo360 accepts online payments, offers subscriptions, provides customer accounts, or introduces additional website functionality.
          </div>

          <div className="bg-white rounded-2xl border border-[#eae6db] p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-zinc-700 text-sm sm:text-base leading-7">
            {/* 1. Introduction */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">1. Introduction</h2>
              <p>Welcome to Solo360.</p>
              <p>These Terms and Conditions, also referred to as the “Terms,” govern your access to and use of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The Solo360 website located at <a href="https://solo360.co/" className="text-brand-gold-dark hover:underline font-medium">https://solo360.co/</a></li>
                <li>Any webpages, landing pages, forms, scheduling tools, resources, downloads, or other features operated by Solo360</li>
                <li>Any content, information, materials, or communications made available through the website</li>
              </ul>
              <p>
                “Solo360,” “we,” “us,” and “our” refer to Solo360, a Nevada limited liability company.
              </p>
              <p>
                “You” and “your” refer to each website visitor, prospective client, client, business representative, or other individual who accesses or uses the website.
              </p>
              <p>
                By accessing or using the website, you acknowledge that you have read, understood, and agree to these Terms and our Privacy Policy.
              </p>
              <p>
                If you do not agree to these Terms, you should not access or use the website.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 2. About Solo360 */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">2. About Solo360</h2>
              <p>Solo360 provides services that may include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Growth and marketing strategy</li>
                <li>Marketing consulting</li>
                <li>Go-to-market planning</li>
                <li>Digital advertising strategy and management</li>
                <li>Website strategy, design, and development</li>
                <li>Search engine optimization</li>
                <li>Customer acquisition strategy</li>
                <li>Creative strategy and development</li>
                <li>Analytics and conversion tracking</li>
                <li>Customer relationship management and marketing automation</li>
                <li>Social media and content strategy</li>
                <li>Lead-generation support</li>
                <li>Marketing implementation and execution</li>
                <li>Related advisory, creative, and technical services</li>
              </ul>
              <p>
                Descriptions of services on the website are provided for general informational and marketing purposes. The availability, scope, timing, price, and specific terms of any service will be determined through a separate written proposal, statement of work, order form, invoice, service agreement, or other written agreement.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 3. Eligibility */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">3. Eligibility</h2>
              <p>You may use the website only if:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You are at least 18 years old</li>
                <li>You have the legal capacity to agree to these Terms</li>
                <li>Your use of the website complies with applicable laws</li>
                <li>You are not prohibited from using the website under applicable law</li>
              </ul>
              <p>
                If you use the website on behalf of a company, organization, or other legal entity, you represent that you have authority to act on behalf of and bind that entity.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 4. Website Terms Versus Client Agreements */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">4. Website Terms Versus Client Agreements</h2>
              <p>These Terms govern general access to and use of the Solo360 website.</p>
              <p>
                They do not, by themselves, create a consulting, agency, contractor, fiduciary, employment, partnership, or client relationship between you and Solo360.
              </p>
              <p>
                Any paid services provided by Solo360 will generally be governed by a separate written agreement, which may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A proposal</li>
                <li>A statement of work</li>
                <li>A master services agreement</li>
                <li>An order form</li>
                <li>A project agreement</li>
                <li>An invoice</li>
                <li>A written email agreement</li>
                <li>Another contract accepted by both parties</li>
              </ul>
              <p>
                If there is a conflict between these Terms and a separate written client agreement, the separate written client agreement will control with respect to the services covered by that agreement.
              </p>
              <p>
                Submitting a website form, scheduling a consultation, participating in a discovery call, or receiving a proposal does not guarantee that Solo360 will accept an engagement or provide services.
              </p>
              <p>
                Solo360 may accept or decline a prospective engagement at its discretion, subject to applicable law.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 5. No Guarantee of Engagement */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">5. No Guarantee of Engagement</h2>
              <p>Contacting Solo360 does not create a professional or contractual relationship.</p>
              <p>
                A client relationship begins only when Solo360 and the client enter into a mutually accepted written agreement or when Solo360 otherwise confirms the engagement in writing.
              </p>
              <p>Until that occurs:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Solo360 is not required to provide services</li>
                <li>Solo360 is not required to reserve availability</li>
                <li>Solo360 is not required to maintain submitted information as confidential unless a separate confidentiality agreement applies</li>
                <li>You should not rely on preliminary communications as a final strategy, recommendation, commitment, or guarantee</li>
              </ul>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 6. Consultations and Strategy Calls */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">6. Consultations and Strategy Calls</h2>
              <p>The website may allow users to request or schedule consultations, discovery calls, or strategy calls.</p>
              <p>Scheduling a call does not guarantee:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Acceptance as a client</li>
                <li>Availability for a specific project</li>
                <li>Delivery of a complete strategy</li>
                <li>Delivery of professional services</li>
                <li>A specific marketing result</li>
                <li>A proposal or offer to perform work</li>
              </ul>
              <p>
                Solo360 may reschedule, cancel, shorten, or decline a meeting when reasonably necessary.
              </p>
              <p>
                You are responsible for providing accurate scheduling information and attending at the agreed time.
              </p>
              <p>
                Any cancellation, rescheduling, deposit, or no-show terms for paid consultations will be disclosed before purchase or included in a separate written agreement.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 7. Website Information Is General */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">7. Website Information Is General</h2>
              <p>Content published on the website is provided for general informational, educational, and promotional purposes.</p>
              <p>Website content does not constitute:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Legal advice</li>
                <li>Financial advice</li>
                <li>Tax advice</li>
                <li>Accounting advice</li>
                <li>Investment advice</li>
                <li>Employment advice</li>
                <li>Regulatory advice</li>
                <li>A guaranteed marketing strategy</li>
                <li>A binding professional recommendation</li>
                <li>A substitute for advice from a qualified professional familiar with your circumstances</li>
              </ul>
              <p>
                Marketing and business decisions depend on numerous factors, including market conditions, competition, budget, implementation, timing, customer demand, technology, platform policies, and business operations.
              </p>
              <p>
                You are responsible for evaluating information before relying on it or using it to make a business decision.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 8. No Guarantee of Marketing Results */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">8. No Guarantee of Marketing Results</h2>
              <p>
                Solo360 does not guarantee specific marketing, advertising, financial, operational, or business outcomes unless an express written guarantee is included in a separate agreement signed by an authorized representative of Solo360.
              </p>
              <p>Solo360 does not guarantee:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Revenue</li>
                <li>Profit</li>
                <li>Return on investment</li>
                <li>Advertising performance</li>
                <li>Lead volume</li>
                <li>Lead quality</li>
                <li>Customer acquisition cost</li>
                <li>Cost per lead</li>
                <li>Cost per click</li>
                <li>Search engine rankings</li>
                <li>Website traffic</li>
                <li>Conversion rates</li>
                <li>Social media growth</li>
                <li>Audience growth</li>
                <li>Funding</li>
                <li>Sales</li>
                <li>Business growth</li>
                <li>Platform approval</li>
                <li>Account availability</li>
                <li>Campaign approval</li>
                <li>Project completion by a particular date unless contractually agreed</li>
                <li>Any other specific result</li>
              </ul>
              <p>Marketing performance may be affected by circumstances outside Solo360’s control, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Changes to advertising platforms</li>
                <li>Search engine algorithm changes</li>
                <li>Platform outages</li>
                <li>Account restrictions or suspensions</li>
                <li>Market demand</li>
                <li>Competitor activity</li>
                <li>Client budgets</li>
                <li>Client responsiveness</li>
                <li>Sales processes</li>
                <li>Pricing</li>
                <li>Website performance</li>
                <li>Product-market fit</li>
                <li>Customer reviews</li>
                <li>Economic conditions</li>
                <li>Regulatory requirements</li>
                <li>Third-party technology</li>
                <li>Client implementation decisions</li>
              </ul>
              <p>
                Past performance, examples, case studies, projections, forecasts, testimonials, and estimated results are not guarantees of future performance.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 9. Estimates, Proposals, and Recommendations */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">9. Estimates, Proposals, and Recommendations</h2>
              <p>
                Any estimate, budget, timeline, forecast, projection, audit, recommendation, or preliminary strategy provided through the website or during an initial conversation is based on the information available at that time.
              </p>
              <p>Such information may change after:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Additional discovery</li>
                <li>Access to advertising or analytics accounts</li>
                <li>Technical review</li>
                <li>Website review</li>
                <li>Market research</li>
                <li>Competitor research</li>
                <li>Project scoping</li>
                <li>Identification of third-party costs</li>
                <li>Changes to client requirements</li>
                <li>Changes in platform requirements</li>
              </ul>
              <p>
                Unless expressly stated in a signed written agreement, estimates and recommendations are not binding commitments.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 10. Pricing, Payments, and Refunds */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">10. Pricing, Payments, and Refunds</h2>
              <p>
                General prices displayed on the website, if any, may be estimates, starting prices, promotional prices, or examples.
              </p>
              <p>Final pricing may depend on:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Project scope</li>
                <li>Required services</li>
                <li>Project complexity</li>
                <li>Deliverables</li>
                <li>Advertising spend</li>
                <li>Third-party expenses</li>
                <li>Number of accounts or locations</li>
                <li>Timeline</li>
                <li>Technical requirements</li>
                <li>Revisions</li>
                <li>Ongoing support</li>
                <li>Additional client requests</li>
              </ul>
              <p>
                Payment schedules, deposits, late fees, recurring fees, cancellation terms, refund eligibility, and other financial terms will be specified in the applicable proposal, invoice, checkout page, order form, or service agreement.
              </p>
              <p>Unless expressly stated otherwise in writing:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Submitting payment does not expand the agreed project scope</li>
                <li>Third-party expenses may be separate from Solo360’s fees</li>
                <li>Advertising spend is separate from management or consulting fees</li>
                <li>Platform fees, software subscriptions, media expenses, domain fees, hosting fees, contractor costs, and production expenses may be billed separately</li>
                <li>Refund availability will be determined by the written terms governing the applicable purchase or engagement</li>
              </ul>
              <p>
                Solo360 does not promise a refund unless a refund right is expressly provided in an applicable written agreement or required by law.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 11. Third-Party Costs and Services */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">11. Third-Party Costs and Services</h2>
              <p>Solo360 may recommend, use, integrate, or coordinate third-party products and services, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Advertising platforms</li>
                <li>Website hosting</li>
                <li>Domain registration</li>
                <li>Analytics platforms</li>
                <li>Customer relationship management systems</li>
                <li>Scheduling platforms</li>
                <li>Email marketing platforms</li>
                <li>Payment processors</li>
                <li>Call-tracking providers</li>
                <li>Automation tools</li>
                <li>Software subscriptions</li>
                <li>Freelancers</li>
                <li>Designers</li>
                <li>Developers</li>
                <li>Photographers</li>
                <li>Videographers</li>
                <li>Media vendors</li>
                <li>Creative production vendors</li>
                <li>Other contractors and technology providers</li>
              </ul>
              <p>
                Unless expressly included in a written agreement, third-party charges are separate from Solo360’s fees.
              </p>
              <p>
                You may be required to agree to the third party’s own terms, privacy policies, pricing, and usage rules.
              </p>
              <p>Solo360 does not control and is not responsible for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Changes to third-party prices</li>
                <li>Platform outages</li>
                <li>Software errors</li>
                <li>Platform-policy changes</li>
                <li>Account restrictions</li>
                <li>Account suspensions</li>
                <li>Data loss caused by a third party</li>
                <li>Service discontinuation</li>
                <li>Security incidents involving a third party</li>
                <li>Third-party contract disputes</li>
                <li>Decisions made by advertising platforms, search engines, hosting providers, or other outside services</li>
              </ul>
              <p>
                Solo360’s recommendation or use of a third-party service does not constitute a guarantee or warranty regarding that service.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 12. Client and User Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">12. Client and User Responsibilities</h2>
              <p>When interacting with Solo360 or requesting services, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Correct information that becomes inaccurate</li>
                <li>Communicate requirements and deadlines clearly</li>
                <li>Obtain necessary internal approvals</li>
                <li>Provide requested materials and access in a timely manner</li>
                <li>Review deliverables and communications</li>
                <li>Comply with applicable laws and industry regulations</li>
                <li>Maintain appropriate licenses, permissions, disclosures, and consents</li>
                <li>Protect account credentials and administrative access</li>
                <li>Maintain backups of important business information</li>
                <li>Pay applicable fees and third-party expenses</li>
                <li>Avoid providing unlawful, misleading, infringing, or harmful materials</li>
                <li>Avoid instructing Solo360 to engage in unlawful or deceptive conduct</li>
              </ul>
              <p>
                You are responsible for the accuracy, legality, and ownership of materials you provide to Solo360. These materials may include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Logos</li>
                <li>Photographs</li>
                <li>Videos</li>
                <li>Testimonials</li>
                <li>Reviews</li>
                <li>Customer information</li>
                <li>Advertising claims</li>
                <li>Product descriptions</li>
                <li>Service descriptions</li>
                <li>Pricing information</li>
                <li>Trademarks</li>
                <li>Music</li>
                <li>Written content</li>
                <li>Contact lists</li>
                <li>Customer lists</li>
                <li>Website credentials</li>
                <li>Analytics information</li>
                <li>Other business materials</li>
              </ul>
              <p>
                You represent that you have the necessary rights, permissions, licenses, and lawful basis to provide and use those materials.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 13. User Submissions */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">13. User Submissions</h2>
              <p>The website may allow you to submit:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contact information</li>
                <li>Business information</li>
                <li>Project descriptions</li>
                <li>Messages</li>
                <li>Documents</li>
                <li>Images</li>
                <li>Files</li>
                <li>Feedback</li>
                <li>Reviews</li>
                <li>Testimonials</li>
                <li>Other content</li>
              </ul>
              <p>
                You retain ownership of materials you submit, subject to the rights you grant in these Terms.
              </p>
              <p>
                By submitting material, you grant Solo360 a limited, nonexclusive right to access, store, copy, process, and use the material as reasonably necessary to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to your request</li>
                <li>Evaluate a potential engagement</li>
                <li>Communicate with you</li>
                <li>Prepare a proposal</li>
                <li>Provide requested services</li>
                <li>Operate and protect the website</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                Solo360 will not publicly use your name, logo, testimonial, case study, confidential work, or other identifying client material for promotional purposes unless permitted by a separate agreement, approved by you, or otherwise permitted by law.
              </p>
              <p>You agree not to submit content that:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Violates applicable law</li>
                <li>Infringes intellectual property rights</li>
                <li>Violates privacy or publicity rights</li>
                <li>Contains malware or harmful code</li>
                <li>Is fraudulent, deceptive, defamatory, threatening, or harassing</li>
                <li>Contains information you are not authorized to disclose</li>
                <li>Attempts to disrupt or compromise the website</li>
                <li>Is submitted for an unlawful or abusive purpose</li>
              </ul>
              <p>
                Solo360 may remove, disregard, restrict, or report submissions that violate these Terms or applicable law.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 14. Confidential and Sensitive Information */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">14. Confidential and Sensitive Information</h2>
              <p>General website forms and initial inquiries are not intended for highly confidential or sensitive information.</p>
              <p>Do not submit through a general website form:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Passwords</li>
                <li>Complete payment card information</li>
                <li>Social Security numbers</li>
                <li>Government identification numbers</li>
                <li>Medical records</li>
                <li>Protected health information</li>
                <li>Trade secrets</li>
                <li>Private customer databases</li>
                <li>Confidential legal information</li>
                <li>Financial account credentials</li>
                <li>Other highly sensitive information</li>
              </ul>
              <p>
                Submitting information through the website does not create an attorney-client, fiduciary, or other privileged relationship.
              </p>
              <p>
                If confidentiality is important, request an appropriate confidentiality agreement before providing proprietary or sensitive business information.
              </p>
              <p>
                Any confidentiality obligations relating to a client engagement should be addressed in a separate written agreement.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 15. Acceptable Use */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">15. Acceptable Use</h2>
              <p>You may use the website only for lawful purposes.</p>
              <p>You may not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Violate any law, regulation, court order, or third-party right</li>
                <li>Attempt to gain unauthorized access to the website or related systems</li>
                <li>Interfere with website performance or security</li>
                <li>Upload malware, viruses, malicious code, or destructive files</li>
                <li>Use bots, scrapers, crawlers, or automated systems without permission</li>
                <li>Collect information about website users without authorization</li>
                <li>Impersonate another person or organization</li>
                <li>Submit false, misleading, or fraudulent information</li>
                <li>Use the website to send spam or unsolicited communications</li>
                <li>Attempt to test or bypass website security</li>
                <li>Copy or reproduce website content for commercial use without permission</li>
                <li>Frame, mirror, or republish substantial portions of the website</li>
                <li>Reverse engineer website software where prohibited</li>
                <li>Use website content to create a competing service or misleading representation</li>
                <li>Use Solo360’s name, branding, or materials in a way that suggests an unauthorized relationship</li>
                <li>Engage in conduct that places an unreasonable burden on website infrastructure</li>
              </ul>
              <p>
                Solo360 may restrict or terminate access to the website when it reasonably believes these Terms have been violated.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 16. Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">16. Intellectual Property</h2>
              <p>Unless otherwise indicated, the website and its original content are owned by or licensed to Solo360.</p>
              <p>Protected materials may include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The Solo360 name</li>
                <li>Logos</li>
                <li>Branding</li>
                <li>Website designs</li>
                <li>Graphics</li>
                <li>Illustrations</li>
                <li>Written copy</li>
                <li>Articles</li>
                <li>Guides</li>
                <li>Frameworks</li>
                <li>Presentations</li>
                <li>Videos</li>
                <li>Photographs</li>
                <li>Downloads</li>
                <li>Templates</li>
                <li>Processes</li>
                <li>Strategy materials</li>
                <li>Software</li>
                <li>Code</li>
                <li>Page layouts</li>
                <li>Other website content</li>
              </ul>
              <p>
                These materials may be protected by copyright, trademark, trade-secret, and other intellectual-property laws.
              </p>
              <p>
                Subject to these Terms, Solo360 grants you a limited, revocable, nonexclusive, nontransferable license to access and use the website for personal or internal business evaluation purposes.
              </p>
              <p>
                You may not reproduce, modify, distribute, sell, license, publicly display, republish, or commercially exploit Solo360 content without prior written permission.
              </p>
              <p>
                Nothing in these Terms transfers ownership of Solo360’s intellectual property to you.
              </p>
              <p>
                Client ownership and licensing rights for paid deliverables will be determined by the applicable service agreement.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 17. Trademarks and Third-Party Materials */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">17. Trademarks and Third-Party Materials</h2>
              <p>
                Solo360’s name, logo, service names, and related branding may not be used without prior written permission.
              </p>
              <p>The website may display:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Client logos</li>
                <li>Platform logos</li>
                <li>Partner names</li>
                <li>Technology-provider names</li>
                <li>Screenshots</li>
                <li>Case-study materials</li>
                <li>Third-party trademarks</li>
                <li>Licensed media</li>
              </ul>
              <p>Those materials remain the property of their respective owners.</p>
              <p>
                References to third-party companies, platforms, or products do not necessarily imply endorsement, sponsorship, partnership, or affiliation.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 18. Testimonials, Reviews, and Case Studies */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">18. Testimonials, Reviews, and Case Studies</h2>
              <p>The website may include testimonials, reviews, examples, portfolio materials, or case studies.</p>
              <p>
                Testimonials and case studies reflect individual experiences and do not guarantee that another person or business will achieve similar results.
              </p>
              <p>Results may vary based on factors including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Industry</li>
                <li>Budget</li>
                <li>Market conditions</li>
                <li>Offer quality</li>
                <li>Competition</li>
                <li>Sales process</li>
                <li>Implementation</li>
                <li>Timing</li>
                <li>Available data</li>
                <li>Client participation</li>
              </ul>
              <p>
                Solo360 may edit testimonials for spelling, grammar, clarity, formatting, or length without intentionally changing their meaning.
              </p>
              <p>
                Solo360 will not knowingly publish a fabricated testimonial or materially misrepresent a client’s experience.
              </p>
              <p>
                Where required, material relationships, compensation, incentives, or other relevant connections associated with an endorsement will be disclosed.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 19. Third-Party Links */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">19. Third-Party Links</h2>
              <p>
                The website may link to third-party websites, platforms, social media pages, scheduling tools, payment processors, articles, applications, or resources.
              </p>
              <p>These links are provided for convenience and informational purposes.</p>
              <p>Solo360 does not control third-party websites and is not responsible for their:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Content</li>
                <li>Availability</li>
                <li>Security</li>
                <li>Accuracy</li>
                <li>Privacy practices</li>
                <li>Terms</li>
                <li>Products</li>
                <li>Services</li>
                <li>Advertising</li>
                <li>Business practices</li>
              </ul>
              <p>
                Your use of a third-party website is governed by that third party’s terms and privacy policy.
              </p>
              <p>
                The presence of a link does not necessarily imply that Solo360 endorses or guarantees the third party.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 20. Website Availability and Changes */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">20. Website Availability and Changes</h2>
              <p>Solo360 may modify, suspend, restrict, replace, or discontinue any portion of the website at any time.</p>
              <p>We do not guarantee that the website will:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Always be available</li>
                <li>Operate without interruption</li>
                <li>Be free of errors</li>
                <li>Be free from malicious components</li>
                <li>Remain compatible with every browser or device</li>
                <li>Preserve every feature or piece of content</li>
                <li>Be updated on a particular schedule</li>
              </ul>
              <p>
                Website maintenance, hosting issues, technical problems, security concerns, third-party outages, and other circumstances may affect availability.
              </p>
              <p>
                Solo360 is not liable for losses resulting solely from temporary website unavailability, subject to applicable law.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 21. Accuracy of Website Content */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">21. Accuracy of Website Content</h2>
              <p>
                Solo360 makes reasonable efforts to provide useful and accurate website information. However, website content may contain:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Errors</li>
                <li>Omissions</li>
                <li>Outdated information</li>
                <li>Incomplete descriptions</li>
                <li>Typographical mistakes</li>
                <li>Technical inaccuracies</li>
              </ul>
              <p>Solo360 may update or correct website information without prior notice.</p>
              <p>You should confirm important information directly with Solo360 before relying on it.</p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 22. Privacy */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">22. Privacy</h2>
              <p>Your use of the website is also governed by the Solo360 Privacy Policy.</p>
              <p>The Privacy Policy explains how Solo360 may collect, use, disclose, retain, and protect personal information.</p>
              <p>
                By using the website, you acknowledge that online transmissions and storage systems are not completely secure.
              </p>
              <p>Do not submit information you are not comfortable transmitting electronically.</p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 23. Electronic Communications */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">23. Electronic Communications</h2>
              <p>
                By contacting Solo360 electronically, submitting a form, scheduling a call, accepting a proposal electronically, or otherwise using electronic communication methods, you consent to receiving relevant communications electronically.
              </p>
              <p>Electronic communications may include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Emails</li>
                <li>Proposals</li>
                <li>Agreements</li>
                <li>Invoices</li>
                <li>Payment confirmations</li>
                <li>Scheduling notices</li>
                <li>Service communications</li>
                <li>Policy updates</li>
                <li>Other business records</li>
              </ul>
              <p>
                You are responsible for maintaining a valid email address and monitoring communications sent to the contact information you provide.
              </p>
              <p>
                Where permitted by law, electronic records and electronic acceptance may satisfy requirements that communications or agreements be in writing.
              </p>
              <p>
                Marketing communications are subject to applicable consent and unsubscribe requirements.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 24. Disclaimer of Warranties */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">24. Disclaimer of Warranties</h2>
              <p className="uppercase font-bold text-xs tracking-wider text-zinc-800">
                TO THE FULLEST EXTENT PERMITTED BY LAW, THE WEBSITE AND ITS CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.
              </p>
              <p className="uppercase font-bold text-xs tracking-wider text-zinc-800">
                SOLO360 DISCLAIMS ALL EXPRESS AND IMPLIED WARRANTIES RELATING TO THE WEBSITE, INCLUDING IMPLIED WARRANTIES OF:
              </p>
              <ul className="list-disc pl-5 space-y-2 uppercase font-semibold text-xs tracking-wider text-zinc-600">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>TITLE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY</li>
                <li>AVAILABILITY</li>
                <li>SECURITY</li>
                <li>RELIABILITY</li>
              </ul>
              <p>SOLO360 DOES NOT WARRANT THAT:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>THE WEBSITE WILL MEET YOUR REQUIREMENTS</li>
                <li>WEBSITE CONTENT WILL BE COMPLETE OR ERROR-FREE</li>
                <li>THE WEBSITE WILL ALWAYS BE AVAILABLE</li>
                <li>DEFECTS WILL BE CORRECTED</li>
                <li>THE WEBSITE WILL BE FREE FROM VIRUSES OR HARMFUL COMPONENTS</li>
                <li>INFORMATION OBTAINED THROUGH THE WEBSITE WILL PRODUCE A PARTICULAR RESULT</li>
              </ul>
              <p>
                Some jurisdictions do not permit certain warranty exclusions. In those jurisdictions, the exclusions apply only to the extent legally permitted.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 25. Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">25. Limitation of Liability</h2>
              <p className="uppercase font-bold text-xs tracking-wider text-zinc-800">
                TO THE FULLEST EXTENT PERMITTED BY LAW, SOLO360 AND ITS OWNERS, MEMBERS, MANAGERS, EMPLOYEES, CONTRACTORS, REPRESENTATIVES, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>USE OF OR INABILITY TO USE THE WEBSITE</li>
                <li>RELIANCE ON WEBSITE CONTENT</li>
                <li>LOSS OF DATA</li>
                <li>LOSS OF REVENUE</li>
                <li>LOSS OF PROFITS</li>
                <li>LOSS OF BUSINESS OPPORTUNITY</li>
                <li>BUSINESS INTERRUPTION</li>
                <li>REPUTATIONAL HARM</li>
                <li>THIRD-PARTY SERVICES</li>
                <li>UNAUTHORIZED ACCESS</li>
                <li>WEBSITE ERRORS OR OUTAGES</li>
              </ul>
              <p>
                This limitation applies regardless of the legal theory asserted and even if Solo360 was advised that damages were possible.
              </p>
              <p>
                To the fullest extent permitted by law, Solo360’s total liability arising solely from your use of the publicly available website will not exceed the greater of:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The amount you paid specifically to access the website during the six months preceding the event giving rise to the claim; or</li>
                <li>One hundred U.S. dollars ($100)</li>
              </ul>
              <p>
                This limitation does not replace or modify liability terms contained in a separate written client agreement.
              </p>
              <p>
                Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 26. Indemnification */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">26. Indemnification</h2>
              <p>
                To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless Solo360 and its owners, members, managers, employees, contractors, representatives, and service providers from claims, damages, liabilities, losses, judgments, penalties, costs, and reasonable legal fees arising from or related to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your misuse of the website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of applicable law</li>
                <li>Your infringement of another person’s rights</li>
                <li>Content or materials you submit</li>
                <li>False or misleading information you provide</li>
                <li>Unauthorized access resulting from your actions</li>
                <li>Instructions you provide to Solo360 that violate applicable law or third-party rights</li>
              </ul>
              <p>
                This section does not require you to indemnify Solo360 for conduct for which indemnification is prohibited by law.
              </p>
              <p>
                Indemnification terms governing paid services may be addressed separately in a client agreement.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 27. Copyright Concerns */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">27. Copyright Concerns</h2>
              <p>Solo360 respects intellectual-property rights.</p>
              <p>If you believe content displayed on the website infringes your copyright, contact:</p>
              <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#eae6db] space-y-2 text-sm">
                <p><strong>Email:</strong> <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline">info@solo360.co</a></p>
                <p><strong>Suggested subject line:</strong> Copyright Notice</p>
                <p className="mt-3"><strong>Mail:</strong></p>
                <address className="not-italic text-zinc-600 pl-4 border-l border-zinc-300">
                  Solo360<br />
                  1550 W Horizon Ridge Pkwy<br />
                  Ste R #3177<br />
                  Henderson, NV 89012<br />
                  United States
                </address>
              </div>
              <p>Your notice should include sufficient information to identify:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The copyrighted work</li>
                <li>The allegedly infringing material</li>
                <li>The location of the material on the website</li>
                <li>Your contact information</li>
                <li>The basis for your claim</li>
                <li>Any authorization under which you are acting</li>
              </ul>
              <p>
                Solo360 may remove or restrict access to disputed material while reviewing a properly submitted notice.
              </p>
              <p>
                This section does not represent that Solo360 has registered a designated Digital Millennium Copyright Act agent with the United States Copyright Office.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 28. International Users */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">28. International Users</h2>
              <p>Solo360 is based in Nevada, United States.</p>
              <p>
                The website may be accessible from other states and countries. Solo360 does not represent that the website or its content is appropriate or legally available in every jurisdiction.
              </p>
              <p>
                If you access the website from outside Nevada or outside the United States, you are responsible for compliance with applicable local laws.
              </p>
              <p>
                Certain consumer-protection or privacy rights may apply regardless of the governing-law provisions below.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 29. Governing Law */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">29. Governing Law</h2>
              <p>
                These Terms and disputes arising from general use of the website will be governed by the laws of the State of Nevada, without regard to conflict-of-law principles.
              </p>
              <p>
                This provision does not eliminate any mandatory legal protection that applies to you under the laws of your place of residence.
              </p>
              <p>
                A separate client agreement may contain different governing-law or dispute-resolution terms.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 30. Informal Dispute Resolution */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">30. Informal Dispute Resolution</h2>
              <p>
                Before filing a legal claim relating to these Terms or the website, you and Solo360 agree to make a reasonable, good-faith attempt to resolve the dispute informally.
              </p>
              <p>A written dispute notice should include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your name and contact information</li>
                <li>A description of the dispute</li>
                <li>Relevant dates</li>
                <li>The outcome you are requesting</li>
                <li>Supporting information reasonably necessary to understand the dispute</li>
              </ul>
              <p>
                Notices to Solo360 should be sent to <a href="mailto:info@solo360.co" className="text-brand-gold-dark hover:underline font-semibold">info@solo360.co</a> with the subject line “Legal Dispute Notice.”
              </p>
              <p>
                The parties will have at least 30 days from receipt of the notice to attempt an informal resolution before initiating a lawsuit, unless immediate action is necessary to prevent harm, preserve a legal right, obtain injunctive relief, or comply with a legal deadline.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 31. Jurisdiction and Venue */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">31. Jurisdiction and Venue</h2>
              <p>
                Unless prohibited by applicable law or modified by a separate written agreement, any legal action arising from these Terms or general use of the website must be brought in a state or federal court with appropriate jurisdiction located in Clark County, Nevada.
              </p>
              <p>
                You and Solo360 consent to the personal jurisdiction of those courts.
              </p>
              <p>
                Nothing in this section prevents either party from seeking appropriate emergency, injunctive, or equitable relief where legally available.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 32. No Waiver */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">32. No Waiver</h2>
              <p>
                A failure by Solo360 to enforce a provision of these Terms does not waive the right to enforce that provision later.
              </p>
              <p>
                A waiver is effective only when it is expressly made in writing by an authorized representative of Solo360.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 33. Severability */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">33. Severability</h2>
              <p>
                If any provision of these Terms is found unlawful, invalid, or unenforceable, that provision will be enforced to the maximum extent legally permitted.
              </p>
              <p>
                The remaining provisions will remain in effect.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 34. Assignment */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">34. Assignment</h2>
              <p>
                You may not assign or transfer your rights or obligations under these Terms without Solo360’s prior written consent.
              </p>
              <p>Solo360 may assign these Terms as part of:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A merger</li>
                <li>An acquisition</li>
                <li>A restructuring</li>
                <li>A sale of assets</li>
                <li>A change in ownership</li>
                <li>A transfer to an affiliated entity</li>
              </ul>
              <p>Any assignment remains subject to applicable law.</p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 35. No Partnership or Agency */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">35. No Partnership or Agency</h2>
              <p>These Terms do not create a:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Partnership</li>
                <li>Joint venture</li>
                <li>Franchise</li>
                <li>Employment relationship</li>
                <li>Fiduciary relationship</li>
                <li>Agency relationship</li>
              </ul>
              <p>
                Neither party has authority to bind the other except as expressly agreed in writing.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 36. Force Majeure */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">36. Force Majeure</h2>
              <p>
                Solo360 will not be responsible for delays, interruptions, or failures caused by circumstances beyond its reasonable control, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Natural disasters</li>
                <li>Severe weather</li>
                <li>Fire</li>
                <li>Utility failures</li>
                <li>Internet outages</li>
                <li>Cyberattacks</li>
                <li>Government action</li>
                <li>Labor disputes</li>
                <li>Public-health emergencies</li>
                <li>War</li>
                <li>Civil unrest</li>
                <li>Platform outages</li>
                <li>Vendor failures</li>
                <li>Supply-chain disruptions</li>
                <li>Other events beyond reasonable control</li>
              </ul>
              <p>
                This section does not excuse payment obligations for services already properly provided.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 37. Changes to These Terms */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">37. Changes to These Terms</h2>
              <p>Solo360 may update these Terms periodically to reflect:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Website changes</li>
                <li>Service changes</li>
                <li>Technology changes</li>
                <li>Business changes</li>
                <li>Legal or regulatory developments</li>
                <li>Security or operational needs</li>
              </ul>
              <p>When these Terms are updated, the effective date at the top will be revised.</p>
              <p>When required by law, Solo360 may provide additional notice of material changes.</p>
              <p>
                Your continued use of the website after updated Terms become effective constitutes acceptance of the updated Terms to the extent permitted by law.
              </p>
              <p>
                Changes to a separately signed client agreement must be made according to that agreement and will not occur merely because these website Terms are updated.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 38. Entire Agreement */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">38. Entire Agreement</h2>
              <p>
                These Terms and the Privacy Policy constitute the entire agreement between you and Solo360 regarding general use of the website.
              </p>
              <p>
                They replace prior discussions or understandings regarding website use.
              </p>
              <p>
                These Terms do not replace any separate proposal, statement of work, invoice, order form, confidentiality agreement, or service agreement governing a paid engagement.
              </p>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 39. Survival */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">39. Survival</h2>
              <p>
                Provisions that logically should continue after termination or discontinuation of website use will survive, including provisions relating to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Intellectual property</li>
                <li>Disclaimers</li>
                <li>Limitation of liability</li>
                <li>Indemnification</li>
                <li>Governing law</li>
                <li>Dispute resolution</li>
                <li>Payment obligations</li>
                <li>Confidentiality</li>
                <li>Ownership</li>
              </ul>
            </div>

            <hr className="border-[#eae6db]" />

            {/* 40. Contact Information */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900">40. Contact Information</h2>
              <p>Questions about these Terms may be directed to:</p>
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
                Need Help?
              </p>
              <p className="text-white font-semibold text-sm sm:text-base leading-snug">
                Have questions about our terms?
              </p>
            </div>
            <a
              href="mailto:info@solo360.co"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand-gold px-6 sm:px-8 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:bg-brand-gold-dark hover:scale-[1.02] shrink-0 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

import { Link } from "react-router";
import CTACyan from "../TechnicalDetails/CTACyan";
import CTAPurple from "../TechnicalDetails/CTAPurple";

function FaqContainer() {
  return (
    <>
      <section
        className="bg-no-repeat bg-center bg-cover flex flex-col items-center gap-6 md:gap-10 py-10 px-4 md:px-25"
        style={{ backgroundImage: "url('/applicant_faq_bg.png')" }}
      >
        <div className="flex flex-col items-center gap-4 md:gap-10">
          <h3 className="text-[6vw] md:text-4xl md:text-heading-2 font-bold text-center text-title-text tracking-tight uppercase leading-8 md:leading-12">
            #AI4Elections Hackathon <br />
            2026 - 2027 - Applicant FAQs
          </h3>
          <p className="text-sm md:text-lg text-paragraph-text font-medium text-center">
            Official information resource is{" "}
            <span className="text-accent-orange font-semibold">
              ai4elections.risenetworks.org
            </span>
            . Register now via the Application form.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-3 md:gap-5 md:p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              01
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                What is the #AI4Elections Hackathon?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                #AI4Elections is a national, nonpartisan public-interest
                innovation initiative organised by Rise Networks to mobilise
                Nigerian innovators and electoral experts to develop responsible
                AI-powered solutions that support electoral integrity,
                inclusion, transparency and democratic participation.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              02
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Who is organising the hackathon?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                The initiative is organised by{" "}
                <Link
                  to="https://risenetworks.org"
                  className="text-accent-text font-bold"
                >
                  Rise Networks
                </Link>{" "}
                in partnership with NITDA, NCC, NITHUB, CLEEN FOUNDATION INEC and several other private and public institutions.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              03
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Who can apply?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Nigerian AI developers, software engineers, university students,
                researchers, data scientists, civic techies, cybersecurity
                practitioners and tech entrepreneurs are encouraged to apply,
                subject to the final eligibility requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              04
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Do I need to be a computer science student or professional
                developer?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                No. The challenge areas are multidisciplinary. Applicants with
                relevant expertise in communication, journalism, design, public
                policy, law, social sciences, electoral research, accessibility
                and related fields are encouraged to contribute. Participants
                should review the official application rules for the minimum
                technical and team requirements.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              05
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Can I apply individually or must I have a team?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Multidisciplinary teams are encouraged because the challenge
                areas combine technology, research, communication, civic
                knowledge and user experience.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              06
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                What are the Track areas?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                The five challenge tracks are: Electoral Information Integrity,
                Electoral Data Intelligence, Electoral Inclusion, Electoral
                Cybersecurity and Resilience and Election Observation and
                Citizen Accountability. Detailed Technical briefs are available
                in the official challenge repository.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              07
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Do I need an existing product to apply?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                No, we expect that all submissions for this Hackathon will be
                new, novel and specifically developed for this Competition.
                Projects previously awarded or recognized in other competitions
                will not be considered. Applicants should follow the
                requirements stated in the official concept document. The
                programme is designed to support innovation and prototype
                development and applicants should explain the problem they
                intend to solve, their proposed approach and their ability to
                execute it. A fully developed commercial product should not be
                assumed to be a prerequisite unless the final application rules
                specify otherwise. This is purely a Design and Develop only
                Competition. Participants are expected to build working
                solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              08
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                What is the prize pool?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                The #AI4Elections inaugural edition has a prize pool of ₦5
                million, comprising overall cash prizes and special awards. The
                final prize terms, eligibility and award conditions are
                contained in the #AI4Elections Concept Document.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              09
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                When and where will the Grand Finale take place?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                The national Finals, Innovation Showcase and Awards Ceremony are
                planned for Abuja in December 2026, ahead of the forthcoming
                general elections. Exact dates, venues and participation
                arrangements will be communicated through official channels.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              10
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Will the hackathon provide cloud credits, software licences or
                computing resource
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Any infrastructure, cloud credits, software licences or other
                technical resources will be communicated once availability is
                confirmed. Applicants should not assume that a particular
                commercial service or credit allocation is guaranteed.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              11
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Can I use AI tools, open-source software or third-party APIs?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Yes, subject to the competition rules, applicable licences, data
                protection requirements and any restrictions as stated in the
                Concept Document. Applicants must disclose material third-party
                tools and comply with their terms of us.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              12
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Can I use real electoral data?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                We recommend the use of only synthetic data, anonymised or
                approved datasets where appropriate for this Hackathon. We
                expect applicants to only use data that is lawfully obtained,
                appropriately licensed and authorised for the intended purpose.
                Public availability does not automatically mean that a dataset
                is appropriate for unrestricted processing or redistribution .
                Never upload confidential electoral information, private voter
                data or sensitive personal information to public AI tools. This
                is grounds for disqualification.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              13
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Is the Hackathon affiliated with a political party or candidate?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                No Please. #AI4Elections is a nonpartisan public-interest
                initiative. It does not endorse political parties, candidates or
                electoral outcomes. All participants are expected to respect the
                programme's nonpartisan principles.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              14
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Can my project be used to predict election winners or target
                voters?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                No Please. The hackathon focuses on responsible electoral
                innovation, integrity, inclusion and public-interest technology.
                Political persuasion, individual voter profiling, manipulation
                and unsupported electoral predictions are outside the
                programme's intend ed scope. Any proposed analytical work must
                comply with the official rules, protect personal data and
                clearly communicate limitations.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              15
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                How will applications and projects be evaluated?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Applications will be assessed according to the published
                eligibility, selection and judging criteria. The programme will
                consider factors such as project integrity, problem relevance,
                technical feasibility, responsible AI, innovation, usability and
                potential public interest value. The final selection and judging
                process will be communicated through the official rules.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              16
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Will the winning solutions receive further support?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                <Link
                  to="https://risenetworks.org"
                  className="text-accent-text font-bold"
                >
                  Rise Networks
                </Link>{" "}
                will develop a post-hackathon pathway for promising solutions,
                potentially including mentorship, refinement, incubation and
                opportunities for responsible piloting. At the end of the
                Hackathon, Rise Networks will set up the #AI4Elections Dev Hub
                and Community of Practice as a permanent national network for
                electoral technology and responsible AI. The community of
                practice will maintain a consent-based registry of participants,
                researchers, developers, mentors, institutions and alumni and
                its activities will include monthly technical and research
                sessions, quarterly project clinics, university chapters,
                mentorship, newsletters, research collaborations and annual
                innovation challenges. The registry will capture professional
                interests, skills, affiliations and preferred opportunities,
                with clear privacy notices, appropriate access controls and
                mechanisms for members to update or withdraw their information.
                The community of practice will support sustained collaboration
                and provide a talent and research pipeline for future
                public-interest technology initiatives.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              17
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                How do I apply?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Visit{" "}
                <span className="font-bold">ai4elections.risenetworks.org</span>{" "}
                and follow the #AI4Elections Hackathon application instructions.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              18
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                What are the Hackathon Application kick off and deadline dates?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                The kick off date is{" "}
                <span className="font-bold">16th October</span> and the deadline
                is <span className="font-bold">6th November 2026</span>, at{" "}
                <span className="font-bold">11:59 PM West Africa Time</span>.
                Applicants should check the official application page for the
                final confirmed deadline
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              19
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Who can I contact for enquiries?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Email: <span className="font-bold">labs@risenetworks.org</span>
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              20
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                What publicly identifiable electoral information or operational
                challenges could benefit from responsible innovation?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                There are several non-sensitive areas that could benefit from
                innovative thinking. These include voter and civic education;
                making publicly available electoral information easier to
                understand and access; accessibility solutions for persons with
                disabilities; multilingual information services; public
                election-data visualisation; tools for countering misinformation
                and improving media literacy; election personnel training and
                simulation; citizen enquiry and feedback solutions; and
                logistics planning or optimisation using synthetic or
                non-sensitive data. Participants are encouraged to focus on
                problems around the electoral process without requiring
                participants to interact with or disrupt critical election
                infrastructure.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              21
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                Are there non-sensitive use cases that the initiative would be
                willing to review or help define
              </h4>
              <p className="text-xs md:text-base text-header-text">
                The Hackathon Team selected problem statements based on
                non-sensitive operational challenges. For example, participants
                could develop solutions for improving voter education,
                simplifying electoral information, improving accessibility,
                helping citizens locate and understand publicly available
                electoral information, supporting election training, analysing
                publicly available election data, or modelling election
                logistics using simulated datasets. Where data is required, the
                preference would be for publicly available, anonymised,
                aggregated or synthetic data. For avoidance of doubt, Applicants
                are not expected to attempt or request access to the voter
                register, biometric information, BVAS, IReV, e-EC8A/RMS
                production environments, source code, credentials, internal
                APIs, network architecture, cybersecurity configurations or
                other sensitive operational information.
              </p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 p-4 md:py-8 md:px-5">
            <span className="text-base md:text-lg text-faq-number font-bold">
              22
            </span>
            <div className="flex flex-col gap-4 md:gap-6">
              <h4 className="text-base md:text-lg text-faq-heading font-bold">
                What permissions, procurement, cybersecurity, privacy or other
                requirements would apply to a pilot?
              </h4>
              <p className="text-xs md:text-base text-header-text">
                Participation in the Hackathon is clearly separate from
                procurement or adoption of any solution by Rise Networks or its
                partners. Any prototype subsequently considered worthy of
                further evaluation would still be subject to the Programme’s
                established approval and procurement processes, technical
                assessment, cybersecurity review, data-protection and privacy
                requirements, legal review and other applicable government
                regulations. Where personal data is involved, compliance with
                applicable data-protection legislation and the Competition’s
                data-governance requirements would be mandatory. Any initial
                technical evaluation should preferably take place in a
                controlled sandbox environment using synthetic, anonymised or
                publicly available data, with no connection to the Country’s
                electoral production systems. Given the proximity of the 2027
                General Election, we strongly recommend that prototypes arising
                from the Hackathon should not be assumed to be eligible for
                deployment in critical 2027 election systems. Stability,
                security and operational readiness must remain paramount and
                solutions showing potential can undergo proper evaluation and
                testing within an appropriate timeframe.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full px-4 md:px-14">
          <p className="text-sm md:text-lg faq-heading font-semibold">
            <Link
              to="/application"
              className="text-accent-text font-bold"
            >
              Application Link
            </Link> -
            ai4elections.risenetworks.org
          </p>
          <p className="text-xs md:text-base text-header-text">
            Thank You and Best Wishes.
          </p>
          <p className="text-sm md:text-lg font-semibold text-accent-text">
            The Rise Networks Team.
          </p>
        </div>
      </section>
      <CTAPurple />
      <CTACyan />
    </>
  );
}

export default FaqContainer;

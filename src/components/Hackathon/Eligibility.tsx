import type { ReactNode } from "react";

const eligibilityItems = [
  "University students, recent graduates and postgraduate research",
  "All Participants must be of Nigerian Origin and must be at least 18 years old as of the commencement date of the deadline date of this hackathon",
  "Software developers, AI engineers, data scientists and cybersecurity professionals",
  "Academic researchers, lecturers and independent scholars",
  "Startups, technology entrepreneurs and civic-tech innovators",
  "Electoral experts, election observers and civil society practitioners",
  "Product designers, accessibility specialists, linguists and communication researchers",
  "Public-policy, governance, legal and data protection professionals",
  "Emerging innovators and young people through a supervised youth pathway.",
];

const requirements = [
  "Requirements for Academia – At least one faculty lead, a student or post-grad researcher & cover letter of approval by the appropriate HOD in an accredited institution within Nigeria.",
  "Requirements for Start Ups/Organizations – Valid Registration Documents include CAC Certificate, no less than 60% team membership must be resident in Nigeria and Government ID for all individual team members.",
  "Requirements for Individuals – Valid Government ID + ID of any organization individual is affiliated with.",
];

const keyDates = [
  {
    date: "16th October 2026",
    title: "Applications Open",
    description: "Application website goes live.",
  },
  {
    date: "6th November 2026",
    title: "Application Deadline",
    description: "Applications close at 11:59pm WAT",
  },
  {
    date: "October 2026",
    title: "Public launch, partner engagement, participant registration and awareness campaign.",
    description:
      "Community outreach, onboarding, technical orientation and capacity-building sessions.",
  },
  {
    date: "November 2026",
    title: "Team formation, ideation, mentorship, technical development and prototype testing.",
    description:
      "Solution refinement, judging, demonstrations and selection of finalists.",
  },
  {
    date: "December 2026",
    title: "Grand finale, innovation showcase, presentation of awards and announcement of winning teams.",
    description: "",
  },
  {
    date: "Jan/Feb 2027",
    title:
      "Usability testing during election cycle, continued public relations, impact reporting, technical monitoring, solution refinement.",
    description:
      "Pilot deployments and potential collaboration support for selected teams.",
  },
];

function EligibilityItem({ children }: {children:  ReactNode}) {
  return (
    <li className="flex gap-2 border-b border-white py-3 md:py-6 text-sm  text-white/90 md:text-lg font-medium">
      <span className=" flex h-3 w-3 md:w-5 md:h-5 shrink-0 items-center justify-center bg-white text-xs md:text-sm text-[#0b3154]">
        ✓
      </span>

      <span>{children}</span>
    </li>
  );
}

function KeyDate({ date, title, description }: {date:string; title: string; description: string;}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-white py-3 sm:grid-cols-[200px_1fr] sm:gap-6">
      {/* Date */}
      <div className="flex items-center text-xs font-semibold text-white md:text-base">
        {date}
      </div>

      {/* Event */}
      <div className="space-y-2">
        <p className="text-xs font-semibold leading-4 text-white md:text-base">
          {title}
        </p>

        {description && (
          <p className="mt-1 text-[8px] leading-4 text-white/80 md:text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Eligibility() {
  return (
    <section className="min-h-screen border-t-2 border-[#1597e5] bg-[#0b3154] px-6 py-12 text-white md:px-25 lg:px-[6%] lg:py-16">
      <div className="mx-auto space-y-10">
        {/* Heading */}
        <div className="space-y-2">
          <p className="text-xs md:text-lg text-small-text">
            Who Can Participate
          </p>

          <h1 className=" text-3xl font-bold tracking-wide md:text-heading-3">
            Eligibility
          </h1>
        </div>

        {/* Eligibility list */}
        <ul className="mb-2">
          {eligibilityItems.map((item, index) => (
            <EligibilityItem key={index}>{item}</EligibilityItem>
          ))}
        </ul>

        {/* Requirements */}
        <div className="mb-7">
          {requirements.map((requirement, index) => (
            <p
              key={index}
              className="border-b border-white py-3 md:py-6 text-xs text-white md:text-base"
            >
              {requirement}
            </p>
          ))}
        </div>

        {/* Key dates */}
        <div className="mx-auto max-w-3xl rounded-xl border border-white/40 p-4 sm:p-6">
          {/* Card heading */}
          <div className="border-b border-white space-y-2 pb-4">
            <p className="text-xs md:text-base text-small-text">Schedule</p>

            <h2 className=" text-2xl font-bold tracking-wide md:text-4xl">
              KEY DATES
            </h2>
          </div>

          {/* Dates */}
          <div>
            {keyDates.map((item, index) => (
              <KeyDate
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
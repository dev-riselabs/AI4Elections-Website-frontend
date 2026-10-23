// import {
//   FaTrophy,
//   FaMedal,
//   FaLightbulb,
//   FaUsers,
//   FaShieldAlt,
//   FaLock,
// } from "react-icons/fa";
// import { HiMiniTrophy } from "react-icons/hi2";

import CTACyan from "../TechnicalDetails/CTACyan";

// const mainPrizes = [
//   {
//     position: "1ST PLACE",
//     amount: "₦4,000,000",
//     label: "Overall Champion",
//     description: "Best overall",
//     icon: FaTrophy,
//     className: "border-[#f3c64b] bg-[#fffaf0]",
//   },
//   {
//     position: "2ND PLACE",
//     amount: "₦2,500,000",
//     label: "Overall Champion",
//     description: "Second highest",
//     icon: FaMedal,
//     className: "border-[#8ba9d8] bg-[#f4f8ff]",
//   },
//   {
//     position: "3RD PLACE",
//     amount: "₦1,500,000",
//     label: "Overall Champion",
//     description: "Third highest",
//     icon: FaMedal,
//     className: "border-[#d27b59] bg-[#fff7f4]",
//   },
// ];

// const specialAwards = [
//   {
//     title: "Research & Policy Innovation Award",
//     amount: "₦500,00",
//     description:
//       "Best misinformation detection, verification or electoral information solution",
//     icon: FaLightbulb,
//     iconClass: "bg-[#cdf4df] text-[#10a957]",
//   },
//   {
//     title: "Electoral and Civic Inclusion Award",
//     amount: "₦500,00",
//     description:
//       "Best solution for accessibility, multilingual participation or underserved voters",
//     icon: FaUsers,
//     iconClass: "bg-[#f1d2f8] text-[#c52ce2]",
//   },
//   {
//     title: "Responsible AI and Safety Award",
//     amount: "₦500,00",
//     description:
//       "Best data-driven solution for electoral analysis or accountability",
//     icon: FaShieldAlt,
//     iconClass: "bg-[#c4e2ff] text-[#1685ee]",
//   },
//   {
//     title: "Cybersecurity and Resilience Award",
//     amount: "₦500,00",
//     description:
//       "Best solution addressing election-related digital security or system resilience",
//     icon: FaLock,
//     iconClass: "bg-[#c8f0f7] text-[#05b7d3]",
//   },
// ];

// function WhatMatters() {
//   return (
//      <section className="relative overflow-hidden px-4 py-12 md:px-25 bg-center bg-cover bg-no-repeat flex flex-col gap-7 md:gap-10" style={{backgroundImage : "url('/win_big_bg.png')"}}>

//         {/* Heading */}
//         <div className="flex flex-col gap-4 md:gap-6 items-center ">
//         <h2 className="text-4xl md:text-heading-2 font-bold text-heading-text tracking-tight uppercase">
//         win big. build what matters.
//         </h2>
//         <p className="text-heading-text text-sm md:text-lg font-medium text-center">
//           Prize money will be awarded to winning teams, not individual members.
// Each team will designate a recipient and agree on how the funds will be distributed.
//         </p>

//       </div>

//         {/* Prize Pool */}
//         <div className="flex flex-col gap-6 rounded-2xl bg-price-banner px-6 py-6 text-white md:flex-row md:items-center md:px-17.5 md:py-7.5">
//           <div className="flex flex-1 items-center gap-5">
//             <div className="flex h-14 w-14 md:w-23 md:h-23 shrink-0 items-center justify-center rounded-lg border border-white/70">
//               <HiMiniTrophy className="w-8 h-8 md:w-15 md:h-15" />
//             </div>

//             <div className="flex flex-col gap-1">
//               <p className="text-[10px] uppercase">Total Prize Pool</p>

//               <div className=" flex flex-wrap items-baseline gap-3">
//                 <span className="text-2xl font-bold md:text-3xl">
//                   ₦10 MILLION
//                 </span>

//                 <span className="text-[10px] uppercase">Prize Pool</span>
//               </div>
//             </div>
//           </div>

//           <div className="hidden h-14 w-px bg-white/40 md:block" />

//           <div className=" text-xs leading-6 md:w-52">
//             <p>Innovative solutions</p>
//             <p>Greater impact</p>
//             <p>A stronger democratic future</p>
//           </div>
//         </div>

//         {/* Main Prizes */}
//         <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
//           {mainPrizes.map((prize) => {
//             const Icon = prize.icon;

//             return (
//               <div
//                 key={prize.position}
//                 className={`rounded-xl border-2 p-5 shadow-[0_3px_0_rgba(0,0,0,0.08)] ${prize.className}`}
//               >
//                 <div className="flex items-start gap-5">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border-2 border-current text-[#0d3156]">
//                     <Icon className="text-2xl" />
//                   </div>

//                   <div className="">
//                     <p className="text-[9px] font-bold text-[#0d3156]">
//                       {prize.position}
//                     </p>

//                     <h3 className="mt-1 text-xl font-bold text-[#061f40] md:text-2xl">
//                       {prize.amount}
//                     </h3>

//                     <p className="mt-2 text-[9px] font-bold text-[#0d3156]">
//                       {prize.label}
//                     </p>

//                     <p className="mt-2 text-[9px] text-[#0d3156]">
//                       {prize.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Special Awards */}
//         <div className="mt-7">
//           <h3 className="mb-4  text-xs font-medium text-[#111]">
//             - SPECIAL INNOVATION AWARDS
//           </h3>

//           <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//             {specialAwards.map((award) => {
//               const Icon = award.icon;

//               return (
//                 <div
//                   key={award.title}
//                   className="flex min-h-[110px] items-start gap-5 rounded-xl border border-[#d8e3ef] bg-white/60 px-4 py-4"
//                 >
//                   <div
//                     className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${award.iconClass}`}
//                   >
//                     <Icon className="text-xl" />
//                   </div>

//                   <div className="">
//                     <h4 className="text-[10px] font-bold text-[#102d53]">
//                       {award.title}
//                     </h4>

//                     <p className="mt-2 text-xl font-bold text-[#1b6468]">
//                       {award.amount}
//                     </p>

//                     <p className="mt-2 max-w-xl text-[9px] leading-5 text-[#102d53]">
//                       {award.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//     </section>
//   )
// }

// export default WhatMatters

const grandPrizes = [
  {
    amount: "₦4,000,000",
    description: "Grand Prize - Overall Champion - Best overall AI-for-elections solutio",
  },
  {
    amount: "₦2,500,000",
    description: "Runner-up - Second-highest overall scor",
  },
  {
    amount: "₦1,500,000",
    description: "Second Runner-up - Third-highest overall score",
  },
];

const specialAwards = [
  {
    title: "Research & Policy Innovation Award",
    amount: "₦500,000",
    description:
      "Best misinformation detection, verification or electoral information solution",
  },
  {
    title: "Electoral and Civic Inclusion Award",
    amount: "₦500,000",
    description:
      "Best solution for accessibility, multilingual participation or underserved voters",
  },
  {
    title: "Responsible AI and Safety Award",
    amount: "₦500,000",
    description:
      "Best data-driven solution for electoral analysis or accountability",
  },
  {
    title: "Cybersecurity and Resilience Award",
    amount: "₦500,000",
    description:
      "Best solution addressing election-related digital security or system resilience",
  },
];

function GrandPrizeCard({
  amount,
  description,
}: {
  amount: string;
  description: string;
}) {
  return (
    <div className="p-5 sm:p-6">
      <p className="mb-3 text-[11px] font-medium text-orange-400">
        Grand Prize - Overall Champion
      </p>

      <h3 className="mb-3 font-mono text-2xl font-bold tracking-wide text-white sm:text-[24px]">
        {amount}
      </h3>

      <p className="font-mono text-[10px] leading-5 text-white/90 sm:text-[11px]">
        {description}
      </p>
    </div>
  );
}

function SpecialAwardCard({
  title,
  amount,
  description,
}: {
  amount: string;
  description: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/50 p-5 sm:p-6">
      <p className="mb-3 text-[11px] font-medium text-orange-400">{title}</p>

      <h3 className="mb-3 font-mono text-xl font-bold tracking-wide text-white sm:text-[21px]">
        {amount}
      </h3>

      <p className="font-mono text-[10px] leading-5 text-white/90 sm:text-[11px]">
        {description}
      </p>
    </div>
  );
}

export default function Awards() {
  return (
    <>
      <section className="min-h-screen bg-[#080b20] px-5 py-16 text-white sm:px-8 lg:px-[7%]">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-6">
            <p className="mb-3 font-mono text-xs font-medium text-orange-400">
              Awards
            </p>

            <h2 className="mb-3 font-mono text-2xl font-bold tracking-wide sm:text-3xl">
              ₦10 MILLION PRIZE POOL
            </h2>

            <p className="max-w-5xl font-mono text-[10px] leading-5 text-white/90 sm:text-[11px]">
              Prize money will be awarded to winning teams, not individual
              members.
              <br className="hidden sm:block" />
              A team that wins an overall prize could also win a special award,
              provided it meets the criteria as that allows
              <br className="hidden lg:block" />
              exceptional teams to receive more than one award while maintaining
              a transparent judging framework.
            </p>
          </div>

          {/* Grand Prizes */}
          <div className="mb-9 overflow-hidden rounded-2xl border border-white/60">
            <div className="grid grid-cols-1 divide-y divide-white/50 md:grid-cols-3 md:divide-x md:divide-y-0">
              {grandPrizes.map((prize) => (
                <GrandPrizeCard
                  key={prize.amount}
                  amount={prize.amount}
                  description={prize.description}
                />
              ))}
            </div>
          </div>

          {/* Special Awards heading */}
          <div className="mb-5">
            <p className="font-mono text-xs tracking-wide text-white">
              - SPECIAL INNOVATION AWARDS
            </p>
          </div>

          {/* Special Awards */}
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {specialAwards.map((award) => (
              <SpecialAwardCard
                key={award.title}
                title={award.title}
                amount={award.amount}
                description={award.description}
              />
            ))}
          </div>
        </div>
      </section>
      <CTACyan />
    </>
  );
}

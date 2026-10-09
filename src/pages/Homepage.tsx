import { useState } from "react";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import SubNav from "../components/SubNav";
import TechnicalDetails from "../components/TechnicalDetails/TechnicalDetails";
import Footer from "../components/Footer";
import Download from "../components/ConceptDocument/Download";
import FaqContainer from "../components/Faq/FaqContainer";
import TheHackathon from "../components/Hackathon/TheHackathon";
import WhyAi4Election from "../components/Hackathon/WhyAi4Election";
import TheChallenge from "../components/Hackathon/TheChallenge";
import ChallengeArea from "../components/Hackathon/ChallengeArea";
import WhyParticipate from "../components/Hackathon/WhyParticipate";
import WhatMatters from "../components/Hackathon/WhatMatters";
import Eligibility from "../components/Hackathon/Eligibility";
import Reveal from "../animation/Reveal";

const subNavTabs = [
  { id: "overview", label: "Overview" },
  { id: "technical-briefs", label: "Technical Briefs" },
  { id: "concept-document", label: "Concept Document" },
  { id: "faq", label: "FAQs" },
  { id: "hackathon", label: "Hackathon" },
] as const;

type SubNavTabId = (typeof subNavTabs)[number]["id"];
const technicalBriefsUrl =
  "https://github.com/Rise-Networks-AI-Labs/-AI4Elections-Hackathon/blob/main/docs/03_onboarding/onboarding_guide.md";

function Homepage() {
  const [activeTab, setActiveTab] = useState<SubNavTabId>("overview");

  const handleTabChange = (tab: SubNavTabId) => {
    if (tab === "technical-briefs") {
      window.location.assign(technicalBriefsUrl);
      return;
    }

    setActiveTab(tab);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 selection:bg-orange-500 selection:text-white font-robotoMono">
      {/* 1. Navigation and Hero Section */}
      <Hero />

      {/* 2. Sponsors Component */}
      <Sponsors />

      {/* 3. Sub-navigation Banner */}
      <SubNav
        tabs={subNavTabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <div
        id="subnav-panel"
        role="tabpanel"
        aria-labelledby={`${activeTab}-tab`}
      >
        {activeTab === "overview" && (
          <>
            {/* 4. About & Details Section */}
            <TechnicalDetails />
          </>
        )}
        {activeTab === "technical-briefs" && (
          <></>
        )}
        {activeTab === "concept-document" && (
          <>
            <Download />
          </>
        )}

        {activeTab === "faq" && (
          <>
            <FaqContainer />
          </>
        )}
        {activeTab === "hackathon" && (
          <>
          <Reveal>
            <TheHackathon />
          </Reveal>
            <Reveal>
              <WhyAi4Election />
            </Reveal>
            <Reveal> <TheChallenge /></Reveal>
            <Reveal><ChallengeArea /></Reveal>
            <Reveal><WhyParticipate /></Reveal>
            <Reveal><Eligibility /></Reveal>
            <Reveal><WhatMatters /></Reveal>
            
           
            
            
            
            
          </>
        )}
      </div>

      {/* 7. Dark Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;

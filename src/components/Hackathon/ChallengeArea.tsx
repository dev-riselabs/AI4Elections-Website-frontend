import { useState } from "react";
import { motion } from "framer-motion";


const topics = [
  {
    id: 1,
    title: "AI & Electoral Information Integrity",
    description:
      "Solutions for detecting, assessing and responding to AI-generated or manipulated electoral information, synthetic media, impersonation and misleading content.Outputsare expected toinclude information verification tools, provenance systems, multilingual fact-checking assistance and responsible information -analysis systems",
  },
  {
    id: 2,
    title: "Electoral Data Intelligence",
    description:
      "Responsible AI applications for analysing authorised electoral datasets, improving data quality, processing public documents, supporting logistics analysis and identifying data anomalies for human review.Solutions must not independently declare electoral results or substitute algorithmic outputs for legally authorised electoral proc",
  },
  {
    id: 3,
    title: "Inclusive & Multilingual Civic Technology",
    description:
      "Accessible voter-information tools, Nigerian-language electoral and civic information, assistive interfacesfor people with disabilities, digital literacy solutions and technology addressing barriers to electoral participa",
  },
  {
    id: 4,
    title: "Electoral Cybersecurity & Resilience",
    description:
      `Defensive tools, authorised simulations, security monitoring concepts, privacy -preserving systems and resilience approaches 
for electoral technology. No testing of live electoral systems or unauthorised access to institutional infrastructure will be 
permitted.This track specifically invites participants to develop responsible, defensive and privacy -preserving technologies 
that can strengthen cybersecurity awareness, digital resilience, secure information management and the protection of 
electoral and civic technology environments. Sol utions may include defensive security monitoring concepts, secure -by-design 
applications, privacy-preserving systems, incident reporting and response tools, cybersecurity awareness platforms, security 
training resources, authorised simulations and resilien ce models for electoral technology. Participants may also develop tools 
for identifying common security weaknesses in their own applications, improving secure software development practices, 
supporting incident documentation, or modelling potential operati onal disruptions using synthetic datasets and isolated test 
environments`,
  },
  {
    id: 5,
    title: "Election Observation & Citizen Accountability",
    description:
      `Tools for structured observation reporting, incident documentation, civic feedback, public information access and transparenc y, 
with appropriate safeguards for observers and citizens. Final problem statements will be developed with relevant subject -matter 
experts and prospective institutional partners. Participation by an institution will not imply endorsement of any so
The Programme welcomes responsible innovation, particularly where technology can contribute to voter education, 
accessibility, operational efficiency, public information and greater citizen understanding of the electoral process. Partici pants 
are encouraged to develop solutions for improving voter education, simplifying electoral information, improving accessibility, 
helping citizens locate and understand publicly available electoral information, supporting election training, analysing 
publicly available election data, or modelling election logistics using simulated datasets. Where data is required, the 
preference should be for publicly available, anonymised, aggregated or synthetic`,
  },
  // {
  //   id: 6,
  //   title: "Electoral Technology",
  //   description:
  //     "Develop innovative technologies that improve electoral processes and strengthen democratic participation.",
  // },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function ChallengeArea() {
    const [activeTopic, setActiveTopic] = useState(0);
  return (
   <section
      className="bg-center bg-cover bg-no-repeat px-4 md:px-25 py-10 flex flex-col gap-6 md:gap-10 "
      style={{ backgroundImage: "url('/challenge_area_bg.png')" }}
    >
        <div className="flex flex-col gap-4 md:gap-6 items-center ">
        <h2 className="text-4xl md:text-heading-2 font-bold text-heading-text tracking-tight uppercase">
         CHALLENGE AREAS
        </h2>
        <p className="text-heading-text text-sm md:text-lg font-medium text-center max-w-[70ch]">
          Explore the possibilities
        </p>
        <p className="text-base md:text-xl text-heading-text">Participants may explore challenges across different parts of the electoral and democratic participation ecosystem. The following areas provide a starting point for ideas and exploration.</p>
      </div>

       <section className="w-full  grid grid-cols-1 gap-4 md:grid-cols-[1.35fr_1fr]">
      
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/challenge_area_img.png"
            alt="AI robot"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Topics */}
        <motion.div  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
   className="flex flex-col gap-3 justify-center">
          {topics.map((topic, index) => {
            if (index === activeTopic) return <motion.div variants={item} key={topic.title} className="min-h-57.5 rounded-2xl bg-linear-to-b from-purple-600 to-blue-600 p-6 text-white">
            <div className="flex items-start gap-4">
              {/* Circle */}
              <div className="mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-white" />
              <div className="flex flex-col gap-3">
                <h2 className="font-robotoMono text-xl leading-tight md:text-2xl">
                  {topic.title}
                </h2>

                <p className="mt-5 font-robotoMono text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>

              
            </div>
          </motion.div>;

            return (
              <motion.button
              variants={item}
                key={topic.id}
                type="button"
                onClick={() => setActiveTopic(index)}
                className="w-full rounded-2xl bg-white/10 backdrop-blur-xs backdrop-brightness-95 px-6 py-5 text-left font-robotoMono text-sm leading-relaxed shadow-sm transition hover:bg-scale-101"
              >
                {topic.title}
              </motion.button>
            );
          })}
        </motion.div>
    </section>
    </section>
  )
}

export default ChallengeArea
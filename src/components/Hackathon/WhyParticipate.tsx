import { useState } from "react";
import { motion } from "framer-motion";

const topics = [
  {
    id: 1,
    title: "University Students",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 2,
    title: "Developers & AI Engineers",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 3,
    title: "Cybersecurity Professionals",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 4,
    title: "Researchers",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 5,
    title: "Startups & Entrepreneurs",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 6,
    title: "Electoral Experts",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 7,
    title: "Designers",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 8,
    title: "Linguists & Communication Researchers",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 9,
    title: "Policy & Governance Professionals",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
  {
    id: 10,
    title: "Emerging Innovators",
    // description:
    //   "People working across security, privacy and technology resilience.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// const item = {
//   hidden: {
//     opacity: 0,
//     x: -30,
//   },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

function WhyParticipate() {
  const [activeTopic, setActiveTopic] = useState(0);
  return (
    <section
      className="bg-center bg-cover bg-no-repeat px-4 md:px-25 py-10 flex flex-col gap-6 md:gap-10 "
      style={{ backgroundImage: "url('/challenge_area_bg.png')" }}
    >
      <div className="flex flex-col gap-4 md:gap-6 items-center ">
        <h2 className="text-4xl md:text-heading-2 font-bold text-heading-text tracking-tight uppercase text-center">
          Who should participate?
        </h2>
        <p className="text-heading-text text-sm md:text-lg font-medium text-center ">
          Electoral innovation requires more than technical expertise. It
          requires people who understand technology, data, communities,
          institutions, research, policy and the realities of electoral
          processes.
        </p>
      </div>

      <section className="w-full  grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.35fr]">
        {/* Topics */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-3 justify-center"
        >
          {topics.map((topic, index) => {
            if (index === activeTopic)
              return (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
                  key={topic.title}
                  className="min-h-20 rounded-2xl bg-linear-to-t from-[#002E57] via-[#01B343] to-[#01B343] p-6 text-white"
                >
                  <div className="flex items-start gap-4">
                    {/* Circle */}
                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-white" />
                    <div className="flex flex-col gap-3">
                      <h2 className="font-robotoMono text-xl leading-tight md:text-2xl">
                        {topic.title}
                      </h2>

                      {/* <p className="mt-5 font-robotoMono text-sm leading-relaxed">
                  {topic.description}
                </p> */}
                    </div>
                  </div>
                </motion.div>
              );

            return (
              <motion.button
                // variants={item}
                key={topic.id}
                type="button"
                onClick={() => setActiveTopic(index)}
                className="w-full rounded-2xl bg-white/10 backdrop-blur-xs backdrop-brightness-95 px-6 py-5 text-left font-robotoMono text-sm leading-relaxed shadow-sm transition hover:scale-101"
              >
                {topic.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/participate_img.png"
            alt="AI robot"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </section>
  );
}

export default WhyParticipate;

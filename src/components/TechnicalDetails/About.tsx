import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="w-full h-full py-10 md:p-10 bg-[url('/technical_brief_bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-5">
        {/* Top Image: Edge-to-edge within container rectangular image of a team meeting */}
        <div className="w-full overflow-hidden rounded-xl shadow-md mb-8">
          <img
            src="/about-meeting.jpg"
            alt="Team Meeting Collaboration"
            className="w-full rounded-xl shadow-md object-cover max-h-175 hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* Bottom 12-Column Layout */}
        {/* <div className="grid md:grid-cols-12 gap-8 items-stretch"> */}
        {/* Left Side (col-span-2) */}
        {/* <div className="md:col-span-12 space-y-6 text-gray-700 leading-loose font-robotoMono text-justify text-sm md:text-sm xl:text-xl">
            <p className="">
              Elections are increasingly shaped by digital technologies,
              artificial intelligence and the way information is created, shared
              and accessed. At the same time, new technologies present
              opportunities to strengthen electoral information, improve access
              to civic participation, support election observation and develop
              more resilient systems. #AI4Elections brings together Nigeria's
              technology, research, academic, civic and electoral communities to
              explore how responsible AI and digital innovation can contribute
              to more transparent, inclusive and accountable elections.
            </p>
          </div> */}
        {/* <div className="md:col-span-7 space-y-6 text-gray-700 leading-loose font-robotoMono text-justify text-sm md:text-sm xl:text-xl">
            <p>
              Led by{" "}
              <strong className="text-orange-500 font-bold">
                Rise Networks{" "}
              </strong>
              , #AI4Elections is a national, multidisciplinary and nonpartisan
              initiative focused on developing practical technology solutions to
              real electoral challenges. The initiative brings together
              developers, AI and data professionals, researchers, students,
              designers, electoral experts, civic organisations, policy
              professionals and other innovators to develop, test and explore
              responsible approaches to electoral technology.
            </p>
            Right Side (col-span-1) - Tall, prominent card
          </div> */}
        {/* <div className="md:col-span-5 flex">
              <div className="w-full  rounded-2xl border border-gray-200 shadow-2xl flex items-center justify-center min-h-[300px] text-center transform hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-orange-500 font-bold text-xl md:text-2xl uppercase tracking-wider leading-snug">
                  AI4ELECTIONS HACKATHON Fly DESIGN
                </h3>
                <img src="/#AI4ELECTIONS HACKATHON DESIGN.png" alt="" className="w-full h-full"/>
              </div>
            </div> */}
        {/* <div className="md:col-span-12 space-y-6 text-gray-700 leading-loose font-robotoMono text-justify text-sm md:text-sm xl:text-xl">
            <p>
              The initiative is built around three connected components: the
              #AI4Elections Hackathon, the #AI4Elections Innovation Lab, and the
              #AI4Elections Community of Practice. The Hackathon provides a
              platform for teams to develop innovative solutions across key
              electoral challenge areas. Selected projects may progress into the
              Innovation Lab for further technical development, validation and
              mentorship, while the Community of Practice provides an ongoing
              network for research, collaboration, learning and knowledge
              exchange.
            </p>
          </div> */}
        {/* </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
          <p className="text-justify lg:col-span-2 text-sm md:text-md text-pillar-text leading-7 md:leading-9">
            Elections are increasingly shaped by digital technologies,
            artificial intelligence and the way information is created, shared
            and accessed. At the same time, new technologies present
            opportunities to strengthen electoral information, improve access to
            civic participation, support election observation and develop more
            resilient systems. #AI4Elections brings together Nigeria's
            technology, research, academic, civic and electoral communities to
            explore how responsible AI and digital innovation can contribute to
            more transparent, inclusive and accountable elections.
          </p>
          <div className="flex flex-col gap-4 ">
            <p className="text-justify  text-sm md:text-md text-pillar-text leading-7 md:leading-9">
              Led by{" "}
              <Link
                to="https://risenetworks.org"
                className="text-accent-text font-bold"
              >
                Rise Networks
              </Link>
              , #AI4Elections is a national, multidisciplinary and nonpartisan
              initiative focused on developing practical technology solutions to
              real electoral challenges. The initiative brings together
              developers, AI and data professionals, researchers, students,
              designers, electoral experts, civic organisations, policy
              professionals and other innovators to develop, test and explore
              responsible approaches to electoral technology.
            </p>
            <p className="text-justify  text-sm md:text-md text-pillar-text leading-7 md:leading-9">
              <span className="font-bold">
                The initiative is built around three connected components:
              </span>{" "}
              the #AI4Elections Hackathon, the #AI4Elections Development Hub, and
              the #AI4Elections Community of Practice. The Hackathon provides a
              platform for teams to develop innovative solutions across key
              electoral challenge areas. Selected projects may progress into the
              Development Hub for further technical development, validation and
              mentorship, while the Community of Practice provides an ongoing
              network for research, collaboration, learning and knowledge
              exchange.
            </p>
          </div>
          <motion.img
            src="./technical_brief2.png"
            alt=""
            className="w-full xl:w-[26vw] xl:ml-20"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
          />

          <p className="text-justify lg:col-span-2 text-sm md:text-md text-pillar-text leading-7 md:leading-9">
            Running from October 2026 to February 2027, #AI4Elections will
            officially kick off on{" "}
            <span className="font-bold">Thursday 16th October 2026</span>,
            bringing together innovators, researchers, developers, students,
            electoral experts and civic practitioners to explore responsible
            applications of AI and technology for electoral innovation.
          </p>
          <p className="text-justify lg:col-span-2 text-sm md:text-md text-pillar-text leading-7 md:leading-9">
            Applications for the Hackathon will remain open until{" "}
            <span className="font-bold">
              Thursday 6th November 2026 at 11:59pm WAT
            </span>
            , after which selected participants will progress through team
            formation, technical orientation, mentorship, development and
            testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

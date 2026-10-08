// import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-25">
      <div className="flex flex-col gap-3 md:gap-0 justify-center max-w-150">
        <h1 className="text-faq-heading text-[9vw] md:text-[2.4vw] font-bold uppercase leading-14">
          #ai4elections hackathon 2026
        </h1>
        <div className="text-[4.2vw] md:text-[1.5vw] md:mb-4 font-bold text-heading-text">
        <span className="text-accent-text">Application Deadline:</span>&nbsp; 6th
        November, 2026
      </div>
        {/* <motion.div className="">
                <span>
                  <span className="text-accent-text">
                    Application Deadline:</span> Thursday 29th October 2026 at 11:59pm WAT
                </span>
              </motion.div> */}
        <p className="text-base md:text-[1.4vw] md:mb-3 text-faq-heading ">
          This is purely a <span className="font-semibold italic">"Design and Develop"</span>  only Competition. Participants are
          expected to build working solutions not just submit ideas, decks,
          research papers or wireframes.
        </p>
      </div>
      <img src="/application_page_hero_img.png" alt="" />
    </section>
  );
}

export default Hero;

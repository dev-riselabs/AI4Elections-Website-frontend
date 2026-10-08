// import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-25">
      <div className="flex flex-col gap-3 md:gap-6 justify-center max-w-143">
        <h1 className="text-faq-heading text-[10.5vw] md:text-heading-2 font-bold uppercase leading-10">
          #ai4elections hackathon 2026
        </h1>
        <div className="text-[4.2vw] md:text-[1.3vw]  font-bold text-heading-text">
        <span className="text-accent-text">Application Deadline:</span>&nbsp; 5th
        November, 2026
      </div>
        {/* <motion.div className="">
                <span>
                  <span className="text-accent-text">
                    Application Deadline:</span> Thursday 29th October 2026 at 11:59pm WAT
                </span>
              </motion.div> */}
        <p className="text-base md:text-lg text-faq-heading font-medium">
          This is purely a Design and Develop only Competition. Participants are
          expected to build working solutions not just submit ideas, decks,
          research papers or wireframes.
        </p>
      </div>
      <img src="/application_page_hero_img.png" alt="" />
    </section>
  );
}

export default Hero;

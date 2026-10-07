import { IoArrowForwardSharp } from "react-icons/io5";
import CTACyan from "../TechnicalDetails/CTACyan";
import CTAPurple from "../TechnicalDetails/CTAPurple";


function Download() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 pt-10 pb-5 px-4 md:px-25">
        <div className="flex flex-col items-center gap-6 md:gap-10">
          <h3 className="text-2xl text-center md:text-4xl md:text-heading-2 font-bold text-title-text tracking-tight uppercase">
            Download the Concept Document
          </h3>
          <p className="text-paragraph-text text-sm md:text-lg font-medium text-center">
            Explore the full #AI4Elections concept document to learn more about
            the initiative, its objectives, challenge areas, programme
            structure, participation, safeguards, judging criteria and long-term
            vision.
          </p>
        </div>
        <a
          href="/Concept_Doc_%23AI4Elections_Hackathon_2026_to_2027.pdf"
          download
          className="flex items-center gap-2 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-2 md:px-6 py-3 justify-center"
        >
          Download Concept Document
          <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
        </a>
      </section>
      <CTAPurple />
      <CTACyan />
    </>
  );
}

export default Download;

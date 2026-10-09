import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router";

function TheHackathon() {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat px-4 md:px-25 py-10 flex flex-col gap-6 md:gap-10 "
      style={{ backgroundImage: "url('/the_Hackerthon_bg.png')" }}
    >
      <div className="flex flex-col gap-4 md:gap-6 items-center ">
        <h2 className="text-4xl md:text-heading-2 font-bold text-title-text tracking-tight uppercase">
          THE HACKATHON
        </h2>
        <p className="text-paragraph-text text-sm md:text-lg font-medium text-center max-w-[70ch]">
          The national competition brings participants together to identify
          clearly defined electoral challenges, form multidisciplinary teams,
          develop solutions, test prototypes and demonstrate their work.
        </p>
        <Link
          to="/application"
          className="flex items-center gap-2 bg-accent-green text-white font-bold text-sm md:text-lg rounded-md px-2 md:px-6 py-3 justify-center"
        >
          Apply for the Hackathon
          <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
        </Link>
      </div>
      <img
        src="/about-meeting.jpg"
        alt=""
        className="hover:scale-101 transition-all"
      />
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="text-sm md:text-lg text-header-text">
          Elections depend on information, systems, people and processes working
          together. As technology becomes increasingly embedded in electoral
          processes, new opportunities are emerging to improve access to
          information, strengthen participation, support electoral
          administration and address emerging challenges.
        </p>
        <p className="text-sm md:text-lg text-header-text">
          At the same time, the use of artificial intelligence introduces
          important questions around transparency, accountability, privacy,
          security, fairness, accessibility and public trust.
        </p>
        <p className="text-sm md:text-lg text-header-text">
          #AI4Elections Hackathon 2026 creates a space for people with different
          skills and perspectives to come together and explore these
          opportunities responsibly.
        </p>
        <p className="text-sm md:text-lg text-header-text">
          The hackathon is focused on practical problem-solving. Participants
          will identify relevant electoral or democratic participation
          challenges, develop technology-enabled ideas and work towards
          solutions that demonstrate how responsible AI can contribute to more
          inclusive, transparent and trusted electoral processes.
        </p>
      </div>
    </section>
  );
}

export default TheHackathon;

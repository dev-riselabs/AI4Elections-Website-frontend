import { IoArrowForwardSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="px-4 md:px-10 lg:px-25 grid grid-cols-[auto_auto] md:grid-cols-[auto_auto_auto] py-4 gap-5 md:gap-10 justify-between">
      {/* <p className="text-[3.5vw] md:text-[1.3vw] text-center  font-bold text-heading-text md:self-center col-span-2 md:col-span-1">
        <span className="text-accent-text">Application Deadline:</span> 5th
        November,2026
      </p> */}

      {/* <img
        src="/risenetworks_footer_logo.png"
        alt=""
        className="w-auto h-[25vw] md:h-auto "
      />
      <img
        src="/ai4electionlogo.png"
        alt=""
        className=" object-contain w-auto h-[25vw] md:h-auto "
      /> */}
      <a href="https://risenetworks.org" aria-label="Rise Networks website">
        <img
          src="/risenetworks_footer_logo.png"
          alt="Rise Networks"
          className="object-contain w-auto h-[20vw] md:h-[12vw] lg:h-[9vw]"
        />
      </a>
      <a href="/" aria-label="AI4Elections homepage">
        <img
          src="/ai6-logo.png"
          alt="AI4Elections"
          className="object-contain w-auto h-[20vw] md:h-[12vw] lg:h-[9vw] "
        />
      </a>

      <a
        href="/Concept_Doc_%23AI4Elections_Hackathon_2026_to_2027.pdf"
        download
        className="flex items-center gap-2 bg-accent-orange  justify-center text-white font-bold text-[2.9vw] md:text-[1.2vw] rounded-md px-2 md:px-6 py-3 md:self-center col-span-2 md:col-span-1"
      >
        Download Concept Document
        <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6 shrink-0" />
      </a>
    </header>
  );
}

export default Header;

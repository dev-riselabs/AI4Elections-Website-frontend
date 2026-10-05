import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const CTACyan: React.FC = () => {
  return (
    <section className="w-full bg-[url('/beyond_hackathon_bg.png')] bg-cover bg-center text-gray-900 overflow-hidden">
      <div className=" md:pr-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Side: Align items center */}
          <div className="flex flex-col justify-center items-start px-4 md:pr-0 md:pl-25 py-8 md:py-14  space-y-5 md:space-y-3">
            <h2 className="text-gray-900 text-[7vw] md:text-[2.4vw] xl:text-[2.5vw] font-bold uppercase tracking-wide leading-tight ">
              STAY BEYOND THE <br /> HACKATHON.
            </h2>

            <p className="text-gray-700 text-sm md:text-[1.5vw] xl:text-[1.4vw] leading-loose">
              The #AI4Elections Community of Practice will connect participants,
              researchers, developers, mentors, institutions and alumni beyond
              the inaugural competition.
            </p>

            <div className="pt-2">
              <Link
                to="/community-page"
                className="flex items-center gap-4 bg-accent-text hover:bg-orange-600 transition-all duration-200 text-white text-xs md:text-[1.2vw] px-4 md:px-5 py-3 rounded-lg font-semibold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Join #AI4Elections Dev Hub
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Side: Cutout of four people */}
          <div className="flex justify-center md:justify-end items-end self-end">
            <img
              src="/beyond_hackathon_img.png"
              alt="Four young innovators"
              className="w-full self-end drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACyan;

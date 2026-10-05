import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const CTAPurple: React.FC = () => {
  return (
    <section className="w-full bg-[url('/dont_develop_bg.png')] bg-cover bg-center text-white overflow-hidden pt-4 font-robotoMono">
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  items-center">
          {/* Left Side: Cutout image of three people */}
          <div className="flex justify-center md:justify-start items-end self-end order-2 md:order-1 pt-15">
            <img
              src="/dont_develop_img.png"
              alt="Three young innovators"
              className="w-full items-start self-end drop-shadow-xl"
            />
          </div>

          {/* Right Side: Align items center */}
          <div className="flex flex-col justify-center items-start py-8 px-5 md:px-4 md:pr-25 space-y-5 md:space-y-3 order-1 md:order-2">
            <h2 className="text-white text-[7vw] md:text-[2.4vw] xl:text-[2.5vw] font-bold uppercase tracking-wide leading-tight">
              DON'T DEVELOP AI <br />
              FOR THE SAKE OF AI
            </h2>

            <p className="text-white/95 text-sm md:text-[1.4vw] xl:text-[1.4vw] leading-7 md:leading-9">
              Start with the problem. Understand the people. Examine the
              context. Then determine whether AI is actually the right tool for
              the solution.
            </p>

            <div className="pt-2">
              {/* <button className="flex gap-4 items-center bg-special-green-icon hover:bg-green-600 transition-all duration-200 text-white text-xs md:text-[1.2vw] px-4 md:px-5 py-3 rounded-lg font-semibold shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 cursor-pointer">
                Start your Application <FaArrowRight />
              </button> */}
              <Link to="/application" className="flex gap-4 items-center bg-special-green-icon hover:bg-green-600 transition-all duration-200 text-white text-xs md:text-[1.2vw] px-4 md:px-5 py-3 rounded-lg font-semibold shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 cursor-pointer">
              Start your Application <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAPurple;

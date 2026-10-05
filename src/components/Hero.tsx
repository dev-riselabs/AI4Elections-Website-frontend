import { FaArrowRight } from "react-icons/fa";
import CountdownTimer from "./CountDown";
import { Link } from "react-router";
export default function Hero() {
  return (
    <section className="w-full h-full  bg-[url('/hero-bg.png')]  bg-no-repeat bg-cover bg-center md:bg-center font-robotoMono p-2 md:p-6">
      {/* Top Bar (Navbar): Flex container with three distinct sections */}
      <header className="w-full ">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left: Dark blue background with white text */}
          <div className="flex items-center gap-2 md:pl-[7vw] lg:pl-[7.5vw] xl:pl-[10vw]  py-1.5  text-white text-[3.4vw] md:text-[1.4vw] xl:text-[1.2vw]  font-medium tracking-wide">
            <span className="text-center">
              <span className="text-accent-text">Application Deadline:</span> <br />
              Thursday 29th October 2026 at 11:59pm WAT
            </span>
          </div>

          {/* Center: A white block containing the AI6 logo */}
          <div className="flex gap-4 md:gap-10 xl:gap-30 md:items-center md:px-[2vw]">
            <div className="bg-white px-3 md:px-2 py-1.5 rounded-lg shadow-sm flex items-center justify-center">
              <img
                src="/ai6-logo.png"
                alt="AI6"
                className="h-[8vw] object-contain"
              />
            </div>

            {/* Right: An orange button */}
            <div>
              <button className="flex gap-4 md:gap-2 lg:gap-8 text-center items-center bg-accent-text hover:bg-orange-600 transition-colors duration-200 text-white text-[3vw] md:text-[1.3vw] xl:text-[1vw] font-semibold  px-4 md:px-[3vw] py-3 lg:py-4 rounded-lg shadow-sm hover:shadow cursor-pointer">
                Partner With Us <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section: Deep blue-to-purple gradient with dot/grid overlay */}
      <div className="relative max-w-7xl mx-auto text-white pt-12 md:pt-6 pb-8 overflow-hidden">
        <div className="relative z-10 ">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-0 lg:pt-5 items-center">
            {/* Left Column */}
            <div className="col-span-7 md:pl-8 xl:col-span-8 md:py-2 space-y-8 ">
              <h1 className="text-[10vw]  md:shadow-0 md:text-[4.5vw]  font-bold text-white mb-4 md:mb-0 xl:mb-6 tracking-tight leading-tight px-2 md:px-6 lg:pl-10">
                <span className="bg-linear-to-b from-brand-blue to-brand-purple bg-clip-text text-transparent">
                  #AI4ELECTIONS
                </span>{" "}
                <br /> HACKATHON 2026
              </h1>

              <p className="text-xs md:text-[1.3vw] text-white leading-[1.8] p-2 px-3 md:mb-0 md:pl-6 md:p-4 lg:pl-10 xl:mb-4">
                The #AI4Elections Hackathon is a national, multidisciplinary,
                nonpartisan electoral innovation project created by Rise
                Networks to mobilise and connect Nigeria's technology ecosystem,
                electoral experts, academic institutions, young innovators,
                researchers, developers and civil society to develop usable,
                practical, safe and responsible artificial intelligence and
                emerging technologies tools, solutions, platforms and
                applications for electoral processes, integrity, transparency,
                inclusion and democratic participation in Nigeria.
              </p>

              <div className="flex flex-wrap items-center gap-4 md:mb-4 xl:mb-8 pt-2 px-2 md:px-6 lg:pl-10">
                <Link
                  to="/application"
                  className="flex gap-8 md:gap-4  text-center items-center bg-accent-text hover:bg-orange-500 transition-all duration-200 md:text-[1.4vw] text-white px-16 md:px-4 lg:px-12 py-3 rounded-lg font-semibold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer"
                >
                  APPLY NOW ! <FaArrowRight />
                </Link>
                <button className="flex gap-8 md:gap-2 text-center items-center bg-transparent hover:bg-white/10 transition-all duration-200 border border-special-green-icon  text-white text-[0.75rem] md:text-[1vw] lg:text-md px-6 py-3 rounded-lg font-semibold hover:-translate-y-0.5 cursor-pointer">
                  Join #AI4Elections Dev Hub <FaArrowRight />
                </button>
              </div>
              <CountdownTimer />
            </div>

            {/* Right Column */}
            <div className="col-span-5 xl:col-span-4 mt-4 p-2 md:mt-0 md:p-[3vw] md:pr-[4.5vw] xl:p-[0.1vw] ">
              <img
                src="/hero-img.png"
                alt="Hero People"
                className="w-full max-w-md md:max-w-none object-contain align-center drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
} from "react-icons/fa";
import CountdownTimer from "./CountDown";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const heroSlides = [
  "/slider/optimized/hero-slide-01.jpg",
  "/slider/optimized/hero-slide-02.jpg",
  "/slider/optimized/hero-slide-03.jpg",
  "/slider/optimized/hero-slide-04.jpg",
  "/slider/optimized/hero-slide-05.jpg",
  "/slider/optimized/hero-slide-07.jpg",
  "/slider/optimized/hero-slide-08.jpg",
  "/slider/optimized/hero-slide-09.jpg",
  "/slider/optimized/hero-slide-12.jpg",
  "/slider/optimized/hero-slide-14.jpg",
  "/slider/optimized/hero-slide-15.jpg",
  "/slider/optimized/hero-slide-16.jpg",
  "/slider/optimized/hero-slide-17.jpg",
  "/slider/optimized/hero-slide-18.jpg",
  "/slider/optimized/hero-slide-19.jpg",
  "/flier_distribution.jpg",
  "/flier_distribution2.jpg",
];

export default function AfterHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) =>
        (currentSlide - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
  };

  return (
    <section className="w-full h-full  bg-[url('/hero-bg.jpg')]  bg-no-repeat bg-cover bg-center md:bg-center font-robotoMono p-2 md:p-6">
    

      {/* Main Hero Section: Deep blue-to-purple gradient with dot/grid overlay */}
      <div className="relative lg:max-w-7xl mx-auto text-white pt-12 md:pt-6 pb-8  overflow-hidden">
        <div className="relative z-10 ">
          <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-8 xl:gap-x-10 lg:pt-5 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-7 md:pl-7 xl:col-span-8 md:py-2 space-y-8 "
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[6.7vw]  md:shadow-0 md:text-[3.2vw] lg:text-[3.4vw] xl:pt-4  font-bold mb-1 md:mb-0 tracking-tight leading-tight px-2 md:px-6 lg:pl-10"
              >
                <span className="bg-linear-to-b from-brand-blue to-brand-purple bg-clip-text text-transparent">
                  #AI4Elections Hackathon, Elections Development Hub & Community
                  of Practice
                </span>
              </motion.h1>
              {/* <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[6.7vw]  md:shadow-0 md:text-[3.2vw] lg:text-[3.4vw]  font-bold mb-1 md:mb-0 tracking-tight leading-tight px-2 md:px-6 lg:pl-10"
              >
                 <span className="bg-linear-to-b from-brand-blue to-brand-purple bg-clip-text text-transparent">
                  #AI4ELECTIONS HACKATHON
                </span> 
              </motion.h1> */}
              <motion.div className="px-2 md:px-6 lg:pl-10 mb-2">
                <span className="text-[4vw] md:text-sm">
                  <span className="text-accent-text font-semibold">
                    Application Opens:
                  </span>
                  <span className="text-accent-yellow">
                    {" "}
                    Thursday 22nd October 2026
                  </span>
                </span>
              </motion.div>
              <motion.div className="px-2 md:px-6 lg:pl-10 mb-3">
                <span className="text-[4vw] md:text-sm">
                  <span className="text-accent-text font-semibold">
                    Application Closes:
                  </span>
                  <span className="text-accent-yellow">
                    {" "}
                    Thursday 12th November 2026 at 11:59pm WAT
                  </span>
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xs md:text-[1.15vw] text-white text-justify leading-[1.8] p-2 px-3 md:mb-0 md:pl-6 md:p-4 lg:pl-10 xl:mb-4"
              >
                {/* The #AI4Elections Hackathon is a national, multidisciplinary,
                nonpartisan electoral innovation project created by Rise
                Networks to mobilise and connect Nigeria's technology ecosystem,
                electoral experts, academic institutions, young innovators,
                researchers, developers and civil society to develop usable,
                practical, safe and responsible artificial intelligence and
                emerging technologies tools, solutions, platforms and
                applications for electoral processes, integrity, transparency,
                inclusion and democratic participation in Nigeria. */}
                The #AI4Elections Hackathon is a national, multidisciplinary,
                nonpartisan electoral innovation project created by Rise
                Networks to mobilise and connect Nigeria’s technology ecosystem,
                electoral experts, academic institutions, young innovators,
                researchers, developers and civil society to develop usable,
                practical, safe and responsible artificial intelligence and
                emerging technology tools, solutions, platforms and applications
                for electoral processes, integrity, transparency, inclusion and
                democratic participation in Nigeria.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap items-center gap-4 md:mb-4 xl:mb-8 pt-2 px-2 md:px-6 lg:pl-10"
              >
                <button
                  disabled
                  className="w-full md:w-[17vw] lg:w-[18vw] justify-center flex gap-8 md:gap-4  text-center items-center bg-accent-text hover:bg-orange-500 transition-all duration-200 md:text-[1.2vw] text-white px-16 md:px-4 lg:px-8 py-2 md:py-3 lg:py-2 rounded-lg font-semibold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-no-drop"
                >
                  Application Closed ! <FaArrowRight />
                </button>
                <a
                  href="/INEC_ICT_Director_Remarks_for_AI4Elections_World_Press_Conference_and_Ecosystem_Roundtable_in_Abuja_Nigeria_-_22102026.pdf"
                  download
                  className="w-full md:w-[25vw] justify-center flex gap-6 md:gap-4 lg:gap-2 text-center items-center bg-white transition-all duration-200 hover:bg-orange-500/60 hover:text-white  text-brand-blue text-[0.75rem] md:text-[1.4vw] lg:text-[1.1vw] px-2 md:px-4 lg:px-2 py-4 md:py-1 lg:py-3 rounded-lg font-semibold hover:-translate-y-0.5 cursor-pointer "
                >
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  >
                    <FaDownload />
                  </motion.span>
                  Download INEC ICT Director’s Statement
                </a>
                <Link
                  to="/community-page"
                  className="flex gap-2 md:gap-2 lg:gap-4 text-center items-center bg-transparent hover:bg-white/10 transition-all duration-200 border border-special-green-icon  text-white text-[0.75rem] md:text-[1.25vw] xl:text-[1vw]  px-9 md:px-3 lg:px-4 xl:px-6  py-2 md:py-3 xl:py-3 rounded-lg font-semibold hover:-translate-y-0.5 cursor-pointer"
                >
                  Join #AI4Elections Development Hub and Community of Practice
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
              </motion.div>
              <CountdownTimer />
              <motion.div className="px-2 md:px-6 lg:pl-10 mb-3">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-xs md:text-[1.4vw] text-white text-justify leading-[1.8]"
                >
                  Information Session
                </motion.p>
                <span className="text-[4vw] md:text-sm">
                  <span className="text-accent-text font-semibold">Date:</span>
                  <span className="text-accent-yellow">
                    Monday 9th November 2026 at 12:00 noon WAT
                  </span>
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="md:mb-4 xl:mb-8 pt-2"
                >
                  <Link
                    to="https://meet.google.com/vbo-wtkm-dxg"
                    className="w-full md:w-[17vw] lg:w-[24vw]  text-center bg-accent-text hover:bg-orange-500 transition-all duration-200 md:text-[1.2vw] text-white px-12 md:px-4 lg:px-6 py-3 md:py-3 lg:py-2 rounded-lg font-semibold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Join Information Session
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <div className="col-span-5 xl:col-span-4 mt-4 p-2 md:mt-0 md:p-[3vw] md:pr-[4.5vw] xl:p-[0.1vw] ">
              <div
                className="relative w-full"
                role="region"
                aria-label="Hero image carousel"
                aria-roledescription="carousel"
              >
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={activeSlide}
                      src={heroSlides[activeSlide]}
                      alt="Hero People"
                      decoding="async"
                      fetchPriority={activeSlide === 0 ? "high" : "auto"}
                      loading={activeSlide === 0 ? "eager" : "lazy"}
                      className="w-full max-w-md md:max-w-none object-contain align-center drop-shadow-2xl"
                      initial={{ opacity: 0, x: 36 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -36 }}
                      transition={{ duration: 0.35 }}
                    />
                  </AnimatePresence>
                </div>
                <button
                  type="button"
                  onClick={showPreviousSlide}
                  aria-label="Show previous hero image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextSlide}
                  aria-label="Show next hero image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <FaChevronRight aria-hidden="true" />
                </button>
                <div
                  className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2"
                  aria-label="Choose hero image"
                >
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show hero image ${index + 1}`}
                      aria-current={activeSlide === index ? "true" : undefined}
                      className={`h-2 w-2 md:hidden lg:block rounded-full border border-white transition-colors ${
                        activeSlide === index ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

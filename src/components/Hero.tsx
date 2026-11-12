// import { useRef } from "react";

export default function Hero() {
  // const videoRef = useRef<HTMLVideoElement>(null);

  

  // const togglePlayback = () => {
  //   const video = videoRef.current;

  //   if (!video) return;

  //   if (video.muted) {
  //     video.muted = false;
  //     // void video.play().catch((error) => {
  //     //   console.error("Could not play hero video:", error);
  //     // });
  //   } else {
  //     video.muted = true;
  //   }
  // };

  return (
    <section className="relative isolate h-screen w-full bg-[url('/fallback.jpg')] overflow-hidden font-robotoMono p-2 md:p-6">
      {/* <video
        className="absolute inset-0 z-0 h-full w-full cursor-pointer object-cover"
        src="/Hackathon.mp4"
        loop  
        ref={videoRef}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
        onClick={togglePlayback}
      /> */}
      {/* Top Bar (Navbar): Flex container with three distinct sections */}
      <header className="relative z-10 grid w-full grid-cols-[auto_auto] justify-between gap-5 md:grid-cols-[auto_auto_auto] md:gap-10">
        <a href="https://risenetworks.org" aria-label="Rise Networks website">
          <img
            src="/risenetworks_header_logo.png"
            alt="Rise Networks"
            className="object-contain w-auto h-[20vw] md:h-[10vw] lg:h-[9vw] "
          />
        </a>
        <a href="/" aria-label="#AI4Elections homepage">
          <img
            src="/ai6-logo.png"
            alt="#AI4Elections"
            className="object-contain w-auto h-[20vw] md:h-[10vw] lg:h-[9vw] "
          />
        </a>

        <button
          disabled
          className="flex items-center gap-2 bg-accent-orange  justify-center text-white font-bold text-[3.9vw] md:text-[1.2vw] rounded-md px-2 md:px-6 py-3 md:self-center cursor-no col-span-2 md:col-span-1"
        >
          Grand Finale 16th December 2026
        </button>
        {/* <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-3"> */}
        {/* Left: Dark blue background with white text */}
        {/* <div className="gap-2 md:pl-[7vw] lg:pl-[7.5vw] xl:pl-[10vw]  py-1.5  text-white text-[3.4vw] md:text-[1.4vw] xl:text-[1.2vw]  font-medium tracking-wide">
            {/* <span className="text-center">
              <span className="text-accent-text">Application Deadline:</span>{" "}
              <br />
              Friday 29th October 2026 at 11:59pm WAT
            </span> 
            <img
              src="/risenetworks_footer_logo.png"
              alt="AI6"
              className="h-[25vw] object-contain"
            />
          </div> */}
        {/* Center: A white block containing the AI6 logo */}
        {/* <div className="w-full flex gap-4 md:gap-10 xl:gap-30 md:items-center md:px-[2vw]"> */}
        {/* <div className="bg-white px-3 md:px-2 py-1.5 rounded-lg shadow-sm flex items-center justify-center">
              <img
                src="/ai6-logo.png"
                alt="AI6"
                className="h-[15vw] object-contain"
              />
            </div> */}

        {/* Right: An orange button */}

        {/* <div className="col-span-2">
              <button className="flex gap-4 md:gap-2 lg:gap-8 text-center items-center bg-accent-text hover:bg-orange-600 transition-colors duration-200 text-white text-[4vw] md:text-[1.3vw] xl:text-[1vw] font-semibold  px-4 md:px-[3vw] py-3 lg:py-4 rounded-lg shadow-sm hover:shadow cursor-pointer">
                Partner With Us <FaArrowRight />
              </button>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </header>
    </section>
  );
}

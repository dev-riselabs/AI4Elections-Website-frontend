import { useState } from 'react';
import { Play, Pause, MoveLeft, MoveRight } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  src: string;
  alt: string;
}

const partners: Partner[] = [
   {
    id: 1,
    name: "Rise Networks",
    src: "/risenetworks_logo_.png",
    alt: "Rise Networks Logo",
  },
  {
    id: 2,
    name: "NITDA Nigeria",
    src: "/nitda_logo.png",
    alt: "NITDA Logo",
  },
  // {
  //   id: 3,
  //   name: "NCC Nigeria",
  //   src: "/ncc_logo.png",
  //   alt: "NCC Logo",
  // },
  {
    id: 4,
    name: "INEC Nigeria",
    src: "/inec_logo.png",
    alt: "INEC Logo",
  },
  {
    id: 5,
    name: "Cleen Foundation",
    src: "/cleen_logo.png",
    alt: "Cleen Foundation Logo",
  },
  // {
  //   id: 6,
  //   name: "Meta",
  //   src: "/meta_logo.png",
  //   alt: "Meta Logo",
  // },
  {
    id: 7,
    name: "ICIR",
    src: "/icir_logo.png",
    alt: "ICIR Logo",
  },
  {
    id: 8,
    name: "Nithub",
    src: "/nithub_logo.png",
    alt: "Nithub Logo",
  },
  {
    id: 9,
    name: "Citad",
    src: "/citad_logo.png",
    alt: "Citad Logo",
  },
  //  {
  //   id: 10,
  //   name: "Tap Initiative",
  //   src: "/tab_logo.png",
  //   alt: "Tap initiative Logo",
  // },
  //  {
  //   id: 11,
  //   name: "PAN ATLANTIC SCHOOL OF MEDIA AND COMMUNICATION",
  //   src: "/pan_atlantic_logo.png",
  //   alt: "PAN ATLANTIC Logo",
  // },
  //  {
  //   id: 12,
  //   name: "Google",
  //   src: "/google_logo.png",
  //   alt: "Google Logo",
  // },
  //  {
  //   id: 13,
  //   name: "Microsoft",
  //   src: "/Microsoft_logo.png",
  //   alt: "Microsoft Logo",
  // },
   {
    id: 14,
    name: "FUTA",
    src: "/futa_logo.png",
    alt: "FUTA Logo",
  },
];

// Replicate partners 4 times to ensure seamless infinite looping on all screen sizes
const marqueeList = [
  ...partners,
  ...partners,
  ...partners,
  ...partners,
];

export default function Sponsors() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');

  const toggleDirection = () => {
    setDirection((prev) => (prev === 'normal' ? 'reverse' : 'normal'));
  };

  return (
    <section
      id="partners"
      aria-label="Partners and Sponsors"
      className="relative bg-white py-4 md:py-8  border-b border-gray-100 overflow-hidden"
    >
      {/* Header Bar */}
      <div className="max-w-7xl mx-auto px-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-2">
           {/* Pause / Play Button */}
          <button
            type="button"
            onClick={() => setIsPlaying((prev) => !prev)}
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
            title={isPlaying ? "Pause slider" : "Resume slider"}
            aria-label={isPlaying ? "Pause slider" : "Resume slider"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-gray-600" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-accent-text fill-accent-text" />
                <span className="text-accent-text font-medium">Play</span>
              </>
            )}
          </button>
          {/* Reverse Direction Button */}
          <button
            type="button"
            onClick={toggleDirection}
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
            title={`Reverse direction (currently ${direction === 'normal' ? 'left' : 'right'})`}
            aria-label="Reverse slider direction"
          >
            {direction === 'normal' ? (
              <>
                <MoveRight className="w-3.5 h-3.5 text-gray-500" />
                <span className="hidden xs:inline">Reverse</span>
              </>
            ) : (
              <>
                <MoveLeft className="w-3.5 h-3.5 text-gray-500" />
                <span className="hidden xs:inline">Reverse</span>
              </>
            )}
          </button>

         
        </div>
      </div>

      {/* Slider Viewport with Left & Right Gradient Blend Masks */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Left smooth fade mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-linear-to-r from-white via-white/80 to-transparent z-10" />

        {/* Right smooth fade mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-linear-to-l from-white via-white/80 to-transparent z-10" />

        {/* Sliding Marquee Track */}
        <div
          className="flex items-center gap-6 sm:gap-8 w-max animate-sponsor-marquee py-2"
          style={{
            animationPlayState: isPlaying && !isHovered ? 'running' : 'paused',
            animationDirection: direction,
          }}
        >
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="relative flex flex-col items-center justify-center h-30 sm:h-36 px-2 md:px-6  transition-all duration-300 min-w-50 sm:min-w-57.5 cursor-pointer"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className=" h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Tooltip badge on hover */}
              {/* <div className="pointer-events-none absolute -top-10 flex flex-col items-center gap-1 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-900 text-white text-[8px]  font-medium py-1 px-3 rounded-lg whitespace-nowrap shadow-xl z-40">
                <span>{partner.name}</span>
                <span className="text-orange-400 ml-1.5">• {partner.role}</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

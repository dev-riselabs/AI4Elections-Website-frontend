import { useEffect, useState } from "react";

const EVENT_YEAR = 2026;
const EVENT_MONTH = 10; // November (0-based)
const START_DAY = 13;
const TARGET_DATE = new Date(EVENT_YEAR, EVENT_MONTH, START_DAY, 0, 0, 0);

const format = (value: number) => String(value).padStart(2, "0");

const calculateTimeLeft = () => {
  const difference = TARGET_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (TARGET_DATE.getTime() <= Date.now()) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());

      if (TARGET_DATE.getTime() <= Date.now()) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //   if (status === "LIVE") {
  //     return (
  //       <p className="text-2xl font-bold text-green-600">
  //         🎉 Event is happening now
  //       </p>
  //     );
  //   }

  //   if (status === "ENDED") {
  //     return (
  //       <div className="flex items-center gap-3 sm:gap-6 text-center font-jost text-green100">
  //         <div>
  //           <p className="text-4xl md:text-5xl font-bold">00</p>
  //           <span className="text-[10px] font-medium">Days</span>
  //         </div>

  //         <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green100 rounded-full"></div>

  //         <div>
  //           <p className="text-4xl md:text-5xl font-bold">00</p>
  //           <span className="text-[10px] font-medium">Hours</span>
  //         </div>
  //         <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green100 rounded-full"></div>

  //         <div>
  //           <p className="text-4xl md:text-5xl font-bold">00</p>
  //           <span className="text-[10px] font-medium">Mins</span>
  //         </div>

  //         <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green100 rounded-full"></div>

  //         <div>
  //           <p className="text-4xl md:text-5xl font-bold">00</p>
  //           <span className="text-[10px] font-medium">Secs</span>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div className="flex items-center gap-3  text-center text-green100 px-4 md:pl-8">
      <div>
        <span className="text-[10px] font-medium text-small-text">Days</span>
        <p className="text-4xl lg:text-5xl">{format(timeLeft.days)}</p>
      </div>

      <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green100 rounded-full">:</div>

      <div>
        <span className="text-[10px] font-medium text-small-text">Hours</span>
        <p className="text-4xl lg:text-5xl">{format(timeLeft.hours)}</p>
      </div>
      <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green100 rounded-full">:</div>

      <div>
        <span className="text-[10px] font-medium text-small-text">Mins</span>
        <p className="text-4xl lg:text-5xl">{format(timeLeft.minutes)}</p>
      </div>

      <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green100 rounded-full">:</div>

      <div>
        <span className="text-[10px] font-medium text-small-text">Secs</span>
        <p className="text-4xl lg:text-5xl">{format(timeLeft.seconds)}</p>
      </div>
    </div>
  );
}

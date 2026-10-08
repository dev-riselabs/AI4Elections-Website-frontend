import { useEffect, useState } from "react";

const EVENT_MONTH = 10; // June (0-based)
const START_DAY = 5;
// const END_DAY = 10;

const getTargetDate = () => {
  const now = new Date();
  let target = new Date(now.getFullYear(), EVENT_MONTH, START_DAY, 9, 0, 0);

  if (now > target) {
    target = new Date(now.getFullYear() + 1, EVENT_MONTH, START_DAY, 9, 0, 0);
  }

  return target;
};

const format = (value: number) => String(value).padStart(2, "0");

const calculateTimeLeft = () => {
  const difference = +getTargetDate() - +new Date();

  if (difference <= 0) {
    return null;
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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

  if (!timeLeft) return null;

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

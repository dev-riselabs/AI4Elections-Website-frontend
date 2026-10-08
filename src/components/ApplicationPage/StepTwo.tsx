import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";

type StepTwoProps = {
  handleNext: (value: number) => void;
};

function StepTwo({ handleNext }: StepTwoProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-4">
        {/* Your Skills */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">Your Skills</h3>
          <div className="flex flex-col gap-4"><div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Skills (Use (,) after each skill) *
              </label>
              <textarea name="skills" className="rounded-xl text-sm md:text-base bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Tell us about your relevant experience *
              </label>
              <textarea name="relevant_experience" className="rounded-xl text-sm md:text-base bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Your Interest */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">Your Interest</h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
               Which challenge track interests you most? *
              </label>
              <input name="challenge_track" type="text" placeholder="Enter your preferred challenge track" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 outline-none" />
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Why are you interested in this challenge area? *
              </label>
              <textarea name="challenge_interest_reason" className="rounded-xl text-sm md:text-base bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>

      <div className="flex gap-4 md:gap-6 items-center">
        <button type="button" onClick={()=> handleNext(1)} className="flex items-center gap-2 border-3 h-10 md:h-14 flex-1 border-special-green-icon text-special-green-icon font-bold text-sm md:text-lg rounded-md px-6 py-3 justify-center min-w-0">
        
        <IoArrowBackOutline className="w-5 md:w-6 h-5 md:h-6" />
        Previous
      </button>
        <button type="button" onClick={()=> handleNext(3)} className="flex items-center gap-2 h-10 md:h-14 flex-1 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-6 py-3 justify-center min-w-0">
              Next
              <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
            </button></div>
    </div>
  );
}

export default StepTwo;

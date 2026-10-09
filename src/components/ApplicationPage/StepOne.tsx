import { HiOutlineMail } from "react-icons/hi";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LuPhone, LuUser } from "react-icons/lu";
import { TbBriefcase2 } from "react-icons/tb";
import LocationFields from "../LocationFields";

type StepOneProps = {
  handleNext: (value: number) => void;
  applicationType: string;
  onApplicationTypeChange: (value: string) => void;
}

function StepOne({ handleNext, applicationType, onApplicationTypeChange }: StepOneProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-4">
        {/* personal information */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                First Name *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="John"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Last Name *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Doe"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Email Address *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <HiOutlineMail className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="johndoe@example.com"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Phone Number *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuPhone className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="(555) 123-5672"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <LocationFields />
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                What best describe your application? *
              </label>
              <select name="application_type" value={applicationType} onChange={(event) => onApplicationTypeChange(event.currentTarget.value)} className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <option value="">Select</option>
                {/* <option value="Individual">Individual</option> */}
                <option value="Team">Team</option>
                {/* <option value="Organization">Organization</option> */}
              </select>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
        {/* background */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">Your Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Tell us about your experience *
              </label>
              <textarea name="experience_summary" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none"></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
               Primary Area of Expertise *
              </label>
              <input name="primary_expertise" type="text" placeholder="Enter your primary expertise" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Years of Experience *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="number"
                  name="years_experience"
                  inputMode="numeric"
                  min="0"
                  max="80"
                  step="1"
                  required
                  placeholder="4"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
             <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Current Role / Occupation *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="text"
                  name="current_role"
                  required
                  placeholder="Enter your current role"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Organisation / Institution *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="text"
                  name="organization"
                  required
                  placeholder="Enter organisation or institution"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
               Highest level of Education *
              </label>
              <input name="education_level" type="text" placeholder="Enter your highest education level" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-lg text-header-text font-medium"
              >
                Academic / Professional Field *
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <TbBriefcase2 className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="text"
                  name="academic_field"
                  required
                  placeholder="Enter your field"
                  className="text-sm md:text-base text-input-text outline-none flex-1"
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>
      <button type="button" onClick={()=> handleNext(2)} className="flex items-center gap-2 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-6 py-2 md:py-3 justify-center">
        Next
        <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
      </button>
    </div>
  );
}

export default StepOne;

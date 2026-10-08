import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { useState } from "react";

type StepFourProps = {
  handleNext: (value: number) => void;
  applicationType: string;
};

function StepFour({ handleNext, applicationType }: StepFourProps) {
  const [teamMatching, setTeamMatching] = useState("");
  const [needsAccessibilitySupport, setNeedsAccessibilitySupport] = useState("");

  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-6">
        {applicationType === "Individual" && <>
        {/* Applying as an Individual */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">
            Applying as an Individual
          </h3>
          <div className="flex flex-col gap-6">
            {teamMatching === "true" && <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                What type of collaborator would you like to work with?
              </label>
              <select name="collaborator_type" className="rounded-xl text-sm md:text-base bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <option value="">Select</option><option value="Designer">Designer</option><option value="Developer">Developer</option><option value="Researcher">Researcher</option><option value="Policy specialist">Policy specialist</option><option value="Other">Other</option>
              </select>
            </div>}
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Would you like to participate in team matching?
              </label>
              <div className="flex items-center gap-12 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="radio" name="team_matching" value="true" checked={teamMatching === "true"} onChange={(event) => setTeamMatching(event.currentTarget.value)} />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="team_matching" value="false" checked={teamMatching === "false"} onChange={(event) => setTeamMatching(event.currentTarget.value)} />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>}

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Applying as an existing team */}
        {(applicationType === "Team" || applicationType === "Organization") && <div className="flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">
            Applying as an existing team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Team Name
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <LuUser className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="text"
                  name="team_name"
                  placeholder=""
                  className="text-header-text text-sm md:text-base outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Team Lead
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  name="team_lead"
                  placeholder=""
                  className="text-header-text text-sm md:text-base outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Team size
              </label>
              <div className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                <LuUser className="w-5 md:w-6 h-5 md:h-6" />
                <input
                  type="text"
                  name="team_size"
                  inputMode="numeric"
                  placeholder="4"
                  className="text-header-text text-sm md:text-base outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Team Description
              </label>
              <textarea name="team_description" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Names and Role of Team Members ( use (,) after each name and
                role)
              </label>
              <textarea name="team_members" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
          </div>
        </div>}

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Accessibility & Participation needs */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">
            Accessibility & Participation needs
          </h3>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Do you have any accessibility or participation requirements you
                would like us to consider?
              </label>
              <div className="flex items-center gap-12 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="radio" name="accessibility_requirements" value="true" checked={needsAccessibilitySupport === "true"} onChange={(event) => setNeedsAccessibilitySupport(event.currentTarget.value)} />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="accessibility_requirements" value="false" checked={needsAccessibilitySupport === "false"} onChange={(event) => setNeedsAccessibilitySupport(event.currentTarget.value)} />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    No
                  </label>
                </div>
              </div>
            </div>
            {needsAccessibilitySupport === "true" && <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                If yes, please tell us what support you may require
              </label>
              <textarea name="accessibility_support" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>}
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>

      <div className="flex gap-6 items-center">
        <button
          type="button"
          onClick={() => handleNext(3)}
          className="flex items-center gap-2 border-3 h-10 md:h-14 flex-1 border-special-green-icon text-special-green-icon font-bold text-sm md:text-lg rounded-md px-6 py-3 justify-center min-w-0"
        >
          <IoArrowBackOutline className="w-5 md:w-6 h-5 md:h-6" />
          Previous
        </button>
        <button
          type="button"
          onClick={() => handleNext(5)}
          className="flex items-center gap-2 h-10 md:h-14 flex-1 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-6 py-3 justify-center min-w-0"
        >
          Next
          <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default StepFour;

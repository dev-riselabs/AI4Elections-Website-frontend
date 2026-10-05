import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";
import { useState } from "react";

type StepThreeProps = {
  handleNext: (value: number) => void;
};

function StepThree({ handleNext }: StepThreeProps) {
  const [hasSolutionIdea, setHasSolutionIdea] = useState("");
  const [hasPrototype, setHasPrototype] = useState("");

  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-4">
        {/* Your Skills */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl text-price-banner">Your Idea</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                Do you already have a solution idea? *
              </label>
              <div className="flex items-center gap-y-4 gap-x-12 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="radio" name="has_solution_idea" value="true" checked={hasSolutionIdea === "true"} onChange={(event) => setHasSolutionIdea(event.currentTarget.value)} required />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Yes, I have an idea
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="has_solution_idea" value="false" checked={hasSolutionIdea === "false"} onChange={(event) => setHasSolutionIdea(event.currentTarget.value)} required />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    No, I would like to develop an idea during the programme
                  </label>
                </div>
              </div>
            </div>
            {hasSolutionIdea === "true" && <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                If Yes, what problem are you trying to solve? *
              </label>
              <textarea name="problem_to_solve" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                Who is affected by this problem? *
              </label>
              <textarea name="affected_people" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                Describe your proposed solution *
              </label>
              <textarea name="proposed_solution" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                How would AI or technology contribute to the solution? *
              </label>
              <textarea name="technology_contribution" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                Who would benefit from the solution? *
              </label>
              <textarea name="beneficiaries" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                What makes your approach different or useful? *
              </label>
              <textarea name="differentiation" className="rounded-xl bg-form-input shadow-md flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            </div>}

            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                What stage is your idea currently at? *
              </label>
              <div className="flex items-center gap-x-12 gap-y-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="idea_stage[]" value="Idea only" required />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Idea only
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="idea_stage[]" value="Research completed" />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Research completed
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="idea_stage[]" value="Early concept" />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Early concept
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="idea_stage[]" value="Working prototype" />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Working prototype
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="idea_stage[]" value="Prototype" />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Prototype
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="idea_stage[]" value="Existing product/project" />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Existing product/project
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" name="idea_stage[]" value="Research project" />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Research project
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                Do you already have a prototype?
              </label>
              <div className="flex items-center gap-y-4 gap-x-12 flex-wrap">
                <div className="flex items-center gap-3">
                  <input type="radio" name="has_prototype" value="true" checked={hasPrototype === "true"} onChange={(event) => setHasPrototype(event.currentTarget.value)} />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="radio" name="has_prototype" value="false" checked={hasPrototype === "false"} onChange={(event) => setHasPrototype(event.currentTarget.value)} />
                  <label htmlFor="" className="text-header-text text-sm md:text-base">
                    No
                  </label>
                </div>
              </div>
            </div>

            {hasPrototype === "true" && <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-base md:text-xl text-header-text font-medium"
              >
                If yes, prototype/project link
              </label>
              <div className="rounded-xl bg-form-input shadow-md  flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                {/* <LuPhone className="w-5 md:w-6 h-5 md:h-6" /> */}
                <input
                  type="url"
                  name="prototype_link"
                  placeholder="URL"
                  className="text-sm md:text-base text-input-text outline-none"
                />
              </div>
            </div>}
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>

      <div className="flex gap-4 md:gap-6 items-center">
        <button type="button"
          onClick={() => handleNext(2)}
          className="flex items-center gap-2 border-3 h-10 md:h-14 flex-1 border-special-green-icon text-special-green-icon font-bold text-sm md:text-lg rounded-md px-6 py-3 justify-center min-w-0"
        >
          <IoArrowBackOutline className="w-5 md:w-6 h-5 md:h-6" />
          Previous
        </button>
        <button type="button"
          onClick={() => handleNext(4)}
          className="flex items-center gap-2 h-10 md:h-14 flex-1 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-6 py-3 justify-center min-w-0"
        >
          Next
          <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default StepThree;

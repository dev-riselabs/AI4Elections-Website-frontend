import { IoArrowForwardSharp } from "react-icons/io5";

type StepFiveProps = {
  isSubmitting: boolean;
};

const commitments = [
  "Develop partisan voter-persuasion technology as part of the programme.",
  "Conduct political microtargeting or manipulate electoral participation.",
  "Access electoral systems or institutional infrastructure without explicit authorisation.",
  "Test solutions on live electoral systems without appropriate approval.",
  "Use unauthorised personal, confidential or institutional data.",
  " Present AI-generated outputs as authoritative electoral results.",
  "Misrepresent the capabilities, accuracy or limitations of your solution.",
];

function StepFive({ isSubmitting }: StepFiveProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-12">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <div className="flex flex-col gap-6">
        {/* Applying as an Individual */}
        <div className="flex flex-col gap-6 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">
            Responsible Participation *
          </h3>
          <div className="flex flex-col gap-6">
            <p className="text-sm md:text-base">
              #AI4Elections is a nonpartisan public-interest innovation
              programme. All participants are expected to respect electoral law,
              fundamental rights, privacy, security and responsible AI
              principles.
            </p>
          </div>
        </div>
        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Key commitments */}
        <div className="flex flex-col gap-6 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner uppercase font-semibold mb-2">Key commitments *</h3>
          <div className="flex flex-col gap-6">
            <p className="text-sm md:text-base">
              By participating, you agree that you will not:
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              {commitments.map((commitment) => (
                <li key={commitment} className="text-sm md:text-base">
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Confirmation  */}
        <div className="flex flex-col gap-6 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner">Confirmation *</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <input type="checkbox" name="responsible_participation_confirmed" value="true" required />
              <label htmlFor="" className="text-header-text text-sm md:text-base">
                I have read and understand the responsible participation
                requirements.
              </label>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Data & Privacy  */}
        <div className="flex flex-col gap-6 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner">Data & Privacy *</h3>
          <div className="flex flex-col gap-6">
            <p className="text-sm md:text-base">
              Information submitted through this application will be used to
              administer the #AI4Elections Hackathon, assess applications,
              communicate with applicants and support programme planning and
              reporting.
            </p>
            <p className="text-sm md:text-base">
              Where you separately consent to participate in the #AI4Elections
              Community of Practice, relevant professional information may be
              included in the programme's consent-based community registry.
            </p>
            <p className="text-sm md:text-base">
              You will receive appropriate information about how your data is
              collected, used, stored and protected, including how you can
              update or withdraw your information where applicable.
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* checkbox */}
        <div className="flex flex-col gap-6 pb-3">
          <div className="flex items-center gap-3">
            <input type="checkbox" name="information_accurate" value="true" required />
            <label htmlFor="" className="text-header-text text-sm md:text-base">
              I confirm that the information provided in this application is
              accurate to the best of my knowledge.
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="privacy_consent" value="true" required />
            <label htmlFor="" className="text-header-text text-sm md:text-base">
              I agree to the processing of my information for the purposes
              described in the Privacy Notice.
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="community_opt_in" value="true" />
            <label htmlFor="" className="text-header-text text-sm md:text-base">
              I would like to opt in to the #AI4Elections Community of Practice
              and national registry.
            </label>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* Applicant Declaration   */}
        <div className="flex flex-col gap-6 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner">
            Applicant Declaration *
          </h3>
          <div className="flex flex-col gap-6">
            <p className="text-sm md:text-base">
              I confirm that the information provided in this application is
              accurate and complete to the best of my knowledge.
            </p>
            <p className="text-sm md:text-base">
              I understand that participation in the #AI4Elections Hackathon is
              subject to the programme's eligibility requirements, code of
              conduct, technical rules and safeguarding requirements.
            </p>
            <p className="text-sm md:text-base">
              I understand that participation or winning an award does not
              constitute approval for operational deployment of a solution.
            </p>
            <p className="text-sm md:text-base">
              I agree to comply with applicable laws, programme rules and
              responsible technology requirements throughout my participation.
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>

        {/* checkbox */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <input type="checkbox" name="applicant_declaration_agreed" value="true" required />
            <label htmlFor="" className="text-header-text text-sm md:text-base">
              I agree to the Applicant Declaration.
            </label>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
      </div>

      <div className="flex gap-6 items-center">
        {/* <button
                onClick={() => handleNext(3)}
                className="flex items-center gap-2 border-3 h-14 flex-1 border-special-green-icon text-special-green-icon font-bold text-lg rounded-md px-6 py-3 justify-center"
              >
                <IoArrowBackOutline className="w-5 md:w-6 h-5 md:h-6" />
                Previous
              </button> */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 h-10 md:h-14 flex-1 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-6 py-3 justify-center"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
          <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>
    </div>
  );
}

export default StepFive;

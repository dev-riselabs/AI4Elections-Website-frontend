import { useState, type FormEvent } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowForwardSharp } from "react-icons/io5";
import { LuPhone, LuUser } from "react-icons/lu";
import { ApiRequestError, postForm } from "../../lib/api";
import CommunitySubmittedModal from "./CommunitySubmittedModal";
import LocationFields from "../LocationFields";

function FormContainer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<ApiRequestError | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await postForm("/community-memberships", new FormData(event.currentTarget));
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof ApiRequestError
          ? error
          : new ApiRequestError("Your submission could not be completed."),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="px-4 md:px-10 lg:px-25 bg-cover bg-no-repeat bg-center flex flex-col gap-10.5 py-15"
      style={{
        backgroundImage: "url('/application_page_form_bg.png')",
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        {submitError && (
          <div role="alert" className="mb-5 rounded-md border border-red-700 bg-white p-4 text-red-800">
            <p>{submitError.message}</p>
            {Object.entries(submitError.errors).map(([field, messages]) => (
              <p key={field}>{field.replaceAll("_", " ")}: {messages.join(" ")}</p>
            ))}
          </div>
        )}
      <div className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-12">
        <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
        <div className="flex flex-col gap-5">
          {/* personal information */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl md:text-2xl text-price-banner">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm md:text-base text-header-text font-medium"
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
                  className="text-sm md:text-base text-header-text font-medium"
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
                  className="text-sm md:text-base text-header-text font-medium"
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
                  className="text-sm md:text-base text-header-text font-medium"
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
                  className="text-sm md:text-base text-header-text font-medium"
                >
                  What best describe your application? *
                </label>
                <select name="application_type" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all">
                  <option value="">Select</option><option value="Individual">Individual</option><option value="Team">Team</option><option value="Organization">Organization</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm md:text-base text-header-text font-medium"
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
                  className="text-sm md:text-base text-header-text font-medium"
                >
                  What areas are you interested in? *
                </label>
                <input name="areas_of_interest" type="text" placeholder="Enter your areas of interest" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 outline-none" />
              </div>
               <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm md:text-base text-header-text font-medium"
                >
                  How would you like to participate? *
                </label>
                <input name="participation_preference" type="text" placeholder="How would you like to participate?" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm md:text-base text-header-text font-medium"
                >
                  Education Qualification *
                </label>
                <input name="education_qualification" type="text" placeholder="Enter your qualification" className="rounded-xl bg-form-input shadow-md text-sm md:text-base flex items-center gap-2.5 px-4 py-2.5 outline-none" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
              <label
                htmlFor=""
                className="text-sm md:text-base text-header-text font-medium"
              >
                Tell us a little about yourself *
              </label>
              <textarea name="about_yourself" placeholder="Briefly tell us about your interests, experience or what you hope to contribute." className="rounded-xl bg-form-input shadow-md flex text-sm md:text-base items-center gap-2.5 px-4 py-2.5 focus-within:border focus-within:border-brand-blue transition-all resize-none outline-none h-30 md:h-47.5"></textarea>
            </div>
            </div>
          </div>

          {/* divider */}
          <div className="max-w-147.25 bg-divider w-full h-0.5"></div>


           {/* Community Consent *  */}
        <div className="flex flex-col gap-5 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner">Community Consent *</h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <input type="checkbox" name="community_consent" value="true" required />
              <label htmlFor="" className="text-header-text text-xs md:text-base">
                I agree to join the #AI4Elections Community of Practice and allow my information to be used to facilitate relevant community activities, collaboration, mentorship and research opportunities.
              </label>
            </div>
          </div>
        </div>

        {/* divider */}
          <div className="max-w-147.25 bg-divider w-full h-0.5"></div>


           {/* Email Updates */}
        <div className="flex flex-col gap-5 pb-3">
          <h3 className="text-xl md:text-2xl text-price-banner">Email Updates</h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <input type="checkbox" name="email_updates" value="true" />
              <label htmlFor="" className="text-header-text text-xs md:text-base">
               I would like to receive relevant #AI4Elections community updates and opportunities by email.
              </label>
            </div>
          </div>
        </div>
          

          {/* divider */}
          <div className="max-w-147.25 bg-divider w-full h-0.5"></div>
        </div>
        <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-accent-orange text-white font-bold text-sm md:text-lg rounded-md px-2 md:px-6 py-2 md:py-3 justify-center disabled:opacity-60">
          {isSubmitting ? "Submitting..." : "Join the Community of Practice"}
          <IoArrowForwardSharp className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>
      </form>
      {submitted && <CommunitySubmittedModal />}
    </div>
  );
}

export default FormContainer;

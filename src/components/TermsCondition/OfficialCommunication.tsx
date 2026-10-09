function OfficialCommunication() {
  return (
    <article className="flex flex-col rounded-3xl border border-form-border border-t-0 overflow-hidden relative p-4 md:p-8 gap-3">
      <div className="w-full h-1.5 bg-linear-to-r from-[#2563EB] to-[#7C3AED] top-0 left-0 absolute"></div>
      <h3 className="text-lg md:text-2xl font-bold text-terms-text">
        → Official Communications and Contact{" "}
      </h3>
      <div className="flex flex-col gap-6">
        <p className="text-xs md:text-base text-header-text leading-8">
          All official communications regarding the #AI4Elections Hackathon
          2026-2027 shall be issued through Rise Networks' designated
          communication channels.
        </p>
        <p className="text-xs md:text-base text-header-text leading-8">
          For enquiries, clarification or matters relating to participation,
          please contact:{" "}
        </p>
        <ul className="flex flex-col gap-3">
          <li className="text-xs md:text-base text-accent-text leading-8">
            Rise Networks{" "}
          </li>
          <li className="text-xs md:text-base text-header-text leading-8">
            Email: <span className="font-bold">labs@risenetworks.org</span>{" "}
          </li>
          <li className="text-xs md:text-base text-header-text leading-8">
            Website:{" "}
            <span className="font-bold">
              {" "}
              ai4elections.risenetworks.org{" "}
            </span>{" "}
          </li>
        </ul>
        <p className="text-xs md:text-base text-header-text leading-8">
          By registering for or participating in the #AI4Elections Hackathon
          2026-2027, participants acknowledge that they have read, understood
          and agreed to these Terms and Conditions and the applicable
          Competition rules.
        </p>
      </div>
    </article>
  );
}

export default OfficialCommunication;

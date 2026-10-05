import CTAPurple from "../TechnicalDetails/CTAPurple";

function TheChallenge() {
  return (
    <>
    <section
      className="bg-center bg-cover bg-no-repeat px-4 md:px-25 py-10 flex flex-col gap-6 md:gap-10 "
      style={{ backgroundImage: "url('/the_challenge_bg.png')" }}
    >
      <div className="flex flex-col gap-4 md:gap-6 items-center ">
        <h2 className="text-4xl md:text-heading-2 font-bold text-heading-text tracking-tight uppercase">
          THE CHALLENGE
        </h2>
        <p className="text-heading-text text-sm md:text-lg font-medium text-center max-w-[70ch]">
          What problem will you solve?
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <img src="/the_challenge_img.png" alt="" />
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <p className="text-heading-text text-sm md:text-xl leading-7 md:leading-10">
            Elections are complex systems involving citizens, electoral
            institutions, information, technology, communities and multiple
            stages of planning and implementation.
          </p>
          <p className="text-heading-text text-sm md:text-xl leading-7 md:leading-10">
            #AI4Elections invites participants to look at these systems from
            different perspectives and ask a simple question:
          </p>
          <p className="text-accent-text text-sm md:text-xl leading-7 md:leading-10">
            Where can responsible technology make a meaningful difference?
          </p>
          <p className="text-heading-text text-sm md:text-xl leading-7 md:leading-10">
            Your challenge is to identify a relevant problem, understand the
            people affected by it and develop a practical solution that
            demonstrates how AI or related technology could help address it.
          </p>
        </div>
      </div>
    </section>
    <CTAPurple />
    </>
  );
}

export default TheChallenge;

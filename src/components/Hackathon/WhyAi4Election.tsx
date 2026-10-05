const pillars = [
    {title: 'THE HACKATHON', description: 'The national competition brings participants together to identify clearly defined electoral challenges, form multidisciplinary teams, develop solutions, test prototypes and demonstrate their work.'},
    {title: 'THE INNOVATION LAB', description: 'Selected teams will have the opportunity to continue developing their solutions through a structured post-hackathon incubation programme.'},
    {title: 'THE COMMUNITY OF PRACTICE', description: 'The #AI4Elections Community of Practice is designed to become a sustained national network connecting innovators, researchers, developers, universities, electoral experts, civic organisations, mentors and technology partners working on responsible AI and electoral technology.'},
]

function WhyAi4Election() {
  return (
    <section
      className="bg-center bg-cover bg-no-repeat px-4 md:px-25 py-10 flex flex-col gap-6 md:gap-10 "
      style={{ backgroundImage: "url('/why_ai4election_bg.png')" }}
    >
      <div className="flex flex-col gap-4 md:gap-6 items-center ">
        <h2 className="text-3xl md:text-heading-2 font-bold text-white tracking-tight uppercase">
          WHY AI4ELECTIONS
        </h2>
        <p className="text-white text-sm md:text-lg font-medium text-center max-w-[70ch] leading-7">
          #AI4Elections is a national electoral innovation platform designed to
          connect technical talent with real-world electoral challenges.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7 md:gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-8 md:gap-10 justify-center">
          <p className="text-sm md:text-lg font-medium text-white leading-8 md:leading-10">
            The initiative brings together people working across artificial
            intelligence, software development, data science, cybersecurity,
            research, design, civic technology, electoral processes, public
            policy and related fields.
          </p>
          <p className="text-sm md:text-lg font-medium text-white leading-8 md:leading-10">
            Through a structured pipeline of competition, research, prototyping,
            incubation and community building, participants will have the
            opportunity to move from identifying a problem to developing,
            testing and demonstrating a responsible technology-enabled solution.
          </p>
        </div>
        <div className="flex flex-col gap-6">
            <h4 className="text-lg md:text-2xl font-semibold text-white">Three connected pillars.</h4>
            <div className="flex flex-col gap-4">
                {
                    pillars.map(({title, description}) => <div key={title} className="border-2 border-black rounded-xs bg-white p-6 flex flex-col gap-6">
                        <h5 className="text-title-text text-lg md:text-2xl font-bold">{title}</h5>
                        <p className="text-pillar-text text-xs md:text-base">{description}</p>
                    </div>)
                }
            </div>
        </div>
      </div>
    </section>
  );
}

export default WhyAi4Election;

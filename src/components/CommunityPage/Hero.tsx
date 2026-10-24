function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-25">
      <div className="flex flex-col gap-6 justify-center max-w-143 mb-4">
        <h1 className="text-faq-heading text-[10vw]  md:text-heading-2 font-bold uppercase leading-12 md:leading-14 max-w-[9ch]">
          Join the #AI4Elections Development Hub and Community of Practice
        </h1>
        <p className="text-sm md:text-md text-faq-heading font-medium">
          Be part of a growing network of innovators, researchers, developers,
          students, electoral experts, civic organisations and technology
          professionals working on responsible AI and electoral innovation.
        </p>
      </div>
      <img src="/application_page_hero_img.png" alt="" />
    </section>
  );
}

export default Hero;

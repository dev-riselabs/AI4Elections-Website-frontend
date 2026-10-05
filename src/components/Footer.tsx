import React from "react";

type FooterItem = {
  label: string;
  href: string;
};

const footerGroups: Array<{ title: string; items: FooterItem[] }> = [
  {
    title: "MEET RISE",
    items: [
      { label: "About Us", href: "https://risenetworks.org/about" },
      {
        label: "Our Mission, Vision & Values",
        href: "https://risenetworks.org/about/#Mission&Vision",
      },
      { label: "FAQs", href: "https://risenetworks.org/faqs/" },
      {
        label: "The Rise Networks Framework for Global AI Leadership",
        href: "https://risenetworks.org/the-rise-networks-framework-for-global-ai-leadership/",
      },
      {
        label: "Strategic Vision & Futuristic Outlook",
        href: "https://risenetworks.org/strategic-vision-futuristic-outlook/",
      },
    ],
  },
  {
    title: "WHAT WE DO",
    items: [
      {
        label: "Operational Focus Areas",
        href: "https://risenetworks.org/#ofa",
      },
      {
        label: "Our Program Pillars",
        href: "https://risenetworks.org/our-program-pillars/",
      },
      {
        label: "AI for Industries and Sectors Town Hall Series",
        href: "https://risenetworks.org/aiforedu",
      },
      {
        label: "Events [Trainings, Workshops, Webinars]",
        href: "https://risenetworks.org/#",
      },
      {
        label: "Africa Next AI Fellowship",
        href: "https://africanextforumatunga.risenetworks.org/",
      },
      {
        label: "Makemation National Youth AI Festivals",
        href: "https://aifest.makemation.com/",
      },
      { label: "AI4Elections Hackathon", href: "/" },
    ],
  },
  {
    title: "TECH ACADEMY",
    items: [
      {
        label: "Overview",
        href: "https://risenetworks.org/programs-at-rise-networks/",
      },
      {
        label: "Technical Programs",
        href: "https://risenetworks.org/programs-at-rise-networks/#technical-programs",
      },
      {
        label: "Rise Networks AI Lab",
        href: "https://risenetworks.org/rise-networks-lab/",
      },
      {
        label: "Professional Programs",
        href: "https://risenetworks.org/programs-at-rise-networks/#policy&social-impact-programs",
      },
      {
        label: "Policy & Social Impact Programs",
        href: "/policy-social-impact-programs",
      },
      { label: "Scholarship", href: "https://risenetworks.org/_scholarship/" },
      {
        label: "FAQs for the Rise Networks Tech Academy",
        href: "https://risenetworks.org/faqs-for-the-rise-networks-tech-academy/",
      },
    ],
  },
  {
    title: "KNOWLEDGE HUB",
    items: [
      { label: "Blog", href: "https://risenetworks.org/our-blogs/" },
      {
        label: "Insights & Articles",
        href: "https://risenetworks.org/knowledge-hub/",
      },
      { label: "Research", href: "https://risenetworks.org/research_" },
      // { label: 'Event', href: '/newsletters' },
    ],
  },
];

const subFooterGroups: Array<{ title: string; items: FooterItem[] }> = [
  {
    title: "GET IN TOUCH",
    items: [
      { label: "Partner With Us", href: "https://risenetworks.org/partner/" },
      // { label: 'Become a Mentor', href: '/become-a-mentor' },
      // { label: 'Volunteer', href: '/volunteer' },
      // { label: 'Careers', href: '/careers' },
      // { label: 'Contact Form', href: '/contact-form' },
    ],
  },
  {
    title: "NEWSROOM",
    items: [
      { label: "Photos", href: "https://risenetworks.org/#" },
      { label: "Videos", href: "https://risenetworks.org/#" },
      { label: "Media Release", href: "https://risenetworks.org/#" },
    ],
  },
];

const socialLinks = [
  {
    label: "X / Twitter",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.7h2.8v8.2H5.5V9.7Zm4.7 0h2.7v1.1h.1c.4-.7 1.3-1.5 2.9-1.5 3 0 3.6 2 3.6 4.6v4H17.7v-3.7c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.3v3.7h-2.8V9.7Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.2-3.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 22v-8h3l.4-3h-3.4V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.4-.1-2.7-.1-2.6 0-4.3 1.6-4.3 4.5V11H7v3h3.1v8h3.4z",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white font-roboto md:pt-14">
      <div className="mx-auto xl:max-w-7xl px-5 pt-12 md:px-10 xl:px-6">
        <div className="flex flex-col gap-8 md:flex-row items-center">
          <div className="flex justify-center xl:justify-start">
            <img
              src="/risenetworks_footer_logo.png"
              alt="Rise Networks"
              className="w-[70vw] md:w-[15vw] object-contain"
            />
          </div>

          <div className="w-full">
            <p className="text-[4vw] font-medium leading-relaxed text-white md:text-[2vw] xl:text-[1.2vw]">
              Driving Africa&apos;s AI Future: Empowering People, Shaping
              Policy, and Transforming Communities.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-8 md:pt-12 md:px-10 xl:px-6">
        <div className="grid gap-6 md:grid-cols-12   xl:gap-8">
          <div className="md:col-span-9 mt-7 md:mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-[12px] font-bold tracking-[0.06em] text-[#f5a15b] md:text-[13px]">
                  {group.title}
                </h3>

                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="border-b border-white/45 pb-2 text-[11px] leading-relaxed text-white md:text-[12px] xl:text-[13px]"
                    >
                      <a
                        href={item.href}
                        className="transition-colors hover:text-[#f5a15b]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {subFooterGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 text-[12px] font-bold tracking-[0.06em] text-[#f5a15b] md:text-[13px]">
                  {group.title}
                </h3>

                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="border-b border-white/45 pb-2 text-[11px] leading-relaxed text-white md:text-[12px] xl:text-[13px]"
                    >
                      <a
                        href={item.href}
                        className="transition-colors hover:text-[#f5a15b]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 xl:pl-4 md:col-span-3">
            <div className="text-right space-y-4 text-[13px] text-white md:text-[14px]">
              {/* <div className="font-medium">+234.706.054.5027</div> */}
              <div className="font-light md:text-xs">info@risenetworks.org</div>
              <div className="leading-relaxed text-white/90 md:text-xs">
                Rise Networks AI Labs
                <br />
                8a Adebayo Mokuolu Street, Anthony Village,
                <br />
                Lagos, Nigeria.
              </div>
            </div>

            <div className="mt-8 text-right flex flex-col items-end">
              <img
                src="/NGOsource ED on File Image.png"
                alt="NGOsource equivalency determination"
                className="w-[60vw] md:w-[10vw]  rounded-lg border border-[#7aa6ff] bg-[#0f1624] object-contain"
              />
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Equivalency Determination on File Badge
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Rise Networks has been officially recognized and certified as
                equivalent to a U.S. Public Charity organization. Learn more
                about NGOSource.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/80 pt-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap text-center justify-center items-center gap-4 text-[12px] text-white md:text-[13px]">
              <span>© Copyright 2025. Rise Networks | All Rights Reserved</span>
              <a
                href="/terms-condition"
                className="transition-colors  hover:text-[#f5a15b]"
              >
                Terms and Conditions
              </a>
              <a
                href="#privacy-policy"
                className="transition-colors hover:text-[#f5a15b]"
              >
                Privacy Policy
              </a>
            </div>

            <div className="flex justify-center items-center gap-4 text-white">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 hover:border-[#f5a15b] hover:text-[#f5a15b]"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

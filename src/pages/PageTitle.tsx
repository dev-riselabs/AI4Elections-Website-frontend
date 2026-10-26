import { useEffect } from "react";
import { useLocation } from "react-router";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pagesMetadata = {
      "/": {
        title:
          "AI4Elections Innovations: Empowering Youth & Tech in Governance | Rise Networks",
        description:
          "The #AI4Elections Hackathon is a national, multidisciplinary, nonpartisan electoral innovation project created by Rise Networks to mobilise and connect Nigeria's technology ecosystem, electoral experts, academic institutions, young innovators, researchers, developers and civil society to develop usable, practical, safe and responsible artificial intelligence and emerging technologies tools, solutions, platforms and applications for electoral processes, integrity, transparency, inclusion and democratic participation in Nigeria.",
      },
      "/application": {
        title:
          "Apply for #AI4Elections | Official Application Form | Rise Networks ",
        description:
          "Join the #AI4Elections Hackathon & Development Hub by Rise Networks. Mobilizing Nigeria's tech ecosystem for responsible AI and electoral integrity.",
      },
      "/community-page": {
        title:
          "Community Hub & Collaborator Network | #AI4Elections | Rise Networks",
        description:
          "Join the #AI4Elections community. Connect with civic tech innovators, developers, and advocates collaborating on responsible AI solutions for elections.",
      },
      "/terms-condition": {
        title:
          "Terms & Conditions & Official Rules | #AI4Elections | Rise Networks",
        description:
          "Review the official Terms & Conditions, eligibility requirements, and participant guidelines for the #AI4Elections initiative.",
      },
    };

    const metaData = pagesMetadata[
      location.pathname as keyof typeof pagesMetadata
    ] || {
      title: "#AI4Elections",
      description: "description",
    };

    document.title = metaData.title;

    let descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", metaData.description);
  }, [location.pathname]);
  return null;
}

export default PageTitle;


import Header from "../components/ApplicationPage/Header";
import Footer from "../components/Footer";
import Hero from "../components/TermsCondition/Hero";
import OfficialCommunication from "../components/TermsCondition/OfficialCommunication";
import Paragraph from "../components/TermsCondition/Paragraph";
import ParagraphList from "../components/TermsCondition/ParagraphList";

function TermsCondition() {
  return (
    <div className="font-robotoMono">
      <div
        className="flex flex-col gap-10 bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: "url('/application_page_hero_bg.png')",
        }}
      >
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-25 py-15">
        <Paragraph
          title="→ Acceptance of Terms and Assumption of Risk"
          paragraphs={[
            `By registering for, entering, participating in, or submitting materials to the #AI4Elections Hackathon 2026 2027 (the "Competition" or "Hackathon"), each participant agrees to be bound by these Terms and Conditions, the Competition rules, the Responsible AI and Technical Safeguards requirements, and any additional guidelines formally  communicated by Rise Networks (the "Project Organiser").`,
            "Applicants acknowledge that participation in the Hackathon involves the development, testing, demonstration and presentation of technological solutions, including artificial intelligence systems, prototypes and other digital products. Participants are responsible for ensuring that their activities comply with applicable laws, these Terms and Conditions, and the technical and operational boundaries of the Competition.",
            "To the fullest extent permitted by applicable law, participants agree that Rise Networks, its directors, officers,  employees, mentors, judges, volunteers, sponsors, technical partners and authorised representatives shall not be liable for claims, losses, damages, costs or expenses arising from a participant's own unlawful conduct, negligence, breach of these Terms and Conditions, misuse of third-party materials, infringement of third-party rights, or unauthorised technical activities.",
            "Nothing in these Terms and Conditions shall exclude or limit liability where such exclusion or limitation is prohibited by applicable law, including liability for fraud, willful misconduct or other liabilities that cannot lawfully be excluded. Participants remain responsible for their own equipment, devices, software, internet connectivity, accounts, development environments and other resources used in connection with the Hackathon.",
          ]}
        />
        <ParagraphList
          title="→ Compliance with Competition Rules and Disqualification"
          descriptions={[
            "Rise Networks reserves the right, acting reasonably and in accordance with applicable law, to reject, remove or  disqualify any application, participant, team, submission or solution that:",
            {
              title: "",
              list: [
                "Does not meet the eligibility requirements or comply with these Terms and Conditions.",
                "Contains materially false, misleading, incomplete or fraudulent information.",
                "Violates applicable laws, regulations, intellectual property rights, privacy rights or other third-party rights.",
                "Contains plagiarised, unlawfully obtained, misappropriated or unauthorised data or materials.",
                "Involves unauthorised access to, testing of, interference with or exploitation of any electoral system, institutional infrastructure, digital service or other protected environment.",
                "Violates the Hackathon's Responsible AI, data protection, cybersecurity or technical safeguards.",
                "Attempts to manipulate judging, interfere with another participant or team, or improperly influence the selection of winners.",
                "Is materially inconsistent with the nonpartisan, public interest objectives and published rules of the Competition.",
              ],
            },
            "Where reasonably practicable, Rise Networks may request clarification, additional documentation or corrective  action before making a disqualification decision. However, where a serious security, legal, safety or integrity risk arises, Rise Networks may immediately suspend a participant's access or activities pending review. Decisions concerning eligibility, compliance and disqualification shall be made by Rise Networks in accordance with the published Competition rules and applicable law.",
          ]}
        />
        <Paragraph
          title="→ Submission Requirements and Technical Responsibility"
          paragraphs={[
            "Participants are responsible for ensuring that their applications, prototypes, source code, datasets, demonstrations, documentation, presentations and other submissions are complete, accurate, accessible and submitted within the  prescribed deadlines and th rough the designated channels.",
            "Rise Networks shall not be responsible for submissions that are lost, delayed, corrupted, damaged, incomplete, inaccessible, misdirected or not received within the specified submission window due to technical failures, connectivity issues, participant error, third-party platform failures or circumstances beyond its reasonable control. Participants are strongly encouraged to submit their entries ahead of the applicable deadlines and retain copies of all  submitted materials and acknowledgements of submission. Any extension, modification or reopening of a  submission window shall be communicated through official Rise Networks channels. No participant shall be entitled  to an extension except where formally granted by the Organisers.",
          ]}
        />
        <ParagraphList
          title="→ Intellectual Property Rights and Ownership"
          descriptions={[
            "Participants retain ownership of the intellectual property rights in original materials, software, source code, designs, inventions, documentation and other work developed or submitted by them, subject to applicable law and the rights  of third parties. Nothing in these Terms and Conditions shall automatically transfer ownership of a participant's intellectual property to Rise Networks,  a partner, a sponsor, a mentor, a judge or any other programme partner.",
            {
              title: "Participants represent and warrant that: ",
              list: [
                "They have the necessary rights, permissions and authorisations to submit and demonstrate their entries.",
                "Their submissions do not knowingly infringe on any third party's copyright, trademark, patent, trade secret, privacy, confidentiality or other rights.",
                "Any third-party software, datasets, APIs, models, open source components, content or other materials used in their solutions are used in accordance with the applicable licences and terms.",
                "They have appropriately identified any material third-party contributions, pre-existing intellectual property, open-source dependencies or restrictions relevant to their submissions.",
              ],
            },
            "Participants must not submit confidential, proprietary, restricted or commercially sensitive materials belonging to  an employer, client, institution or other third party without the necessary authorisation.",
          ]}
        />
        <ParagraphList
          title="→ Limited Licence for Competition Administration and Publicity"
          descriptions={[
            "By submitting an entry, participants grant Rise Networks a worldwide, nonexclusive, royalty-free licence, for the duration reasonably necessary to administer and communicate the Competition, to access, review, evaluate, reproduce, display, demonstrate, record and present the submitted materials for the following purposes:",
            {
              title: "",
              list: [
                "Application screening, technical evaluation, judging and winner selection.",
                "Administration of the Hackathon and verification of eligibility and compliance.",
                "Conducting the Technical Showcase, Innovation Showcase, Grand Finale and other official Competition activities.",
                "Documenting, reporting on and publicising the Hackathon and its outcomes.",
                "Producing programme reports, educational materials, non-commercial knowledge-sharing resources and summaries of the Competition.",
                "Communicating the results, finalist achievements and winning solutions through Rise Networks' official communication channels.",
              ],
            },
            "Where materials are to be made publicly available, Rise Networks shall take reasonable steps to respect any clearly identified confidential or proprietary information that is not required to be disclosed under the Competition rules. This licence does not grant Rise Networks ownership of a participant's intellectual property, nor does it authorise the commercial exploitation, sale, licensing or commercial deployment of a participant's solution. Any commercial use, commercial licensing, technology transfer, institutional adoption or deployment of a participant's intellectual property shall require a separate written agreement with the relevant rights holder. Participants should not include trade secrets, confidential source code, sensitive credentials or restricted third-party information in public-facing submissions or demonstrations.",
          ]}
        />
        <ParagraphList
          highlight="labs@risenetworks.org"
          index={6}
          title="→ Personal Data, Privacy and Participant Consent"
          descriptions={[
            "By registering for and participating in the Hafacing ckathon, participants acknowledge that Rise Networks will collect and process personal information reasonably necessary to administer the Competition and related programme activities. ",
            "Such information may include names, contact details, age or eligibility information where required, institutional affiliations, team information, application responses, submitted materials, photographs, audiovisual recordings, attendance records, judging records and other information reasonably required for programme administration.",
            {
              title: "Personal data may be used for the following purposes: ",
              list: [
                "They have the necessary rights, permissions and authorisations to submit and demonstrate their entries.",
                "Their submissions do not knowingly infringe on any third party's copyright, trademark, patent, trade secret, privacy, confidentiality or other rights.",
                "Any third-party software, datasets, APIs, models, open source components, content or other materials used in their solutions are used in accordance with the applicable licences and terms.",
                "They have appropriately identified any material third-party contributions, pre-existing intellectual property, open-source dependencies or restrictions relevant to their submissions.",
              ],
            },
            "Rise Networks may share relevant participant information with authorised judges, mentors, service providers, event partners and institutional representatives where reasonably necessary for the administration of the Competition or where otherwise permitted by law . Such sharing shall be limited to information reasonably necessary for the relevant purpose and subject to appropriate confidentiality, security and data-protection safeguards.",
            "Rise Networks shall handle personal data in accordance with the Nigeria Data Protection Act 2023, applicable regulations and other relevant data-protection requirements. ",
            "Participants shall be provided with appropriate privacy information identifying the purposes of processing, relevant categories of recipients, applicable retention periods or criteria, and the means by which they may exercise their rights under applicable law. Where consent is the appropriate legal basis for a particular activity, including optional publicity or unrelated marketing communications, the necessary consent shall be obtained separately where required. ",
            `Participants may contact Rise Networks via labs@risenetworks.org regarding questions or requests relating to their personal data, subject to applicable legal requirements.`,
          ]}
        />
        <Paragraph
          title="→ Responsible AI, Data Protection and Cybersecurity Compliance"
          paragraphs={[
            "All participants and teams must comply with the Responsible AI and Technical Safeguards requirements applicable to the Hackathon. Participants must use only publicly available, synthetic, anonymised, aggregated or otherwise expressly authorised datasets and must comply with applicable privacy, data-protection, cybersecurity and  institutional requirements. ",
            "No participant may access, probe, scan, penetrate, exploit, disrupt, interfere with or connect a prototype to INEC's production systems, restricted electoral information, institutional networks or other critical electoral infrastructure without prior, explicit written authorisation from the relevant system owner or responsible authority.",
            "The use of voter registers, biometric information, restricted electoral records, institutional credentials, internal APIs, source code or other non public operational information is prohibited unless expressly authorised through the relevant lawful and ins titutional processes.",
            "Participants must not use their solutions to independently declare election results, make authoritative findings of electoral fraud, impersonate electoral institutions, unlawfully manipulate electoral information, or interfere with legally authorised elect oral processes. ",
            "All demonstrations and technical assessments must take place within approved development environments, isolated sandboxes, synthetic data environments or other expressly authorised settings. ",
            "Rise Networks reserves the right to suspend testing, restrict access, require corrective action or disqualify participants where a breach or material risk is identified.",
          ]}
        />
        <Paragraph
          title="→ INEC and Other Institutional Partners: Non Endorsement"
          paragraphs={[
            "The AI4Elections Hackathon is organised and administered by Rise Networks. ",
            "Any engagement with the Independent National Electoral Commission (INEC), government institutions, public agencies, sponsors, technical partners, universities, civic organisations or other stakeholders shall be subject to the relevant institution's approval and applicable procedures.",
            "Institutional participation, technical input, observation, feedback, consultation or contribution to challenge statements shall not constitute or imply endorsement, certification, approval, procurement commitment, adoption, funding, piloting or deployment of any participant's solution.",
            "No participant or team may represent that INEC or any other institution has approved, endorsed, certified, adopted or agreed to deploy their solution unless that institution has expressly authorised the representation in writing. ",
            "Participants shall not use the name, logo, emblem, acronym, official identity, letterhead or other branding of Rise Networks, INEC , sponsors or programme partners in a manner that suggests official endorsement or partnership without prior written permission from the relevant organisation.",
            "Any subsequent technical evaluation, pilot, procurement, adoption or deployment by INEC or another institution shall be subject to separate approvals and applicable technical, cybersecurity, privacy, legal, procurement and administrative requirements",
          ]}
        />
        <Paragraph
          title="→ Use of Names, Logos, Branding and Publicity"
          paragraphs={[
            "Participants may identify themselves as applicants, participants, finalists or winners of the #AI4Elections Hackathon only in a truthful manner consistent with their actual status in the Competition.",
            "Participants may use the official Hackathon name and approved branding solely for legitimate participation-related communications and in accordance with any branding guidelines issued by Rise Networks.",
            "The use of Rise Networks' logo, INEC's logo, sponsor logos, partner branding, official titles or institutional insignia on independently produced materials, commercial products, promotional campaigns or third-party communications requires prior written authorisation from the relevant rights holder.",
            "Participants must not imply that Rise Networks, INEC, a sponsor, a judge or any other partner endorses their company, product, political position, commercial activity or solution beyond any specific written authorisation granted.",
            "Rise Networks may use participants' names, team names, approved bios, submitted project descriptions, photographs, event recordings and publicly presented demonstrations for Competition-related reporting and publicity, subject to applicable data protection requirements and any necessary permissions.",
            "Separate permission shall be obtained where required by law for uses that go beyond the reasonable administration and publicity of the Competition.",
          ]}
        />
        <Paragraph
          title="→ Judging, Selection of Winners and Prizes"
          paragraphs={[
            "Entries shall be assessed in accordance with the published eligibility requirements, judging criteria, technical requirements and Competition rules.",
            "The judging process may consider factors including relevance to the challenge statement, technical functionality, innovation, usability, feasibility, responsible AI, security, accessibility, potential public value and quality of demonstration.",
            "Rise Networks shall be responsible for administering the judging process, coordinating judges, validating results and confirming the winning teams in accordance with the Competition rules.",
            "The proposed total prize pool for the inaugural edition is ₦5,000,000 (Five Million Naira), subject to final confirmation in the official prize announcement and Competition rules.",
            "The prize allocation, number of winning teams, any special awards, payment arrangements, verification requirements and applicable conditions shall be communicated through official Rise Networks channels.",
            "No participant shall be entitled to a prize solely by virtue of submitting an application, participating in the Hackathon or reaching a particular stage of the Competition.",
            "Prize awards are subject to verification of eligibility, compliance with the Competition rules, confirmation of the winning entry and completion of any reasonable documentation or administrative requirements.",
            "Where a selected winner is found to be ineligible, cannot be contacted, fails to respond within the stated period, declines the award or is unable to satisfy the applicable award requirements, Rise Networks may withdraw the selection and, where appropriate, designate an alternate winner in accordance with the Competition rules.",
            "Prizes shall not be transferred, exchanged or substituted except as permitted by the official prize rules or applicable law. Any applicable taxes, statutory deductions or reporting obligations shall be handled in accordance with Nigerian law and the communicated prize arrangements.",
          ]}
        />
        <Paragraph
          title="→ Mentorship, Technical Support and Post-Competition Activities"
          paragraphs={[
            "Rise Networks may provide mentorship, technical guidance, capacity building, networking opportunities, showcase participation or other forms of support to selected participants and winning teams, subject to the programme's resources, availability and applicable arrangements.",
            "Participation in the Hackathon or selection as a winner does not guarantee employment, investment, incubation, acceleration, funding beyond the announced prize, commercial contracts, institutional adoption or deployment of a solution.",
            "Any post-competition mentorship, acceleration, pilot, technical evaluation, partnership or other support shall be subject to separate arrangements and any applicable eligibility, technical, legal, privacy, cybersecurity and institutional requirements.",
            "Where usability testing or pilot activities are undertaken during the 2027 election cycle, they must take place within the scope of the relevant authorisations and safeguards. No team may assume that participation in the Hackathon grants permission to operate within an electoral institution or deploy a solution in a live electoral environment.",
          ]}
        />
        <Paragraph
          title="→ Modification, Suspension or Cancellation of the Competition"
          paragraphs={[
            "Rise Networks reserves the right, acting reasonably and in accordance with applicable law, to modify, postpone, suspend, cancel or terminate the Competition, or any of its stages, where necessary due to operational constraints, security concerns, legal or regulatory requirements, force majeure, public safety considerations, insufficient participation, technical failures or other circumstances beyond its reasonable control.",
            "Where reasonably practicable, participants shall be notified of material changes through the official Hackathon website, email or other designated communication channels.",
            "Rise Networks shall make reasonable efforts to minimise disruption to participants and communicate any changes to submission deadlines, judging arrangements, showcase dates, prize arrangements or other material Competition requirements.",
            "Nothing in this provision shall entitle Rise Networks to disregard any binding legal obligation or a prize commitment that has already become legally enforceable.",
          ]}
        />
        <Paragraph
          title="→ Force Majeure and Events Beyond Reasonable Control"
          paragraphs={[
            "Rise Networks shall not be responsible for a delay or failure to perform its Competition-related obligations to the extent that the delay or failure results from circumstances beyond its reasonable control.",
            "Such circumstances may include natural disasters, public emergencies, civil unrest, changes in applicable law or government directives, disruptions to telecommunications or electricity infrastructure, major cybersecurity incidents, institutional restrictions, public-health emergencies or other events that materially affect the safe or lawful delivery of the Competition.",
            "Where such circumstances arise, Rise Networks may adjust the programme calendar, modify delivery arrangements, postpone activities or take other reasonable steps to protect participants and preserve the integrity of the Competition.",
          ]}
        />
        <Paragraph
          title="→ Independent Participation and Relationship of the Parties"
          paragraphs={[
            "Participation in the Hackathon does not create an employment relationship, partnership, joint venture, agency, fiduciary relationship or other formal legal association between any participant and Rise Networks, a sponsor, mentor, judge or other programme partner.",
            "Participants remain independent in the development and ownership of their solutions and are responsible for their own conduct, submissions, compliance obligations and intellectual property.",
            "No participant is authorised to make commitments, enter into agreements or incur obligations on behalf of Rise Networks, INEC or any programme partner unless expressly authorised in writing.",
          ]}
        />
        <Paragraph
          title="→ Governing Law and Dispute Resolution "
          paragraphs={[
            "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
            "Any dispute arising from participation in the Hackathon shall, in the first instance, be referred to Rise Networks for good-faith resolution through written communication.",
            "Where a dispute cannot be resolved through good-faith engagement, it shall be referred to the courts of competent jurisdiction in Nigeria, subject to applicable law.",
            "Nothing in these Terms and Conditions shall exclude any statutory rights or remedies available to participants under applicable Nigerian law.",
          ]}
        />
        <Paragraph
          title="→ Amendments, Interpretation and Severability "
          paragraphs={[
            "Rise Networks may issue reasonable amendments, clarifications or supplementary rules where necessary for the proper administration, safety, integrity or lawful operation of the Competition.",
            "Material amendments shall be communicated through official Competition channels and shall not be applied retroactively in a manner that unlawfully prejudices participants or alters an award or obligation that has already become legally binding.",
            "If any provision of these Terms and Conditions is determined by a court of competent jurisdiction to be invalid, unlawful or unenforceable, that provision shall be severed or limited to the extent necessary and the remaining provisions shall continue in effect.",
            "These Terms and Conditions shall be read together with the official Hackathon Concept Document, application guidelines, eligibility requirements, judging criteria, Responsible AI and Technical Safeguards Framework and any other formally published Competition rules.",
          ]}
        />
        <OfficialCommunication />
      </div>
      <Footer/>
    </div>
  );
}

export default TermsCondition;

import Experience from "./Experience";
import SectionTitle from "./SectionTitle";
import experienceWell from "../../public/experiences/experience-well.png";
import ContentWrapper from "./ContentWrapper";

export default function Experiences() {
  return (
    <section
      className="bg-white dark:bg-slate-900 w-screen h-fit"
      id="experience"
    >
      <ContentWrapper className="bg-sky-50 dark:bg-slate-800">
        <SectionTitle
          title="PROFESSIONAL EXPERIENCE"
          titleExt="Awesome places I've worked at 🏢"
        />
      </ContentWrapper>
      <ContentWrapper>
        <div className="flex flex-col place-items-center justify-center gap-12">
          <Experience
            imageUrl={experienceWell}
            imageAlt="WELL Health Technologies Corp. Logo"
            title="WELL Health Technologies Corp."
            position="Software Development Engineer"
            description="A Canadian company aiming to improve the overall healthcare experience for patients and practitioners with digital health solutions and services."
            quote={`"We'll start you off with floaties and move you towards the deep end." *Proceeds to throw me into the deep end, minus the floaties* (But I'm glad they did, because I learned a lot from it and got spearhead the development of some pretty cool features 😌)`}
            status="Feb 2022 - Present"
            statusColour="bg-green-200"
            link="https://well.company/"
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

import Experience from "./Experience";
import SectionTitle from "./SectionTitle";
import experienceWell from "../../public/experiences/experience-well.png";
import ContentWrapper from "./ContentWrapper";

export default function Experiences() {
  return (
    <section
      className="bg-yellow-50 dark:bg-blue-950 w-screen h-fit"
      id="experience"
    >
      <ContentWrapper>
        <SectionTitle
          title="PROFESSIONAL EXPERIENCE"
          titleExt="Awesome places I've worked at 🏢"
        />
        <div className="flex flex-col place-items-center justify-center gap-12">
          <Experience
            imageUrl={experienceWell}
            imageAlt="WELL Health Technologies Corp. Logo"
            title="WELL Health Technologies Corp."
            position="Software Development Engineer"
            description="A Canadian company aiming to improve the overall healthcare experience for patients and practitioners with digital health solutions and services"
            status="Feb 2022 - Present"
            statusColour="bg-green-200"
            links="https://well.company/"
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

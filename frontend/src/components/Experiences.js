import Experience from "./Experience";
import SectionTitle from "./SectionTitle";
import experienceWell from "../../public/experiences/experience-well.png";

export default function Experiences() {
  return (
    <section className="bg-slate-500 w-screen h-fit flex flex-col gap-12 px-80">
      <SectionTitle
        title="PROFESSIONAL EXPERIENCE"
        titleExt="Awesome jobs I have worked at."
      />
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
    </section>
  );
}

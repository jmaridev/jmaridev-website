import Project from "./Project";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section className="bg-white w-screen h-fit flex flex-col place-items-center justify-center gap-12 px-80">
      <SectionTitle />
      <Project />
      <Project />
      <Project />
    </section>
  );
}

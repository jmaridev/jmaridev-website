import Experience from "./Experience";
import SectionTitle from "./SectionTitle";

export default function Experiences() {
  return (
    <section className="bg-slate-500 w-screen h-fit flex flex-col gap-12 px-80">
      <SectionTitle />
      <Experience />
      <Experience />
      <Experience />
    </section>
  );
}

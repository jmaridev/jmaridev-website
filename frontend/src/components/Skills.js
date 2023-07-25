import { FaBeer } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section className="bg-slate-500 w-screen h-fit flex flex-col place-content-center px-80">
      <SectionTitle />
      <div className="grid grid-cols-8 w-full place-items-center justify-center">
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
        <FaBeer className="text-[100px]" />
      </div>
    </section>
  );
}

import Navlink from "./Navlink";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 flex gap-12 place-items-center justify-center h-fit w-full p-4 text-3xl bg-white drop-shadow-xl">
      <a className="transition-all text-blue-500 hover:scale-110" href="#top">
        jmari.dev
      </a>
      <div className="flex gap-12">
        <Navlink name="bio" href="#bio" />
        <Navlink name="skills" href="#skills" />
        <Navlink name="projects" href="#projects" />
        <Navlink name="experience" href="#experience" />
        <Navlink name="contact" href="#contact" />
      </div>
    </nav>
  );
}

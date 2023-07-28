export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 flex gap-12 place-items-center justify-center h-fit w-full p-4 text-3xl bg-white drop-shadow-xl">
      <a className="transition-all hover:text-rose-500" href="#top">
        jmari.dev
      </a>
      <div className="flex gap-12">
        <a className="transition-all hover:text-rose-500" href="#bio">
          bio
        </a>
        <a className="transition-all hover:text-rose-500" href="#skills">
          skills
        </a>
        <a className="transition-all hover:text-rose-500" href="#projects">
          projects
        </a>
        <a className="transition-all hover:text-rose-500" href="#experience">
          experience
        </a>
        <a className="transition-all hover:text-rose-500" href="#contact">
          contact
        </a>
      </div>
    </nav>
  );
}

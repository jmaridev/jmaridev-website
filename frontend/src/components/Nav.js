export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 flex justify-between h-fit w-full p-4 text-3xl">
      <span>jmari.dev</span>
      <div className="flex gap-12">
        <a href="#bio">bio</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#experience">experience</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}

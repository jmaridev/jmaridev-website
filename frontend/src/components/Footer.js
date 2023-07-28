export default function Footer() {
  return (
    <footer className="bg-yellow-50 dark:bg-blue-950 w-screen h-fit flex p-4 justify-between py-8">
      <span>jmari.dev</span>
      <div className="flex flex-col text-right">
        <a href="#bio">bio</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#experience">experience</a>
        <a href="#contact">contact</a>
      </div>
    </footer>
  );
}

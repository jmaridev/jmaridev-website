import Image from "next/image";
import logo from "../../public/logos/logo-white-transparent.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-200 dark:bg-slate-800 w-screen flex flex-col gap-8 place-items-center justify-center p-12">
      <div className="flex flex-col gap-4 place-items-center justify-center">
        <a href="#top">
          <Image src={logo} width={600} height={440} className="w-20" />
        </a>
        <p className="text-white">jmari.dev</p>
      </div>
      <hr className="border-t-blue-900 dark:border-t-yellow-50 w-full" />
      <div className="flex gap-12 text-blue-900 dark:text-yellow-50">
        <a href="#bio">bio</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#experience">experience</a>
        <a href="#testimonials">experience</a>
        <a href="#contact">contact</a>
      </div>
      <p className="text-white">&copy; Copyright 2023, jmaridev</p>
    </footer>
  );
}

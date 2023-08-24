"use client";

import Image from "next/image";
import Navlink from "./Navlink";
import logo from "../../public/logos/logo-white-transparent.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="z-50 sticky bg-white dark:bg-slate-800 top-0 left-0 flex gap-12 place-items-center justify-between md:justify-center h-fit w-full p-4 text-3xl drop-shadow-xl">
      <a className="transition-all text-blue-500 hover:scale-110" href="#top">
        <Image
          src={logo}
          width={300}
          height={220}
          className="w-12 lg:w-20 p-2 bg-slate-800"
        />
      </a>
      <button className="block md:hidden" onClick={handleToggleNavbar}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <div
        className={`-z-50 absolute left-0 transition-all duration-500 flex-col place-items-center justify-center text-5xl w-screen h-screen md:h-fit md:w-fit md:static md:text-lg lg:text-3xl flex md:flex-row gap-12 ${
          isMenuOpen ? "top-0 bg-white dark:bg-slate-900" : "-top-[100vh]"
        }`}
        onClick={handleCloseNavbar}
      >
        <Navlink name="bio" href="#bio" />
        <Navlink name="skills" href="#skills" />
        <Navlink name="projects" href="#projects" />
        <Navlink name="experience" href="#experience" />
        <Navlink name="testimonials" href="#testimonials" />
        <Navlink name="contact" href="#contact" />
      </div>
    </nav>
  );
}

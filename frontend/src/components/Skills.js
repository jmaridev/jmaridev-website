import {
  FaCss3,
  FaDocker,
  FaGit,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiJunit5,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiShell,
  SiSpring,
  SiStrapi,
  SiTailwindcss,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section className="bg-slate-500 w-screen h-fit flex flex-col place-content-center px-80">
      <SectionTitle title="SKILLS" titleExt="What I love to work with." />
      <div className="grid grid-cols-8 gap-12 w-full place-items-center justify-center text-white">
        <Skill icon={<FaHtml5 className="text-[80px]" />} name="HTML" />
        <Skill icon={<FaCss3 className="text-[80px]" />} name="CSS" />
        <Skill
          icon={<SiTailwindcss className="text-[80px]" />}
          name="TailwindCSS"
        />
        <Skill icon={<FaSass className="text-[80px]" />} name="Sass" />
        <Skill icon={<FaJs className="text-[80px]" />} name="JavaScript" />
        <Skill icon={<FaReact className="text-[80px]" />} name="React.js" />
        <Skill icon={<SiNextdotjs className="text-[80px]" />} name="Next.js" />
        <Skill icon={<FaJava className="text-[80px]" />} name="Java" />
        <Skill icon={<SiSpring className="text-[80px]" />} name="Spring" />
        <Skill icon={<SiJunit5 className="text-[80px]" />} name="JUnit" />
        <Skill icon={<SiMysql className="text-[80px]" />} name="MySQL" />
        <Skill icon={<SiStrapi className="text-[80px]" />} name="Strapi" />
        <Skill
          icon={<FaLinux className="text-[80px]" />}
          name="Linux Development"
        />
        <Skill icon={<FaDocker className="text-[80px]" />} name="Docker" />
        <Skill icon={<FaGitAlt className="text-[80px]" />} name="Git" />
        <Skill icon={<SiNginx className="text-[80px]" />} name="Nginx" />
      </div>
    </section>
  );
}

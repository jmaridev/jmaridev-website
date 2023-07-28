import {
  FaCss3,
  FaDocker,
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
  SiSpring,
  SiStrapi,
  SiTailwindcss,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";
import Skill from "./Skill";
import ContentWrapper from "./ContentWrapper";

export default function Skills() {
  return (
    <section className="bg-indigo-50 dark:bg-blue-950 w-screen h-fit">
      <ContentWrapper className="flex flex-col place-content-center">
        <SectionTitle title="SKILLS" titleExt="My go-to lego blocks 🏆" />
        <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 text-[80px] gap-12 w-full place-items-center justify-center">
          <Skill icon={<FaHtml5 />} name="HTML" />
          <Skill icon={<FaCss3 />} name="CSS" />
          <Skill icon={<SiTailwindcss />} name="TailwindCSS" />
          <Skill icon={<FaSass />} name="Sass" />
          <Skill icon={<FaJs />} name="JavaScript" />
          <Skill icon={<FaReact />} name="React.js" />
          <Skill icon={<SiNextdotjs />} name="Next.js" />
          <Skill icon={<FaJava />} name="Java" />
          <Skill icon={<SiSpring />} name="Spring" />
          <Skill icon={<SiJunit5 />} name="JUnit" />
          <Skill icon={<SiMysql />} name="MySQL" />
          <Skill icon={<SiStrapi />} name="Strapi" />
          <Skill icon={<FaLinux />} name="Linux Development" />
          <Skill icon={<FaDocker />} name="Docker" />
          <Skill icon={<FaGitAlt />} name="Git" />
          <Skill icon={<SiNginx />} name="Nginx" />
        </div>
      </ContentWrapper>
    </section>
  );
}

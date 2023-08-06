import Project from "./Project";
import SectionTitle from "./SectionTitle";
import projectOscarPro from "../../public/projects/project-oscar-pro.png";
import projectBtHelmets from "../../public/projects/project-bt-helmets.png";
import projectKryzaTalavera from "../../public/projects/project-kryza-talavera.png";
import ContentWrapper from "./ContentWrapper";

export default function Projects() {
  return (
    <section
      className="bg-sky-100 dark:bg-blue-800 w-screen h-fit"
      id="projects"
    >
      <ContentWrapper>
        <SectionTitle
          title="PROJECTS"
          titleExt="My current and upcoming trophies 🏆"
        />
        <div className="flex flex-col place-items-center justify-center gap-12">
          <Project
            imageUrl={projectOscarPro}
            imageAlt="Oscar Pro Logo"
            title="OSCAR Pro EMR"
            description="A web application that allows physicians to manage their patients' medical records"
            descriptionExt="Currently contributing to full stack features and bug fixes at WELL Health Technologies. Completed a major feature that allows physicians to manage their patients' medical records from multiple clinics."
            tech="Java, Spring, Angular.js, Sass, MySQL, Docker, Linux"
            links="https://oscarpro.ca/"
            status="Ongoing"
          />
          <Project
            imageUrl={projectKryzaTalavera}
            imageAlt="Kryza Talavera Portfolio Site Landing Page"
            title="Kryza Talavera Portfolio Site"
            description="A dynamic website for a professional branding strategist"
            descriptionExt="Currently developing a dynamic website for a friend which will showcase her work and services. This is my first TailwindCSS project, which has opened my eyes to the wonders of this CSS framework. A temporary landing page is currently live."
            tech="Next.js, Strapi, TailwindCSS"
            links="https://kryzatalavera.com/"
            status="In Progress"
            statusColour="bg-yellow-200"
          />
          <Project
            imageUrl={projectBtHelmets}
            imageAlt="BT Helmets Landing Page Photo"
            title="BT Helmets"
            description="A dynamic website for a motorcycle helmet company"
            tech="Next.js, Strapi, Sass"
            links="https://www.bthelmets.ca/"
            status="Completed"
            statusColour="bg-green-200"
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

import Project from "./Project";
import SectionTitle from "./SectionTitle";
import projectOscarPro from "../../public/projects/project-oscar-pro.png";
import projectBtHelmets from "../../public/projects/project-bt-helmets.png";
import projectKryzaTalavera from "../../public/projects/project-kryza-talavera.png";
import projectJmaridev from "../../public/projects/project-jmaridev.png";
import ContentWrapper from "./ContentWrapper";

export default function Projects() {
  return (
    <section
      className="bg-white dark:bg-slate-900 w-screen h-fit"
      id="projects"
    >
      <ContentWrapper className="bg-sky-50 dark:bg-slate-800">
        <SectionTitle
          title="PROJECTS"
          titleExt="My growing trophy gallery 🏆"
        />
      </ContentWrapper>
      <ContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-12">
          <Project
            imageUrl={projectOscarPro}
            imageAlt="Oscar Pro Logo"
            title="OSCAR Pro EMR"
            description="A web application that allows physicians to manage their patients' medical records"
            descriptionExt="Currently contributing to full stack features and bug fixes at WELL Health Technologies. Completed a major feature that allows physicians to manage their patients' medical records from multiple clinics."
            tech="Java, Spring, Angular.js, Sass, MySQL, Docker, Linux"
            link="https://oscarpro.ca/"
            status="Ongoing"
          />
          <Project
            imageUrl={projectJmaridev}
            imageAlt="jmaridev Portfolio Landing Page"
            title="jmaridev Portfolio Site"
            description="A dynamic website for me 🙋‍♂️"
            descriptionExt="Gotta add this in here because it's one of my favourites, all beacuse most of it was hand-crafted by yours truly! I've been enjoying TailwindCSS for its robustness and removes the need for linking CSS files. I am planning to a CMS to simplify the addition of content and maybe add a section for a blog. Come back next time and the site may look a whole lot different!"
            tech="Next.js, TailwindCSS"
            link="https://jmari.dev/"
            status="In Progress"
            statusColour="bg-yellow-200"
          />
          <Project
            imageUrl={projectKryzaTalavera}
            imageAlt="Kryza Talavera Portfolio Site Landing Page"
            title="Kryza Talavera Portfolio Site"
            description="A dynamic website for a professional branding strategist"
            descriptionExt="Currently developing a dynamic website for a friend which will showcase her work and services. As my first official TailwindCSS project, my eyes have been opened to the reduced coupling of files, allowing for more efficient workflows. A temporary landing page is currently live."
            tech="Next.js, Strapi, TailwindCSS"
            link="https://kryzatalavera.com/"
            status="In Progress"
            statusColour="bg-yellow-200"
          />
          <Project
            imageUrl={projectBtHelmets}
            imageAlt="BT Helmets Landing Page Photo"
            title="BT Helmets"
            description="A dynamic website for a motorcycle helmet company"
            descriptionExt="Completed a dynamic website which showcases the company's products and services. The site features a headless CMS for the client to manage their site content. If you would like to inquire for a high quality custom helmet design, feel free to visit the site and contact them!"
            tech="Next.js, Strapi, Sass"
            link="https://www.bthelmets.ca/"
            status="Completed"
            statusColour="bg-green-200"
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

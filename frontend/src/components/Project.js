import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Status from "./Status";

export default function Project({
  imageUrl = "https://via.placeholder.com/400x200",
  imageAlt = "Placeholder Image",
  title = "Project Title",
  description = "Project Description",
  descriptionExt = "Project Description Extended",
  tech = "Project Tech",
  links = "Project Links",
  status = "Project Status",
  statusColour = "bg-neutral-200",
}) {
  return (
    <div className="bg-white grid md:grid-cols-2 grid-cols-1 gap-12 w-full p-12 rounded-xl drop-shadow-xl">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={600}
        height={400}
        className="bg-white object-contain rounded-3xl w-full min-h-full"
      />
      <div>
        <span className="text-3xl inline-block">{title}</span>
        <br />
        <p className="leading-tight text-neutral-500 mb-2">{description}</p>
        <Status
          className="mb-4"
          status={status}
          backgroundColour={statusColour}
        />
        <br />
        <p className="text-sm mb-4">{descriptionExt}</p>
        <p className="text-sm mb-4">Techstack: {tech}</p>
        <a href={links} className="text-sm">
          Link <FaExternalLinkAlt className="inline" />
        </a>
      </div>
    </div>
  );
}

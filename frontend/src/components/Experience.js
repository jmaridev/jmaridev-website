import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Status from "./Status";

export default function Experience({
  imageUrl = "https://via.placeholder.com/400x200",
  imageAlt = "Placeholder Image",
  title = "Experience Title",
  position = "Experience Position",
  description = "Experience Description",
  descriptionExt = "",
  tech = "",
  links = "Experience Links",
  status = "Experience Status",
  statusColour = "bg-neutral-200",
}) {
  return (
    <div className="grid grid-cols-2 gap-12 w-full p-12 rounded-xl bg-white drop-shadow-xl">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={600}
        height={400}
        className="object-contain rounded-3xl w-full min-h-full drop-shadow-md"
      />
      <div>
        <h3 className="text-3xl inline-block">{title}</h3>
        <p className="mb-2 text-neutral-500">
          <i>{position}</i>
        </p>
        <p className="leading-tight text-neutral-500 mb-2">{description}</p>
        <Status
          className="mb-4"
          status={status}
          backgroundColour={statusColour}
        />
        <br />
        {descriptionExt && <p className="text-sm mb-4">{descriptionExt}</p>}
        {tech && <p className="text-sm mb-4">Techstack: {tech}</p>}
        <a href={links} className="text-sm">
          Link <FaExternalLinkAlt className="inline" />
        </a>
      </div>
    </div>
  );
}

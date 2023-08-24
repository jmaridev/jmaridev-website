import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Status from "./Status";
import ExternalLink from "./ExternalLink";

export default function Experience({
  imageUrl = "https://via.placeholder.com/400x200",
  imageAlt = "Placeholder Image",
  title = "Experience Title",
  position = "Experience Position",
  description = "Experience Description",
  quote = "",
  tech = "",
  link = "Experience Links",
  status = "Experience Status",
  statusColour = "bg-neutral-200",
}) {
  return (
    <div className="dark:bg-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 place-items-center w-full p-12 rounded-xl bg-white drop-shadow-xl">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={600}
        height={400}
        className="object-contain rounded-xl w-full"
      />
      <div>
        <h3 className="text-3xl inline-block">{title}</h3>
        <p className="mb-2 text-neutral-500 dark:text-blue-300">
          <i>{position}</i>
        </p>
        <p className="leading-tight mb-2">{description}</p>
        {quote && <p className="text-xs mb-2 dark:text-slate-400">{quote}</p>}
        <Status
          className="mb-4"
          status={status}
          backgroundColour={statusColour}
        />
        <br />
        {tech && <p className="text-sm mb-4">Techstack: {tech}</p>}
        <ExternalLink link={link} />
      </div>
    </div>
  );
}

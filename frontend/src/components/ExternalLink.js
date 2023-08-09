import { FaExternalLinkAlt } from "react-icons/fa";

export default function ExternalLink({ link = "#" }) {
  return (
    <a
      href={link}
      target="_blank"
      className="text-blue-900 dark:text-blue-300 hover:text-blue-500 transition-all text-sm"
    >
      Link <FaExternalLinkAlt className="inline" />
    </a>
  );
}

import { FaBeer } from "react-icons/fa";

export default function ContactSocial({
  icon = <FaBeer className="text-[100px]" />,
  href = "#",
}) {
  return (
    <a href={href} target="_blank">
      {icon}
    </a>
  );
}

import { FaBeer } from "react-icons/fa";

export default function Skill({
  icon = <FaBeer className="text-[100px]" />,
  name = "SKILL NAME",
}) {
  return (
    <div className="w-full flex flex-col place-items-center justify-center">
      {icon}
      <span className="text-center whitespace-nowrap">{name}</span>
    </div>
  );
}

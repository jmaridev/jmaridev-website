import { FaBeer } from "react-icons/fa";

export default function Skill({
  icon = <FaBeer className="text-[100px]" />,
  name = "SKILL NAME",
}) {
  return (
    <div className="transition-all ease-in-out hover:scale-110 hover:drop-shadow w-full flex flex-col place-items-center justify-center">
      <span>{icon}</span>
      <span className="text-center whitespace-nowrap text-base">{name}</span>
    </div>
  );
}

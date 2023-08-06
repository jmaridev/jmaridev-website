import { FaBeer } from "react-icons/fa";

export default function Skill({
  icon = <FaBeer className="text-[100px]" />,
  name = "SKILL NAME",
}) {
  return (
    <div className="text-blue-900 w-full flex flex-col place-items-center justify-center">
      {icon}
      <span className="text-black text-center whitespace-nowrap text-base">
        {name}
      </span>
    </div>
  );
}

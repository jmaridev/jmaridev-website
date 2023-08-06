export default function Navlink({ name = "Placeholder Name", href = "#" }) {
  return (
    <a
      className="transition-all hover:text-blue-500 hover:scale-110"
      href={href}
    >
      {name}
    </a>
  );
}

import Image from "next/image";

export default function Experience({
  imageUrl = "https://via.placeholder.com/400x200",
  imageAlt = "Placeholder Image",
  title = "Project Title",
  description = "Project Description",
  tech = "Project Tech",
  links = "Project Links",
}) {
  return (
    <div className="grid grid-cols-2 gap-12 w-full">
      <div className="relative w-full h-full">
        <Image src={imageUrl} alt={imageAlt} fill />
      </div>
      <div className="border border-white">
        <span className="text-3xl">{title}</span>
        <br />
        <span>{description}</span>
        <br />
        <span>{tech}</span>
        <br />
        <span>{links}</span>
      </div>
    </div>
  );
}

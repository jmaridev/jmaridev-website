import Image from "next/image";

export default function Testimonial({
  imageUrl = "https://via.placeholder.com/400x200",
  imageAlt = "Placeholder Image",
  name = "John Doe",
  position = "Position",
  testimonial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a metus iaculis leo blandit rhoncus et sed lacus. Aliquam gravida volutpat luctus. Aenean pretium ultricies sollicitudin. Nulla at elementum nunc. Aliquam vulputate nisi felis, vel tincidunt massa vestibulum ac.",
}) {
  return (
    <div className="bg-white dark:bg-slate-800 flex flex-col gap-4 w-full p-12 rounded-xl drop-shadow-xl">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={600}
        height={400}
        className="bg-white object-contain rounded-3xl w-full"
      />
      <div>
        <span className="text-3xl inline-block">{name}</span>
        <br />
        <p className="italic leading-tight text-neutral-500 dark:text-blue-300 mb-2">
          {position}
        </p>
        <p className="text-sm mb-4">{testimonial}</p>
      </div>
    </div>
  );
}

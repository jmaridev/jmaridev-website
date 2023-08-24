import Image from "next/image";
import Testimonial from "./Testimonial";

export default function TestimonialLong({
  imageUrl = "https://via.placeholder.com/400x200",
  imageAlt = "Placeholder Image",
  name = "John Doe",
  position = "Position",
  testimonial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a metus iaculis leo blandit rhoncus et sed lacus. Aliquam gravida volutpat luctus. Aenean pretium ultricies sollicitudin. Nulla at elementum nunc. Aliquam vulputate nisi felis, vel tincidunt massa vestibulum ac.",
}) {
  return (
    <div className="md:col-span-2 drop-shadow-xl">
      <Testimonial
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        name={name}
        position={position}
        testimonial={testimonial}
      />
    </div>
  );
}

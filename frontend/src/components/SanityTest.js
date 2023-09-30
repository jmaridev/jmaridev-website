import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

export default async function SanityTest() {
  const testimonials = await client.fetch(`*[_type == "testimonial"]`);

  return (
    <div className="w-full bg-black">
      <h2>testimonials</h2>
      {testimonials.length > 0 && (
        <ul>
          {testimonials.map((testimonial) => (
            <li key={testimonial._id}>{testimonial?.name}</li>
          ))}
        </ul>
      )}
      {!testimonials.length > 0 && <p>No testimonials to show</p>}
      {testimonials.length > 0 && (
        <div>
          <pre>{JSON.stringify(testimonials, null, 2)}</pre>
          <Image
            src={urlForImage(testimonials[0]?.image).url()}
            alt="imagetest"
            width={200}
            height={200}
          />
        </div>
      )}
      {!testimonials.length > 0 && (
        <div>
          <div>¯\_(ツ)_/¯</div>
          <p>
            Your data will show up here when youve configured everything
            correctly
          </p>
        </div>
      )}
    </div>
  );
}

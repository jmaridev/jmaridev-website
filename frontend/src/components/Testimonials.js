import SectionTitle from "./SectionTitle";
import ContentWrapper from "./ContentWrapper";
import Testimonial from "./Testimonial";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

export default async function Testimonials() {
  const testimonials = await client.fetch(`*[_type == "testimonial"]`);
  return (
    <section
      className="bg-white dark:bg-slate-900 w-screen h-fit"
      id="testimonials"
    >
      <ContentWrapper className="bg-sky-50 dark:bg-slate-800">
        <SectionTitle
          title="TESTIMONIALS"
          titleExt="Amazing people I've worked with 🙌"
        />
      </ContentWrapper>
      <ContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:[&>*:nth-child(3n+1)]:col-span-2">
          {testimonials.map((testimonial) => (
            <Testimonial
              name={testimonial?.name}
              position={testimonial?.position}
              testimonial={testimonial?.testimonial}
              imageUrl={urlForImage(testimonial?.image).url()}
              imageAlt={testimonial?.name}
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}

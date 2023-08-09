import SectionTitle from "./SectionTitle";
import ContentWrapper from "./ContentWrapper";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <section
      className="bg-white dark:bg-slate-900 w-screen h-fit"
      id="testimonials"
    >
      <ContentWrapper className="bg-sky-50 dark:bg-slate-800">
        <SectionTitle
          title="TESTIMONIALS"
          titleExt="What people say about me 🙌"
        />
      </ContentWrapper>
      <ContentWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </ContentWrapper>
    </section>
  );
}

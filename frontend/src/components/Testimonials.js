import SectionTitle from "./SectionTitle";
import ContentWrapper from "./ContentWrapper";
import Testimonial from "./Testimonial";
import TestimonialLong from "./TestimonialLong";
import testimonialChristineVelascoImage from "../../public/testimonials/testimonial-christinevelasco.webp";
import testimonialAndrewBoyleImage from "../../public/testimonials/testimonial-andrewboyle.png";
import testimonialKryzaTalaveraImage from "../../public/testimonials/testimonial-kryzatalavera.svg";

export default function Testimonials() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <TestimonialLong
            name="Christine Velasco"
            position="Graphic Designer, Product Painter, and Co-Founder of bt Helmets"
            testimonial={testimonialChristineVelasco}
            imageUrl={testimonialChristineVelascoImage}
            imageAlt="Christine Velasco"
          />
          <Testimonial
            name="Andrew Boyle"
            position="Co-Founder of bt Helmets"
            testimonial={testimonialAndrewBoyle}
            imageUrl={testimonialAndrewBoyleImage}
            imageAlt="Andrew Boyle"
          />
          <Testimonial
            name="Kryza Talavera"
            position="Brand Designer and Strategist Freelancer"
            testimonial={testimonialAndrewBoyle}
            imageUrl={testimonialKryzaTalaveraImage}
            imageAlt="Kryza Talavera"
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

const testimonialChristineVelasco = (
  <p>
    I had the pleasure of collaborating with Justin on our company's website and
    we were able to create a website where our clients can easily access
    important information about our services. We had consistent communication
    throughout the process and we were able to get all of our ideas across.
    Justin was very patient and attentive to all our needs and made the
    experience of building a website from scratch so easy.
    <br />
    <br />
    Not only is our platform UI/UX friendly, but it uses simple CMS that allows
    us to change our content as we please. He also has an eye for design where
    he took our brand to match the website perfectly. Everything from
    typography, colours, photos, buttons, and the transitions between pages
    created a harmonious design we are proud to use as our website.
    <br />
    <br />I recommend Justin if you are looking for a web developer who treats
    your project as their own and who's exceptional services will exceed your
    expectations.
  </p>
);

const testimonialAndrewBoyle = (
  <p>
    Having zero experience in web development I didn't know where to start to
    get a website for my business, yet Justin made it easy. He carefully
    explained our options in detail, and provided creative solutions to support
    our branding aesthetic. I highly recommend his services for his quality,
    transparency and results.
  </p>
);

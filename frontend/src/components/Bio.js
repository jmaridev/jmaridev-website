import Image from "next/image";
import SectionTitle from "./SectionTitle";
import QuickFacts from "./QuickFacts";
import avatar from "../../public/avatar.jpeg";

export default function Bio() {
  return (
    <section className="bg-white w-screen h-fit flex flex-col px-80">
      <SectionTitle
        title="BIO"
        titleExt="Yeah I know, I'm not a photographer."
      />
      <div className="grid grid-cols-2 gap-12">
        <Image
          src={avatar}
          alt="A photo of me."
          width={400}
          height={400}
          className="w-[80%] place-self-center rounded-2xl"
        />
        <div>
          <p className="inline-block mb-4">
            But I <i>am</i> good at building things that live on the internet.
            As a Filipino-Canadian full stack software engineer, I love
            designing, developing, and deploying beautiful web applications,
            whilst eating some really good food.
          </p>
          <QuickFacts />
        </div>
      </div>
    </section>
  );
}

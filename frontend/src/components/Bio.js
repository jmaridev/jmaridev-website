import Image from "next/image";
import SectionTitle from "./SectionTitle";
import QuickFacts from "./QuickFacts";
import avatar from "../../public/avatar.jpeg";
import ContentWrapper from "./ContentWrapper";

export default function Bio() {
  return (
    <section className="bg-white dark:bg-blue-800 w-screen h-fit" id="bio">
      <ContentWrapper className="flex flex-col">
        <SectionTitle title="BIO" titleExt="What's up fellow hooman ✌️" />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <Image
            src={avatar}
            alt="A photo of me."
            width={400}
            height={400}
            className="lg:w-full w-[80%] place-self-center rounded-2xl"
          />
          <div>
            <p className="text-2xl mb-4">
              Here is your friendly neighbourhood web developer.
            </p>
            <p className="inline-block mb-4">
              He also goes by full stack developer, software engineer, and
              programmer. He is also somewhat decent at UI/UX design{" "}
              <span className="text-slate-500">
                &#40;he took a visual arts and Figma course and now he thinks
                he's a genius&#41;.{" "}
              </span>
              He loves designing, developing, and deploying beautiful web
              applications, whilst eating some really good food.
            </p>
            <QuickFacts />
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}

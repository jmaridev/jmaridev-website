import Image from "next/image";
import SectionTitle from "./SectionTitle";
import QuickFacts from "./QuickFacts";
import avatar from "../../public/avatar.jpeg";
import ContentWrapper from "./ContentWrapper";

export default function Bio() {
  return (
    <section className="bg-white dark:bg-slate-900 w-screen h-fit" id="bio">
      <ContentWrapper className="bg-sky-50 dark:bg-slate-800">
        <SectionTitle title="BIO" titleExt="What's up fellow hooman ✌️" />
      </ContentWrapper>
      <ContentWrapper className="flex flex-col">
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
              He also goes by{" "}
              <span className="text-orange-500">Justin Mari Maliwat</span>. He
              has interests in web app development and web design{" "}
              <span className="text-blue-500">
                &#40;he does his best on the design part&#41;
              </span>
              . He loves creating and deploying beautiful responsive web
              applications, whilst eating some really good food.
            </p>
            <QuickFacts />
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}

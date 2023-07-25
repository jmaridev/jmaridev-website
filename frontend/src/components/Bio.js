import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function Bio() {
  return (
    <section className="bg-white w-screen h-fit flex flex-col gap-12 px-80">
      <SectionTitle />
      <div className="grid grid-cols-2">
        <Image
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfile_avatar_placeholder_large.png&psig=AOvVaw3y5tBsj0ZSd1zTZCHmxwVV&ust=1690335530723000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjMstjcqIADFQAAAAAdAAAAABAE"
          width={400}
          height={400}
        />
        <div>
          <span className="text-3xl">Hej!</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            egestas lacus at efficitur posuere. Donec a est leo. Sed in
            facilisis tortor, sit amet bibendum dolor. Donec suscipit eu sem
            vitae finibus. Mauris porttitor nisl tempor, tristique lectus ut,
            pharetra purus. Suspendisse vel lorem in arcu accumsan feugiat.
            Morbi at nunc sed erat auctor consectetur.
          </p>
        </div>
      </div>
    </section>
  );
}

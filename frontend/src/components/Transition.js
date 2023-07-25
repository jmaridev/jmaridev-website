import Image from "next/image";

export default function Transition({ imageUrl = "https://picsum.photos/200" }) {
  return (
    <div className="w-full">
      <Image src={imageUrl} alt="Transition Image" className="w-full" />
    </div>
  );
}

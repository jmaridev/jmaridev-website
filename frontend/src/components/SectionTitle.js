export default function SectionTitle({
  title = "TITLE",
  titleExt = "TITLE EXTENSION",
}) {
  return (
    <div className="w-full">
      <h1 className="inline-block font-heading mb-4">{title}</h1>
      <hr className=" border-t-black mb-4" />
      <h2 className="text-3xl font-heading mb-12">{titleExt}</h2>
    </div>
  );
}

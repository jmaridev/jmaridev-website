export default function SectionTitle({
  title = "TITLE",
  titleExt = "TITLE EXTENSION",
}) {
  return (
    <div className="w-full">
      <h1 className="inline-block mb-2">{title}</h1>
      <hr className=" border-t-slate-500 mb-4" />
      <h2 className="text-3xl mb-12">{titleExt}</h2>
    </div>
  );
}

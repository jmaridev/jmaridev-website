export default function SectionTitle({
  title = "Section Title",
  titleExt = "Section Title Extension",
}) {
  return (
    <div className="w-full">
      <h1 className="inline-block">{title}</h1>
      <hr className="border-t-8 border-yellow-300" />
      <h2 className="text-3xl">{titleExt}</h2>
    </div>
  );
}

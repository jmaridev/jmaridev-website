export default function ContentWrapper({ children, className = "" }) {
  return (
    <div
      className={`w-full h-fit 2xl:px-80 xl:px-40 sm:px-12 px-4 py-12 ${className}`}
    >
      {children}
    </div>
  );
}

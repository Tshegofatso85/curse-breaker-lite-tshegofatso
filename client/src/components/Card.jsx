export default function Card({ children }) {
  return (
    <div
      className="
          mx-auto
          max-w-6xl
          rounded-3xl
          border
          border-blue-500/20
          bg-slate-900/80
          backdrop-blur-xl
          shadow-2xl
          shadow-blue-500/20
          p-8
          md:p-12
        "
    >
      {children}
    </div>
  );
}

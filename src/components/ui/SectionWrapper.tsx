interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${
        dark ? "bg-slate-50" : "bg-slate-50"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </section>
  );
}

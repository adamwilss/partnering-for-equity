import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  label: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300",
  secondary:
    "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300",
  ghost:
    "text-indigo-300 hover:text-white hover:bg-white/10 transition-all duration-300",
};

export default function Button({
  label,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}

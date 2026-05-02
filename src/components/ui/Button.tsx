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
    "bg-slate-100 dark:bg-slate-800 backdrop-blur-md border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300",
  ghost:
    "text-indigo-600 dark:text-indigo-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300",
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

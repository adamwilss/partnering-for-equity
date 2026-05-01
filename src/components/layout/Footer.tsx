import Link from "next/link";
import { siteContent } from "@/content/siteContent";

export default function Footer() {
  const { logo, description, columns, copyright, social } = siteContent.footer;

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link
              href="/"
              className="text-slate-900 font-bold text-lg tracking-tight hover:text-indigo-300 transition-colors"
            >
              {logo}
            </Link>
            <p className="text-slate-500 text-sm mt-3 max-w-xs leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4 mt-6">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-slate-900/30 hover:text-indigo-400 transition-colors text-sm"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-slate-700 text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-500 text-sm hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-sm text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

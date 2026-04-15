import { NavLink } from "react-router-dom";
import logo from "../assets/mziuri.png";

export default function Footer() {
  const linkClass = ({ isActive }) =>
    `text-sm transition-colors duration-200 ${
      isActive
        ? "text-yellow-900 font-semibold"
        : "text-black/75 hover:text-yellow-900"
    }`;

  return (
    <footer className="mt-auto border-t bg-yellow-400 shadow-md text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Mziuri Logo"
                className="h-11 w-auto object-contain"
              />
              <div>
                <h2 className="text-md sm:text-2xl font-bold tracking-tight">
                  სასწავლებელი მზიური
                </h2>
                <p className="text-sm text-black/60">
                  {" "}
                  1987 წლიდან თქვენს სამსახურში{" "}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-7 text-black/70 max-w-md">
              დიდი გამოცდილების მქონე კომპიუტერული სკოლა, რომელიც ფოკუსირებულია
              განათლებაზე, განვითარებაზე და შესაძლებლობების მინიჭებაზე მომდევნო
              თაობებისთვისთვის.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4">
              სწრაფი ბმულები
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className={linkClass}>
                  მთავარი
                </NavLink>
              </li>
              <li>
                <NavLink to="/history" className={linkClass}>
                  ისტორია
                </NavLink>
              </li>
              <li>
                <NavLink to="/learning-process" className={linkClass}>
                  სწავლის პროცესი
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass}>
                  კონტაქტი
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Related */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4">
              ჩვენი საიტები
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/main-site" className={linkClass}>
                  მთავარი საიტი
                </NavLink>
              </li>
              <li>
                <NavLink to="/internet-concurs" className={linkClass}>
                  მზიურის ბლოგი
                </NavLink>
              </li>
              <li>
                <NavLink to="/internet-concurs" className={linkClass}>
                  კონკურსის საიტი
                </NavLink>
              </li>
              <li>
                <NavLink to="/hope-of-tomorrow" className={linkClass}>
                  ხვალის იმედი
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Extra */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4">
              ინფორმაცია
            </h3>
            <ul className="space-y-3 text-sm text-black/75">
              <li>შექმნილია 1987 წელს</li>
              <li>კომპიუტერული სკოლა</li>
              <li>ყველა უფლება დაცულია</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-500/70 bg-yellow-300/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-black/70">
          <p>© 2026 კომპიუტერული სკოლა მზიური. ყველა უფლება დაცულია.</p>
          <p>შექმნილია 1987 წელს</p>
        </div>
      </div>
    </footer>
  );
}

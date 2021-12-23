import { NavLink } from "remix";

export default function NavList() {

  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeClassName = "active-link";

  return (
    <>
      <nav className="flex justify-around py-8 mx-auto bg-base02 shadow-lg shadow-yellow/10">
        <div>
          <h3 className="text-2xl font-medium text-blue-500">NTG</h3>
        </div>
        <ul className="hidden space-x-8 lg:flex">
        <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="blog">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Blog
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="faq">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  FAQ
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="contact">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Contact
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="buy-the-book" className="bg-magenta text-white shadow-2xl shadow-magenta/25 py-2 px-6 rounded-md ml-64">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Buy the Book
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </>
  );
}

// Navbar from Thirus

import { NavLink } from "remix";
import Logo from '../../public/assets/logos/cogwheel_b58900.png'

export default function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeClassName = "active-link";

  return (
    <header className="fixed flex w-full justify-between items-center px-4 md:px-12 h-24 bg-base02">
      <a href="/" className="flex">
        <img src={Logo} alt="non techie guides logo" className="h-6 animate-spin-slow" />
        <p className="pl-2 font-black font-mono text-[#FFD553] text-xl">NON-TECHIE GUIDES</p>
      </a>
      <nav>
        <button className="md:hidden" x-on:click="navbarOpen = !navbarOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
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
        </button>
        <ul className="fixed w-full left-0 right-0 min-h-screen bg-base02 space-y-4 p-4 transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:-translate-x-0 {({ navbarOpen }) => translate-x-full ? translate-x-0}" >
        <li className="text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="blog">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Blog
                </span>
              )}
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="faq">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  FAQ
                </span>
              )}
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="contact">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Contact
                </span>
              )}
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="buy-the-book" className="bg-magenta text-white shadow-2xl shadow-magenta/25 py-2 px-6 rounded-md">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Buy the Book
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

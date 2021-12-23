// Navbar from Better Dev tutorial

import { NavLink } from "remix";
import Logo from "./braincog";
import NavIcon from "./navicon_open";
import CloseIcon from "./navicon_close";

export default function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeClassName = "active-link";

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-base02 md:bg-green/20">
      {/* navbar goes here */}
      <nav className="md:shadow-lg md:shadow-green/25">
        <div className="max-w-6xl mx-auto items-center">
          <div className="flex justify-between">
            {/* logo */}
            <div>
              <a href="/" className="flex items-center py-6 px-3">
                <Logo />
                <span className="text-xl font-black tracking-tighter">
                  <span className="text-green">NON</span>
                  <span className="text-orange">&middot;</span>
                  <span className="text-violet">TECHIE</span>{" "}
                  <span className="text-magenta">GUIDES</span>
                </span>
              </a>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span className="mx-0 py-7 px-7 font-bold uppercase hover:bg-cyan hover:text-orange hover:shadow hover:shadow-cyan transition duration-300">
                  Home
                </span>
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span className="mx-0 py-7 px-7 font-bold uppercase hover:bg-cyan hover:text-orange hover:shadow hover:shadow-cyan transition duration-300">
                  About
                </span>
              </NavLink>
              <NavLink
                to="Blog"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span className="mx-0 py-7 px-7 font-bold uppercase hover:bg-cyan hover:text-orange hover:shadow hover:shadow-cyan transition duration-300">
                  Blog
                </span>
              </NavLink>
              <NavLink
                to="faq"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span className="mx-0 py-7 px-7 font-bold uppercase hover:bg-cyan hover:text-orange hover:shadow hover:shadow-cyan transition duration-300">
                  FAQ
                </span>
              </NavLink>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center">
              <NavLink
                to="get-the-book"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                <span className="py-4 px-4 bg-violet text-[#FFD553] font-semibold uppercase rounded shadow shadow-violet hover:bg-blue hover:shadow-2xl hover:shadow-blue transition duration-300">
                  Pre&middot;Order the Book
                </span>
              </NavLink>
            </div>
            <button
              className="mobile-menu-button md:hidden mr-4"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <NavIcon />
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div className="mobile-menu w-[90%] h-[90%] bg-green/20 ml-[10%] md:hidden">
          {/* primary nav */}
          <div className="flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <span className="block py-6 px-4 text-center text-xl text-white hover:bg-violet">
                Home
              </span>
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <span className="block py-6 px-4 text-center text-xl text-white hover:bg-violet">
                About
              </span>
            </NavLink>
            <NavLink
              to="Blog"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <span className="block py-6 px-4 text-center text-xl text-white hover:bg-violet">
                Blog
              </span>
            </NavLink>
            <NavLink
              to="faq"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <span className="block py-6 px-4 text-center text-xl text-white hover:bg-violet">
                FAQ
              </span>
            </NavLink>
          </div>
          {/* secondary nav */}
          <div className="">
            <NavLink
              to="get-the-book"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              <span className="block mt-12 mb-8 py-4 bg-violet text-center text-[#FFD553] font-semibold uppercase rounded shadow shadow-violet hover:bg-blue hover:shadow-2xl hover:shadow-blue transition duration-300">
                Pre&middot;Order the Book
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

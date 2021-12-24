import React, { useState } from "react";
import { Link } from "remix";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import NavItem from "./navitem";
import Logo from "./braincog";
import OrderButton from "./orderbutton";

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="md:flex justify-between max-w-7xl mx-auto items-center sticky top-0 bg-base02">
      <div className="flex items-center justify-between">
        {/* logo goes here */}
        <a href="/" className="flex items-center py-6 px-3">
          {" "}
          {/* flex-shrink-0 */}
          <Logo />
          {/* <span>
          <span className="text-green">N</span>
          <span className="text-orange">&middot;</span>
          <span className="text-violet">T</span>{" "}
          <span className="text-orange">&middot;</span>
          <span className="text-magenta">G</span>
        </span> */}
          <span className="text-xl font-black tracking-tighter">
            <span className="text-green">NON</span>
            <span className="text-orange">&middot;</span>
            <span className="text-violet">TECHIE</span>{" "}
            <span className="text-magenta">GUIDES</span>
          </span>
        </a>
        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            // onBlur={hide}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer text-red"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            // onBlur={hide}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer text-[#FFD553]"
          />
        )}
      </div>
      <div
        className={
          (showNav ? "left-0" : "-left-full") +
          " fixed md:static md:flex md:space-x-7 items-center md:bg-transparent bottom-0 top-16 bg-base02/75 w-11/12 md:w-auto space-y-5 md:space-y-0 p-12 transition-left ease-in-out duration-300"
        }
      >
        {/* navbar list goes here */}
        <NavItem content="Home" href="/" />
        <NavItem content="About" href="about" />
        <NavItem content="Blog" href="blog" />
        <NavItem content="Mini-Guides" href="mini-guides" />
        <NavItem content="Contact" href="contact" />
        <OrderButton content="Pre-Order the Book" href="get-the-book" />{" "}
        {/* use his CartNavigatorIcon component */}
      </div>
    </nav>
  );
}

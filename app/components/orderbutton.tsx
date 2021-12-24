import { NavLink } from "remix";

export default function OrderButton({ content, href }) {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeClassName = "active-link";
  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClassName : undefined)}
      to={href}
    >
      <button className="text-2xl md:text-base py-3 px-4 rounded-md bg-magenta shadow-lg shadow-magenta text-[#FFD553] hover:bg-magenta/75 hover:shadow-2xl ">
        Pre-Order the Book
      </button>
    </NavLink>
  );
}

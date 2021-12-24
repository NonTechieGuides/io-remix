import { NavLink } from "remix";

export default function NavItem({ content, href }) {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeClassName = "active-link";

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClassName : undefined)}
      to={href}
    >
      <span>{content}</span>{" "}
      {/* span added to allow ME to add individual styling to each link; but I could use the method: classname={className + COMMON_STYLES + "stuff-I'm-putting-in-the-span"}; where COMMON_STYLES is a CONST defined outside the function! */}
    </NavLink>
  );
}

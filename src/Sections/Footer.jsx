import { NavLink } from "react-router-dom";
import Logo from "../Components/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/my-project" },
  { name: "Contact Me", href: "/contact-me" },
];

function Footer() {
  return (
    <footer className='flex items-center justify-between px-5 md:px-25 py-5 bg-bg border-t border-textColor-muted'>
      <Logo />
      <ul className='hidden md:flex items-center gap-8'>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-textColor" : "text-textColor-muted"}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

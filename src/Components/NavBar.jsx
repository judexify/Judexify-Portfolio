import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion as Motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Projects", href: "/my-project" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Me", href: "/contact-me" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const getLinkClass = ({ isActive }) =>
    `font-semibold transition-colors ${isActive ? "text-textColor" : "text-textColor-muted"}`;

  useEffect(
    function () {
      function handleClickOutside() {
        if (navRef.current && !navRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [isOpen],
  );

  return (
    <nav className='relative sm:flex sm:items-center sm:justify-between'>
      {/* Desktop */}
      <ul className='hidden md:flex md:items-center md:gap-10'>
        {navLinks.map((link) =>
          link.name === "Contact Me" ? (
            <li
              key={link.name}
              className='bg-amber-600 px-4 py-2 rounded-[18px]'
            >
              <NavLink
                to={link.href}
                className='text-black text-base font-semibold'
              >
                {link.name}
              </NavLink>
            </li>
          ) : (
            <li key={link.name}>
              <NavLink to={link.href} className={getLinkClass}>
                {link.name}
              </NavLink>
            </li>
          ),
        )}
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='md:hidden text-textColor focus:outline-none'
        aria-label='Toggle navigation'
        ref={navRef}
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            className='md:hidden absolute top-10 right-0 w-[90dvw] bg-bg border border-textColor-muted rounded-xl shadow-lg z-50'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ul className='flex flex-col p-4 gap-4'>
              {navLinks.map((link) =>
                link.name === "Contact Me" ? (
                  <li
                    key={link.name}
                    className='bg-amber-600 rounded-[18px] px-4 py-2 text-center'
                  >
                    <NavLink
                      to={link.href}
                      className='text-black font-semibold text-base'
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ) : (
                  <li key={link.name}>
                    <NavLink
                      to={link.href}
                      className={getLinkClass}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;

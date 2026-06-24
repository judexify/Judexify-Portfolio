import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className='flex items-center justify-between px-5 py-5 md:px-25 md:h-20 fixed top-0 right-0 left-0 bg-bg z-100'>
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;

import './index.css'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faFolderOpen,
  faHome,
  faNewspaper,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

export default function SideBar() {
  return (
    <div className="nav-bar">
      <Link className="logo-fixed" to="/">
        <img src={LogoS} alt="logo" />
        {/* <span className="sub-logo">JUDEXIFY</span> */}
      </Link>

      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) => `about-link${isActive ? ' active' : ''}`}
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `contact-link${isActive ? ' active' : ''}`
          }
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `project-link${isActive ? ' active' : ''}`
          }
          to="/project"
        >
          <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className={({ isActive }) => `blog${isActive ? ' active' : ''}`}
          to="/blog"
        >
          <FontAwesomeIcon icon={faNewspaper} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jude-oluwadunsi-8a2961325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#9f9fa4" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/judexify"
          >
            <FontAwesomeIcon icon={faGithub} color="#9f9fa4" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://x.com/judexify">
            <FontAwesomeIcon icon={faXTwitter} color="#9f9fa4" />
          </a>
        </li>
      </ul>
    </div>
  )
}

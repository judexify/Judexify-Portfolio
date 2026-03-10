import { faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './index.scss'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Home() {
  // const [letterClass, setLetterClass] = useState('text-animate')
  // const string =

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm <span>J</span>udexify
        </h1>
        <h2>
          <FontAwesomeIcon icon={faComputer} /> FrontEnd Developer /{' '}
          <FontAwesomeIcon icon={faJs} /> JavaScript Lover
        </h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

import { faJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './index.css'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
// import Loader from 'react-loaders'

export default function Home() {
  const [letterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(true)

  const string = ['u', 'd', 'e', 'x', 'i', 'f', 'y']

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi👋,
            <br />
            I'm <span>J</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={string}
              idx={15}
            />
          </h1>
          <h2>
            <FontAwesomeIcon icon={faComputer} /> FrontEnd Developer /{' '}
            <FontAwesomeIcon icon={faJs} /> JavaScript Lover
          </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      {isLoading && <div className="loader" />}
    </>
  )
}

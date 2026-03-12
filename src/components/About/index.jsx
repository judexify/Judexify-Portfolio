import './index.css'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

export default function About() {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I build projects that solve real problems. I explore new tools and
            frameworks to push boundaries. I take initiative on ideas and see
            them through. I aim to deliver polished, functional products. I
            approach each project with growth and impact in mind.
          </p>
          <p>
            Confidence drives my work. I tackle complex interfaces and
            interactions without hesitation. I write clean, maintainable code
            that scales. I’m comfortable making decisions on architecture and
            design. I engage with challenges directly. I showcase projects that
            reflect both skill and creativity.
          </p>
          <p>
            Simplicity guides my approach. I create interfaces that are
            intuitive and user-friendly.I focus on what matters most for
            performance and usability.I deliver work that is elegant and
            functional.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJs} color="#EFD810" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGit} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

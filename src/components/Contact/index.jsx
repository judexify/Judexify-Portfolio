import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities, if you have one for me,
            contact me!!
          </p>
        </div>
        <div className="form-wrap">
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ContactForm from './ContactForm'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

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
      {isLoading && <div className="loader" />}
    </>
  )
}

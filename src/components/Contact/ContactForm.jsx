import React from 'react-dom'
import './ContactForm.css'

function ContactForm() {
  return (
    <form action="https://app.proforms.top/f/your_api_key" method="POST">
      <ul>
        <li>
          <label htmlFor="name">Name *</label>
          <br />
          <input type="text" id="name" name="name" required />
        </li>
        <li>
          <label htmlFor="email">Email *</label>
          <br />
          <input type="email" id="email" name="email" required />
        </li>
        <li>
          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message" name="message" />
        </li>
        <li>
          <button type="submit" className="flat-button">
            Submit
          </button>
        </li>
      </ul>
    </form>
  )
}

export default ContactForm

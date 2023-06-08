import React from 'react'
// import formRef from
import '../CSS/Blog.css';

function Contact() {
  return (
    <div className='contact-container'>
      <div className="contact-left-box">
        <h1 className="contact-title">
          <span id='contact-C'>C</span>
          <span id='contact-O'>o</span>
          <span id='contact-N'>n</span>
          <span id='contact-T'>t</span>
          <span id='contact-A'>a</span>
          <span id='contact-Cx2'>c</span>
          <span id='contact-Tx2'>t</span>&nbsp;
          <span id='contact-M'>M</span>
          <span id='contact-E'>e</span>
        </h1>
        <p className="contact-message contactForm1">
          I would be happy to connect and collaborate on open source projects, technical problem solving practice or just to chat!
        </p>
        {/* <form className="contact-form" ref={formRef} onSubmit={sendEmail}> */}
        <form>
          <ul>
            <li className='contact-item contactForm2' id='contact-half-left'>
              <input type="text" placeholder='Name' name="from_name"/>
              <span className="contact-after"></span>
            </li>
            <li className='contact-item contactForm3' id='contact-half-right'>
              <input type="email" placeholder='Email*' name="from_email" required/>
              <span className="contact-after"></span>
            </li>
            <li className='contact-item contactForm4' id='contact-subject'>
              <input id='contact-third-child' type="text" placeholder='Subject' name="subject"/>
              <span className="contact-after"></span>
            </li>
            <li className='contact-item contactForm5'>
              <textarea placeholder='Message*' name="message" required/>
              <span className="contact-after"></span>
            </li>
          </ul>
          <button className='contactForm6' type="submit">Send message!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
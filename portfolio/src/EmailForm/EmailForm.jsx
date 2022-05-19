import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css'

function EmailForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_655emlh', 'template_yymgkqe', form.current, 'gCEBko_WPRqEvDp-6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} className='form-group' onSubmit={sendEmail}>
      <input type="text" className='form-control' placeholder='Name' name="user_name" />
      <input type="email" className='form-control' placeholder='Email' name="user_email" />
      <textarea className='form-control' placeholder='Type your message here.' name="message" />
      <button className='btn btn-secondary' style={{marginTop: '1rem'}} type="submit" value="Send">Send</button>
    </form>
  );
}

export default EmailForm;
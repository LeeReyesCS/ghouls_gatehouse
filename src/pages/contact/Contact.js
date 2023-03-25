import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import reCAPTCHA from "react-google-recaptcha";
import Navbar from '../../components/navbar/Navbar';

const Contact = () => {

  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID
  const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID
  const PUBLIC_EMAIL_KEY = process.env.REACT_APP_EMAIL_USER_ID

  const captchaRef = useRef(null)

  const [toSend, setToSend] = useState({
    to_name: 'AJ',
    from_name: '',
    email: '',
    message: ''
  });



  const onSubmit = (e) => {

    e.preventDefault();
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      PUBLIC_EMAIL_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className = 'page-container'>
      <div className='sticky-nav'>
        <Navbar/>
      </div>
      <div className='contactme-content'>
      <section>
        <div className="listing-hero">
          <div className="hero-heading">
            <div className="hero-large">Contact Me</div>
            <div className="hero-text"> <i>Got any Questions? Feel free to ask. </i> </div>       
          </div>
        </div>

        <div className="container-contact">
          <div className="wrap-contact">
            <form name="contact" className="contact-form validate-form" onSubmit={(event)=>onSubmit(event)}>
              <div className="wrap-input validate-input" data-validate="Please enter your name">
                <input className="input" 
                type="text" 
                required 
                name="from_name" 
                value = {toSend.from_name}
                placeholder="Full Name" onChange={(event)=>handleChange(event)}></input>
              </div>

              <div className="wrap-input validate-input" data-validate = "Please enter your email">
                <input className="input" 
                type="text" 
                required 
                name="email" 
                placeholder="E-mail"
                onChange={(event)=>handleChange(event)}
                ></input>
              </div>
              <div className="wrap-input validate-input" data-validate = "Please enter your message">
                <textarea className="input" 
                required 
                type="text" 
                name="message" 
                placeholder="Your Message"
                onChange={(event)=>handleChange(event)}
                ></textarea>
              </div>
              {/* <div className="container-contact-form-btn">
                <reCAPTCHA 
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}/> */}
                <button type="submit" className="contact-form-btn">
                  <span>Send</span>
                </button>
              {/* </div> */}

              <div className="grid-container">
                <div className="item1 left-align"><i className="fa fa-lg fa-map-marker-alt"></i> </div>  
                <div className="item4 right-align"><i className="fa fa-lg fa-phone"></i></div>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Contact
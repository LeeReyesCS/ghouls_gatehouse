import React from 'react';
import './Contact.css';
import { send } from 'emailjs-com';
import { useState, useRef } from 'react';
import reCAPTCHA from "react-google-recaptcha";

const Contact = () => {

  const captchaRef = useRef(null)

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'SERVICE ID',
      'TEMPLATE ID',
      toSend,
      'User ID'
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
    <div>
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
              <div className="container-contact-form-btn">
                <reCAPTCHA 
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}/>
                <button type="submit" className="contact-form-btn">
                  <span>Send</span>
                </button>
              </div>

              <div className="grid-container">
                <div className="item1 left-align"><i className="fa fa-lg fa-map-marker-alt"></i> </div>  
                <div className="item4 right-align"><i className="fa fa-lg fa-phone"></i></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
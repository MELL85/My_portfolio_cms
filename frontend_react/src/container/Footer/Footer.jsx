import React, { useState } from 'react';

import { NavDetail } from "../../components";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from '../../client';

import './Footer.scss';
import logo from '../../assets/logo/my_logo_2.png';


const Footer = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <div className="footer__head-block">
      <div className="container">
        <div className="footer__block">

          {!isFormSubmitted ?

            <div className="form__head-block">
              <div className="form__head-title-block">
                <h3 className="form__head-title">Contact <br /> <span>ME</span></h3>
              </div>
              <div className="form__block">
                <form action="#" className="contact__form" method="post">
                  <div className="form__item">
                    <input
                      type="text"
                      className="form__item-name"
                      placeholder="What is your name? *"
                      name="name" value={name}
                      onChange={handleChangeInput}
                      required />
                    <input
                      type="mail"
                      className="form__item-mail"
                      name="email" value={email}
                      placeholder="What it your email? *"
                      onChange={handleChangeInput}
                      required />
                    <textarea
                      type="text"
                      className="form__item-message"
                      name="message"
                      value={message}
                      placeholder="Write your message here"
                      onChange={handleChangeInput}
                      maxLength={2000} />
                  </div>
                  <div className="form__btn-block">
                    {/* <button type="submit">Send Message</button> */}
                    <button type="button" onClick={handleSubmit} >{loading ? 'Sending' : 'Send Message'}</button>
                  </div>
                </form>
              </div>
            </div>

            : <div >
              <h3 className="head-text">Thank you for <br /> getting in touch!</h3>
            </div>
          }

          <div className="footer__main-block">
            <div className="footer__contact-block">
              <img src={logo} alt="my_logo" className="footer__logo" />
            </div>

            <div className="navDetail__wrapper">
              <NavDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Footer, 'contact');
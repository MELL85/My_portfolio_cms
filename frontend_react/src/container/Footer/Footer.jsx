import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../providers/ThemeProvider';
import { NavDetail } from "../../components";
import { AppWrap} from "../../wrapper";
import { client } from '../../client';

import logo from '../../assets/logo/my_logo_2.png';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();
  const [ theme ] = useContext(ThemeContext);
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

            <div className={`form__head-block ${theme === 'dark' ? 'dark' : 'light'}`}>
              <div className="form__head-title-block">
                <h3 className="form__head-title">{t('footer.headTitle')}<br /> <span>{t('footer.headTitleSpan')}</span></h3>
              </div>
              <div className="form__block">
                <form action="#" className="contact__form" method="post">
                  <div className="form__item">
                    <input
                      type="text"
                      className={`form__item-name ${theme === 'dark' ? 'dark' : 'light'}`}
                      placeholder={t('footer.placeholderText')}
                      name="name" value={name}
                      onChange={handleChangeInput}
                      required />
                    <input
                      type="mail"
                      className={`form__item-mail ${theme === 'dark' ? 'dark' : 'light'}`}
                      name="email" value={email}
                      placeholder={t('footer.placeholderMail')}
                      onChange={handleChangeInput}
                      required />
                    <textarea
                      type="text"
                      className={`form__item-message ${theme === 'dark' ? 'dark' : 'light'}`}
                      name="message"
                      value={message}
                      placeholder={t('footer.placeholderMessage')}
                      onChange={handleChangeInput}
                      maxLength={2000} />
                  </div>
                  <div className="form__btn-block">
                    <button type="button" onClick={handleSubmit} >{loading ? t('footer.formBtnSending') : t('footer.formBtn')}</button>
                  </div>
                </form>
              </div>
            </div>

            : <div >
              <h3 className="head-text">{t('footer.message')}<br /> {t('footer.message2')}</h3>
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
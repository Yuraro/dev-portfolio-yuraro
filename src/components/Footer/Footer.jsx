import React from 'react';
import css from './Footer.module.css';
import github from '../../images/github.svg';
import whatsapp from '../../images/whatsapp.svg';
import linkedin from '../../images/linkedin.svg';

const Footer = () => {
return (
    <footer className={css.footer}>
        <div className={css.container}>
            <h2 className={css.footerTitle}>Contacts</h2>

        <div className={css.footerWrap}>
            <div className={css.footerWrapTitle}>
                <p className={css.footerTitleText}>Get in touch easily!</p>
            <div className={css.footerWrapSoc}>
                <ul className={css.footerSoc}>
                    <li className={css.footerList}>
                        <a className={css.footerLink} href="https://github.com/">
                    <img src={github} alt="GitHub" width="34" height="34" />
                        </a>
                    </li>
                    <li className={css.footerList}>
                        <a className={css.footerLink} href="https://web.telegram.org/z/">
                    <img src={linkedin} alt="LinkedIn" width="34" height="34" />
                        </a>
                    </li>
                    <li className={css.footerList}>
                        <a className={css.footerLink} href="https://www.facebook.com/">
                    <img src={whatsapp} alt="WhatsApp" width="34" height="34" />
                        </a>
                    </li>
                </ul>
            </div>
            </div>
            <div className={css.footer_tel_wrap}>
                <p className={css.footerTel}>
                Contact me: 
                <a href="tel:+17789564251" className={css.footerTelNumber}>
                +1 (778) 956 4251
                </a>
            </p>
            </div>
            </div>
        </div>

        <div className={css.footerDowntext}>
            <p className={css.footerDowntextFirst}>© 2023 - YuraRo.</p>
            <p className={css.footerDowntextSecond}>Get in touch! Let's create something amazing together.</p>
        </div>
    </footer>
);
};

export default Footer;



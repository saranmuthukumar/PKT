import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
    const { t, language } = useLanguage()

    return (
        <footer className="footer">
            <div className="footer-wave">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,40 C360,100 720,0 1440,60 L1440,0 L0,0 Z" fill="var(--gray-100)" />
                </svg>
            </div>

            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="PKT Traders" className="footer-logo-img" />
                        </div>
                        <p>{t('footer_desc')}</p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" className="social-link" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" className="social-link whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer_quick')}</h4>
                        <ul>
                            <li><Link to="/">{t('nav_home')}</Link></li>
                            <li><Link to="/vehicles">{t('nav_vehicles')}</Link></li>
                            <li><Link to="/materials">{t('nav_materials')}</Link></li>
                            <li><Link to="/booking">{t('nav_booking')}</Link></li>
                            <li><Link to="/contact">{t('nav_contact')}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer_services')}</h4>
                        <ul>
                            <li><span>{t('service_jcb')}</span></li>
                            <li><span>{t('service_tipper')}</span></li>
                            <li><span>{t('service_tractor')}</span></li>
                            <li><span>{t('service_msand')}</span></li>
                            <li><span>{t('service_bricks')}</span></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t('footer_contact')}</h4>
                        <ul className="contact-list">
                            <li>
                                <FaPhone className="contact-icon" />
                                <a href="tel:+919943300159">+91 99433 00159</a>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:info@pkttraders.com">info@pkttraders.com</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt className="contact-icon" />
                                <a href="https://maps.app.goo.gl/cnySLNdmWEWJsWqm7" target="_blank" rel="noopener noreferrer">{t('contact_address')}</a>
                            </li>
                            <li>
                                <FaWhatsapp className="contact-icon whatsapp-icon" />
                                <a href="https://wa.me/919943300159">WhatsApp Chat</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 PKT Traders & Earthmovers. All rights reserved.</p>
                    <p className="footer-dev">Developed with 💗 by Saran</p>
                </div>
            </div>
        </footer>
    )
}

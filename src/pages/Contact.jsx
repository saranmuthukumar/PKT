import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { sendContactWhatsApp } from '../utils/whatsappUtils'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaClock } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
    const { t, language } = useLanguage()
    const [sent, setSent] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.name || !formData.phone || !formData.message) return
        sendContactWhatsApp(formData)
        setSent(true)
        setTimeout(() => setSent(false), 5000)
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container page-hero-content">
                    <h1>{t('contact_title')}</h1>
                    <p>{t('contact_subtitle')}</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-layout">
                        <div className="contact-info-side">
                            <div className="contact-card-wrap">
                                <div className="contact-method">
                                    <div className="method-icon phone-bg">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h3>{t('contact_phone_label')}</h3>
                                        <a href="tel:+919943300159">+91 99433 00159</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon email-bg">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h3>{t('contact_email_label')}</h3>
                                        <a href="mailto:info@pkttraders.com">info@pkttraders.com</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon location-bg">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h3>{language === 'ta' ? 'முகவரி' : 'Address'}</h3>
                                        <a href="https://maps.app.goo.gl/cnySLNdmWEWJsWqm7" target="_blank" rel="noopener noreferrer">{t('contact_address')}</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon hours-bg">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <h3>{language === 'ta' ? 'வேலை நேரம்' : 'Working Hours'}</h3>
                                        <p>{language === 'ta' ? 'திங்கள் - ஞாயிறு: காலை 6 - இரவு 10' : 'Mon - Sun: 6 AM - 10 PM'}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-whatsapp btn-lg contact-whatsapp" onClick={() => {
                                window.open('https://wa.me/919943300159?text=Hi! I want to know more about PKT Traders services.', '_blank')
                            }}>
                                <FaWhatsapp /> {language === 'ta' ? 'WhatsApp மூலம் சாட் செய்யுங்கள்' : 'Chat on WhatsApp'}
                            </button>
                        </div>

                        <div className="contact-form-side">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>{language === 'ta' ? 'எங்களுக்கு செய்தி அனுப்புங்கள்' : 'Send us a Message'}</h3>

                                {sent && (
                                    <div className="sent-banner animate-fade-in-up">
                                        <FaCheckCircle /> {t('contact_sent')}
                                    </div>
                                )}

                                <div className="form-group">
                                    <label className="form-label">{t('contact_name')} *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input"
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">{t('contact_email')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{t('contact_phone')} *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">{t('contact_msg')} *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input form-textarea"
                                        rows="5"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    <FaPaperPlane /> {t('contact_send')}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="map-section">
                        <h3 className="map-title">{language === 'ta' ? 'எங்கள் இடம்' : 'Our Location'}</h3>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d77.7739822!3d11.411879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9678e17609caf%3A0xebf90b4495f199e4!2sPKT%20EARTHMOVERS%20TRACTOR!5e0!3m2!1sen!2sin!4v1709456789"
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: '16px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="PKT Traders Location"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

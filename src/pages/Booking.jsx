import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { vehicles } from '../data/vehicles'
import { generateBookingId, validateBookingForm } from '../utils/bookingUtils'
import { sendBookingWhatsApp } from '../utils/whatsappUtils'
import { FaWhatsapp, FaCheckCircle, FaCalendar, FaClock, FaMapMarkerAlt, FaUser, FaPhone, FaTruck, FaCommentDots } from 'react-icons/fa'
import './Booking.css'

export default function Booking() {
    const { t, language } = useLanguage()
    const [searchParams] = useSearchParams()
    const [submitted, setSubmitted] = useState(false)
    const [bookingData, setBookingData] = useState(null)
    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        vehicle: '',
        date: '',
        time: '',
        location: '',
        message: ''
    })

    useEffect(() => {
        const vehicleParam = searchParams.get('vehicle')
        if (vehicleParam) {
            setFormData(prev => ({ ...prev, vehicle: vehicleParam }))
        }
    }, [searchParams])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: false }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validation = validateBookingForm(formData)

        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        const bookingId = generateBookingId()
        const booking = { ...formData, bookingId }
        setBookingData(booking)
        setSubmitted(true)

        // Auto-send via WhatsApp
        sendBookingWhatsApp(booking)
    }

    const handleNewBooking = () => {
        setFormData({ name: '', phone: '', vehicle: '', date: '', time: '', location: '', message: '' })
        setSubmitted(false)
        setBookingData(null)
        setErrors({})
    }

    if (submitted && bookingData) {
        return (
            <div className="booking-page">
                <section className="page-hero">
                    <div className="page-hero-bg" />
                    <div className="container page-hero-content">
                        <h1>{t('booking_title')}</h1>
                        <p>{t('booking_subtitle')}</p>
                    </div>
                </section>
                <section className="booking-section">
                    <div className="container">
                        <div className="success-card animate-fade-in-up">
                            <div className="success-icon">
                                <FaCheckCircle />
                            </div>
                            <h2>{t('booking_success_title')}</h2>
                            <p className="success-msg">{t('booking_success_msg')}</p>
                            <div className="booking-summary">
                                <div className="summary-item">
                                    <span className="summary-label">{t('booking_id')}:</span>
                                    <span className="summary-value booking-id">{bookingData.bookingId}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">{t('booking_name')}:</span>
                                    <span className="summary-value">{bookingData.name}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">{t('booking_vehicle')}:</span>
                                    <span className="summary-value">{bookingData.vehicle}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">{t('booking_date')}:</span>
                                    <span className="summary-value">{bookingData.date}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">{t('booking_time')}:</span>
                                    <span className="summary-value">{bookingData.time}</span>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">{t('booking_location')}:</span>
                                    <span className="summary-value">{bookingData.location}</span>
                                </div>
                            </div>
                            <div className="success-actions">
                                <button className="btn btn-whatsapp" onClick={() => sendBookingWhatsApp(bookingData)}>
                                    <FaWhatsapp /> {t('booking_whatsapp')}
                                </button>
                                <button className="btn btn-outline" onClick={handleNewBooking}>
                                    {language === 'ta' ? 'புதிய புக்கிங்' : 'New Booking'}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="booking-page">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container page-hero-content">
                    <h1>{t('booking_title')}</h1>
                    <p>{t('booking_subtitle')}</p>
                </div>
            </section>

            <section className="booking-section">
                <div className="container">
                    <div className="booking-layout">
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">
                                    <FaUser className="label-icon" /> {t('booking_name')} *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`form-input ${errors.name ? 'error' : ''}`}
                                    placeholder={language === 'ta' ? 'உங்கள் பெயர் உள்ளிடவும்' : 'Enter your full name'}
                                />
                                {errors.name && <span className="form-error">{t('booking_required')}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <FaPhone className="label-icon" /> {t('booking_phone')} *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`form-input ${errors.phone ? 'error' : ''}`}
                                    placeholder={language === 'ta' ? '10 இலக்க கைபேசி எண்' : '10-digit mobile number'}
                                    maxLength="10"
                                />
                                {errors.phone && <span className="form-error">{language === 'ta' ? 'சரியான 10 இலக்க எண் உள்ளிடவும்' : 'Enter valid 10-digit number'}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <FaTruck className="label-icon" /> {t('booking_vehicle')} *
                                </label>
                                <select
                                    name="vehicle"
                                    value={formData.vehicle}
                                    onChange={handleChange}
                                    className={`form-input ${errors.vehicle ? 'error' : ''}`}
                                >
                                    <option value="">{t('select_option')}</option>
                                    {vehicles.map(v => (
                                        <option key={v.id} value={v.name}>
                                            {language === 'ta' ? v.nameTa : v.name} - {v.pricePerHour}/hr
                                        </option>
                                    ))}
                                </select>
                                {errors.vehicle && <span className="form-error">{t('booking_required')}</span>}
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">
                                        <FaCalendar className="label-icon" /> {t('booking_date')} *
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className={`form-input ${errors.date ? 'error' : ''}`}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                    {errors.date && <span className="form-error">{t('booking_required')}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">
                                        <FaClock className="label-icon" /> {t('booking_time')} *
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className={`form-input ${errors.time ? 'error' : ''}`}
                                    />
                                    {errors.time && <span className="form-error">{t('booking_required')}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <FaMapMarkerAlt className="label-icon" /> {t('booking_location')} *
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className={`form-input ${errors.location ? 'error' : ''}`}
                                    placeholder={language === 'ta' ? 'வேலை செய்ய வேண்டிய இடம்' : 'Work location address'}
                                />
                                {errors.location && <span className="form-error">{t('booking_required')}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <FaCommentDots className="label-icon" /> {t('booking_message')}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input form-textarea"
                                    placeholder={language === 'ta' ? 'கூடுதல் தகவல்கள்...' : 'Any additional details...'}
                                    rows="3"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg booking-submit">
                                <FaWhatsapp /> {t('booking_submit')}
                            </button>
                        </form>

                        <div className="booking-info">
                            <div className="info-card">
                                <h3>{language === 'ta' ? 'எப்படி வேலை செய்கிறது?' : 'How it works?'}</h3>
                                <div className="steps">
                                    <div className="step">
                                        <div className="step-num">1</div>
                                        <div>
                                            <strong>{language === 'ta' ? 'படிவத்தை நிரப்பவும்' : 'Fill the Form'}</strong>
                                            <p>{language === 'ta' ? 'உங்கள் விவரங்களை உள்ளிடவும்' : 'Enter your details and requirements'}</p>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <div className="step-num">2</div>
                                        <div>
                                            <strong>{language === 'ta' ? 'WhatsApp மூலம் அனுப்பு' : 'Send via WhatsApp'}</strong>
                                            <p>{language === 'ta' ? 'புக்கிங் விவரம் உரிமையாளருக்கு அனுப்பப்படும்' : 'Booking details sent directly to owner'}</p>
                                        </div>
                                    </div>
                                    <div className="step">
                                        <div className="step-num">3</div>
                                        <div>
                                            <strong>{language === 'ta' ? 'உறுதிப்படுத்தல்' : 'Get Confirmation'}</strong>
                                            <p>{language === 'ta' ? 'உரிமையாளர் உங்களை தொடர்பு கொள்வார்' : 'Owner will contact you to confirm'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-card contact-quick">
                                <h3>{language === 'ta' ? 'உடனடி தொடர்பு' : 'Quick Contact'}</h3>
                                <p>{language === 'ta' ? 'புக்கிங் தொடர்பான கேள்விகளுக்கு' : 'For booking related queries'}</p>
                                <a href="tel:+919876543210" className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>
                                    <FaPhone /> +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

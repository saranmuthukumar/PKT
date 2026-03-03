import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'
import { FaWhatsapp, FaPhone, FaStar, FaArrowRight, FaTruckMoving, FaTools, FaTractor, FaWater, FaCubes } from 'react-icons/fa'
import { GiSandCastle, GiStonePile, GiBrickWall, GiMiningHelmet } from 'react-icons/gi'
import { MdConstruction, MdLocationOn, MdAccessTime } from 'react-icons/md'
import { openWhatsAppChat } from '../utils/whatsappUtils'
import './Home.css'

const iconMap = {
    MdConstruction: MdConstruction,
    FaTruckMoving: FaTruckMoving,
    FaTractor: FaTractor,
    FaTools: FaTools,
    GiSandCastle: GiSandCastle,
    GiStonePile: GiStonePile,
    GiBrickWall: GiBrickWall,
    FaCubes: FaCubes,
    GiMiningHelmet: GiMiningHelmet,
    FaWater: FaWater,
}

export default function Home() {
    const { t, language } = useLanguage()

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-overlay" />
                    <div className="hero-pattern" />
                </div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <MdConstruction /> {language === 'ta' ? 'நம்பகமான சேவை' : 'Trusted Service'}
                        </div>
                        <h1 className="hero-title">{t('hero_title')}</h1>
                        <p className="hero-subtitle">{t('hero_subtitle')}</p>
                        <p className="hero-desc">{t('hero_desc')}</p>
                        <div className="hero-buttons">
                            <Link to="/booking" className="btn btn-primary btn-lg">
                                {t('hero_cta')} <FaArrowRight />
                            </Link>
                            <button className="btn btn-whatsapp btn-lg" onClick={openWhatsAppChat}>
                                <FaWhatsapp /> WhatsApp
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-num">8+</span>
                                <span className="stat-label">{language === 'ta' ? 'வாகனங்கள்' : 'Vehicles'}</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat">
                                <span className="stat-num">10+</span>
                                <span className="stat-label">{language === 'ta' ? 'சேவைகள்' : 'Services'}</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat">
                                <span className="stat-num">100%</span>
                                <span className="stat-label">{language === 'ta' ? 'நம்பகம்' : 'Trusted'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-card hero-card-1">
                            <MdConstruction className="hero-card-icon" />
                            <span>JCB Rental</span>
                        </div>
                        <div className="hero-card hero-card-2">
                            <FaTruckMoving className="hero-card-icon" />
                            <span>Tipper Lorry</span>
                        </div>
                        <div className="hero-card hero-card-3">
                            <GiSandCastle className="hero-card-icon" />
                            <span>Sand Supply</span>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll-indicator">
                    <div className="scroll-dot" />
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section" id="services">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('services_title')}</h2>
                        <p>{t('services_subtitle')}</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => {
                            const IconComponent = iconMap[service.icon]
                            return (
                                <div
                                    className="service-card"
                                    key={service.id}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="service-icon" style={{ background: `${service.color}15`, color: service.color }}>
                                        {IconComponent && <IconComponent />}
                                    </div>
                                    <h3>{t(service.key)}</h3>
                                    <p>{language === 'ta' ? service.descTa : service.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section">
                <div className="container">
                    <div className="section-title">
                        <h2>{language === 'ta' ? 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?' : 'Why Choose Us?'}</h2>
                        <p>{language === 'ta' ? 'எங்கள் வாடிக்கையாளர்களுக்கு சிறந்த சேவையை வழங்க நாங்கள் அர்ப்பணிக்கிறோம்' : 'We are committed to delivering the best service to our customers'}</p>
                    </div>

                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-num">01</div>
                            <h3>{language === 'ta' ? 'சரியான நேரத்தில் டெலிவரி' : 'On-Time Delivery'}</h3>
                            <p>{language === 'ta' ? 'எங்கள் வாகனங்கள் மற்றும் பொருட்கள் எப்போதும் சரியான நேரத்தில் வரும்' : 'Our vehicles and materials always arrive right on schedule'}</p>
                        </div>
                        <div className="why-card">
                            <div className="why-num">02</div>
                            <h3>{language === 'ta' ? 'நியாயமான விலை' : 'Fair Pricing'}</h3>
                            <p>{language === 'ta' ? 'சந்தையில் மிகவும் போட்டித்தன்மை வாய்ந்த கட்டணங்கள்' : 'Most competitive rates in the market with no hidden charges'}</p>
                        </div>
                        <div className="why-card">
                            <div className="why-num">03</div>
                            <h3>{language === 'ta' ? 'தரமான உபகரணங்கள்' : 'Quality Equipment'}</h3>
                            <p>{language === 'ta' ? 'நன்கு பராமரிக்கப்பட்ட நவீன இயந்திரங்கள் மற்றும் வாகனங்கள்' : 'Well-maintained modern machinery and vehicles'}</p>
                        </div>
                        <div className="why-card">
                            <div className="why-num">04</div>
                            <h3>{language === 'ta' ? '24/7 சேவை' : '24/7 Service'}</h3>
                            <p>{language === 'ta' ? 'எந்த நேரத்திலும் எங்களை தொடர்பு கொள்ளலாம்' : 'Contact us anytime, we are always available for you'}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('testimonials_title')}</h2>
                        <p>{t('testimonials_subtitle')}</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((item, index) => (
                            <div className="testimonial-card" key={item.id} style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="testimonial-stars">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <p className="testimonial-text">
                                    "{language === 'ta' ? item.textTa : item.text}"
                                </p>
                                <div className="testimonial-author">
                                    <span className="testimonial-avatar">{item.avatar}</span>
                                    <div>
                                        <strong>{language === 'ta' ? item.nameTa : item.name}</strong>
                                        <span className="testimonial-location">
                                            <MdLocationOn /> {language === 'ta' ? item.locationTa : item.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>{language === 'ta' ? 'இப்போது உங்கள் வாகனத்தை புக் செய்யுங்கள்!' : 'Book Your Vehicle Now!'}</h2>
                    <p>{language === 'ta' ? 'எங்களை தொடர்பு கொண்டு உடனடியாக உங்கள் தேவையை பூர்த்தி செய்யுங்கள்' : 'Contact us and get your requirements fulfilled immediately'}</p>
                    <div className="cta-buttons">
                        <Link to="/booking" className="btn btn-primary btn-lg">
                            {t('hero_cta')} <FaArrowRight />
                        </Link>
                        <a href="tel:+919943300159" className="btn btn-outline btn-lg" style={{ borderColor: '#fff', color: '#fff' }}>
                            <FaPhone /> {t('hero_call')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

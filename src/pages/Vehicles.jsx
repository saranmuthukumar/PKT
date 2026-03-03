import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { vehicles } from '../data/vehicles'
import { FaWhatsapp, FaClock, FaTachometerAlt, FaArrowRight, FaFilter } from 'react-icons/fa'
import { MdConstruction } from 'react-icons/md'
import './Vehicles.css'

export default function Vehicles() {
    const { t, language } = useLanguage()
    const [activeFilter, setActiveFilter] = useState('All')

    const filters = ['All', 'JCB', 'Tipper', 'Tractor', 'Auger']

    const filteredVehicles = activeFilter === 'All'
        ? vehicles
        : vehicles.filter(v => v.type === activeFilter)

    return (
        <div className="vehicles-page">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container page-hero-content">
                    <h1>{t('vehicles_title')}</h1>
                    <p>{t('vehicles_subtitle')}</p>
                </div>
            </section>

            <section className="vehicles-section">
                <div className="container">
                    <div className="filter-bar">
                        <FaFilter className="filter-icon" />
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="vehicles-grid">
                        {filteredVehicles.map((vehicle, index) => (
                            <div className="vehicle-card" key={vehicle.id} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="vehicle-image">
                                    <img src={vehicle.image} alt={vehicle.name} className="vehicle-img" />
                                    <div className="vehicle-badge">{vehicle.type}</div>
                                </div>
                                <div className="vehicle-info">
                                    <h3>{language === 'ta' ? vehicle.nameTa : vehicle.name}</h3>
                                    <p className="vehicle-desc">{language === 'ta' ? vehicle.descTa : vehicle.description}</p>
                                    <div className="vehicle-meta">
                                        <span className="meta-item">
                                            <FaTachometerAlt /> {vehicle.capacity}
                                        </span>
                                        <span className="meta-item">
                                            <FaClock /> {vehicle.pricePerHour}{t('per_hour')}
                                        </span>
                                    </div>
                                    <div className="vehicle-features">
                                        {vehicle.features.map((f, i) => (
                                            <span key={i} className="feature-tag">{f}</span>
                                        ))}
                                    </div>
                                    <div className="vehicle-pricing">
                                        <div className="price-main">
                                            <span className="price-value">{vehicle.pricePerHour}</span>
                                            <span className="price-unit">{t('per_hour')}</span>
                                        </div>
                                        <div className="price-day">
                                            {vehicle.pricePerDay}{t('per_day')}
                                        </div>
                                    </div>
                                    <div className="vehicle-actions">
                                        <Link to={`/booking?vehicle=${encodeURIComponent(vehicle.name)}`} className="btn btn-primary btn-sm">
                                            {t('book_now')} <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

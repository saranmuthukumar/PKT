import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
    const { t, language, toggleLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navLinks = [
        { path: '/', label: t('nav_home') },
        { path: '/vehicles', label: t('nav_vehicles') },
        { path: '/materials', label: t('nav_materials') },
        { path: '/booking', label: t('nav_booking') },
        { path: '/contact', label: t('nav_contact') },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/logo.png" alt="PKT Traders" className="logo-img" />
                </Link>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <FaGlobe />
                        <span>{t('lang_toggle')}</span>
                    </button>
                </div>

                <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    )
}

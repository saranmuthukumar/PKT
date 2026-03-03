import { useLanguage } from '../context/LanguageContext'
import { materials } from '../data/materials'
import { FaWhatsapp, FaArrowRight, FaBoxOpen } from 'react-icons/fa'
import { sendMaterialOrderWhatsApp } from '../utils/whatsappUtils'
import './Materials.css'

export default function Materials() {
    const { t, language } = useLanguage()

    const handleOrder = (material) => {
        sendMaterialOrderWhatsApp({
            name: language === 'ta' ? material.nameTa : material.name,
            price: language === 'ta' ? material.priceTa : material.price
        })
    }

    return (
        <div className="materials-page">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container page-hero-content">
                    <h1>{t('materials_title')}</h1>
                    <p>{t('materials_subtitle')}</p>
                </div>
            </section>

            <section className="materials-section">
                <div className="container">
                    <div className="materials-grid">
                        {materials.map((material, index) => (
                            <div className="material-card" key={material.id} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="material-image">
                                    <img src={material.image} alt={material.name} className="material-img" />
                                </div>
                                <div className="material-info">
                                    <h3>{language === 'ta' ? material.nameTa : material.name}</h3>
                                    <p className="material-desc">{language === 'ta' ? material.descTa : material.description}</p>
                                    <div className="material-unit">{material.unit}</div>
                                    <div className="material-footer">
                                        <div className="material-price">
                                            {language === 'ta' ? material.priceTa : material.price}
                                        </div>
                                        <button className="btn btn-whatsapp btn-sm" onClick={() => handleOrder(material)}>
                                            <FaWhatsapp /> {t('order_now')}
                                        </button>
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

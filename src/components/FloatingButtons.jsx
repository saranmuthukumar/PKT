import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { openWhatsAppChat, callOwner } from '../utils/whatsappUtils'
import './FloatingButtons.css'

export default function FloatingButtons() {
    return (
        <div className="floating-buttons">
            <button className="float-btn whatsapp-float" onClick={openWhatsAppChat} aria-label="WhatsApp Chat">
                <FaWhatsapp />
                <span className="float-label">WhatsApp</span>
            </button>
            <button className="float-btn call-float" onClick={callOwner} aria-label="Call Now">
                <FaPhone />
                <span className="float-label">Call Now</span>
            </button>
        </div>
    )
}

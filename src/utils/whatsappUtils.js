// Owner's WhatsApp number (include country code, no + sign)
const OWNER_PHONE = '919943300159'

export const sendBookingWhatsApp = (booking) => {
    const message = `🏗️ *NEW BOOKING - PKT Traders*\n\n` +
        `📋 *Booking ID:* ${booking.bookingId}\n` +
        `👤 *Name:* ${booking.name}\n` +
        `📱 *Phone:* ${booking.phone}\n` +
        `🚜 *Vehicle:* ${booking.vehicle}\n` +
        `📅 *Date:* ${booking.date}\n` +
        `⏰ *Time:* ${booking.time}\n` +
        `📍 *Location:* ${booking.location}\n` +
        `💬 *Message:* ${booking.message || 'N/A'}\n\n` +
        `Please confirm this booking.`

    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${OWNER_PHONE}?text=${encodedMessage}`
    window.open(url, '_blank')
}

export const sendMaterialOrderWhatsApp = (material) => {
    const message = `🧱 *MATERIAL ORDER - PKT Traders*\n\n` +
        `📦 *Material:* ${material.name}\n` +
        `💰 *Price:* ${material.price}\n\n` +
        `I would like to order this material. Please share delivery details.`

    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${OWNER_PHONE}?text=${encodedMessage}`
    window.open(url, '_blank')
}

export const sendContactWhatsApp = (formData) => {
    const message = `📩 *CONTACT INQUIRY - PKT Traders*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📱 *Phone:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `💬 *Message:* ${formData.message}`

    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${OWNER_PHONE}?text=${encodedMessage}`
    window.open(url, '_blank')
}

export const openWhatsAppChat = () => {
    const message = `Hi! I'm interested in PKT Traders & Earthmovers services. Please share more details.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${OWNER_PHONE}?text=${encodedMessage}`, '_blank')
}

export const callOwner = () => {
    window.open(`tel:+${OWNER_PHONE}`, '_self')
}

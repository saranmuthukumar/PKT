export const generateBookingId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let id = 'PKT-'
    for (let i = 0; i < 6; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
}

export const validateBookingForm = (formData) => {
    const errors = {}

    if (!formData.name?.trim()) errors.name = true
    if (!formData.phone?.trim() || !/^[0-9]{10}$/.test(formData.phone.trim())) errors.phone = true
    if (!formData.vehicle) errors.vehicle = true
    if (!formData.date) errors.date = true
    if (!formData.time) errors.time = true
    if (!formData.location?.trim()) errors.location = true

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}

export const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })
}

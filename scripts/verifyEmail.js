export default function verifyEmail(field) {
    const email = field.value;
    
    if (!isValidEmail(email)) {
        field.setCustomValidity("Email inválido");
        return false
    }
    field.setCustomValidity("");
    return true

}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
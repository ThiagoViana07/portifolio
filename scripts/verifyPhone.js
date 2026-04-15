export default function verifyPhone(field) {
    const phone = field.value.replace(/\D/g, "");

    if (!isValidPhone(phone)) {
        field.setCustomValidity("Número de telefone inválido");
        return false
    }
    field.setCustomValidity("");
    return true
}

function isValidPhone(phone) {
    const phoneRegex = /^\d{11}$/;
    const hasNineOnThirdPosition = phone[2] === "9";
    if (!hasNineOnThirdPosition) {
        return false;
    }
    return phoneRegex.test(phone);
}
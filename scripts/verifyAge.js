export default function verifyAge(field) {
    const birthDate = new Date(field.value);
    if(!calculateAge(birthDate)) {
        field.setCustomValidity("Você deve ser maior de 18 anos para se cadastrar");
        return false
    }
    field.setCustomValidity("");
    return true
}

function calculateAge(birthDate) {
    const today = new Date();
    const ageMoreThan18 = new Date(birthDate.getUTCFullYear() + 18, birthDate.getUTCMonth(), birthDate.getUTCDate());
    return ageMoreThan18 <= today;
}
export default function isCPF(field) {
    const cpf = field.value.replace(/\.|-/g, "");

    if (!isValidCpf(cpf)) {
        field.setCustomValidity("CPF inválido");
        return false
    }
    field.setCustomValidity("");
    return true

}

function isValidCpf(cpf) {
    if (!cpf || cpf.length !== 11) return false;

    // Expressão regular que verifica se todos os digitos são iguais     (ex: 00000000000, 11111111111...)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    const digito1 = calcularDigito(cpf, 9, 10);
    const digito2 = calcularDigito(cpf, 10, 11);

    return digito1 === Number(cpf[9]) && digito2 === Number(cpf[10]);

}

function calcularDigito(cpf, length, pesoInicial) {
    let soma = 0;

    for (let i = 0; i < length; i++) {
        soma += Number(cpf[i]) * (pesoInicial - i);
    }

    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
}
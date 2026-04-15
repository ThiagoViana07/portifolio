import isCpf from './isCpf.js';
import verifyAge from './verifyAge.js';
import verifyEmail from './verifyEmail.js';
import verifyPhone from './verifyPhone.js';

const switchComponent = document.getElementById('switch-component');
const fieldsForms = document.querySelectorAll('[required]');


switchComponent.addEventListener('change', () => {
   const newTheme = switchComponent.checked ? 'dark' : 'light';
   document.documentElement.setAttribute('data-theme', newTheme);

});

function fieldVerification(field) {

   if (field.id === 'terms') {
      if (!field.checked) {
         field.setCustomValidity('Você deve aceitar os termos de uso para prosseguir.');
      } else {
         field.setCustomValidity('');
      }
   }

   if (field.id === 'cpf') {
      console.log(isCpf(field))
   }
   if (field.id === 'birthDate') {
      console.log(verifyAge(field))
   }

   if (field.id === 'email') {
      console.log(verifyEmail(field))
   }

   if (field.id === 'phone') {
      console.log(verifyPhone(field))
   }

   const errorMessage = field.parentNode.querySelector('.error-message');
   const inputValidate = field.checkValidity()

   if (!inputValidate) {
      errorMessage.textContent = field.validationMessage;
      console.log(field.validationMessage)
   } else {
      errorMessage.textContent = '';
   }
}

fieldsForms.forEach(field => {

   field.addEventListener('invalid', (event) => event.preventDefault())
   field.addEventListener('blur', () => {
      fieldVerification(field)
   })
})


function isAllFieldsValid() {
   let allValid = true;
   fieldsForms.forEach(field => {
      console.log(`Campo inválido: ${field.id}`);
      if (field.id === 'terms') {
         if (!field.checked) {
            allValid = false;
            fieldVerification(field);
         }
      }
      if (field.id !== 'video') { // Ignora o campo de vídeo
         if (!field.checkValidity() || field.value.trim() === '') {
            allValid = false;

            fieldVerification(field);
         }
      }
   });
   return allValid;
}

window.isAllFieldsValid = isAllFieldsValid;
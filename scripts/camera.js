const buttonForm = document.querySelector('[data-button-form]');
const cameraSection = document.querySelector('[data-camera]');
const formSection = document.querySelector('[data-info]');
const videoCaptureButton = document.querySelector('[data-video-capture]');
const videoElement = document.querySelector('[data-video]');
const finalizationSection = document.querySelector('[data-finalization]');
const form = document.querySelector('[data-form]');
let imageDataURL


buttonForm.addEventListener('click', (event) => {
    event.preventDefault();

    if (!videoElement.srcObject) {
        if (!window.isAllFieldsValid()) {
            alert('Por favor, preencha todos os campos corretamente!');
            return;
        }
        formSection.classList.remove('lg:grid');
        // formSection.classList.remove('flex');
        formSection.classList.add('hidden');
        cameraSection.classList.remove('hidden');
        buttonForm.textContent = 'Enviar Foto';
        const faleComigo = document.querySelector('[data-fale-comigo]');
        faleComigo.style.height = '550px';
        buttonForm.style.display = 'none';
    } else {
        if (imageDataURL) {
            alert('Dados enviados com sucesso!');
            finalizationSection.classList.remove('hidden');
            finalizationSection.classList.add('flex');

            form.classList.add('hidden');
            return;
        }
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 320;
        const context = canvas.getContext('2d');
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        imageDataURL = canvas.toDataURL('image/png');
        cameraSection.appendChild(canvas);
        videoElement.classList.add('hidden');
        buttonForm.textContent = 'Enviar dados';

    }

});

videoCaptureButton.addEventListener('click', async () => {
    const initVideo = await navigator.mediaDevices.getUserMedia({ video: true });
    videoCaptureButton.style.display = 'none';
    videoElement.srcObject = initVideo;
    videoElement.classList.remove('hidden');
    buttonForm.style.display = 'block';
    buttonForm.textContent = 'Capturar Foto';

})
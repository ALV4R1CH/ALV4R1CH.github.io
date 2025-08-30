document.addEventListener('DOMContentLoaded', () => {
    console.log('1. DOMContentLoaded disparado. Inicializando script...');

    // Verificar si EmailJS está cargado
    if (!window.emailjs) {
        console.error('Error: EmailJS SDK no está cargado. Verifica el script en index.html.');
        return;
    }
    console.log('2. EmailJS SDK cargado correctamente.');

    const form = document.getElementById('form');
    if (!form) {
        console.error('Error: Formulario con ID "form" no encontrado.');
        return;
    }
    console.log('3. Formulario encontrado:', form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('4. Evento submit disparado.');

        const name = document.getElementById('name').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value;
        const formMessage = document.getElementById('form-message');
        const submitButton = document.getElementById('button');

        if (!name || !time || !message) {
            console.log('5. Validación fallida: campos incompletos.');
            formMessage.classList.remove('d-none', 'alert-success');
            formMessage.classList.add('alert', 'alert-danger');
            formMessage.textContent = 'Completa todos los campos.';
            return;
        }
        console.log('5. Validación pasada. Enviando datos:', { from_name: name, time, message });

        submitButton.disabled = true;
        submitButton.value = 'Enviando...';
        formMessage.classList.add('d-none');
        console.log('6. Deshabilitando botón y mostrando estado de envío.');

        emailjs.send('service_ockyvsq', 'template_xwnwop7', {
            from_name: name,
            time: time,
            message: message
        }).then(
            (response) => {
                console.log('7. Correo enviado con éxito:', response);
                formMessage.classList.remove('d-none', 'alert-danger');
                formMessage.classList.add('alert', 'alert-success');
                formMessage.textContent = `Gracias, ${name}! Tu mensaje ha sido enviado.`;
                form.reset();
                submitButton.disabled = false;
                submitButton.value = 'Enviar Correo';
            },
            (error) => {
                console.error('7. Error al enviar el correo:', error);
                formMessage.classList.remove('d-none', 'alert-success');
                formMessage.classList.add('alert', 'alert-danger');
                formMessage.textContent = `Error: ${error.text || 'No se pudo enviar el mensaje'}`;
                submitButton.disabled = false;
                submitButton.value = 'Enviar Correo';
            }
        );
    });
    console.log('4. Evento submit registrado en el formulario.');

    // Dark Mode Toggle
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
        // Inicia en modo oscuro
        document.body.classList.add('dark-mode');

        toggle.addEventListener('click', () => {
            console.log('Dark mode toggle clicado.');
            document.body.classList.toggle('dark-mode');
            // Cambia el icono del botón según el modo
            const icon = toggle.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.className = 'bi bi-moon';
            } else {
                icon.className = 'bi bi-lightbulb';
            }
        });
    } else {
        console.error('Error: Botón de dark mode con ID "dark-mode-toggle" no encontrado.');
    }
});
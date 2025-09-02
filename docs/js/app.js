document.addEventListener('DOMContentLoaded', function() {
    console.log('1. DOMContentLoaded disparado. Inicializando script...');

    // Verificar si EmailJS está cargado
    if (!window.emailjs) {
        console.error('Error: EmailJS SDK no está cargado. Verifica el script en index.html.');
        return;
    }
    console.log('2. EmailJS SDK cargado correctamente.');

    const btn = document.getElementById('button');
    const form = document.getElementById('form');
    const messageDiv = document.getElementById('form-message');

    if (!form || !btn) {
        console.error('Error: Formulario con ID "form" o botón con ID "button" no encontrado.');
        return;
    }
    console.log('3. Formulario y botón encontrados:', form, btn);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('4. Evento submit disparado.');

        btn.value = 'Enviando...';

        const serviceID = 'default_service'; // Cambia si usas otro Service ID
        const templateID = 'template_xwnwop7';

        // El tercer parámetro debe ser el elemento del formulario
        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = 'Enviar Correo';
                messageDiv.innerHTML = '<div class="alert alert-success">¡Mensaje enviado correctamente!</div>';
                form.reset();
            }, (err) => {
                btn.value = 'Enviar Correo';
                messageDiv.innerHTML = '<div class="alert alert-danger">Error al enviar el mensaje. Intenta de nuevo.</div>';
                console.error(err);
            });
    });
    console.log('4. Evento submit registrado en el formulario.');

    // Dark Mode Toggle
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
        // Inicia en modo oscuro


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
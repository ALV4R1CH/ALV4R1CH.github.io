document.addEventListener('DOMContentLoaded', function() {
    // Verificar si EmailJS está cargado
    if (!window.emailjs) {
        console.error('Error: EmailJS SDK no está cargado. Verifica el script en index.html.');
        return;
    }

    const btn = document.getElementById('button');
    const form = document.getElementById('form');
    const messageDiv = document.getElementById('form-message');


    form.addEventListener('submit', function(event) {
        event.preventDefault();

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

    // Configuración de particles.js
    // tsParticles.load() es el reemplazo moderno de particlesJS()
    if (document.getElementById('particles-js')) {
        tsParticles.load("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00fff7"
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.5,
                    random: false,
                },
                size: {
                    value: 3,
                    random: true,
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#00fff7",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: "out",
                }
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        quantity: 4
                    }
                }
            },
            detectRetina: true
        });
    }
});
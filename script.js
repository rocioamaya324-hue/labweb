document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el formulario de contacto por su clase (o ID si le añades uno)
    const contactForm = document.querySelector('.contact-form form');


    // Verificamos que el formulario existe en la página
    if (contactForm) {
        // Añadimos un "event listener" para cuando se intente enviar el formulario
        contactForm.addEventListener('submit', function(event) {
            // Prevenimos el comportamiento por defecto del formulario, que es recargar la página
            event.preventDefault();

            // Obtenemos los valores de los campos del formulario
            const nombre = document.getElementById('nombre').value.trim(); // .trim() elimina espacios en blanco al inicio/final
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validación simple de los campos
            if (nombre === '') {
                alert('Por favor, ingresa tu nombre.');
                document.getElementById('nombre').focus(); // Pone el foco en el campo
                return; // Detiene la ejecución de la función
            }

            if (email === '') {
                alert('Por favor, ingresa tu correo electrónico.');
                document.getElementById('email').focus();
                return;
            }

            // Validación básica de formato de email (puedes usar una regex más compleja si lo necesitas)
            if (!isValidEmail(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                document.getElementById('email').focus();
                return;
            }

            if (mensaje === '') {
                alert('Por favor, ingresa tu mensaje.');
                document.getElementById('mensaje').focus();
                return;
            }

            // Si todos los campos son válidos, mostramos un mensaje de éxito
            // En un sitio real, aquí enviarías los datos a un servidor (usando fetch() o XMLHttpRequest)
            alert('¡Mensaje enviado con éxito! Gracias por contactarnos, ' + nombre + '.');

            // Opcional: Limpiamos el formulario después del envío exitoso
            contactForm.reset();
        });
    }

    // Función auxiliar para validar el formato del email
    function isValidEmail(email) {
        // Expresión regular para una validación de email más robusta
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
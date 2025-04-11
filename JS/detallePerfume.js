window.addEventListener('DOMContentLoaded', () => {

    const botonAgregar = document.getElementById('btnAgregar');

    if(botonAgregar){
        botonAgregar.addEventListener('click', () => {
            
            // Crear mensaje flotante
            const mensaje = document.createElement('div');
            mensaje.textContent = '¡Añadido al carrito con éxito!';
            mensaje.style.position = 'fixed';
            mensaje.style.top = '20px';
            mensaje.style.right = '20px';
            mensaje.style.backgroundColor = '#b96f76';
            mensaje.style.color = 'white';
            mensaje.style.padding = '10px 20px';
            mensaje.style.borderRadius = '10px';
            mensaje.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
            mensaje.style.opacity = '0';
            mensaje.style.transition = 'opacity 0.5s ease';

            document.body.appendChild(mensaje);

            // Mostrar mensaje
            setTimeout(() => {
                mensaje.style.opacity = '1';
            }, 100);

            // Ocultar mensaje
            setTimeout(() => {
                mensaje.style.opacity = '0';
                setTimeout(() => {
                    mensaje.remove();
                }, 500);
            }, 2000);

            console.log('Producto agregado: Montale Ristretto');
        });
    }
});

let contador = 0;

function moverCarrusel(direccion) {
    const slide = document.getElementById('slide');
    const total = slide.children.length;
    
    contador += direccion;

    if (contador < 0) {
        contador = total - 1;
    } else if (contador >= total) {
        contador = 0;
    }

    // Efecto de rebote elegante
    slide.style.transition = 'transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    slide.style.transform = `translateX(-${contador * 100}%)`;
}

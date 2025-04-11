document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.getElementById('busqueda');
    const btnBuscar = document.getElementById('btnBuscar');
    const listaPerfumes = document.querySelectorAll('ul li');

    btnBuscar.addEventListener('click', () => {
        const valor = inputBusqueda.value.toLowerCase();
        let encontrado = false; 

        listaPerfumes.forEach(perfume => {
            const texto = perfume.textContent.toLowerCase();

            if (texto.includes(valor)) {
                perfume.style.display = 'block';

                if (!encontrado) {
                    perfume.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    encontrado = true; 
                }

            } else {
                perfume.style.display = 'none';
            }
        });
    });

    inputBusqueda.addEventListener('input', () => {
        if (inputBusqueda.value === '') {
            listaPerfumes.forEach(perfume => {
                perfume.style.display = 'block';
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const imagenes = [
        "/imagenes/perro.png",
        "/imagenes/gato.png",
        "/imagenes/chinchilla.png"
    ];

    const botonCambiarFondo = document.getElementById("cambiar-fondo");
    const inputColor = document.getElementById("color");

    botonCambiarFondo.addEventListener("click", () => {
        const colorSeleccionado = inputColor.value; // Obtener el color seleccionado
        const elementos = document.querySelectorAll(".elemento");

        elementos.forEach(elemento => {
            elemento.style.backgroundColor = colorSeleccionado;
        });
    });

    const botonAgregarElemento = document.getElementById("agregar-elemento");

    botonAgregarElemento.addEventListener("click", () => {
        const colorSeleccionado = inputColor.value;
        const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];

        const nuevoElemento = document.createElement("div");
        nuevoElemento.className = "elemento";
        nuevoElemento.style.backgroundColor = colorSeleccionado;

        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = imagenAleatoria;
        nuevaImagen.alt = "Nuevo Elemento";

        const botonCambiar = document.createElement("button");
        botonCambiar.className = "cambiar";
        botonCambiar.textContent = "Cambiar";

        const botonBorrar = document.createElement("button");
        botonBorrar.className = "borrar";
        botonBorrar.textContent = "Borrar";

        nuevoElemento.appendChild(nuevaImagen);
        nuevoElemento.appendChild(botonCambiar);
        nuevoElemento.appendChild(botonBorrar);

        contenedorElementos.appendChild(nuevoElemento);
    });

    const botonResetear = document.getElementById("resetear");

    botonResetear.addEventListener("click", () => {
        contenedorElementos.innerHTML = ""; // Vacía el contenedor de elementos
    });

    const contenedorElementos = document.getElementById("contenedor-elementos");
    contenedorElementos.addEventListener("click", (event) => {

        if (event.target.classList.contains("cambiar")) {
            const imagenElemento = event.target.previousElementSibling;
            const imagenActual = imagenElemento.getAttribute("src");

            const nuevasImagenes = imagenes.filter(imagen => imagen !== imagenActual);
            const nuevaImagen = nuevasImagenes[Math.floor(Math.random() * nuevasImagenes.length)];

            imagenElemento.setAttribute("src", nuevaImagen);
        }

        if (event.target.classList.contains("borrar")) {
            const elemento = event.target.parentElement;
            elemento.remove();
        }

    });
});

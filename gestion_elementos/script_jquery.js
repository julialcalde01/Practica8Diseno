$(document).ready(function () {
  const imagenes = [
    "/imagenes/gato.png",
    "/imagenes/perro.png",
    "/imagenes/chinchilla.png"
  ];

  $("#cambiar-fondo").click(function () {
    const color = $("#color").val();
    $(".elemento").css("background-color", color);
  });

  $("#agregar-elemento").click(function () {
    const color = $("#color").val();
    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)];
    const nuevoElemento = `
        <div class="elemento" style="background-color: ${color}">
          <img src="${imagen}" alt="Elemento">
          <button class="cambiar">Cambiar</button>
          <button class="borrar">Borrar</button>
        </div>`;
    $("#contenedor-elementos").append(nuevoElemento);
  });

  $("#resetear").click(function () {
    $("#contenedor-elementos").empty();
  });

  $("#contenedor-elementos").on("click", ".cambiar", function () {
    const imagenElemento = $(this).siblings("img");

    const imagenActual = imagenElemento.attr("src");
    const nuevasImagenes = imagenes.filter(imagen => imagen !== imagenActual);
    const nuevaImagen = nuevasImagenes[Math.floor(Math.random() * nuevasImagenes.length)];

    imagenElemento.attr("src", nuevaImagen);
  });

  $("#contenedor-elementos").on("click", ".borrar", function () {
    $(this).parent().remove();
  });
});

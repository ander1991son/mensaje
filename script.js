// function mostrarMensaje() {
//   console.log("hello");
//   alert("Anderson");
// }

///
// function mostrarContenido() {
//   document.getElementById("contenido").style.display = "block";
// }

/// detectar dispositivos móviles y realizar acciones personalizadas como redirigir o mostrar mensajes específicos para esos usuarios

function esDispositivoMovil() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function mostrarContenido() {
  document.getElementById("contenido").style.display = "block";
  if (esDispositivoMovil()) {
    alert("TE PUEDO HAKEAR PERO NO QUIERO MEJOR VE MI VIDEO");
    // Redirigir a otra página después de 5 segundos en móvil
    setTimeout(function () {
      window.location.href = "https://www.youtube.com/watch?v=wxFO7I2maq4"; // Cambia esto a la URL que desees
    }, 5000);
  } else {
    mostrarMensajeParaPC();
  }
}
function mostrarMensajeParaPC() {
  alert("TE PUEDO HAKEAR PERO NO QUIERO MEJOR VE MI VIDEO");
  // Redirigir a otra página después de 1 segundo en PC
  setTimeout(function () {
    window.location.href = "https://www.youtube.com/watch?v=wxFO7I2maq4"; // Cambia esto a la URL que desees
  }, 3000);
}

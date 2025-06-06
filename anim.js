// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Una rosa", time: 22 },
  { text: "Pintada de azul", time: 23 },
  { text: "Es un motivo", time: 26 },
  { text: "Una simple estrellita de mar", time: 36 },
  { text: "Es un motivo", time: 39 },
  { text: "Escribir un poema es fácil si existe un motivo", time: 46 },
  { text: "Y hasta puede esperarse un consuelo de la fantasía", time: 59 },
  { text: "Unos ojos", time: 71 },
  { text: "Bañados de luz", time: 72 },
  { text: "Son un motivo", time: 75 },
  { text: "Unos labios queriendo besar", time: 80 },
  { text: "Son un motivo", time: 86 },
  { text: "Y me quedo mirándote aquí", time: 94 },
  { text: "Y encontrandote tantos motivos", time: 101 },
  { text: "Yo concluyo que mi motivo mejor eres tú", time: 107 },
  { text: "Te amo Lucero de mi alma <3", time: 118 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
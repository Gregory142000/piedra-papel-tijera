// Se cambio el uso de las variables declaradas con "var" por el uso más apropiado de "const" y "let"
const piedra = 1;
const papel  = 2;
const tijera = 3;

let jugada; // "Jugada" ahora fue declarada globalmente para mantener su funcionalidad con el uso de "let"

do {
	jugada = prompt("Seleccione su jugada:\n1.Piedra\n2.Papel\n3.Tijera");

	// Se agrego un operador ternario para filtrar los datos del usuario y que solo se permita el uso de números dentro del programa
	(isNaN(jugada)) ? jugada = 4 : jugada = parseInt(jugada)

	if (jugada < 1 || jugada > 3) {
		alert("La opción debe ser 1. 2. o 3.");
	}
} while (jugada < 1 || jugada > 3);

function play (eleccion) {
	let computer = Math.floor((Math.random() * 3) + 1);

	// De igual forma se aplico el uso del operador de comparacion estricto por tipo, esto siguiendo con las buenas practicas de JavaScript (Tanto el uso de "var" como de "==" son desaconsejados y vistos ya como malas practicas)
	if (eleccion === computer) {
		document.write("<p style='color:orange;'>Resultado: Empate</p>");
	} else if ((eleccion === 1) && (computer === 3)) {
		document.write("<p style='color:green;'>Ganaste con Piedra a la Tijera</p>");
	} else if ((eleccion === 2) && (computer === 1)) {
		document.write("<p style='color:green;'>Ganaste con Papel a la Piedra</p>");
	} else if ((eleccion === 3) && (computer === 2)) {
		document.write("<p style='color:green;'>Ganaste con Tijera a Papel</p>");
	} else {
		document.write("<p style='color:red;'>Resultado: Perdiste</p>");
	}

	document.write("<p><b>Valores:</b><br>1 = Piedra<br>2 = Papel<br>3 = Tijera</p>");
	document.write("<br>Tu elección: " + eleccion);
	document.write("<br>Elección de la Inteligencia Artificial: " + computer);
}

play(jugada);

// Espero te sirva mi colaboración :3
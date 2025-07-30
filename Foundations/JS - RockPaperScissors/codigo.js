let puntuacionPC = 0;
let puntuacionJugador = 0;

function JuegaPC() {
    let opciones = ["piedra", "papel", "tijera"];
    let eleccionPC = opciones[Math.floor(Math.random() * 3)];
    return eleccionPC;
}

function JuegaJugador() {
    let eleccionJugador = prompt("Elige: piedra, papel o tijera").toLowerCase();
    return eleccionJugador;
}

function JugarRonda() {
    let eleccionJugador = JuegaJugador();
    let eleccionPC = JuegaPC();

    if (eleccionJugador != "piedra" && eleccionJugador != "papel" && eleccionJugador != "tijera") {
        console.log("Elección inválida. Por favor, elige piedra, papel o tijera");
        return JugarRonda();
    }

    console.log("PC elige: " + eleccionPC + ", Jugador elige: " + eleccionJugador);

    switch (eleccionJugador) {

        case "piedra":
            switch (eleccionPC) {
                case "piedra":
                    console.log("Empate");
                    break;
                case "papel":
                    console.log("PC gana");
                    puntuacionPC++;
                    break;
                case "tijera":
                    console.log("Jugador gana");
                    puntuacionJugador++;
                    break;
            }
            break;

        case "papel":
            switch (eleccionPC) {
                case "piedra":
                    console.log("Jugador gana");
                    puntuacionJugador++;
                    break;
                case "papel":
                    console.log("Empate");
                    break;
                case "tijera":
                    console.log("PC gana");
                    puntuacionPC++;
                    break;
            }
            break;

        case "tijera":
            switch (eleccionPC) {
                case "piedra":
                    console.log("PC gana");
                    puntuacionPC++;
                    break;
                case "papel":
                    console.log("Jugador gana");
                    puntuacionJugador++;
                    break;
                case "tijera":
                    console.log("Empate");
                    break;
            }
            break;

        default:
            console.log("Opción no válida. Por favor, elige piedra, papel, tijera o salir");
            return JugarRonda();
    }
}

for (let i = 0; i < 5; i++) {
    JugarRonda();
}
console.log("Juego finalizado: Puntuacion PC: " + puntuacionPC + ", Puntuación Jugador: " + puntuacionJugador);
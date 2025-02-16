import { mostrarMenu, obtenerNumero, calcular } from './operaciones.js';

function iniciarCalculadora() {
    let opcion;
    
    do {
        opcion = mostrarMenu();

        if (opcion >= "1" && opcion <= "4") {
            let num1 = obtenerNumero("Ingrese el primer número:");
            let num2 = obtenerNumero("Ingrese el segundo número:");
            let resultado = calcular(opcion, num1, num2);
            alert(`Resultado: ${resultado}`);
        } else if (opcion !== "5") {
            alert("Opción no válida. Inténtelo de nuevo.");
        }
    } while (opcion !== "5");

    alert("Gracias por usar la calculadora.");
}

iniciarCalculadora();

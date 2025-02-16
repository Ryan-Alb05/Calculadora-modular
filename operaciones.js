
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return a / b;
}

export function mostrarMenu() {
    return prompt(
        "Seleccione una operación:\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir\n" +
        "5. Salir"
    );
}

export function obtenerNumero(mensaje) {
    let num;
    do {
        num = parseFloat(prompt(mensaje));
    } while (isNaN(num));
    return num;
}

export function calcular(opcion, num1, num2) {
    switch (opcion) {
        case "1":
            return sumar(num1, num2);
        case "2":
            return restar(num1, num2);
        case "3":
            return multiplicar(num1, num2);
        case "4":
            return dividir(num1, num2);
        default:
            return "Opción no válida.";
    }
}

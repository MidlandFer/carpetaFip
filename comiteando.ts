import * as readlineSync from "readline-sync";

// Función para calcular la potencia
function calcPotencia(base:number,exponente:number):number {
    let resultado: number = 1;

    for (let cont = 0; cont < exponente; cont++) {
        resultado *= base;
    }

    return resultado;
}
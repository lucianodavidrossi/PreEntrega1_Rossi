let nombre_completo = String(prompt("Ingrese su nombre completo"));
let dni = parseInt(prompt("Ingrese su número de DNI"));

let edad;

while (true) {
    edad = parseInt(prompt("Ingrese su edad"));

    if (edad >= 18) {
        console.log("Información del usuario:");
        console.log("Nombre completo:", nombre_completo);
        console.log("DNI:", dni);
        console.log("Edad:", edad);
        break;
    } else {
        alert("Por favor ingrese una edad válida (mayor o igual a 18).");
    }
}

let recargo_motivo;
let motivo_prestamo;

while (true) {
    motivo_prestamo = prompt("Ingrese la finalidad del préstamo (auto, moto, casa):");

    if (motivo_prestamo.toLowerCase() === "auto") {
        recargo_motivo = 0.5;
        alert("El préstamo máximo para auto es de $20.000.000");
        break;
    } else if (motivo_prestamo.toLowerCase() === "moto") {
        recargo_motivo = 0.4;
        alert("El préstamo máximo para moto es de $8.000.000");
        break;
    } else if (motivo_prestamo.toLowerCase() === "casa") {
        recargo_motivo = 0.9;
        alert("El préstamo máximo para casa es de $70.000.000");
        break;
    } else {
        alert("Por favor ingrese una finalidad válida (auto, moto, casa).");
    }
}

let cantidad_dinero;

while (true) {
    cantidad_dinero = Number(prompt("Ingrese cantidad de dinero a solicitar"));

    if (motivo_prestamo.toLowerCase() === "auto" && cantidad_dinero > 20000000) {
        alert("El monto ingresado supera el préstamo máximo para auto. Por favor ingrese un monto válido.");
    } else if (motivo_prestamo.toLowerCase() === "moto" && cantidad_dinero > 8000000) {
        alert("El monto ingresado supera el préstamo máximo para moto. Por favor ingrese un monto válido.");
    } else if (motivo_prestamo.toLowerCase() === "casa" && cantidad_dinero > 70000000) {
        alert("El monto ingresado supera el préstamo máximo para casa. Por favor ingrese un monto válido.");
    } else if (cantidad_dinero <= 0) {
        alert("Por favor ingrese un monto válido mayor que cero.");
    } else {
        break;
    }
}

let cantidad_cuotas = Number(prompt("Ingrese cantidad de cuotas a abonar"));

function calcular_prestamo(cantidad_dinero, recargo_motivo, cantidad_cuotas) {
  const iva = 1.21; 
  return (cantidad_dinero * recargo_motivo) / (cantidad_cuotas * iva); 
}

let cotizacion = calcular_prestamo(cantidad_dinero, recargo_motivo, cantidad_cuotas);
console.log(cotizacion);

alert(nombre_completo + " " + "por tu prestamo" + " " + "para comprar tu" + " " + motivo_prestamo + " " + "vas a abonar" + " " + cantidad_cuotas + " " + "cuotas de" + " " + "$" + cotizacion);


// Lab8 - JS básico
// Cada función lee los campos de su cuadro, valida los datos y muestra el resultado.

// Devuelve el valor numérico de un campo, o NaN si está vacío o no es válido
function leerNumero(id) {
    var texto = document.getElementById(id).value;
    if (texto.trim() === "") return NaN;
    return Number(texto);
}

// Muestra un mensaje en el área de resultado indicada
function mostrar(idResultado, mensaje) {
    document.getElementById(idResultado).textContent = mensaje;
}

// 1. Suma de tres valores: suma los tres números y muestra el total
function sumarTres() {
    var a = leerNumero("s1");
    var b = leerNumero("s2");
    var c = leerNumero("s3");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        mostrar("res1", "Error: ingrese los tres números.");
        return;
    }
    mostrar("res1", "La suma de los valores ingresados es: " + (a + b + c));
}

// 2. Cuadrado de un número: eleva el número al cuadrado
function calcularCuadrado() {
    var n = leerNumero("cuad");

    if (isNaN(n)) {
        mostrar("res2", "Error: ingrese un número válido.");
        return;
    }
    mostrar("res2", "El cuadrado de " + n + " es: " + (n * n));
}

// 3. Promedio de calificaciones: promedio de tres notas de un estudiante
function calcularPromedio() {
    var nombre = document.getElementById("nombre").value.trim();
    var n1 = leerNumero("n1");
    var n2 = leerNumero("n2");
    var n3 = leerNumero("n3");

    if (nombre === "" || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        mostrar("res3", "Error: ingrese el nombre y las tres calificaciones.");
        return;
    }
    var promedio = (n1 + n2 + n3) / 3;
    mostrar("res3", "El promedio de " + nombre + " es: " + promedio.toFixed(2) + " puntos");
}

// 4. Conversión de metros: convierte a centímetros (x100) y kilómetros (/1000)
function convertirMetros() {
    var m = leerNumero("metros");

    if (isNaN(m)) {
        mostrar("res4", "Error: ingrese un valor en metros.");
        return;
    }
    var cm = m * 100;
    var km = m / 1000;
    var formato = { maximumFractionDigits: 4 };
    mostrar("res4", m.toLocaleString("en-US", formato) + " metros equivalen a " +
        cm.toLocaleString("en-US", formato) + " centímetros y " +
        km.toLocaleString("en-US", formato) + " kilómetros.");
}

// 5. Comparación de dos valores: mayor, menor y diferencia
function compararValores() {
    var a = leerNumero("c1");
    var b = leerNumero("c2");

    if (isNaN(a) || isNaN(b)) {
        mostrar("res5", "Error: ingrese los dos números.");
        return;
    }
    if (a === b) {
        mostrar("res5", "Los dos números son iguales (" + a + "), la diferencia es 0.");
        return;
    }
    var mayor = Math.max(a, b);
    var menor = Math.min(a, b);
    mostrar("res5", "El número mayor es " + mayor + ", el menor es " + menor +
        ", y su diferencia es " + (mayor - menor) + ".");
}
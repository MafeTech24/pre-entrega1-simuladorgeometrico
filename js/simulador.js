// ---- Array ----- //
const figuras = ['Perímetro del Cuadrado', 'Perímetro del Rectángulo', 'Perímetro del Círculo', 'Área del Cuadrado', 'Área del Rectángulo', 'Área del Círculo'];
// ---- Función Flecha ---- //
const saludo = saludar => (`Bienvenidos a la Consola del Simulador de Áreas y Perímetros.`)
// ---- Funciones ---- //
function perimetroCuadrado() {
    let lado = parseFloat(prompt("Introduce el valor del Lado del Cuadrado"));
    let perimetro = lado * 4;    
    alert(`El Perímetro del Cuadrado es ${perimetro}`);
    console.log(`Elegiste la opción 1, querés saber el Perímetro del Cuadrado e ingresaste como valor del Lado del Cuadrado ${lado}. \n 'EL PERÍMETRO DEL CUADRADO ES ${perimetro}'`);
}
function areaCuadrado() {
    let lado = parseFloat(prompt("Introduce el valor del Lado del Cuadrado"));
    let superficie = lado * lado;
    alert(`El Área del Cuadrado es ${superficie}`);
    console.log(`Elegiste la opción 2, querés saber el Área del Cuadrado e ingresaste como valor del Lado del Cuadrado ${lado}. \n 'El ÁREA DEL CUADRADO ES ${superficie}'`);
}
function perimetroRectangulo() {
    let largo = parseFloat(prompt("Introduce el Largo del Rectángulo"));
    let ancho = parseFloat(prompt("Introduce el Ancho del Rectángulo"));
    let perimetro = (largo + ancho) * 2;
    alert(`El Perímetro del Rectángulo es ${perimetro}`);
    console.log(`Elegiste la opción 3, querés saber el Perímetro del Rectángulo e ingresaste como valor del Largo del Rectángulo ${largo} y como valor del ancho ${ancho}. \n 'EL PERÍMETRO DEL RECTÁNGULO ES ${perimetro}.'`);
}
function areaRectangulo() {
    let largo = parseFloat(prompt("Introduce el Largo del Rectángulo"));
    let ancho = parseFloat(prompt("Introduce el Ancho del Rectángulo"));
    let superficie = largo * ancho;
    alert(`El Área del Rectángulo es ${superficie}`);
    console.log(`Elegiste la opción 4, querés saber el Área del Rectángulo e ingresaste como valor del Largo del Rectángulo ${largo} y como valor del ancho ${ancho}. \n 'EL ÁREA DEL RECTÁNGULO ES ${superficie}.'`);
}
function perimetroCirculo() {
    let radio = parseFloat(prompt("Introduce el Radio del Círculo"));
    const pi = Math.PI;
    let perimetro = 2 * pi * radio;
    alert(`El Perímetro del Círculo es ${perimetro}`);
    console.log(`Elegiste la opción 5, querés saber el Perímetro del Círculo e ingresaste como valor del Radio del Círculo ${radio}. \n 'EL PERÍMETRO DEL CÍRCULO ES' ${perimetro}.`);
}
function areaCirculo() {
    let radio = parseFloat(prompt("Introduce el Radio del Círculo"));
    const pi = Math.PI;
    let superficie = pi * radio * radio;
    alert(`El Área del Círculo es ${superficie}`);
    console.log(`Elegiste la opción 6, querés saber el Área del Círculo e ingresaste como valor del Radio del Círculo ${radio}. \n 'EL ÁREA DEL CÍRCULO ES' ${superficie}.`);
}

console.log(saludo());

alert("Bienvenidos al Simulador de Áreas y Perímetros.");

let menu = parseFloat(prompt("Primero elige una opción, luego ingresa los datos solicitados y por último dirigete a la Consola del Navegador(F12) para cotejar Datos y Resultados con el cuadro de diálogo:\n 1 - Perímetro del Cuadrado \n 2 - Área del Cuadrado \n 3 - Perímetro del Rectángulo \n 4 - Área del Rectángulo \n 5 - Perímetro del Círculo \n 6 - Área del Círculo \n 7 - Salir"));

while (menu !== 7) {
    switch (menu) {
        case 1:
            alert(`Elegiste la opción 1, querés saber el Perímetro del Cuadrado.`);
            perimetroCuadrado();
            break;
        case 2:
            alert(`Elegiste la opción 2, querés saber el Área del Cuadrado.`);
            areaCuadrado();
            break;
        case 3:
            alert(`Elegiste la opción 3, querés saber el Perímetro del Rectángulo.`);
            perimetroRectangulo();
            break;
        case 4:
            alert(`Elegiste la opción 4, querés saber el Área del Rectángulo.`);
            areaRectangulo();
            break;
        case 5:
            alert(`Elegiste la opción 5, querés saber el Perímetro del Círculo.`);
            perimetroCirculo();
            break;
        case 6:
            alert(`Elegiste la opción 6, querés saber el Área del Círculo.`);
            areaCirculo();
            break;
        default:
            alert(`Opción NO VÁLIDA. Ingresa una Opción Válida por favor.`)
            console.log("Opción NO VÁLIDA. Ingrese una opción válida por favor.");
      break;
    }
    menu = parseFloat(prompt("Primero elige una opción, luego ingresa los datos solicitados y por último dirigete a la Consola del Navegador(F12) para cotejar Datos y Resultados con el cuadro de diálogo:\n 1 - Perímetro del Cuadrado \n 2 - Área del Cuadrado \n 3 - Perímetro del Rectángulo \n 4 - Área del Rectángulo \n 5 - Perímetro del Círculo \n 6 - Área del Círculo \n 7 - Salir"));
}
alert("Gracias! Nos Vemos Pronto!");
console.log("Gracias! Nos Vemos Pronto!")



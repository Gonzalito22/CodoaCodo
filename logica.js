const costoEntrada = 200;
const descuentoEstudiante = 0.2;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.85;
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let correo = document.getElementById("correo").value;

//Funcion de calcular costo total
function calcularCosto() {
  let cantidad = document.getElementById("cantidad").value;
  let select = document.getElementById("categoria"); //Obtener texto del select
  let selected = select.options[select.selectedIndex].text; //Obtener texto del select

  if (selected == "Estudiante") {
    return cantidad * (costoEntrada * descuentoEstudiante);
  } else if (selected == "Trainee") {
    return cantidad * (costoEntrada * descuentoTrainee);
  } else return cantidad * (costoEntrada * descuentoJunior);
}

//Evento del boton Resumen
btnResumen.addEventListener("click", () => {
  document.getElementById("totalPagar").innerHTML =
    "Total a pagar $ " + calcularCosto();
});

//Funcion borrar datos del formulario
function borrarDatos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("totalPagar").innerHTML = "";
}

//Evento boton Borrar
btnBorrar.addEventListener("click", () => {
  borrarDatos();
});

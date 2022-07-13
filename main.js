// Creamos la funciona general
function capturar() {
  // creamos la clase
  class Persona {
    constructor(nombre, apellido, edad) {
      this._nombre = nombre;
      this._edad = edad;
      this._apellido = apellido;
    }
  }

  //recibir nombre de formulario
  var nombreCapturar = document.getElementById("nombre").value;
  console.log(nombreCapturar);
  //recibir apellido de formulario
  var apellidoCapturar = document.getElementById("apellido").value;
  console.log(nombreCapturar);
  //recibir edad de formulario
  var edadCapturar = document.getElementById("edad").value;
  console.log(edadCapturar);
  //instanciamos un objeto
  nuevoSujeto = new Persona(nombreCapturar, apellidoCapturar, edadCapturar);
  console.log(nuevoSujeto);
  agregar();
}
var baseDatos = [];
function agregar() {
  baseDatos.push(nuevoSujeto);
  console.log(nuevoSujeto);
  document.getElementById(
    "tabla"
  ).innerHTML += `<tbody><td>${nuevoSujeto._nombre}</td><td>${nuevoSujeto._apellido}</td><td>${nuevoSujeto._edad}</td></tbody>`;
}

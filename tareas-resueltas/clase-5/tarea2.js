// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

document.querySelector('#submitBtn').onclick = function (){
  const nombreCompleto = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const edad = document.querySelector('#edad').value;
  const todo = 
  `${nombreCompleto}
${apellido}
${edad} años`
  document.querySelector('#textarea').value = todo;
  let saludoContainer = document.querySelector('#saludoContainer')
  let saludo = document.createElement('h1')
  saludo.textContent = `¡Bienvenidx, ${nombreCompleto}!`
  saludoContainer.appendChild(saludo)
}
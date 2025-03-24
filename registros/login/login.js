function Loginp_p() {
  // Crear el contenedor principal del login
  let loginContainer = document.createElement('div');
  loginContainer.className = 'loginn'; // Clase para el contenedor principal

  // Crear el título
  let titulo = document.createElement('div');
  titulo.className = 'TiTl';
  titulo.innerText = 'Iniciar Sesión';

  // Crear el contenedor de los inputs y el botón
  let ingT = document.createElement('div');
  ingT.className = 'ingT';

  // Crear el campo de entrada para el usuario
  let usuarioInput = document.createElement('input');
  usuarioInput.type = 'text';
  usuarioInput.placeholder = 'Usuario';
  usuarioInput.className = 'inusuario';

  // Crear el campo de entrada para la contraseña
  let contraseñaInput = document.createElement('input');
  contraseñaInput.type = 'password';
  contraseñaInput.placeholder = 'Contraseña';
  contraseñaInput.className = 'incontraseña'; // Cambiado a .incontraseña

  // Crear el botón de "Adelante"
  let adelanteButton = document.createElement('button');
  adelanteButton.innerText = 'Adelante';
  adelanteButton.className = 'Entrar';

  // Crear las etiquetas de texto
  let agUsu = document.createElement('div');
  agUsu.className = 'agUsu';
  agUsu.innerText = 'Usuario';

  let agCot = document.createElement('div');
  agCot.className = 'agCot';
  agCot.innerText = 'Contraseña';

  // Agregar los elementos al contenedor de inputs y botón
  ingT.appendChild(agUsu);
  ingT.appendChild(usuarioInput);
  ingT.appendChild(agCot);
  ingT.appendChild(contraseñaInput);
  ingT.appendChild(adelanteButton);

  // Agregar el título y el contenedor de inputs al contenedor principal
  loginContainer.appendChild(titulo);
  loginContainer.appendChild(ingT);

  // Retornar el contenedor del login
  return loginContainer;
}

export {Loginp_p}
// index.js

import { h_Header } from "./componentes/header/header.js";
import { listClases } from "./componentes/listado/listado.js";

import { Loginp_p } from "./registros/login/login.js";
import { ItemDatos } from "./registros/listadoItem/listadoitem.js";

// Obtén el elemento DOM donde cargarás las vistas
let DOM = document.querySelector("#root");

// Variable para rastrear si el event listener ya se agregó
let eventListenerAgregado = false;

// Función para cargar el DOM basado en el estado de autenticación
function cargarDOM() {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, redirigir al login
    mostrarLogin();
    return;
  }

  DOM.innerHTML = ""; // Limpiar el DOM
  DOM.appendChild(h_Header()); // Agregar el header
  DOM.appendChild(listClases()); // Agregar el listado de clases
}

function mostrarLogin() {
  DOM.innerHTML = ""; // Limpiar el DOM
  DOM.appendChild(Loginp_p()); // Agregar el formulario de login

  if (!eventListenerAgregado) {
    DOM.addEventListener('click', manejarClic);
    eventListenerAgregado = true; // Marcar que el event listener ya se agregó
  }
}
function manejarClic(event) {
  if (event.target.classList.contains('Entrar')) {
    const usuario = document.querySelector('.inusuario').value;
    const contraseña = document.querySelector('.incontraseña').value;

    console.log('Usuario ingresado:', usuario);
    console.log('Contraseña ingresada:', contraseña);

    if (!usuario || !contraseña) {
      alert("Por favor, ingresa tanto el usuario como la contraseña.");
      return;
    }

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, contraseña }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(errorData.error || 'Error en la solicitud');
          });
        }
        return response.json();
      })
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log('Token guardado:', data.token);
          cargarDOM(); // Redirigir al listado de clases
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        if (error.message === 'Failed to fetch') {
          alert('No se pudo conectar al servidor. Verifica tu conexión a internet.');
        } else {
          alert(error.message); // Mostrar el mensaje de error del backend
        }
      });
  }
}

// Función para mostrar la vista de ItemDatos
function mostrarItemDatos() {
  DOM.innerHTML = ""; // Limpiar el DOM
  DOM.appendChild(ItemDatos()); // Agregar la vista de ItemDatos
}

// Muestra la pantalla de login inicialmente
mostrarLogin();

// Exportar las funciones para que puedan ser usadas en otros módulos
export { cargarDOM, mostrarLogin, mostrarItemDatos };
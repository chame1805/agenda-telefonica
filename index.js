import * as controllers from './src/controladores.js';

document.getElementById('addContactoBtn').addEventListener('click', controllers.agregarContacto);
document.getElementById('showAgendaBtn').addEventListener('click', controllers.mostrarAgenda);
document.getElementById('removeContactoBtn').addEventListener('click', controllers.eliminarContacto);
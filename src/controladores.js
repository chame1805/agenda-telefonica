import { Agenda } from './modelos.js';

const agenda = new Agenda();

function mostrarContactos(contactos) {
    const areaVista = document.getElementById('agendaDisplay');
    areaVista.innerHTML = ''; // Limpiar el contenido existente
    if (contactos.length === 0) {
        areaVista.textContent = 'La agenda esta vacia.';
    } else {
        contactos.forEach(contacto => {
            const elementoContacto = document.createElement('div');
            elementoContacto.textContent = `${contacto.nombre}: ${contacto.numero}`;
            areaVista.appendChild(elementoContacto);
        });
    }
}

export function agregarContacto() {
    const nombre = document.getElementById('nombreInput').value;
    const numero = document.getElementById('numeroInput').value;
    agenda.agregarContacto(nombre, numero);
}

export function mostrarAgenda() {
    const contactos = agenda.obtenerTodosLosContactos();
    mostrarContactos(contactos);
}

export function eliminarContacto() {
    const nombreONumero = document.getElementById('eliminarInput').value;
    agenda.eliminarContacto(nombreONumero);
    const contactos = agenda.obtenerTodosLosContactos();
    mostrarContactos(contactos);
}
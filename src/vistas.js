export function actualizarVista(contactos) {
    const agendaDisplay = document.getElementById('agendaDisplay');
    if (Array.isArray(contactos)) {
        agendaDisplay.innerHTML = '';
        contactos.forEach(contacto => {
            agendaDisplay.innerHTML += `<div>${contacto.nombre}: ${contacto.numero}</div>`;
        });
    } else {
        agendaDisplay.innerHTML = `<div>${contactos.nombre}: ${contactos.numero}</div>`;
    }
}
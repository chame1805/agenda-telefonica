class Contacto {
    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
    }
}

class NodoContacto {
    constructor(nombre, numero) {
        this.contacto = new Contacto(nombre, numero);
        this.siguiente = null;
    }
}

class Agenda {
    constructor() {
        this.cabeza = null;
    }

    agregarContacto(nombre, numero) {
        const nodoContacto = new NodoContacto(nombre, numero);
        if (!this.cabeza) {
            this.cabeza = nodoContacto;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nodoContacto;
        }
        return nodoContacto;
    }

    obtenerTodosLosContactos() {
        const contactos = [];
        let actual = this.cabeza;
        while (actual) {
            contactos.push(actual.contacto);
            actual = actual.siguiente;
        }
        return contactos;
    }

    eliminarContacto(nombreONumero) {
        if (!this.cabeza) {
            return;
        }
        let actual = this.cabeza;
        let previo = null;
        while (actual) {
            if (actual.contacto.nombre === nombreONumero || actual.contacto.numero === nombreONumero) {
                if (!previo) {
                    this.cabeza = actual.siguiente;
                } else {
                    previo.siguiente = actual.siguiente;
                }
                return;
            }
            previo = actual;
            actual = actual.siguiente;
        }
    }
}

export { Agenda };
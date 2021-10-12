class clases {
    constructor(id, profe, precio, estilo, vecesXsemana, stock) {
        this.id = id;
        this.profe = profe;
        this.precio = precio;
        this.estilo = estilo;
        this.vecesXsemana = vecesXsemana;
        this.stock = stock; //cupos
    }
    controlarStock() {
        if (ingresarCantidad < this.stock) {
            this.stock = this.stock - ingresarCantidad;
            alert("Se ha realizado su reserva de " + ingresarCantidad + " clases!");
        } else {
            alert("El cupo máximo es de: " + this.stock);
            ingresarCantidad = parseInt(
                prompt("Ingrese cuántas clases quiere realizar: ")
            );
        }
    }
}
// Declaro una función para definir si carrito es un array vacío o si ya hay algo guardado en el storage
function traerCarrito() {
    // Intento traer el carrito y parsearlo
    const arrayGuardadoEnStorage = localStorage.getItem("carrito");
    const arrayParseado = JSON.parse(arrayGuardadoEnStorage);
    // Chequeo si existe, es decir, si había algo guardado arrayParseado va ser un array con elementos, si no va a ser null o undefined
    if (arrayParseado !== null && arrayParseado !== undefined) {
        // Si cumple con las condiciones quiere decir que había ya algo en el storage, en ese caso devuelvo el array
        return arrayParseado;
    } else {
        // Si no cumple devuelvo un array vacío
        return [];
    }
}
/* Declaro mi array y le paso el valor que devuelva la función traerCarrito. Si hay algo guardado, me lo va a traer, si no hay nada, va a asignar un array vacío.
Esto lo hacemos para que, si agregamos algún elemento después, no se nos borre lo que había */
const carrito = traerCarrito();
// Declaro la función para mostrar carrito en el HTML
function mostrarCarrito() {
    // Intento traer el carrito y parsearlo
    const carritoEnString = localStorage.getItem("carrito");
    const carrito = JSON.parse(carritoEnString);
    // Busco el contenedor donde va a estar renderizado el carrito y lo vacío
    let contenedorCarrito = document.getElementById("carrito");
    contenedorCarrito.innerHTML = "";
    //Si el carrito no existe en el localStorage o si está vacío, el for me va a dar error, por lo tanto lo chequeo antes
    if (carrito !== null && carrito !== undefined && carrito.length > 0) {
        // Ahora si, por cada elemento que tenga guardado el carrito, agregamos un <p> al contenedor
        for (let claseComprada of carrito) {
            contenedorCarrito.innerHTML += `
        <p class="mensajeCompra"> Ha elegido la clase: ${claseComprada.estilo}.
        Con un total de: $${claseComprada.precio}</p>`;
        }
    }
}
/* Llamamos a la función para que nos muestre lo que hay guardado (si hay algo) ni bien se inicia o refresca la página.
(Después lo vamos a llamar de nuevo dentro del addEventListener, ya que si agrego algo al carrito, quiero que la vista se actualice) */
mostrarCarrito();
const paqueteUno = new clases(1, "Paz", 250, "House", "1 vez a la semana", 20);
const paqueteDos = new clases(
    2,
    "Zaira",
    250,
    "Hiphop",
    "1 vez a la semana",
    20
);
const paqueteTres = new clases(
    3,
    "Rodri",
    250,
    "Breaking",
    "1 vez a la semana",
    20
);
const paqueteCuatro = new clases(
    4,
    "Jose",
    250,
    "Popping",
    "1 vez a la semana",
    20
);
const paqueteCinco = new clases(
    5,
    "Lucas",
    250,
    "Locking",
    "1 vez a la semana",
    20
);
const paqueteSeis = new clases(
    6,
    "Nicole",
    250,
    "Dancehall",
    "1 vez a la semana",
    20
);
const paqueteSiete = new clases(
    7,
    "Agustina",
    250,
    "Waaking",
    "1 vez a la semana",
    20
);
let paquetesGeneral = [
    paqueteUno,
    paqueteDos,
    paqueteTres,
    paqueteCuatro,
    paqueteCinco,
    paqueteSeis,
    paqueteSiete,
];
let interaccion = document.getElementById("interaccion1");
const formulario = document.getElementById("form");
const llamandoInput = document.getElementById("input-buscador");
/*const llamandoBtn = document.getElementById("btn-buscador-js");*/
const htmlTemplate = (claseElegida) => {
    return `<div class="template card2">
                                <p class="card_estilo"> Estilo: ${claseElegida.estilo}</p>
                                <p class="card_profe">Nombre de profe: ${claseElegida.profe} </p>
                                <p class="card_vecesXsemana"> ${claseElegida.vecesXsemana}</p>
                                <p class="card_precio"> $${claseElegida.precio}</p>
                        </div> `;
};
const guardarInfo = (paquetesGeneral, container) => {
    container.innerHTML = "";
    if (paquetesGeneral.length > 0) {
        for (const claseElegida of paquetesGeneral) {
            //creas la card
            const card = document.createElement("div");
            card.classList.add("template", "card2");
            // Creas la plantilla interna y la agregas a la card
            const claseElegidaInnerHTML = htmlTemplate(claseElegida);
            card.innerHTML = claseElegidaInnerHTML;
            // Creas el botón y le agregas la escucha del evento
            const boton = document.createElement("button");
            boton.classList.add("btn");
            boton.innerText = "Seleccionar";
            boton.addEventListener("click", () => {
                // Agregamos al carrito la clase a la que hace referencia el botón
                carrito.push(claseElegida);
                // Guardamos nuevamente el carrito actualizado, en el localStorage
                localStorage.setItem("carrito", JSON.stringify(carrito));
                //Llamamos de nuevo a la función mostrarCarrito para que la vista se actualice, ya que si no habría que refrescar la página
                mostrarCarrito();
            });
            card.appendChild(boton);
            container.appendChild(card);
        }
    } else {
        container.innerHTML = `<p class="mensaje"> No se encuentran clases </p>`;
    }
};
guardarInfo(paquetesGeneral, formulario);
const filterPaquetesGeneral = () => {
    const llamandoInputValue = llamandoInput.value;
    const filterPaquetesGeneral = paquetesGeneral.filter((claseElegida) => {
        const claseElegidaEstilo = claseElegida.estilo.toLowerCase();
        const claseElegidaProfeLowerCase = claseElegida.profe.toLowerCase();
        const esFiltrado =
            claseElegidaEstilo.includes(llamandoInputValue.toLowerCase()) ||
            claseElegidaProfeLowerCase.includes(llamandoInputValue.toLowerCase());
        return esFiltrado;
    });
    guardarInfo(filterPaquetesGeneral, formulario);
};
llamandoInput.addEventListener("keyup", filterPaquetesGeneral);
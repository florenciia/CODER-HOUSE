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

function traerCarrito() {
    const arrayGuardadoEnStorage = localStorage.getItem("carrito");
    const arrayParseado = JSON.parse(arrayGuardadoEnStorage);
    if (arrayParseado !== null && arrayParseado !== undefined) {
        return arrayParseado;
    } else {
        return [];
    }
}
const carrito = traerCarrito();
function mostrarCarrito() {
    const carritoEnString = localStorage.getItem("carrito");
    const carrito = JSON.parse(carritoEnString);
    let contenedorCarrito = document.getElementById("carrito");
    contenedorCarrito.innerHTML = "";
    if (carrito !== null && carrito !== undefined && carrito.length > 0) {
        for (let claseComprada of carrito) {
            contenedorCarrito.innerHTML += `
        <p class="mensajeCompra"> Ha elegido la clase: ${claseComprada.estilo}.
        Con un total de: $${claseComprada.precio}</p>`;
        }
    }
}

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
            const card = document.createElement("div");
            card.classList.add("template", "card2");
            const claseElegidaInnerHTML = htmlTemplate(claseElegida);
            card.innerHTML = claseElegidaInnerHTML;
            const boton = document.createElement("button");
            boton.classList.add("btn");
            boton.innerText = "Seleccionar";
            boton.addEventListener("click", () => {
                carrito.push(claseElegida);
                localStorage.setItem("carrito", JSON.stringify(carrito));
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



// CLASE 14 -> AJAX CON JQUERY

//MÉTODO GET

const URLGET = "https://jsonplaceholder.typicode.com/posts";

$("body").append('<button id="btnGet" style="margin-bottom: 2rem; color: white; font-size:3rem;  background-color: green; width: 10rem; height: 7rem; margin-left: 2rem;"> GET </button>');

$("#btnGet").click(() => { 
    $.get(URLGET, function (response, state) {

          if(state === 'success') {
            for (const dato of response) {
              $("body").append(`<div style="background-color: lightgreen; color: black; margin-left: 2rem; border-radius: 1rem; margin-bottom: 1rem; width: 30rem; padding: 0.5rem">
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          }
    });
});

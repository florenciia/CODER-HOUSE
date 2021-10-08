class clases{
    constructor (id, profe, precio, estilo, vecesXsemana, stock){
    this.id = id,
    this.profe = profe,
    this.precio = precio,
    this.estilo = estilo,
    this.vecesXsemana = vecesXsemana,
    this.stock = stock //cupos
    }
    controlarStock(){
        if(ingresarCantidad < this.stock){
            this.stock = this.stock - ingresarCantidad;
            alert('Se ha realizado su reserva de ' + ingresarCantidad + ' clases!');
          
        }
        else{
            alert('El cupo máximo es de: ' + this.stock);
            ingresarCantidad = parseInt(prompt('Ingrese cuántas clases quiere realizar: '));
        }
    }
}

const paqueteUno = new clases( 1 , 'Paz', 250 , 'House', '1 vez a la semana', 20 );
const paqueteDos = new clases( 2 , 'Zaira', 250 , 'Hiphop', '1 vez a la semana', 20 );
const paqueteTres = new clases( 3 , 'Rodri', 250 , 'Breaking', '1 vez a la semana', 20 );
const paqueteCuatro = new clases( 4 , 'Jose', 250 , 'Popping', '1 vez a la semana', 20 );
const paqueteCinco = new clases( 5 , 'Lucas', 250 , 'Locking', '1 vez a la semana', 20 );
const paqueteSeis = new clases( 6 , 'Nicole', 250 , 'Dancehall', '1 vez a la semana', 20 );
const paqueteSiete = new clases( 7 , 'Agustina', 250 , 'Waaking', '1 vez a la semana', 20 );

let paquetesGeneral = [paqueteUno, paqueteDos, paqueteTres, paqueteCuatro, paqueteCinco, paqueteSeis, paqueteSiete];

let interaccion = document.getElementById('interaccion1');
/*
for (dato of paquetesGeneral) {
    let nuevaSeccion = document.createElement('div');
    nuevaSeccion.innerHTML =  `<div class="infoInner card2 col">
                                <p class="card_id"> Numero de Id: ${dato.id}</p>
                                <h1 class="card_profe">Nombre de la profe: ${dato.profe} </h1>
                                <br> <p class="card_estilo"> Estilo: ${dato.estilo}</p>
                                <br> <p class="card_precio"> $${dato.precio}</p>
                                <br> <p class="card_vecesXsemana">${dato.vecesXsemana}</p>
                                <br> <p class="card_stock"> Cupos: ${dato.stock}</p> 
                                </div> `

interaccion.appendChild(nuevaSeccion);
}*/

const formulario = document.getElementById("form");
const llamandoInput = document.getElementById("input-buscador");
/*const llamandoBtn = document.getElementById("btn-buscador-js");*/


const htmlTemplate = (claseElegida) => {
    return              `<div class="template card2">
                                <p class="card_estilo"> Estilo: ${claseElegida.estilo}</p>
                                <p class="card_profe">Nombre de profe: ${claseElegida.profe} </p>
                                <p class="card_vecesXsemana"> ${claseElegida.vecesXsemana}</p>
                                <p class="card_precio"> $${claseElegida.precio}</p>
                        </div> `;
};

const guardarInfo = (paquetesGeneral, container) => {
    container.innerHTML = "";

    if(paquetesGeneral.length > 0) {
        for (const claseElegida of paquetesGeneral) {

                    //creas la card
                    const card = document.createElement("div");
                    card.classList.add("template","card2");

                    // Creas la plantilla interna y la agregas a la card
                    const claseElegidaInnerHTML = htmlTemplate(claseElegida);
                    card.innerHTML = claseElegidaInnerHTML;
                    // Creas el botón y le agregas la escucha del evento
                    const boton = document.createElement("button");
                    boton.classList.add("btn");
                    boton.innerText = "Seleccionar"
                    boton.addEventListener("click", () => ( 
                        container.innerHTML = (`
                        <p class="mensajeCompra"> Ha elegido la clase: ${claseElegida.estilo}.
                                                  Con un total de: $${claseElegida.precio}</p>`)
                    ));

                    card.appendChild(boton);
                    container.appendChild(card);
                }   
            } else{
                container.innerHTML = `<p class="mensaje"> No se encuentran clases </p>`
    }
};

guardarInfo(paquetesGeneral, formulario);

const filterPaquetesGeneral = () => {
    const llamandoInputValue = llamandoInput.value
    //console.log(llamandoInputValue);
    const filterPaquetesGeneral = paquetesGeneral.filter((claseElegida) => {
        const claseElegidaEstilo = claseElegida.estilo.toLowerCase();
        const claseElegidaProfeLowerCase = claseElegida.profe.toLowerCase()

        const esFiltrado = 
                claseElegidaEstilo.includes(llamandoInputValue.toLowerCase())
                || claseElegidaProfeLowerCase.includes(llamandoInputValue.toLowerCase());
        
            return esFiltrado;
    })
    guardarInfo(filterPaquetesGeneral, formulario);
};

llamandoInput.addEventListener('keyup', filterPaquetesGeneral);

/* localstorage -json */

localStorage.setItem("clases", JSON.stringify(paquetesGeneral));

let paquetesGeneral2 = localStorage.getItem("clases");
paquetesGeneral2 = JSON.parse(paquetesGeneral2);


/* ----------carrito----------------- */

let carrito = document.getElementById('carrito');

for( let claseComprada of paquetesGeneral2){
    let carritoCompra = document.createElement('div');
    carritoCompra.innerHTML =  `
    <p class="mensajeCompra"> Ha elegido la clase: ${claseComprada.estilo}.
    Con un total de: $${claseComprada.precio}</p>`
                    

carrito.appendChild(carritoCompra);
}


/*
PARA DENTRO DE LA CARD
<button class="btn"> Seleccionar </button>*/

/* --------------------------------------------- */

/* ONCLICK?
document.getElementById("form").addEventListener("onclick", function( event ) {
    // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
    event.target.innerHTML = "Usted a elegido: " + event.detail;
  }, false);
*/

/*
// Guardar el array en el localStorage

// El arreglo:
var array = [1, 2, 3];
// Se guarda en localStorage despues de JSON stringificarlo 
localStorage.setItem('myArray', JSON.stringify(array));

// Obtener el arreglo de localStorage

var array = localStorage.getItem('myArray');
// Se parsea para poder ser usado en js con JSON.parse :)
array = JSON.parse(array);*/

/* ----------------------------------------------------- */

/*para elegir una categoría cambio el filter*/
/* en vez de "ESTILO" elijo "PROFE"

const filterPaquetesGeneral = paquetesGeneral.filter((claseElegida) => {
    const claseElegidaEstilo = claseElegida.estilo.toLowerCase();
    const claseElegidaProfeLowerCase = claseElegida.profe.toLowerCase()

    const esFiltrado = 
            claseElegidaEstilo.includes(llamandoInputValue.toLowerCase())
        !!  claseElegidaProfeLowerCase.includes(llamandoInputValue.toLowerCase());
    
        return esFiltrado;
});

guardarInfo(filterPaquetesGeneral, formulario);
*/


/* cuando hago click con mouse aparece la opcion elegida 
llamandoBtn.addEventListener('click',filterPaquetesGeneral);*/

/*a medida que voy escribiendo va apareciendo 
llamandoInput.addEventListener('keyup', filterPaquetesGeneral);*/



/* PARA HACER EL JSON */

/*
localStorage.setItem("Estilos", "valor");
sessionStorage.setItem("Estilos", "valor");*/

/* ------------eventos ---------------------- */

/*
//ejemplo de AgusTutor
//(cuando se hace click en el elemento button, se ejecuta la funcionEjemplo)
button.addEventListener("click",funcionEjemplo)

//Para conocer las propiedades podés hacer un console.log del elemento
//o buscar en la documentación!

//Para acceder a la propiedad, es como con cualquier objeto.

const inputSeleccionado = document.getElementById("texto")
const valor = inputSeleccionado.value

//Si lo que vos querés es, de un array de elementos,
//rescatar el que coincide con el valor del input, y luego mostrarlo,
//lo hacés en la función que le pasás al addEventListener por ejemplo
*/
















/*
let mensajeCompra = document.getElementById("mensajeCompra")
mensajeCompra = (`div>
Ha elegido la clase: ${claseElegida.estilo}.
Con un total de: $${claseElegida.precio}
</div>`));

container.appendChild(mensajeCompra);*/
const URLJSON = "../json/datos.json"

$("body").append('<button id="btnGet" class="btnGetJson"> TODAS LAS CLASES </button>');

$("#btnGet").click(() => { 
$.getJSON(URLJSON, function (response, state) {
    if(state === "success"){
      for (const dato of response) {
        $("body").append(`<div class="card2 cardGetJson">
                                <h3> Nombre del profe: ${dato.profe}</h3>
                                <p class="textoGetJson"> Estilo: ${dato.estilo}</p>
                                <p class="textoGetJson"> Precio por clase: ${dato.precio}</p>
                                <p class="textoGetJson"> Cupos: ${dato.stock}</p>
                            </div>`)
      }  
    }
    });
});
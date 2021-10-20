$("body").prepend(`<div id="div1" class="form" >
                            <form id="target">
                            <p class="text">Nombre</p>
                            <input class="input" type="text" name="nameInput" placeholder="Tu nombre">
                            <p class="text">Email</p>
                                <input class="input" type="text" name="emailInput" placeholder="Tu email">
                            <p class="text">Teléfono</p>
                                <input class="input" type="text" name="telInput" placeholder="Tu número">
                            <p class="text">Cantidad de clases</p>
                                <input class="input" name="cantInput" type="number">
                            <p class="text">Mensaje</p>
                                <input class="inputTextarea" type="textarea" name="msjInput" placeholder="Dejanos un mensaje">
                            <br>
                            <input class="inputSubmit" type="submit" id="enviar">

                            </form>
                    </div>`);

$("body").prepend('<button id="btn1" class="btn1">Consultame!</button>');


$("#btn1").click(() => { 
    $("#div1").toggle("slow");
});


$( "#target" ).submit(function( event ) {
    event.preventDefault();  
   
});

//DESAFÍO CLASE 14 - 1

//MÉTODO POST
/*
//Declaramos la url que vamos a usar para el GET
const URLGET   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost = { nombre: "Ana", profesion: "Programadora" }

//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">POST</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div style="margin-top: 15rem; color: white;">
                                Nombre:${respuesta.nombre}
                                <br> Profesion:${respuesta.profesion}
                                <br> Cantidad de Clases :${respuesta.cantidadDeClases}
                                </div>`);
        }  
        else {
            $("body").prepend(`<div style="margin-top: 15rem; color: white;"> <p> Hubo un error al cargar los datos </div>`);
        }
    });
});*/

 
/*ejemplo facu
// Attach a submit handler to the form
$( "#searchForm" ).submit(function( event ) {
 
    // Stop form from submitting normally
    event.preventDefault();
   
    // Get some values from elements on the page:
    
    let $form = $( this ),
    term = $form.find( "input[name='nameInput']" ).val(),
    term1 = $form.find( "input[name='emailInput']" ).val(),
    term2 = $form.find( "input[name='telInput']" ).val(),
    term3 = $form.find( "input[name='cantInput']" ).val(),
    term4 = $form.find( "input[name='msjInput']" ).val(),

      url = "https://jsonplaceholder.typicode.com/posts" ;
   
    // Send the data using post
    let posting = $.post( url, { nameInput: term , emailInput: term1 , telInput: term2, cantInput: term3, msjInput: term4 } , (respuesta, estado) =>{
        if(estado === "success"){
            $("body").prepend(`<div style="margin-top: 15rem; color: white;">
                                Nombre:${respuesta.nombre}
                                <br> Profesion:${respuesta.email}
                                <br> Cantidad de Clases :${respuesta.cantidadDeClases}
                                </div>`);
        }  
        else {
            $("body").prepend(`<div style="margin-top: 15rem; color: white;"> <p> Hubo un error al cargar los datos </div>`);
        }
    });
   
    // Put the results in a div
    posting.done(function( data ) {
            console.log('hacerlo de nuevo')
     let content = $( data ).find( "#content" );
      $( "#result" ).empty().append( content );
    });
    
  });
*/

//MÉTODO GETJSON

/*
//Declaramos la url del archivo JSON local
const URLJSON = "datos.json"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div style="margin-top: 5rem; color: white;">
                                <h3>${dato.profe}</h3>
                                <p> ${dato.estilo}</p>
                                <p> ${dato.precio}</p>
                            </div>`)
      }  
    }
    });
});
*/


/* NO ME SIRVE
//MÉTODO GET
//Declaramos la url que vamos a usar para el GET
const URLGET = 'https://jsonplaceholder.typicode.com/posts'
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.get(URLGET, function (response, estado, state) {

          if(state.status === 200) {
            //algo que espero tener              
            let misDatos = response;
            for (const dato of misDatos) {
              $("body").prepend(`<div style="color: white;">
                                   <h3>${dato.titulo}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          } else console.log( 'falló el pedido' );
          //hasta acá lo que espero tener
    });
});
*/
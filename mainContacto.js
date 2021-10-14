//para acceder a los elementos del DOM.
//$('#formulario')

//Agregamos un formulario con jQuery
$("body").prepend(`<div>
                        <button class="btnConsultame"><h1>Consultame!</h1></button>
                    </div>
                    <div class="form">
                        <form id="target">
                        <p class="text">Nombre</p>
                        <input class="input"type="text" placeholder="Tu nombre">
                        <p class="text">Email</p>
                            <input class="input"type="text" placeholder="Tu email">
                        <p class="text">Teléfono</p>
                            <input class="input"type="text" placeholder="Tu número">
                        <p class="text">Cantidad de clases</p>
                            <input class="input"type="number">
                        <p class="text">Mensaje</p>
                            <input class="inputTextarea" type="textarea" placeholder="Dejanos un mensaje">
                        <br>
                        <input class="inputSubmit" type="submit">
                        
                        </form>
                    </div>`);

$( "#target" ).submit(function( event ) {
    container.innerHTML = ( `<div> <p class="submitTexto"> Se ha enviado el mensaje correctamente! <br> Pronto nos estaremos comunicando con usted. </p> </div>` );
    event.preventDefault();
  });



  /*
//Agreguemos <h3> con jQuery ocultos con  style="display: none;"
$("body").prepend('<h3  style="background-color: white; margin-top: 10rem" >¡Hola Coder2!</h3>');
//Mostramos con fadeIn() todos los <h3>
$("h3").fadeIn('slow'); //fast/slow
*/
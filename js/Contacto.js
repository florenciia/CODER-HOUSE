$("body").prepend(`<div id="div1" class="form" >
                            <form id="target">
                            <p class="text">Nombre</p>
                            <input class="input" type="text" placeholder="Tu nombre">
                            <p class="text">Email</p>
                                <input class="input" type="text" placeholder="Tu email">
                            <p class="text">Teléfono</p>
                                <input class="input" type="text" placeholder="Tu número">
                            <p class="text">Cantidad de clases</p>
                                <input class="input" type="number">
                            <p class="text">Mensaje</p>
                                <input class="inputTextarea" type="textarea"  placeholder="Dejanos un mensaje">
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
   container.innerHTML = `<p class="submitTexto"> Se han enviado correctamento los datos! </p>` 
});

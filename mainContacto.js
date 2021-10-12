//para acceder a los elementos del DOM.
//$('#formulario')

//Agregamos un formulario con jQuery
$("body").prepend(`<h1>Consultame!</h1>
                    <form id="formulario">
                    <p>Nombre</p>
                       <input classtype="text"  >
                    <p>Email</p>
                        <input classtype="text"  >
                    <p>Teléfono</p>
                       <input classtype="number">
                    <p>Mensaje</p>
                       <input classtype="submit">
                   </form>`);
//Asociamos el evento submit al formulario
$("#formulario").submit(function (e) {
    //Prevenimos el comportamiento de submit 
    e.preventDefault();
    //Obtenemos hijos del formulario
    let hijos = $(e.target).children();
    //Primer input type="text"
    console.log(hijos[0].value);
    //Primer input type="number"
    console.log(hijos[1].value);
});

// Llamamos elementos de HTML 
const valorTicket= 200;
const form= document.getElementById("formulario");
const nombre= document.querySelector("#nombre");
const apellido= document.querySelector("#apellido");
const mail= document.querySelector("#mail");
const cantidadTickets= document.querySelector("#cantidadTickets");
const categoria= document.querySelector("#categoriaSelect");
const totalPago= document.querySelector("#totalPago");
const btnBorrar= document.querySelector("#btnBorrar");
const resumen= document.querySelector("#btnResumen");


// Funcion para volver el formulario a 0
function borrar(){
    nombre.value="";
    apellido.value="";
    mail.value="";
    cantidadTickets.value="";
    categoria.value="";
    totalPago.textContent="";
}

// Funcion para calcular descuento 
function calcularDescuento(){
    switch (categoria.value) {
        case "0":
            return (valorTicket - (valorTicket * 0));
            
        case "1":  
            return(valorTicket - (valorTicket * 0.80));

        case "2":  
            return(valorTicket - (valorTicket * 0.50));

        case "3":  
            return(valorTicket - (valorTicket * 0.15));
 
        default:
            return false;
    }
}

// Funcion para calcular el total
function calcularTotal(){
    let total= 0;
    total= calcularDescuento() * parseInt( cantidadTickets.value);
    return total;
    
}

function mostrarTotal(){
    totalPago.textContent= calcularTotal();
}

function validaFalla(input,msje) {
    const formControl= input.parentElement;
    const aviso= formControl.querySelector("p");
    aviso.innerText= msje;
    formControl.className="formulario_control falla";
}

function validaOk(input){
    const formControl= input.parentElement;
    formControl.className="formulario_control ok";
}

function validaCategoriaFalla(select,msje){
    const formControl= select.parentElement;
    const categ= formControl.querySelector("p");
    categ.innerText=msje;
    formControl.className="formulario_control falla";
}

function validaCategoriaOk(select){
    const formControl= select.parentElement;
    formControl.className="formulario_control ok";
}

// Evento, cuando hago click en el boton me llama a una funcion
 btnBorrar.addEventListener("click",borrar); 
 resumen.addEventListener("click", (e)=>{
    e.preventDefault();
    validarCampos();
    mostrarTotal();
 }) // ciere boton resumen


// Validacion
const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
}


//Creamos funcion validar campos
 const validarCampos= ()=>{
   //capturar los valores ingresados por el usuario
    const nombreValor= nombre.value;
    const apellidoValor= apellido.value;
    const mailValor= mail.value;
    const cantidadValor= cantidadTickets.value;
    const categoriaValor= categoria.value;
   
    // Validando campo nombre
    if (!nombreValor) {
    console.log("nombre vacio");
    validaFalla(nombre,"campo vacio")
} else {
    validaOk(nombre)
}// cierre nombre valor


 // Validando campo apellido
 if (!apellidoValor) {
    console.log("apellido vacio");
    validaFalla(apellido,"campo vacio")
} else {
    validaOk(apellido)
}// cierre nombre valor


// Validando campo mail
if (!mailValor) {
    console.log("mail vacio");
    validaFalla(mail,"campo vacio");
 } else if(!validaEmail(mailValor)){
    validaFalla(mail,"El mail no es valido");
} else {
    validaOk(mail)
}// cierre mail valor 

// Validando campo cantidad ticket
if (!cantidadValor) {
    console.log("cantidad vacio");
    validaFalla(cantidadTickets,"campo vacio")
} else {
    validaOk(cantidadTickets)
}// cierre cantidad valor

// Validando campo categoria
if (categoriaValor==="") {
    console.log("categoria vacio");
    validaCategoriaFalla(categoria,"Seleccione una categoria")
} else {
    validaCategoriaOk(categoria)
}// cierre categoria valor





    
};// cierre de validar campo
















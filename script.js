var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var boton=document.getElementById("Submit");
var r=document.getElementById("resultado");

boton.addEventListener("click", mostrar);


function mostrar(){
r.innerHTML=(nombre.value+" "+apellido.value);
console.log(r);
}

function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while(sexo == "f" || sexo == "m"){
document.getElementById('Sexo').value=sexo;
}
alert("el valor ingresado no es valido")
}//FIN DE LA FUNCIÓN
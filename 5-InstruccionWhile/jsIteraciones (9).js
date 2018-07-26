function mostrar()
{

var flag=0;
var maximo;
var minimo;
var numero;
var respuesta
do{
	numero= parseInt(prompt("ingrese el numero: "));
	if(numero<minimo || flag == 0){
		minimo=numero;
	}
	if(numero>maximo || flag == 0){
		maximo=numero;
		flag = 1
	}
	respuesta=prompt("desea continuar?")	
}while (respuesta == "si")
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN
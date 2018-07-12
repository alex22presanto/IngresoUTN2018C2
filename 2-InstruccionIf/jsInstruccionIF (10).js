function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numero =Math.floor(Math.random()* (11-1)+1);

if (numero >= 9)
{
alert("Exelente");	
}
	else if (numero< 4)
	{
	alert("Vamos, la proxima se puede");
	}
	else
	{
	alert("Aprobado");
	}
}//FIN DE LA FUNCIÓN
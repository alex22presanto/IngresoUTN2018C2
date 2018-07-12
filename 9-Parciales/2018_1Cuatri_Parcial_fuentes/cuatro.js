function mostrar()
{
var numuno;
var numdos;
numuno = parseInt(prompt("ingrese el primer numero: "));
numdos =  parseInt(prompt("ingrese el segundo numero: "));
if (numuno == numdos)
{
alert("El numero es: " + numuno.toString() + numdos);
} 
    else if (numuno > numdos)
    {
    alert("La resta es: " + (numuno - numdos));
    }
    else
    {
        if((numuno + numdos)> 10 )
        {
        alert("La suma es "+(numuno + numdos)+ " y es mayor a 10");
        }
        else
        {
        alert("La suma es: " + (numuno + numdos));        
        }
    }
}

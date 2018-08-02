function mostrar()
{

    var numero;
    var contador=0;
    var numero = parseInt(prompt("Ingrese un numero: "));
    for(var i = 1;i<=numero;i++){
        if(numero%i==0){
            document.write(i + "<br>")
            contador++
        }
    }
    document.write("La cantidad de divisores es: " + contador)


}//FIN DE LA FUNCIÓN
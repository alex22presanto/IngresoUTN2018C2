function mostrar()
{
    var contadorp = 0;
    var contadorn = 0;
    var contadorc = 0;
    var contadorpar = 0;
    var acumuladorp = 0;
    var acumuladorn = 0;
    var promediop = 0;
    var promedion = 0;
    var diferencia; 
    var respuesta;
    var numero;
    do{
        numero=parseInt(prompt("Ingrese el numero:"));
        if(numero > 0 ){
            acumuladorp = acumuladorp + numero;
            contadorp++;
        }else if(numero < 0){
            acumuladorn = acumuladorn + numero;
            contadorn++;
        }else{
            contadorc++;
        }
        if (numero%2==0){
            contadorpar++;
        }
        respuesta = prompt("Desea continuar?");
    }while(respuesta != "no");
    if(contadorn != 0){
        promedion = acumuladorn/contadorn;
    }
    if( contadorp != 0){
        promediop = acumuladorp/contadorp;
    }
    diferencia = acumuladorp - acumuladorn; 
    document.write ("la suma de positivos es: " + acumuladorp + "<br>");
    document.write ("la cantidad de numeros positivos sumados es: " + contadorp + "<br>");
    document.write ("el promedio de positivos es: " + promediop + "<br>");
    document.write ("la suma de negativos es: " + acumuladorn + "<br>");
    document.write ("la cantidad de numeros negativos sumados es: " + contadorn + "<br>");
    document.write ("el promedio de negativos es: " + promedion + "<br>");
    document.write ("la cantidad de 0 sumados es: " + contadorc + "<br>");
    document.write ("la cantidad de numeros pares es: " + contadorpar + "<br>");
    document.write ("la diferencia entre positivos y negativos es: " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN
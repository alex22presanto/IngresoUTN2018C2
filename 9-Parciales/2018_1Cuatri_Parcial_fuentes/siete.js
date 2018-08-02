function mostrar()
/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
{
    var nota;
    var acumuno;
    var sexo;
    var flag = false;
    var sexob;
    var notab;
    var contadorv = 0;
    var promedio;
    for(i=0;i<=4;i++){
        nota=parseInt(prompt("Ingrese la nota del alumno:"));
        while (nota<0 || nota>10 || isNaN(nota)){
            nota=parseInt(prompt("La nota no es valida, ingrese la nota del alumno nuevamente:"));
        }
        sexo = prompt("Ingrese el sexo del alumno (M o F)");
        while (sexo !="M" && sexo !="F"){
            sexo = prompt("El sexo no es valido, ingrese el sexo del alumno nuevamente (M o F)");
        }
        acumuno = acumuno + nota;
        if(nota<notab || flag == false){
            notab = nota;
            sexob = sexo;
            flag = true;
        }
        if(sexo = "M" && nota >5){
            contadorv++
        }
    }
    promedio= acumuno / 5 
    alert("El promedio es: " + promedio +" n/La nota mas baja es: " + notab + " y el sexo es: " + sexob + "n/ La cantidad de varones aprobados es: " + contadorv);


}

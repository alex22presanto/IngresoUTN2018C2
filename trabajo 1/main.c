#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include "funciones.h"
#define ESC 27
int main()
{
    int num1 = 0,num2 = 0, res = 0, operacion = 0;
    char respuesta;
    do{
        system("cls");
        printf("Ingrese el primer operador: ");
        scanf("%d",&num1);
        printf("\nIngrese el segundo operador: ");
        scanf("%d",&num2);
        printf("\nQue operacion desea realizar? \n Ingrese valor corresopndiente (1 = +, 2 = -, 3 = *, 4 = /, 5 = !): ");
        scanf("%d",& operacion);
        while (operacion<1 || operacion > 5){
                printf("\nA ingresado una operacion invalida ");
                printf("\nQue operacion desea realizar? \n Ingrese valor corresopndiente (1 = +, 2 = -, 3 = *, 4 = /, 5 = !) ");
                scanf("%d",& operacion);
        }
        switch(operacion){
        case 1:
            res= suma(num1,num2);
            break;
        case 2:
            res = resta(num1,num2);
            break;
        case 3:
            res = multiplicacion(num1,num2);
            break;
        case 4:
            res = divicion(num1,num2);
            break;
        default:
            res = factorial(num1);
        }
        printf("\n El resultado es %d ",res);
        printf("\n Desea realizar otra operacion? (precione ESC para salir) ");
        respuesta = getche();
    }while(respuesta != ESC);
}

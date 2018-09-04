 int suma (int op1, int op2){
     int res = 0;
     res = op1 + op2;
     return res;
 }

  int resta (int op1, int op2){
     int res = 0;
     res = op1 - op2;
     return res;
 }

  int multiplicacion (int op1, int op2){
     int res = 0;
     res = op1 * op2;
     return res;
 }

 int divicion(int op1, int op2){
     int res = 0;
     if (op2 == 0){
        return 0;
     }
     res = op1 / op2;
     return res;
 }
 int factorial(int op1){
     int res = 1, i = 0;
     for(i=op1;i>0;i--){
        res *= i;
     }
     return res;
 }



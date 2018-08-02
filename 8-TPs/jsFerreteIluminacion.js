function CalcularPrecio () {
    var cantidad;
    var marca;
    var preciofinal;
    var descuento;
    var incremento;
    var flag = false;
    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;
    preciofinal= cantidad * 35;
    switch(cantidad){
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            switch (marca){
                case marca = "ArgentinaLuz":
                    descuento = 15;
                    break;
                case marca = "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" ||marca == "FelipeLamparas"){
                descuento = 25;
            }
            else{
                descuento = 20;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz"){
                descuento = 40;
            }
            else{
                descuento = 35;
            }
            break;
        default:
       descuento = 50;      
    }
    preciofinal = preciofinal - (preciofinal * descuento /100);
    if ( preciofinal > 120){
        incremento= preciofinal * 10 / 100;
        preciofinal = preciofinal + incremento;
        flag = true ; 
    }
    document.getElementById("precioDescuento").value = preciofinal;
    if(flag){
        alert("usted pago " + incremento + " de IIBB");
    }    
}

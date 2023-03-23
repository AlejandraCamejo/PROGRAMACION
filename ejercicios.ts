let precioFinal : number = 0;
let precioProductoUno : number = 200;
let precioProductoDos : number = 350;
let subtotal : number = 0;

import * as rls from "readline-sync"

let cantidadProductoUno :number = rls.questionInt("cantidad de producto 1 que compró el usuario: ");
let cantidadProductoDos :number = rls.questionInt("cantidad de producto 2 que compró el usuario: ");
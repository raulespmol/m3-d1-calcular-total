let precio = 400000
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


let cantidad = 0;
let cantidadSpan = document.querySelector('.cantidad');
cantidadSpan.innerHTML = cantidad;


const totalSpan = document.querySelector('.valor-total');

function calcular(){
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = precio * cantidad;
}
// crear una interfaz llamada producto que tenga id, nombre, precio, disponible, opcionalmente categoria
// implementar una funcion calcularTotal que reciba un array de tipo producto y retorne un numero y que sume todos los precios de los productos disponibles
// crea un array de prodctos con almenos 3 productos diferentes
// probar la funcion y ver lo q da
import React from 'react'

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  categoria?: string;
}


function calcularTotal(productos:Producto[]):number {
    let total = 0;
    productos.filter(producto => producto.disponible).forEach(producto => total += producto.precio);
    return total;
}


const ejercicio1 = () => {
  return (
    <div>
      
    </div>
  )
}

export default ejercicio1

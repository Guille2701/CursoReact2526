import React, { useState } from 'react'


interface Usuario {
    nombre:string,
    edad:number,
    email:string
}

interface Producto {
    id:number,
    nombre:string,
    precio:number
}


type Estado = "pendiente" | "aprobado" | "rechazado";

//modo dios ...
//voy a crear un type llamado CamposUsuario que tenga como posibles valores las claves de la interfaz Usuario
type CamposUsuario = keyof Usuario;



const ejercicio2 = () => {

    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [productos, setProductos] = useState<Producto | null>(null)
    const [estado, setEstado] = useState<Estado>("pendiente")
    //cuando lo valla a renderizar podré gestionar con el null si hay o no productos

    if(productos===null){
        return <p>Cargando los datos</p>
    }else {
        <h1>{productos.nombre}</h1>
    }

    let campo: CamposUsuario = "nombre"

  return (
    <div>
      
    </div>
  )
}

export default ejercicio2

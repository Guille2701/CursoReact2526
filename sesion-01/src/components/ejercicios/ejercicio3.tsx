import React, { useState } from 'react'
//USO DE FORMULARIOS CON TypeScript

interface Usuario{
    nombre: string,
    edad:number,
    email:string
}

const ejercicio3 = () => {

    const [usuario, setUsuario] = useState<Usuario>({nombre:"", edad:0, email:""})

    const actualizarCampo = (campo:keyof Usuario, valor:string|number)=>{
        setUsuario({
            ...usuario,
            [campo]: valor
        })
    }


  return (
      <>
      <div>Ejercicio3</div>
      <p>Introduce tu nombre</p>
      <input value = {usuario.nombre} onChange={(e)=>{actualizarCampo("nombre",e.target.value)}} />
      </>
    )
}

export default ejercicio3

import React from 'react'

type TipoBoton= "primary" | "secondary" | "danger"

interface BotonProps {
    texto:string;
    tipo:TipoBoton;
    onClick?:()=>void;
    submit:boolean;
}

const Boton = ({ tipo,texto,submit }:BotonProps) => {

    const estilos = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white",
        secondary: "bg-gray-500 hover:bg-gray-700 text-white",
        danger: "bg-red-500 hover:bg-red-700 text-white"
    }

  return (
      <button
      type={submit?"submit":"button"}
      className={`px-4 py-2 rounded font-semibold shadow transition ${estilos[tipo]}}`}
      >
        {texto}
    </button>
  )
}

export default Boton

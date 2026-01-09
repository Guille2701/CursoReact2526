import React, { useState } from 'react'

interface TarjetaProps {
  title: string
  description: string
  image?: string
  favourite?: boolean
}

const Tarjeta = ({
  title,
  description,
  image,
  favourite = false
}: TarjetaProps) => {

  const [fav, setFav] = useState(favourite)

  return (
    <div
      onClick={() => setFav(!fav)}
      className={`cursor-pointer rounded-lg shadow-md p-6 transition
        ${fav ? 'bg-yellow-100 border-2 border-amber-600' : 'bg-white'}`}
    >
      {image && (
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={image}
          alt={title}
        />
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>

      {fav && <span className="text-xl">⭐</span>}
    </div>
  )
}

export default Tarjeta

//crear un formulario llamado formularioUsuario  que gestione el nombre, la edad y el id 
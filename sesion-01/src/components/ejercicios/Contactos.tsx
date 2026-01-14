import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'

interface Contacto {
  id: string,
  nombre: string,
  telefono: number,
  email: string
}

const Contactos = () => {

  const [arrayContactos, setArrayContactos] = useState<Contacto[]>([]);

  const [contactos, setContactos] = useState<Contacto>({
    id: uuidv4(),
    nombre: "",
    telefono: 0,
    email: ""
  });

  const actualizarCampo = (campo: keyof Contacto, valor: string | number) => {
    setContactos({
      ...contactos,
      [campo]: valor
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setArrayContactos([...arrayContactos, contactos])
    setContactos({
      id: uuidv4(),
      nombre: "",
      telefono: 0,
      email: ""
    })
  }

  const handleDelete = (id: string, e: React.FormEvent) => {
    e.preventDefault()
    setArrayContactos(arrayPrev => { return arrayPrev.filter(contacto => contacto.id !== id) })
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-2'>Nombre</label>
          <input className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' type="text" value={contactos.nombre} onChange={(e) => {
            actualizarCampo("nombre", e.target.value)
          }} />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Telefono</label>
          <input className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' type="text" value={contactos.telefono} onChange={(e) => {
            actualizarCampo("telefono", parseInt(e.target.value))
          }} />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input className='w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500' type="email" value={contactos.email} onChange={(e) => {
            actualizarCampo("email", e.target.value)
          }} />
        </div>
        <button type='submit' className='w-full py-2 bg-green-500 text-white rounded hover:bg-green-700 font-semibold'> Guardar Contacto</button>
      </form>

      {arrayContactos.length === 0 && (
        <p className="text-center text-gray-500 mt-6 font-medium">No hay contactos almacenados</p>
      )}

      {arrayContactos.map((contacto) => {
        return (
          <form key={contacto.id} onSubmit={(e) => handleDelete(contacto.id, e)} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                value={contacto.nombre}
                readOnly
                className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Teléfono
              </label>
              <input
                type="number"
                value={contacto.telefono}
                readOnly
                className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                value={contacto.email}
                readOnly
                className="mt-1 w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 text-gray-800 focus:outline-none"
              />
            </div>
            <button type='submit' className='w-full py-2 bg-red-500 text-white rounded hover:bg-red-700 font-semibold'>Eliminar Contacto</button>

          </form>
        )
      })}
    </div>
  )
}

export default Contactos

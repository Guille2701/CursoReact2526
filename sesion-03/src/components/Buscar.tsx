//import { useState } from "react"





const Buscar = () => {

    //const [busqueda, setBusqueda] = useState<string>('')


  return (
    <div className="w-full flex justify-start mb-8">
        <div className="relative w-full max-w-sm">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔍
        </span>
            <input 
            className="
            w-full
            pl-10 pr-4 py-2
            rounded-lg
            bg-white
            text-sm
            text-gray-700
            placeholder-gray-400
            border border-gray-200
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-orange-400
            focus:border-orange-400
            transition
            "
            type='text' 
            placeholder='Buscar plato o ingrediente'

            />
        </div>
    </div>
  )
}

export default Buscar

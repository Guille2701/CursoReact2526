import { useFamily } from "../hooks/useFamily";
import Nieto from "./Nieto"

const Hijo = () => {
const { decrementarContador,incrementarContador } = useFamily();

  return (
    <div className="p-4 max-w-2xl mx-auto">
        <div className="border-4 border-orange-500 rounded-lg p-4 bg-orange-50">
            <h1>Hijo</h1>
            <div className="mt-4 border-4 border-orange-200">
                <div className="flex gap-2 my-4">
                    <button className="px-4 rounded-2xl bg-green-600 text-white hover:bg-gray-700 transition-all"
                    onClick={incrementarContador}
                    >Incrementar contador
                    </button>
                    <button className="px-4 rounded-2xl bg-red-600 text-white hover:bg-gray-700 transition-all"
                    onClick={decrementarContador}
                    >Decrementar contador
                    </button>
                </div>
                <Nieto />
            </div>
        </div>
    </div>
  )
}

export default Hijo

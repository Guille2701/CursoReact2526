import { useEffect, useState } from "react"

// T --> Generics
export function useFetch<T>(url:string){
    //aqui guardaremos la data final
    const [data, setData] = useState<T|null>(null)
    //mostrar o no un loop que diga cargando...
    const [loading, setLoading] = useState<boolean>(true)
    //mostrar o no un error
    const [error, setError] = useState<Error|null>(null)

    //efecto de que cuando cargue el componente o que renderice por primera vez haremos useEffect


    useEffect(()=>{
        setLoading(true)
        setError(null)
        //creamos un mando a distancia para abortar el fetch
        const controller = new AbortController()
        //signal es una señal que va por el cable del fetch
        const { signal } = controller;
        const fetchData = async ()=>{
            try {
                //hacemos la llamada y pasamos la señal de cancelacion
                const response = await fetch(url, { signal })
                if(!response.ok){
                    setError(error as Error)
                    throw new Error("Error en la peticion")
                }
                const result = await response.json()
                setError(null)
                setData(result)
                setLoading(false)
            } catch (error:unknown) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }

        // ********** UNO DE LOS ERRORES MAS COMETIDOS ES QUE NO LLAMAMOS A LA FUNCION DENTRO DE useEffect ***********
        fetchData()

        //el return se ejecuta cuando se va a desmontar el componente
        return ()=>{
            controller.abort()
        }
    },[url])

    return {data, loading, error}


}
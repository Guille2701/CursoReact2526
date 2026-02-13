import { createContext, useState, type Provider, type ReactNode } from "react";
import type { User } from "../types/AppContextType";

export const AppContext = createContext<AppContextType | null>(null)

interface AppProviderProps {
  children: ReactNode
}


export const AppProvider = ({ children }:AppProviderProps)=>{
    const [state, setState] = useState<AppState>({
        user: {
            id:"1",
            nombre:"Profe React",
            email:"profe@gmail.com",
            avatar:"https://picsum.photos/200/300",
            rol:"admin"
        },
        theme:"dark",
        languaje:"es"
    })
    //habra que usar el useEffect para cargar el idioma tema al iniciar el componente

    const setUser = (user:User | null)=>{
        //esto funciona pero..
        setState({ ...state, user })
        //es recomendable forzar a usar el estado anterior
        //setState((prev)=>({...prev,user}))
    }

    //const setTheme=()
    //const setLanguaje=()


    const value={
        ...state,
        //setTheme,
        //setLanguaje,
    }

    return <AppContext value={value}>{children}</AppContext>
}


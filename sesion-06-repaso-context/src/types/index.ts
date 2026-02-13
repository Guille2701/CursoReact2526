

// Tipos globales o estados globales de la aplicacion
export interface FamilyState {
    mensaje: string;
    contador:number
}



// acciones a realizar
export interface FamilyActions {
    setMensaje: (mensaje:string) => void;
    incrementarContador: () => void;
    decrementarContador: () => void;
}


// exportar los tipos

export type FamilyContextType = FamilyState & FamilyActions;
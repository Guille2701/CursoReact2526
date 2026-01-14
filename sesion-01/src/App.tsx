import React from 'react'
import Header from './components/Header'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'
import FormularioUsuarios from './components/FormularioUsuarios'
import Contactos from './components/ejercicios/Contactos'
import Login from './components/ejercicios/Login'

const App = () => {
  return (
    
    <div className="min-h-screen bg-gray-300">
      <Header />
      <main className='container bg-gray-100 mx-auto p-4'>  
        <Saludo nombre="Guillermo" edad={20}/>
        <Saludo nombre="Luis" edad={23}/>
        <Saludo nombre="Sara" edad={19}/>
        <Saludo nombre="Mario" edad={28}/>
        <div className='mt-8 grid grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Tarjeta title="React 19" description="Ultima version de la libreria React para JavaScript" image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400" favourite={true}/>
          <Tarjeta title="React 19" description="Ultima version de la libreria React para JavaScript" image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400" favourite={false}/>
          <Tarjeta title="React 19" description="Ultima version de la libreria React para JavaScript" image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=400" />
          <Tarjeta title="React 19" description="Ultima version de la libreria React para JavaScript" favourite={true}/>
        </div>
        <FormularioUsuarios />
        <br />
        <Contactos />
        
        <br />
        <Login />
      </main>
    </div>
    
  )
}

export default App

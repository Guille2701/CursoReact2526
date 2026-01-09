//crear un componente header estilado con TypeScript donde aparezcan tus datos
import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-600 text-white p-4 shadow-md'>
      <div className='container mx-auto'>
        <h2>Guillermo Bazan Diaz Componentes en React</h2>
      </div>
    </header>
  )
}

export default Header

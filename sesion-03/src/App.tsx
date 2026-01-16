import React, { Suspense, useState } from 'react'
import PlatosList from './components/PlatosList'
import Header from './components/Header'
import LoadingFallBack from './components/LoadingFallBack'
import { fetchPlatos } from './utils/api'

const App = () => {
  // hooks
  const [platosPromise] = useState(()=>fetchPlatos())



  return (
    <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
      <Header />

      <main>
        <Suspense fallback={<LoadingFallBack message="Let him cook 🍽"/>}>
          <PlatosList platosPromise={platosPromise}/>
        </Suspense>
      </main>

    </div>
    </div>
  )
}

export default App

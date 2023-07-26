import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Graphics from './Components/Graphics'
import Error404 from './Helpers/Error404'
import Attacking from './Components/Statistics/Attacking'

function App() {

  return (
    <section className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/graphics' element={<Graphics />}/>
          {/* Statistics */}
          <Route path='/attacking' element={<Attacking />} />
          {/* Error Element */}
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Graphics from './Components/Graphics'
import Error404 from './Helpers/Error404'

function App() {

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/graphics' element={<Graphics />}/>
          {/* Error Element */}
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App

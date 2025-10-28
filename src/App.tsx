import { useState, useHook } from 'react'
import Contact from './Components/contact';
import TodoList from './Components/TodoList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NavbarMenu from './Components/NAvbar';



function App() {
  

  return (
    <>
  <div>
    <BrowserRouter>
    <NavbarMenu/>
    </BrowserRouter>
      
  </div>
  

      <div className='Contact-form'>
        <Contact />
      </div>
    </>
  )
}

export default App



// add teachers to repository
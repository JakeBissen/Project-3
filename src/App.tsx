import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contact from './Components/contact';
import TodoList from './Components/TodoList';
import NavbarMenu from './Components/NAvbar';


function App() {
  console.log("App component rendered");

  return (
    <>
    <nav>
    <NavbarMenu />
     <Routes> 
        <Route path="/" element={<h1>Home Page</h1>}  />
      <Route path="/todos" element={<TodoList/>}  />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Opt-todos" element={<TodoList/>}/>
    </Routes>
</nav>
       
       <div>
        <Contact />
       </div>

    </>
  )
}

export default App



// add teachers to repository
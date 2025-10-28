import {Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import Contact from './contact';

function NavbarMenu() {
    console.log("NAvbar component rendered");
    return (
        <>
    
<nav className="navbar navbar-dark bg-dark" data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <div className="navbar-nav me-auto">
      <Link className="nav-link" to="/todos">Todos</Link>
      <Link className="nav-link" to="/contact">Contact Form</Link>
      <Link className="nav-link" to="/Opt-todos">Optional Assignments</Link>
    </div>
  </div>
</nav>
<br />


   <BrowserRouter>
    
    <Routes> 
        <Route path="/" element={<h1>Home Page</h1>}  />
      <Route path="/todos" element={<TodoList/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Opt-todos" element={<TodoList/>}/>
    </Routes>
    </BrowserRouter>

    </>
    )
}


export default NavbarMenu;
import { Routes, Route, HashRouter, Link } from 'react-router-dom';
import Contact from './Components/Contact';
import TodoList from './Components/TodoList';
import Homepage from './Components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {

  return (
    <>
     
    <HashRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Task Manager</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/todos">ToDos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Form</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Opt-todos">Optional Assignments</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/todos" element={<TodoList />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Opt-todos" element={<TodoList />} />
  </Routes>
</HashRouter>

     

   
      
    
    </>
  )
}

export default App



// add teachers to repository
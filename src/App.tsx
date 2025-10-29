import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Contact from './Components/Contact';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  console.log("App component rendered");

  return (
    <>
    <header>
      <h1 className="text-center m-4 container">Welcome to the Task Manager App</h1>
      
       
    </header>
   <div className="">
        <div className="row justify-content-center">
        <div className="col-12 col-lg-6 text-center mb-4 col-12 col-md-8">
    <BrowserRouter >
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <Route path="/" element={<h1>Home Page</h1>}  />
      <Route path="/todos" element={<TodoList/>}  />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Opt-todos" element={<TodoList/>}/>
    </Routes>
</BrowserRouter>
        </div>
        </div>
      </div>
       
    </>
  )
}

export default App



// add teachers to repository
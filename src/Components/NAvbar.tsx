import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contact from './contact';
import TodoList from './TodoList';
import { Link, Route, Routes } from 'react-router-dom';



function NavbarMenu() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link  to="/todos">Todos</Link>
            <Link to="/contact">Contact Form</Link>
            <Link to="/Opt-todos">Optional Assignments</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      
      
      <Routes>
        <Route path="/todos" element={<TodoList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Opt-todos" element={<TodoList />} />
      </Routes>

    </>
    )
}


export default NavbarMenu;
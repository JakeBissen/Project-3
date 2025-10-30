
import React, { useState } from "react";
import './TodoListC.css';
import 'bootstrap/dist/css/bootstrap.min.css';


type Todo = {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
};

type Filter = "all" | "completed" | "incomplete";


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([

   { id: Date.now(), name: 'Develop A website for Siren Industries', description: 'Create a website that allows customers to buy merch from Siren Industries.', completed: false },

   { id: Date.now() + 1, name: 'Profile Interface', description: 'Complete the front end portion of the user face for Pemon Industries', completed: true },

   { id: Date.now() + 2, name: 'Replace CSS with SASS', description: 'Replace the css elements of the input form titled: "Car Jousting" as per the requirements of the client. ', completed: false },
   
   { id: Date.now() + 3, name: 'SkyNet', description: 'Stop SkyNet.', completed: true }

   
  ]);  // example initial states, can be removed if needed.


  const [filter, setFilter] = useState<Filter>('all');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>('');


function addToDo() {
  const trimmed = name.trim();
  if (!trimmed) return;

  const newTodo: Todo = {
    id: Date.now(),
    name: trimmed,
    description: description.trim() || undefined,
    dueDate: dueDate || undefined,
    completed: false
  };

  setTodos(prev => [newTodo, ...prev]);
  setName('');
  setDescription('');
  setDueDate('');
}

// Toggles

function toggleTodo(id: number){
  setTodos(prev => prev.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
}

function deleteTodo(id: number){
  setTodos(prev => prev.filter(todo => todo.id !== id));
}


function FilterTodos(): Todo[] {
  if (filter === 'completed') return todos.filter(todo => todo.completed);
  if (filter === 'incomplete') return todos.filter(todo => !todo.completed);
  return todos;
}


function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addToDo();

}

const shown = FilterTodos();

// form!
  return(
<>

   <div className='todo-module container ' > 
    <div className='row '>
      <div className='col-12 col-md-8 justify-content-center mx-auto'>
    <h2 className='todo-title'>Todos</h2>

    <div className='filter-buttons'>
      <button onClick ={() => setFilter('all')} 
      className={filter === 'all' ? 'active': ''}>All</button>

      <button onClick ={() => setFilter('completed')} className={filter === 'completed' ? 'active': ''}>Completed</button>

      <button onClick ={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active': ''}>Incomplete</button>
    </div>
    <div className='todo-form-grid'>
      <form onSubmit={handleSubmit} className='todo-form'>
        <label>
          <div><strong>Name</strong></div>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Task Name" required />
        </label>

        <label>
          <div><strong>Description</strong></div>
          <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description " 
          required/>
        </label>

        <label>
          <div><strong>Due Date</strong></div>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} 
          required/>
        </label>

        <div className='form-buttons'>
          <button type='submit'> Add Todo</button>
          <button type='button' onClick=
          {() => {setName(''); setDescription(''); setDueDate('');}}>
            Clear
          </button>
        </div>
        </form>

        <div className='todo-list'>
           <h3>List</h3>
           {shown.length === 0? (
            <div className='no-todos'>No todos</div>
           ): (
            <div className='items'>
              {shown.map(todo => (
                <div key={todo.id} 
                className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <div className='todo-main'>
              <div className='todo-name'>{todo.name}</div>
              {todo.description && <div className='todo-desc'>{todo.description}</div>}
               {todo.dueDate && <div className="todo-due">Due: {todo.dueDate}</div>}
                  </div>

              <div className='todo-actions'>
                <label className='done-toggle'>
                  <input type="checkbox" checked={todo.completed} 
                  onChange={() => toggleTodo(todo.id)} />
                  <span>Done</span>
                </label>
                <button className='delete-btn' onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
                </div>
                </div>
              ))}
            </div>
           )}
        </div>
         </div>
    </div>
    </div>
   </div>

    </>
  );
}




export default TodoList;
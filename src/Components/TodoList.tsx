
import React, { useState } from "react";
import './TodoListC.css';



type Todo = {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
};

type Filter = "all" | "completed" | "incomplete";


const TodoList: React.FC = () => {
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

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState<string>('');
  const [editingDescription, setEditingDescription] = useState<string>('');
  const [editingDueDate, setEditingDueDate] = useState<string>('');

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
    if (editingId === id) cancelEdit();
  }

  function filterTodos(): Todo[] {
    if (filter === 'completed') return todos.filter(todo => todo.completed);
    if (filter === 'incomplete') return todos.filter(todo => !todo.completed);
    return todos;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addToDo();
  }

  function startEdit(todo: Todo) {
    setEditingId(todo.id);
    setEditingName(todo.name);
    setEditingDescription(todo.description || '');
    setEditingDueDate(todo.dueDate || '');
  }

  function saveEdit(id: number) {
    const trimmed = editingName.trim();
    if(!trimmed) return;

    setTodos(prev => prev.map(todo => todo.id === id ? {
      ...todo,
      name: trimmed,
      description: editingDescription.trim() || undefined,
      dueDate: editingDueDate || undefined
    } : todo));
    setEditingId(null);
    setEditingName('');
    setEditingDescription('');
    setEditingDueDate('');
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingName('');
    setEditingDescription('');
    setEditingDueDate('');
  }

  const shown = filterTodos();

  
return(
    <>
    <div className='totdo-module' >
    <div className="todo-form-container">
      <div className='todo-form-grid ' >
        <div className='todo-creator '>
            <h2 className='todo-title'>Todos Creator</h2>

            <div className='filter-buttons'>
              <button onClick ={() => setFilter('all')}
                className={filter === 'all' ? 'active': ''}>All</button>

              <button onClick ={() => setFilter('completed')} className={filter === 'completed' ? 'active': ''}>Completed</button>

              <button onClick ={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active': ''}>Incomplete</button>
            </div>

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
    </div>

        {/* todo list */}
        <div className='todo-list-section mt-4'>
              <div className='todo-list container mt-4'>
                <h3>List of Current Todos</h3>

                {shown.length === 0? (
                  <div className='no-todos'>No todos</div>
                ): (
                  <div className='items'>
                    {shown.map(todo => (
                      <div key={todo.id}
                        className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <div className='todo-main'>
                          {editingId === todo.id ? (
                            <div className='edit-form'>
                              <input className='edit-name' value={editingName} onChange={e => setEditingName(e.target.value)} />
                              <input className="edit-desc" value={editingDescription} onChange={e => setEditingDescription(e.target.value)} />
                              <input type="date" className="edit-date" value={editingDueDate} onChange={e => setEditingDueDate(e.target.value)} />
                            </div>
                          ) : (

                            <>
                              <div className='todo-name'>{todo.name}</div>
                              {todo.description && <div className='todo-desc'>{todo.description}</div>}
                              {todo.dueDate && <div className="todo-due">Due: {todo.dueDate}</div>}
                            </>
                          )}
                        </div>

                        <div className='todo-actions'>
                          <label className='done-toggle'>
                            <input type="checkbox" checked={todo.completed}
                              onChange={() => toggleTodo(todo.id)} />
                            <span>Done</span>
                          </label>

                          {editingId === todo.id ? (
                            <>
                              <button className='save-btn' onClick={() => saveEdit(todo.id)}>Save</button>
                              <button className='cancel-btn' onClick={cancelEdit}>Cancel</button>
                            </>
                          ) : (

                            <>
                              <button className='edit-btn' onClick={() => startEdit(todo)}>Edit</button>
                              <button className='delete-btn' onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </>
                          )}
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
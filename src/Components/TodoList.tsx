
import React, { useState } from "react";



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

   { id: Date.now(), name: 'test', description: 'test todo', completed: false }
  ]);  // example initial state REMOVE THIS LATER!


  const [filter, setFilter] = useState<Filter>('all');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

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



  return(

    <div>

    </div>
  )


}


export default TodoList;
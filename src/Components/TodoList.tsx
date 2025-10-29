
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

   { id: Date.now(), name: "Example", description: "Sample todo", completed: false }
  ]);  // example initial state REMOVE THIS LATER!


  const [filter, setFilter] = useState<Filter>("all");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");



  return(

    <div>

    </div>
  )


}


export default TodoList;
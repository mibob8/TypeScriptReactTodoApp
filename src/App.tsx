 
import './App.css';
import { Todo } from './types/types';
import { TodoList } from './components/TodoList';
import { useEffect, useState } from 'react'; 
import { v4 as uuidv4 } from 'uuid'; 
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

function App() {
 
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoText, setTodoText] = useState<string>('');

  useEffect(() => {
    loadAll(); 
    console.log("przeładowane")
  }, [])

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo: Todo = { id: uuidv4(), 
      title: todoText,
      status: 'todo'};
      
    api.post("todos", newTodo)
    setTodos([...todos, newTodo])

    console.log("zapisane")

  };

  const loadAll = () => {
     api.get<Array<Todo>>("todos")
    .then((response) => {
       setTodos(response.data);
    }); 
  }

  const remove = (id: string) => {
    api.delete(`todos/${id}`);
    setTodos(
         todos.filter((todo) => {
            return todo.id !== id;
         })
      );
  }

  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTodoText(e.currentTarget.value)
  } 


  return (
  <div className="container">
 <TodoList todos={todos} remove={remove}></TodoList>
 <div>
  <div className='row d-flex justify-content-center'>
  <form className='col-md-6' onSubmit={ addTodo } >  
 <input className='mr-2' type="text" onChange={onTextChange} value={todoText}></input>
 <button className='btn btn-success' type="submit">Add Todo</button> 
 </form> 
  </div> 
 </div> 
  </div> 
  );
}

export default App; 


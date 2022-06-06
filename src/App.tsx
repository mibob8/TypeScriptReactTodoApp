 
import './App.css';
import { Todo } from './types/types';
import { TodoList } from './components/TodoList';
import { useState } from 'react'; 
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';

function App() {

  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoText, setTodoText] = useState<string>('');

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo: Todo = { Text: todoText, IsDone: false, key: uuidv4()};
    setTodos([...todos, newTodo]); 

    console.log(newTodo.Text)
    setTodoText('')
  };

  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTodoText(e.currentTarget.value)
  }


  return (<div className="container">
 <TodoList todos={todos}></TodoList>
 <div>
 <form onSubmit={ addTodo } > 
 <input className='mr-2 align-self-start' type="text" onChange={onTextChange} value={todoText}></input>
 <button className='btn btn-success' type="submit">Add Todo</button>
 </form> 
 </div>
 
  </div> 
  );
}

export default App; 


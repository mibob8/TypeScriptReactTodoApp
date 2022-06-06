 
import './App.css';
import { Todo } from './types/types';
import { TodoList } from './components/TodoList';
import { useState } from 'react'; 
import { v4 as uuidv4 } from 'uuid';

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


  return (<div>
 <TodoList todos={todos}></TodoList>
 <form onSubmit={ addTodo } >
 <input type="text" onChange={onTextChange} value={todoText}></input>
 <button type="submit">Add Todo</button>
 </form> 
  </div> 
  );
}

export default App; 


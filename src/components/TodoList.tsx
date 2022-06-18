 
import React from 'react'
import { Todo } from '../types/types'
import  {TodoItem}  from './TodoItem' 

type Props = {
    todos: Array<Todo>;
};

export const TodoList: React.FC<Props> = ({ todos }) => {
    return ( 
    <ol style ={{listStyle:'none'}}>
        {todos.map((todo: Todo) => 
        (<TodoItem key={todo.id} todo={todo}></TodoItem>))}
    </ol>
        );
  };    


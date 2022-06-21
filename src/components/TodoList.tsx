 
import React from 'react'
import { Todo } from '../types/types'
import  {TodoItem}  from './TodoItem' 

type Props = {
    todos: Array<Todo>;
    remove: (id: string) => void;
};

export const TodoList: React.FC<Props> = (props: Props) => {
    return ( 
    <ol style ={{listStyle:'none'}}>
        {props.todos.map((todo: Todo) => 
        (<TodoItem key={todo.id} todo={todo} remove={props.remove}></TodoItem>))}
    </ol>
        );
  };    


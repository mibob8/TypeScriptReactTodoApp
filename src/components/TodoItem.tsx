import { Console } from 'console';
import React, { useState } from 'react'
import { Todo } from '../types/types'

type Props = {
    todo: Todo;
    remove: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({todo, remove}) => {
 
  const [isDone, setIsDone] = useState(todo.status);

  const onClickHandler = () => {  
      if(isDone === "todo"){
        setIsDone('done');
      }
      else{
        setIsDone('todo');
      }
      console.log(isDone);
  }

  const removeOnClickHandler = ()=> {
    remove(todo.id)
    
  }
 
  return ( <div className='card p-4 mt-2' style={{
    backgroundColor: isDone === 'done' ? 'greenyellow' : "" }}>
<li className='d-flex justify-content-between'>

      <div  
style={{textDecoration: isDone === 'done' ? "line-through" : ""}}>
      <input className='mr-2 text-light' type="checkbox" onClick={onClickHandler}> 
      </input>  
      {todo.title}  
      </div> 
      <button className='btn btn-danger btn-sm' onClick={removeOnClickHandler}>Usuń</button>
      </li>
      
  </div> 
  )
}
 
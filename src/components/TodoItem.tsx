import React, { useState } from 'react'
import { Todo } from '../types/types'

type Props = {
    todo: Todo;
}

export const TodoItem: React.FC<Props> = ({todo}) => {
 
  const [isDone, setIsDone] = useState(todo.status);

  const onClickHandler = () => {
       // todo.sta = !isDone;
      setIsDone(todo.status); 
  }
 
  return ( <div className='card p-4 mt-2'>
<li  style={{textDecoration: todo.status === 'done' ? "line-through" : ""}}>
      <input className='mr-2 text-light' type="checkbox" onClick={onClickHandler}> 
      </input> 
      {todo.title}  
      </li>
  </div>
  
  )
}
 
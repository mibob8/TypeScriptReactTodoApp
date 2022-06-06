import React, { useState } from 'react'
import { Todo } from '../types/types'

type Props = {
    todo: Todo;
}

export const TodoItem: React.FC<Props> = ({todo}) => {
 
  const [isDone, setIsDone] = useState(todo.IsDone);

  const onClickHandler = () => {
        todo.IsDone = !isDone;
      setIsDone(todo.IsDone); 
  }
 
  return ( <div className='card p-4 mt-2'>
<li  style={{textDecoration: todo.IsDone ? "line-through" : ""}}>
      <input className='mr-2 text-light' type="checkbox" onClick={onClickHandler}> 
      </input> 
      {todo.Text}  
      </li>
  </div>
  
  )
}
 
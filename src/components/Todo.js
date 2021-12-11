import TodoContext from '../context/TodoContext';
import {useContext} from 'react'
import { FaTrashAlt } from "react-icons/fa";
export  const Todo = () => {
    const {searchTask, removeTask} = useContext(TodoContext);
    const handleRemove = (index) => {
        removeTask(index)
    }
    return (
        <>
          {searchTask.map((todo, index) => (

            <div className='todo' key={index}>
                <div className='todo__title'>
                    {todo.title}  
                </div>

                <div className='todo__description'>
                    {todo.description}
                </div>
                <div className='todo__bottom'>
                    <div>{todo.date}</div>
                    <div><FaTrashAlt className='todo__remove' onClick={() => handleRemove(index)} /> </div>
                </div>
            </div>
            ))}
        
        </>
    )
}
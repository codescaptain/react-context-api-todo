import {useContext, useState} from 'react'
import TodoContext from '../context/TodoContext';
import { FaTrashAlt, FaPlus } from "react-icons/fa";
export default function TodoList() {
    const {todoList, addTask, removeTask} = useContext(TodoContext)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, description, new Date().toLocaleDateString().replaceAll('.','/'))
        setTitle('');
        setDescription('');
        document.getElementById("clear_textarea").value = "";
    }

    const handleRemove = (index) => {
        removeTask(index)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    return (
        <div className='container__todo-list'>
            {todoList.map((todo, index) => (

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
            <div className='add__todo'>
              <form onSubmit={handleSubmit}>
                    <input 
                    placeholder="Type to add a note's title"
                    onChange={handleTitle}
                    value={title}
                    />
                    <textarea
                    id='clear_textarea'
                    onChange={handleDescription}
                    placeholder="Type to add a note's description"
                    ></textarea>
                    <input type="submit" className='todo__submit' value="Add" />
                </form>

            </div>
        </div>
    )
}


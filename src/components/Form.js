import TodoContext from '../context/TodoContext';
import {useContext, useState} from 'react'
export const Form = () => {
    const {addTask} = useContext(TodoContext)

    const [value, setValue] = useState({
        title:'',
        description:'',
        date: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        addTask(value)
        setValue({
            title:'',
            description:'',
            date: ''
        })
        document.getElementById('clear_textarea').value= '';
    }

    const handleChange = (event) => {
        setValue({...value,[event.target.name]: event.target.value})
    }
    return (
        <div className='add__todo'>
        <form onSubmit={handleSubmit}>
              <input 
              id='clear_input'
              placeholder="Type to add a note's title"
              onChange={handleChange}
              name="title"
              value={value.title}
              />
              <textarea
              id='clear_textarea'
              onChange={handleChange}
              name="description"
              placeholder="Type to add a note's description"
              ></textarea>
              <input type="submit" className='todo__submit' value="Add" />
          </form>
      </div>
    )
}
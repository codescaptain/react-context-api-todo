import {useContext, useState} from 'react'
import TodoContext from '../context/TodoContext';
function Search () {
    const [title, setTitle] = useState('');
    const {setFilterText} = useContext(TodoContext);
    const handleTitle = (e) => {
        setTitle(e.target.value)
        setFilterText(e.target.value)
    }
    return (
        <div className="container__search">
            <h1>Todo</h1>
            <input 
                    placeholder="Search Task..."
                    onChange={handleTitle}
                    value={title}
                    />
             <hr/>
        </div>
    )
}

export default Search;
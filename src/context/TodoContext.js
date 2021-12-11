import { createContext,useState,useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || []
    const [todoList, setTodoList] = useState(initialState);

    const [filterText, setFilterText] = useState('');

    /*
     @param value object
    */
    const addTask = (value) => {
        value.date = new Date().toLocaleDateString().replaceAll('.','/');
        setTodoList([...todoList,value])
    }


    const removeTask = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index))
    }

    const searchTask = todoList.filter((item) => {
        return Object.keys(item).some((key => {
            return item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase());
        }))
    });

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todoList))
    },[todoList])

    const values = {
        todoList,
        setTodoList,
        addTask,
        removeTask,
        setFilterText,
        searchTask        
    } 
    return(
        <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    )
}


export default TodoContext;
import { createContext,useState,useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([
        {title: 'DenemeTodo', description: 'Hello world', date: new Date().toLocaleDateString().replaceAll('.','/')},
        {title: 'DenemeTodo2', description: 'Hello world', date: new Date().toLocaleDateString().replaceAll('.','/')},
    ]);

    const [filterText, setFilterText] = useState('');

    const addTask = (title, description, date = new Date().toLocaleDateString().replaceAll('.','/') ) => {
        setTodoList([...todoList, {title, description, date}])
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
        console.log('Degisti');
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
import { createContext,useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([
        {title: 'DenemeTodo', description: 'Hello world', date: new Date().toLocaleDateString().replaceAll('.','/')},
        {title: 'DenemeTodo2', description: 'Hello world', date: new Date().toLocaleDateString().replaceAll('.','/')},
    ]);

    const addTask = (title, description, date = new Date().toLocaleDateString().replaceAll('.','/') ) => {
        setTodoList([...todoList, {title, description, date}])
    }

    const removeTask = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index))
    }

    const search = (title) => {
        const value = title;
        const todos = todoList.filter(todo => {
          return todo.title.toLowerCase().includes(value);
        })
       console.log(value)
     }

    const values = {
        todoList,
        setTodoList,
        addTask,
        removeTask,
        search
    } 
    return(
        <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    )
}


export default TodoContext;
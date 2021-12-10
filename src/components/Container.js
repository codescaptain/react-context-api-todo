import Search from './Search';
import './../App.css'
import TodoList from './TodoList';
const  Container = () => {
    return (
    <div className='container'>
        <Search/>
        <TodoList />
    </div>
    );
  }
  
  export default Container;
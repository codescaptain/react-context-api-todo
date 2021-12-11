import { Form } from './Form';
import { Todo } from './Todo';

export default function TodoList() {
    return (
        <div className='container__todo-list'>
            <Todo/>
            <Form/>
        </div>
    )
}


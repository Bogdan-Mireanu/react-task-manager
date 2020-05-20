import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const Task = ({task}) => {
    const {removeTodo, findItem}=useContext(TaskListContext)
    return (
        <li className='list-item'>
            <span>
            &#8594; {task.todo}
            </span>
            <div>
                <button 
                onClick={()=> removeTodo(task.id)}
                className='btn-delete task-btn'>
                    <i className='fas fa-trash-alt'></i>
                </button>
                <button 
                onClick={()=> findItem(task.id)}
                className='btn-edit task-btn'>
                    <i className='fas fa-pen'></i>
                </button>
            </div>
        </li>
    );
};

export default Task;
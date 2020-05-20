import React, {useContext, useState, useEffect} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const TaskForm = () => {
   const {addTask, clearList, editItem, editTodo} = useContext(TaskListContext);
   const [todo,setTodo] = useState('')

   const handleChange = (e) => {
    setTodo(e.target.value);
   }

   const handleSubmit = (e) => {
     e.preventDefault();
     if(!editItem){
        addTask(todo);
        setTodo('');  
     } else{
         editTodo(todo,editItem.id);
     }
   };

   useEffect(()=>{
    if(editItem){
       setTodo(editItem.todo);
       console.log(editItem);
    }else {
        setTodo('');
    }
   }, [editItem]);
    return(
        <form onSubmit = {handleSubmit} className='form'>
            <input 
            onChange={handleChange}
            value={todo}
            className='task-input'
            type='text'
            placeholder='Add new task...'
            required
            />
            <div className= 'buttons'>
                <button type = 'submit' className='btn add-task-btn'>
                {editItem ? 'Edit Todo' : 'Add Todo'}   
                </button>
                <button 
                onClick = {clearList}
                className='btn clear-btn'>
                    Clear List
                </button>
            </div>
        </form>
    );
};
export default TaskForm;

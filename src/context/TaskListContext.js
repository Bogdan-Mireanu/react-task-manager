import React,{createContext, useState, useEffect} from 'react';
//import uuid from 'uuid/v4'; 
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTodo] = useState(initialState);

    //state for edit button
    const [editItem,setEditItem]=useState(null);
    // set todos on localstorage
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Add todo
    const addTask = (todo) => {
        setTodo([...tasks,{todo,id:uuidv4()}])
    }
    // remove todo
    const removeTodo = (id) => {
        setTodo(tasks.filter(task => task.id !== id))
    }
    // clear todos
    const clearList = () => {
        setTodo([]);
    }
    const findItem = (id) => {
        const item = tasks.find(task => task.id === id);
        setEditItem(item);
    }
    const editTodo = (todo, id) => {
        const newTodo = tasks.map(task => (task.id === id ? {todo, id}: task))
        console.log(newTodo);
        setTodo(newTodo);
        setEditItem(null);
    }
    return (
        <TaskListContext.Provider value = {{tasks,addTask, removeTodo, clearList, findItem, editItem, editTodo}}>
        {props.children}
        </TaskListContext.Provider>
    )
};
export default TaskListContextProvider;
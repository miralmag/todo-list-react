import React from 'react';
import { TodoItem } from './TodoItem'; 

function TodoList () {
    
    const todos = [
        { text: "Cortar cebolla", completed: false },
        { text: "Estudiar", completed: false }, 
        { text: "Trabajar", completed: false }
    ]

    return (
        <>
        {todos.map(todo => {
            return <TodoItem />
        })}
        </>);
}

export {TodoList};
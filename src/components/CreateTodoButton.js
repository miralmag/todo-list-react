import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton () {
    const handleCreateTodo = () => {
        console.log('clic')
    }
    return (
        <button 
            className="CreateTodoButton"
            onClick={handleCreateTodo}>
            +
        </button>
    );
}

export {CreateTodoButton};
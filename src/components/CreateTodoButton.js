import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton (props) {
    const handleCreateTodo = () => {
        props.setOpenModal(!props.openModal);
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
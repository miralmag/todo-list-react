import React from 'react';
import '../styles/TodoItem.css'

function TodoItem (props) {
    
    const onDelete = () => {
        alert('Borraste la tarea' + props.text)
    }
    return (
        <li className="TodoItem">
            <i 
            className={`fa-regular fa-square-check ${props.completed && 'fa-square-check--active'}`}
            onClick={props.onComplete}>
            </i>
            <p className={`text ${props.completed && 'text--completed'}`}>{props.text}
            </p>
            <i 
            className="fa-solid fa-trash"
            onClick={onDelete}>
            </i>
        </li>
    );
}

export {TodoItem};
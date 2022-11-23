import React from 'react';
import '../styles/TodoCounter.css'

function TodoCounter (props) {
    
    return (
        <h2>Has completado {props.completedTasks} de {props.totalTasks} tareas</h2>
    );
}

export {TodoCounter};
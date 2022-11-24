import React from 'react';
import '../styles/TodoCounter.css'

function TodoCounter ({totalTasks, completedTasks}) {
    
    return (
        <h2>Has completado {completedTasks} de {totalTasks} tareas</h2>
    );
}

export {TodoCounter};
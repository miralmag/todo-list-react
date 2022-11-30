import React from 'react';
import '../styles/TodoCounter.css'
import { ProgressBar } from './ProgressBar';

function TodoCounter ({totalTasks, completedTasks}) {
    
    const percentage = completedTasks * 100 / totalTasks;
    
    return (
        <>
        <h2>Has completado {completedTasks} de {totalTasks} tareas</h2>
        <ProgressBar 
        completedTasks = {completedTasks}
        totalTasks = {totalTasks}
        percentage = {percentage}/>
        
        </>     
    );
}

export {TodoCounter};
import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch (props) {

    const [searchValue, setSearchValue] =  React.useState('');

    const filterTasks = (ev) => {
        setSearchValue(ev.target.value);
        const filteredTasks = props.todos.filter((todo) => todo.includes(ev.target.value));
        return filteredTasks;
    }

    return (
        <input 
        className="input-search" 
        placeholder = "Tarea"
        value = {searchValue}
        onChange = {filterTasks}/>
    );
}

export {TodoSearch};
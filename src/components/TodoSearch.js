import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch (props) {

    const filterTasks = (ev) => {
        props.setSearchValue(ev.target.value);
    }

    return (
        <input 
        className="input-search" 
        placeholder = "Busca una tarea de tu lista"
        value = {props.searchValue}
        onChange = {filterTasks}/>
    );
}

export {TodoSearch};
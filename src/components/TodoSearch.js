import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch () {

    const [searchValue, setSearchValue] =  React.useState('');

    const filterTasks = (ev) => {
        console.log(ev.target.value);
        setSearchValue(ev.target.value);

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
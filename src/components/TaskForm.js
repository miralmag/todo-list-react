import React from 'react';
import '../styles/TaskForm.css';

function TaskForm (props) {

    const [newTaskValue, setNewTaskValue] = React.useState('');
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        props.addTask(newTaskValue);
        props.setOpenModal(false);
        setNewTaskValue('');
    }
    const onChange = (ev) => {
        setNewTaskValue(ev.target.value);
    }

    const onCancel = () => {
        props.setOpenModal(false)
    }

return (
    <form onSubmit={onSubmit}>
    <label>Nueva tarea:</label>
    <textarea
        value={newTaskValue}
        onChange={onChange}
        placeholder="P. ej., 'Poner la lavadora'"
    />
    <div className="taskform-button-container">
        <button
        type="button"
        className="taskform-button taskform-button--cancel"
        onClick={onCancel}
        >
        Cancelar
        </button>
        <button
        type="submit"
        className="taskform-button taskform-button--add"
        >
        Añadir
        </button>
    </div>
    </form>
)
}

export { TaskForm };
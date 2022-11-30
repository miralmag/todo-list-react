import React from 'react';
import { useState, useEffect } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { Aside } from './Aside';
import { Modal } from './Modal';
import { TaskForm } from './TaskForm';
import ls from '../services/localStorage';
import '../styles/App.css'



// const defaultTodos = [
//    { text: "Hacer la compra", completed: false },
//    { text: "Estudiar", completed: false }, 
//    { text: "Trabajar", completed: true },
//    { text: "Llevar al peque a entrenar", completed: false }
//  ]


function App() {
  
  const localStorageTask = ls.get('task', []);
  
  const [todos, setTodos] = useState(localStorageTask);

  useEffect(() => {
    
    ls.set('task', todos);
    
  }, [todos]);


  const [searchValue, setSearchValue] =  React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTasks = todos.filter((todo) => !!todo.completed).length;
  const totalTasks = todos.length;

  let searchedTasks = [];
  if (searchValue.length === 0) {
    searchedTasks = todos
  } else {
    searchedTasks = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTasks = (text) => {
    const taskIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[taskIndex].completed ? newTodos[taskIndex].completed = false : newTodos[taskIndex].completed = true;
      
    setTodos(newTodos);
  }

  const deleteTasks = (text) => {
    const taskIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(taskIndex, 1);
    setTodos(newTodos);
  };

  const addTask = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    })
    setTodos(newTodos);
  }


  return (<>
    
    <Aside />
    
    <main className='main'>
    
      <TodoCounter 
      completedTasks={completedTasks}
      totalTasks={totalTasks}/>
      
      <TodoSearch 
      todos={todos}
      searchedTasks={searchedTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}/>
      
      <TodoList>
      {searchedTasks.map(todo => {
              return <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTasks(todo.text)}
              onDelete={() => deleteTasks(todo.text)}/>
          })}
      </TodoList>

      {openModal && (
      <Modal>
        <TaskForm 
        searchedTasks = {searchedTasks}
        setOpenModal = {setOpenModal}
        openModal = {openModal}
        addTask = {addTask}/>
      </Modal>)}
        
      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      openModal = {openModal}
      />

    </main>
</>);
}

export default App;

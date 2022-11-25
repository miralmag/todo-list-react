import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { Aside } from './Aside';
import '../styles/App.css'


// const defaultTodos = [
//    { text: "Hacer la compra", completed: false },
//    { text: "Estudiar", completed: false }, 
//    { text: "Trabajar", completed: true },
//    { text: "Llevar al peque a entrenar", completed: false }
//  ]

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);

  const [searchValue, setSearchValue] =  React.useState('');

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

  const saveTasks = (newTodos) => {
    const stringifiedTasks = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTasks);
    setTodos(newTodos);
  }

  const completeTasks = (text) => {
    const taskIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[taskIndex].completed ? newTodos[taskIndex].completed = false : newTodos[taskIndex].completed = true;
      
    saveTasks(newTodos);
  }

  const deleteTasks = (text) => {
    const taskIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(taskIndex, 1);
    saveTasks(newTodos);
  };


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
        
      <CreateTodoButton />
      
    </main>
</>);
}

export default App;

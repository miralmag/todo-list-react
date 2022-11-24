import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { Aside } from './Aside';
import '../styles/App.css'


const defaultTodos = [
  { text: "Hacer la compra", completed: false },
  { text: "Estudiar", completed: false }, 
  { text: "Trabajar", completed: true },
  { text: "Llevar al peque a entrenar", completed: false }
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

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
              completed={todo.completed}/>
          })}
      </TodoList>
        
      <CreateTodoButton />
      
    </main>
</>);
}

export default App;

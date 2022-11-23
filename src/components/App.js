import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { Aside } from './Aside';
import '../styles/App.css'


const todos = [
  { text: "Hacer la compra", completed: false },
  { text: "Estudiar", completed: false }, 
  { text: "Trabajar", completed: false },
  { text: "Llevar al peque a entrenar", completed: false }
]

const completedTasks = todos.filter((todo) => todo.completed).length;
const totalTasks = todos.length;


function App() {
  return (<>
    
    <Aside />
    
    <main className='main'>
    <TodoCounter 
    completedTasks={completedTasks}
    totalTasks={totalTasks}/>
    
    <TodoSearch todos={todos}/>
    
    <TodoList>
    {todos.map(todo => {
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

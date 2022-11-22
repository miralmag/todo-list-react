import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import Fox from '../images/foxpc.png'
import '../styles/App.css'


const todos = [
  { text: "Hacer la compra", completed: true },
  { text: "Estudiar", completed: false }, 
  { text: "Trabajar", completed: false },
  { text: "Llevar al peque a entrenar", completed: false }
]


function App() {
  return (<>
    <aside className='aside'>
      <h1><span>get</span><span>shit</span><span>done</span></h1>
      <img alt='fox' src={Fox} />
    </aside>
    <main className='main'>
    <TodoCounter />
    
    <TodoSearch />
    
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

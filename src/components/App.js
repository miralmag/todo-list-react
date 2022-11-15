import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Estudiar", completed: false }, 
  { text: "Trabajar", completed: false },
  { text: "Llevar al peque a entrenar", completed: false }
]


function App() {
  return (<>
    <TodoCounter />
    
    <TodoSearch />
    
    <TodoList>
    {todos.map(todo => {
            return <TodoItem key={todo.text} text={todo.text}/>
        })}
    </TodoList>
      
    <CreateTodoButton />
    
    </>);
}

export default App;

import React from 'react';
import './TodoApp.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList'
function TodoApp() {
    return (
        <>
        <h1>TO DO LIST</h1>
        <div className="sectorTareas">
            <TodoForm/>
            <TodoList/>
        </div>
        <div id="tareaMasRapida">La tarea más rápida fue: Estudiar Historia Judia completada el 23/4/2025, 9:57:16</div>
        </> 
    );
  }
  export default TodoApp;
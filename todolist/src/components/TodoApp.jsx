import React from 'react';
import './TodoList.css'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem'
import FilterButtons from './FilterButtons'
function TodoApp() {
    return (
        <>
        <h1 className="animate__animated animate__rotateInDownLeft">TO DO LIST</h1>
        <div className="sectorTareas">
            <TodoForm/>
            <TodoList/>
        </div>
        <div id="tareaMasRapida">La tarea más rápida fue: Estudiar Historia Judia completada el 23/4/2025, 9:57:16</div>
        </> 
    );
  }
  export default TodoApp;
import React from 'react';
import './TodoForm.css'
import TodoItem from './TodoItem';

function TodoForm() {
    return (
        <>
            <div id="agregarTask">
                <label for="tarea">Ingrese la tarea que desea incluir: </label>
                <input type="text" name="tarea" id="tarea"/>
                <button id="addTaskBoton">Agregar</button>
                <div id="tareas">
                    <h2>Tareas no comenzadas:</h2>
                    <ul id="tareasDisplay">
                        <TodoItem/>
                    </ul>
                </div>
            </div>
        </> 
    );
  }
  export default TodoForm;
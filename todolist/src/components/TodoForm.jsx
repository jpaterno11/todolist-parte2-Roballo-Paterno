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
                        <TodoItem/>
            </div>
        </> 
    );
  }
  export default TodoForm;
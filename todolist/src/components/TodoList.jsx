import React from 'react';
import TodoItem from './TodoItem'
import FilterButtons from './FilterButtons'
function TodoList(){
    return(
        <> 
        <div id="mostrarIncompletas">
                <div id="tareas">
                    <h2>Tareas no completadas:</h2>
                    <ul id="tareasDisplay">
                        <li>
                            <TodoItem item = {{nombre : "Pasear al perro", hora : "Creada a: 23/4/2025, 9:55:40"}}/>
                            <FilterButtons estado = {"Incompleto"}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="mostrarTerminadas">
                <div id="tareas">
                    <h2>Tareas completadas:</h2>
                    <ul id="tareasDisplay">
                    <li>
                <TodoItem item = {{nombre : "Estudiar efsi", hora : "Creada a: 23/4/2025, 9:52:40", estado : "Completada a: 23/4/2025, 9:55:16"}}/>
                <FilterButtons estado = {"Completo"}/>
                    </li>
                    </ul>
                </div>
                    <FilterButtons estado = {"BorrarTodo"}/>
                </div>
        </> 

    )
}
export default TodoList;
import React from 'react';
import './TodoList.css'
import TodoItem from './TodoItem'
import FilterButtons from './FilterButtons'
function TodoList(){
    return(
        <> 
        <div id="mostrarIncompletas">
                            <TodoItem item = {{nombre : "Pasear al perro", hora : "Creada a: 23/4/2025, 9:55:40"}}/>
                            <FilterButtons estado = {"Incompleto"}/>
            </div>
            <div id="mostrarTerminadas">
                <TodoItem item = {{nombre : "Estudiar efsi", hora : "Creada a: 23/4/2025, 9:52:40", estado : "Completada a: 23/4/2025, 9:55:16"}}/>
                    <FilterButtons estado = {"Completo"}/>
                    <FilterButtons estado = {"BorrarTodo"}/>
                </div>
        </> 

    )
}
export default TodoList;
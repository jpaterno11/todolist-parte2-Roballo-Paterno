import React from 'react';
import './FilterButtons.css'
function Botones({ estado }) {
    if (estado == "Incompleto"){
        return (
            <div>
            <button class="eliminar-btn" onclick="eliminartarea(0, 'tareasIncompletas')">Eliminar</button>
            <button class="eliminar-btn" onclick="moverTarea(0, 'tareasIncompletas', 'tareasTerminadas')">Finalizar</button>
            <button class="eliminar-btn" onclick="moverTarea(0, 'tareasIncompletas', 'tareasNoComenzadas')">Volver a No Comenzada</button> 
            </div>    
        );
      }
    if (estado == "Completo"){
        return (
        <div>
            <button class="eliminar-btn" onclick="eliminartarea(0, 'tareasTerminadas')">Eliminar</button>
            <button class="eliminar-btn" onclick="moverTarea(0, 'tareasTerminadas', 'tareasIncompletas')">Volver a Incompleta</button>
        </div>)
    }
    if (estado == "BorrarTodo"){
        return (
            <button className="eliminar-btn" onclick="eliminartareascompletadas()">Eliminar todas las tareas completadas</button>
        )
    }  
    }
  export default Botones;
import React from 'react';
import './TodoItem.css'
function Item({ item }) {
    if (item == null){
        return(
        <div className="item">
            <div id="tareas">
                <h2>Tareas no completadas:</h2>
                <ul id="tareasDisplay">
                    <li>
                        <p>No hay tareas en esta instancia.</p>
                    </li>
                </ul>
            </div>
      </div> 
        )
    }
    if (item.estado == null){
    return (
      <div className="item">
        <div id="tareas">
            <h2>Tareas no completadas:</h2>
            <ul id="tareasDisplay">
                <li>
                    {item.nombre}
                    <div>{item.hora}</div>
                </li>
            </ul>
        </div>   
      </div>      
    );
    }
    return (
        <div className="item">
          <div id="tareas">
                <h2>Tareas no completadas:</h2>
                <ul id="tareasDisplay">
                    <li>
                        {item.nombre}
                        <div>{item.hora}</div>
                        <div>{item.estado}</div>
                    </li>
                </ul>
            </div>      
        </div>      
      );
  }
  export default Item;
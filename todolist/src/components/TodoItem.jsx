import React from 'react';

function Item({ item }) {
    if (item == null){
        return(
        <div className="item">
                <p>No hay tareas en esta instancia.</p>
      </div> 
        )
    }
    if (item.estado == null){
    return (
      <div className="item">
                {item.nombre}
                <div>{item.hora}</div>
      </div>      
    );
    }
    return (
        <div className="item">
                  {item.nombre}
                  <div>{item.hora}</div>
                  <div>{item.estado}</div>
        </div>      
      );
  }
  export default Item;
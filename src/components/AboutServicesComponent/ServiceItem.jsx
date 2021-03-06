import React from 'react';
import "./ServiceItem.css";
export function ServiceItem(props) {
    const IMG= props['imgURL'];
    const NAME= props['nameService']; 
    const DESCRIPTION= props['descriptionService'];
    return (

      <div className='ServiceItem'>
          <img src={IMG} alt={NAME} />
          <h3>{NAME}</h3>
          <p> {DESCRIPTION}</p>
      </div>
    )
}

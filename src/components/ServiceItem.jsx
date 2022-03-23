import React from 'react'

export function ServiceItem(props) {
    const IMG= props['imgURL'];
    const NAME= props['nameService']; 
    const DESCRIPTION= props['descriptionService'];
    return (

      <div className='service-item'>
          <img src={IMG} alt={NAME} />
          <h3>{NAME}</h3>
          <p> {DESCRIPTION}</p>
      </div>
    )
}

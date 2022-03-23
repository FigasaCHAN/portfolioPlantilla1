import React from 'react'

export function CardClient(props) {
  const AVATAR= props['avatar'];
  const NAME= props['name'];
  const TEXT= props['text'];
  return (
    <div className='CardClient'>
      <div className='avatar'> 
        <img src={AVATAR} alt={NAME} />
      </div>
      <div className='text'>
        <h4>{NAME}</h4>
        <p> {TEXT} </p>
      </div>
    </div>
  )
}

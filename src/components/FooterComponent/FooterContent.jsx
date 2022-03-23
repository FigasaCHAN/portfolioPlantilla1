import React from 'react';

export function FooterContent(props) {
    const NAME= props['nameContact'];
    const VALUE= props['valueContact'];
    return (
      <div className='content'>
          <h4> {CapitalizeString(NAME)} </h4>
          <p> {CapitalizeString(VALUE)} </p>
      </div>
    )
}

function CapitalizeString(str){
  return str.trim().replace(/^\w/, (c) => c.toUpperCase());
}
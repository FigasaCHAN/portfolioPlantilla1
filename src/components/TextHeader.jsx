import React from 'react';

export function TextHeader() {
  const COLOR_WAVE= "#FFF"
  return (
    <section className='TextHeader'>
      <h1> Potencia tus ventas al menos a un 200% </h1>
      <h2> Con una pagina web potente</h2>

      <div className="wave" style={{height: "150px", overflow: "hidden"}}>
                <svg viewBox={"0 0 500 150"} preserveAspectRatio="none"
                style={{height: "100%", width: "100%"}}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{stroke: "none", fill: COLOR_WAVE}}></path>
            </svg>
      </div>
    </section>
  )
}

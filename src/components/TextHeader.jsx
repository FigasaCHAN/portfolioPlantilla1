import React from 'react';
import ImgSource from "../resource/img-source.json";
//const COVER_PHOTO = ImgSource['cover-photo'];

export function TextHeader() {
  return (
    <section className='text-header'>
      <h1> Potencia tus ventas al menos a un 200% </h1>
      <h2 style={{color:'blue'}}> Con una pagina web potente</h2>
      {/* <img src={COVER_PHOTO} alt="Cover-Photo"/> */}

      <div className="wave" style={{height: "150px", overflow: "hidden"}}>
                <svg viewBox={"0 0 500 150"} preserveAspectRatio="none"
                style={{height: "100%", width: "100%"}}>
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{stroke: "none", fill: "#faf"}}></path>
            </svg>
      </div>
    </section>
  )
}

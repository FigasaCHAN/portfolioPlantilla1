import React from 'react';
import "./ImgPortfolio.css";
import ImgSource from "../../../resource/img-source.json";
const IMG_HOVER = ImgSource['img-hover'];

export function ImgPortfolio(props) {
  return (
    <div className='ImgPortfolio'>
        <img src={props['imgURL']} alt={props['altTEXT']}/>

        <div className='hover-img-of-gallery'>
            <img src={IMG_HOVER} alt="" />
            <p> VER </p>
        </div>
    </div>
  )
}

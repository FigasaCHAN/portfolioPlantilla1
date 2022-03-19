import React from 'react'
import ImgSource from "../resource/img-source.json";
import { ImgPortfolio } from './ImgPortfolio';
import { v4 as uuidv4 } from 'uuid';

const GALLERY_PHOTOS= ImgSource['gallery'];



export function GalleryPortfolio() {
  return (
    <div className='gallery-portfolio'>
        {LoadImgPortfolio()}
    </div>
  )
}

function LoadImgPortfolio(){
    const list= GALLERY_PHOTOS.map(elem=> 
        <ImgPortfolio key= {uuidv4()} imgURL={elem} altTEXT= ""/>
    );
    return list;
}

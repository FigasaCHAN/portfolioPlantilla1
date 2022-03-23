import React from 'react'
import "./AboutMe.css";
import { TitleWithText } from './TitleWithText';
import ImgSource from "../resource/img-source.json";
const IMG_ABOUT_ME = ImgSource['illustrations']["aboutMe"];

export function AboutMe() {
  return (
    <section className='AboutMe'>
        <h1 className='title'> About Me </h1>
        <div className='container'> 
            <img src={IMG_ABOUT_ME} alt='' className='img'/>
            <div className='text-container'> 
                <TitleWithText/>
                <TitleWithText/>
            </div>
        </div>
    </section>
  )
}

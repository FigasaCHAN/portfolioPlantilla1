import React from 'react'
import { TitleWithText } from './TitleWithText'

import ImgSource from "../resource/img-source.json";
const IMG_ABOUT_ME = ImgSource['illustrations']["aboutMe"];

export function AboutMe() {
  return (
    <section className='about-me'>
        <h1> About Me </h1>
        <div className='container-about-me'> 
            <img src={IMG_ABOUT_ME} alt='' className='img-about-me'/>
            <div className='text-container-about-me'> 
                <TitleWithText/>
                <TitleWithText/>
            </div>
        </div>
    </section>
  )
}

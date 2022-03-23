import React from 'react';
import "./Portfolio.css";

import { GalleryPortfolio } from './GalleryPortfolio';

export function Portfolio() {
  return (
    <section className='Portfolio'>
        <div className='container'>
            <h2 className='title'> Portfolio </h2>
            <GalleryPortfolio/>
        </div>
    </section>
  )
}

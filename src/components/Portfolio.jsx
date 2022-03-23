import React from 'react'
import { GalleryPortfolio } from './GalleryPortfolio'

export function Portfolio() {
  return (
    <section className='portfolio'>
        <div className='container'>
            <h2 className='title'> Portfolio </h2>
            <GalleryPortfolio/>
        </div>
    </section>
  )
}

import React from 'react'
import { AboutMe } from './AboutMe'
import { AboutServices } from './AboutServices'
import { Footer } from './Footer'
import { Portfolio } from './Portfolio'
import { Review } from './Review'

export function Main() {
  return (
    <main>
        <AboutMe/>
        <Portfolio/>
        <Review/>
        <AboutServices/>
        <Footer/>
    </main>
  )
}

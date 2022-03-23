import React from 'react'
import { AboutMe } from './AboutMe'
import { Portfolio } from './Portfolio'
import { Review } from './Review'

export function Main() {
  return (
    <main>
        <AboutMe/>
        <Portfolio/>
        <Review/>
    </main>
  )
}

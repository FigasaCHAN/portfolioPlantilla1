import React, { Fragment } from 'react'
import "./App.css";
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
export function App(){
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>

  )
}

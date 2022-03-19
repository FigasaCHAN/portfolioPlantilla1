import React, { Fragment } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { v4 as uuidv4 } from 'uuid';
export function App(){
  return (
    <Fragment>
      <Header/>
      <Main/>
    </Fragment>

  )
}

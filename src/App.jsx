import React, { Fragment } from 'react';
import "./App.css";
import { FooterMain } from './components/FooterMain';
import { HeaderMain } from './components/HeaderMain';
import { Main } from './components/Main';
export function App(){
  return (
    <Fragment>
      <HeaderMain/>
      <Main/>
      <FooterMain/>
    </Fragment>

  )
}

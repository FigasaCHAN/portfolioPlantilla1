import React, { Fragment } from 'react';
import "./App.css";
import { FooterMain } from './components/FooterComponent/FooterMain';
import { HeaderMain } from './components/HeaderComponent/HeaderMain';
import { Main } from './components/MainComponent/Main';
export function App(){
  return (
    <Fragment>
      <HeaderMain/>
      <Main/>
      <FooterMain/>
    </Fragment>

  )
}

import React from 'react';
import "./AboutServices.css";
import { Services } from './Services';

export function AboutServices() {
  return (
    <section className='AboutServices'>
        <div className='container'>
            <h2 className='title'> Service </h2>
            <Services/>
        </div>
    </section>
  )
}

import React from 'react'
import ClientSource from "../resource/client-source.json";
import { v4 as uuidv4 } from 'uuid';
import { CardClient } from './CardClient';
const CLIENT = ClientSource['client'];


export function Review() {
  return (
    <section className='container'>
      <h2 className='title'> Que dicen nuestros clientes </h2>
      {GenerateCardsClient()};
    </section>
  )
}

function GenerateCardsClient() {
  let retList= CLIENT.map((elem)=> 
      <CardClient key= {uuidv4()} avatar= {elem['avatar']}  name= {elem['name']} text= {elem['text']} /> 
    )
  return retList; 
}

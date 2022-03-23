import React from 'react';
import "./FooterMain.css";
import {v4 as uuidv4} from 'uuid';
import ContactSource from "../../resource/contact-source.json";
import { FooterContent } from './FooterContent';

const INFO_CONTACT = ContactSource['infoContact'];
const SIGNING = ContactSource['signing'];

export function FooterMain() {
  return (
    <footer className='FooterMain'>
      <div className='container'>
        {GenerateFooterContents()}
      </div>
      <h2 className='signing'> {SIGNING} </h2>
    </footer>
  )
}

function GenerateFooterContents() {
  let infoContactProps= Object.keys(INFO_CONTACT);

  let retList= infoContactProps.map(nameContact => 

      <FooterContent key= {uuidv4()} nameContact= {nameContact} valueContact= {INFO_CONTACT[nameContact]} />

    )
  
  return retList;
}
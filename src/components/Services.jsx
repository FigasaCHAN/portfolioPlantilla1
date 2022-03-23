import React from 'react'
import {v4 as uuidv4} from 'uuid'
import ServicesSource from "../resource/services-source.json"
import { ServiceItem } from './ServiceItem';
const SERVICES_LIST = ServicesSource['services'];

export function Services() {
    return (
      <div className='container'>
          {GenerateServicesItem()}
      </div>
    )
}

function GenerateServicesItem(){
    let retList= SERVICES_LIST.map((elem)=> 
        <ServiceItem key= {uuidv4()} nameService={elem['name']} descriptionService={elem['description']} imgURL={elem['img']}/>
    )

    return retList;
}

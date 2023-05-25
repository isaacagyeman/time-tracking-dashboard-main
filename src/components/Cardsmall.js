import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg'


export default function Cardsmall(props){
 
return(
 
    <div className='card'>
        <div className='smallOuter' style={{backgroundColor:props.color}}>
            <img src={props.image} className='cardImage' />
        </div>
        <div className='smallInner'>
        <header>
            <p className='cardTitle'>{props.title}</p>
            <img src={ellipsis}/>
        </header>
        <div className='cardTime'>
            <p className='hours'>{props.current}hrs</p>
            <p className='previous'>Last week-{props.previous}hrs</p>
        </div>
        </div>
    </div>
);
} ;
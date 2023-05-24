import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg'


export default function Cardsmall(props){
 
return(
    <section className='smallOuter' style={{backgroundColor:props.color}}>
        <img src={props.image} className='cardImage'/>
        <div className='smallInner'>
            <header>
                <p className='cardTitle'>{props.title}</p>
                <img src={ellipsis}/>
            </header>
            <div className='cardTime'>
                <p>{props.current}hrs</p>
                <p>Last week-{props.previous}hrs</p>
            </div>
        </div>
    </section>
);
} ;
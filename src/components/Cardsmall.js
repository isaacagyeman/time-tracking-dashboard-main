import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg'
import work from '../assets/icon-work.svg';

export default function Cardsmall(props){
 
return(
    <section className='smallOuter'>
        <img src={props.image} className='cardImage'/>
        <div className='smallInner'>
            <header>
                <p className='cardTitle'>{props.title}</p>
                <img src={ellipsis}/>
            </header>
            <div className='cardTime'>
                <h2>{props.current}hrs</h2>
                <p>Last week-{props.previous}hrs</p>
            </div>
        </div>
    </section>
);
} ;
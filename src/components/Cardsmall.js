import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg';
import work from '../assets/icon-work.svg';

export default function Cardsmall(cardImage , cardColor){
 
return(
    <section className='smallOuter' style={{background:`${cardColor}`}}>
        <img src={cardImage} className='cardImage'/>
        <div className='smallInner'>
            <header>
                <p className='cardTitle'>work</p>
                <img src={ellipsis}/>
            </header>
            <div className='cardTime'>
                <h2>32hrs</h2>
                <p>Last week-36hrs</p>
            </div>
        </div>
    </section>
);
} ;
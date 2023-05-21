import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg';
import work from '../assets/icon-work.svg';

export default function Cardsmall(backgroundImage , content){
return(
    <section className='smallOuter'>
        <img src={work} className='cardImage'/>
        <div className='smallInner'>
            <header>
                <p className='cardTitle'>Work</p>
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
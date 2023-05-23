import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg';
// import work from '../assets/icon-work.svg';

export default function Cardsmall(cardPic, props){
 
return(
    <section className='smallOuter'>
        <img src={cardPic} className='cardImage'/>
        <div className='smallInner'>
            <header>
                <p className='cardTitle'>{props.title}</p>
                <img src={ellipsis}/>
            </header>
            <div className='cardTime'>
                <h2>{props.timeframes.weekly.current}hrs</h2>
                <p>Last week-{props.timeframes.weekly.previous}hrs</p>
            </div>
        </div>
    </section>
);
} ;
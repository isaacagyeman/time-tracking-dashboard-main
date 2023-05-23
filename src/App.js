import React from "react"
import Card from './components/Card.js'
import Cardsmall from "./components/Cardsmall.js";

import data from './data/data.json';

import work from "./assets/icon-work.svg";
import study from "./assets/icon-study.svg";
import social from "./assets/icon-social.svg";
import selfcare from "./assets/icon-self-care.svg";
import exercise from "./assets/icon-exercise.svg";
import play from "./assets/icon-play.svg";


export default function App() {
  const cardImgs = [work,play,study,exercise,social,selfcare]
  const cardColors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
     "hsl(348, 100%, 68%)",
     "hsl(145, 58%, 55%)",
     "hsl(264, 64%, 52%)",
     "hsl(43, 84%, 65%)"
    ]


// console.log(data);

const smallCardElem = data.map((card,index) => {
return(
  <Cardsmall
key={index}
title={card.title}
current={card.timeframes.weekly.current}
previous={card.timeframes.weekly.previous}
image={cardImgs[index]}
color={cardColors[index]}
 />
)
  
})

  return (
    <main className="parent">
      <Card />
      <div  className="smallcardParent">
        {smallCardElem}
      </div>
    </main>
  );
}


import React, { useEffect, useState } from "react"
import Card from './components/Card.js'
import Cardsmall from "./components/Cardsmall.js";
import work from './assets/icon-work.svg';
import study from './assets/icon-study.svg';
import selfcare from './assets/icon-self-care.svg';
import social from './assets/icon-social.svg';
import play from './assets/icon-play.svg';
import exercise from './assets/icon-exercise.svg';
import data from './data/data.json';


export default function App() {

  // const [cardData, setCardData] = useState([]);

  // useEffect(() =>{
  //   fetch('./data/data.json')
  //   .then(response => response.json())
  //   .then(data => setCardData(data))
  //   .catch(error => console.error('Error fetching card data:', error))
  // }, []);

  const backgorundImages = [work,study,selfcare,social,play,exercise];
  const backgroundColors = [
    'hsl(15, 100%, 70%)',
    'hsl(348, 100%, 68%)',
    'hsl(43, 84%, 65%)',
    'hsl(264, 64%, 52%)',
    'hsl(195, 74%, 62%)',
    'hsl(145, 58%, 55%)'
  ]
console.log(data);
const cardElem = data.map((card, index)=>{
 return <Cardsmall
  key = {index}
  cardImage = {backgorundImages[0]}
  cardColor = {backgroundColors[1]}
  />
  console.log(index)
})

  return (
    <main className="parent">
      <Card />
      <div className="smallcardParent">
      {/* <Cardsmall/> */}
      {cardElem}
      </div>
    </main>
  );
}

// export default App;
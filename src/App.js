import React from "react"
import Card from './components/Card.js'
import Cardsmall from "./components/Cardsmall.js";



export default function App() {
  return (
    <main className="parent">
      <Card />
      <div className="smallcardParent">
      <Cardsmall />
      </div>
    </main>
  );
}

// export default App;
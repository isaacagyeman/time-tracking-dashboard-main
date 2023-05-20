import React from "react";
import profilepic from '../assets/image-jeremy.png';



export default function Card(){
return(
<section className="cardOuter">
<div className="cardInner">
<img src={profilepic} className="userPic"/>
<p>Report for</p>
<h2>Jeremy Robson</h2>
</div>
<div className="Dates">
<p>Daily</p>
<p>Weekly</p>
<p>Monthly</p>            
</div>
</section>
)
}